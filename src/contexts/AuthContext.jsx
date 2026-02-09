import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Supabase session/user
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login popup state
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // (optional) profile from table users/profiles (has role)
  const [profile, setProfile] = useState(null);

  // Bootstrap session + listen changes
  useEffect(() => {
    let mounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return;
      setSession(data.session ?? null);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  const user = session?.user ?? null;
  const isLoggedIn = !!user;

  // 2) ดึง profile จาก table users (ที่มี role) เมื่อ login
  useEffect(() => {
    const run = async () => {
      if (!user) {
        setProfile(null);
        return;
      }

      // สมมติ table ชื่อ users และใช้ id = auth user id (uuid)
      const { data, error } = await supabase
        .from("users")
        .select("id, username, name, role, profile_pic")
        .eq("id", user.id)
        .maybeSingle();

      if (error) {
        // ไม่ throw เพื่อไม่ให้ app crash
        setProfile(null);
        return;
      }
      setProfile(data ?? null);
    };

    run();
  }, [user]);

  // Auth actions (Supabase)
  const signUp = useCallback(async ({ email, password }) => {
    return await supabase.auth.signUp({ email, password });
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    return await supabase.auth.signInWithPassword({ email, password });
  }, []);

  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  // Popup actions (ของเดิม)
  const openLoginPopup = useCallback(() => setIsLoginPopupOpen(true), []);
  const closeLoginPopup = useCallback(() => setIsLoginPopupOpen(false), []);

  // Helper function สำหรับ actions ที่ต้องการ login (ของเดิม)
  const requireAuth = useCallback(
    (action) => {
      if (!isLoggedIn) {
        openLoginPopup();
        return false;
      }
      if (action) action();
      return true;
    },
    [isLoggedIn, openLoginPopup]
  );

  // Role helpers (ใช้ profile แทน localStorage user)
  const hasRole = useCallback((role) => profile?.role === role, [profile]);
  const isAdmin = useCallback(() => profile?.role === "admin", [profile]);

  const value = useMemo(
    () => ({
      // state
      loading,
      session,
      user,          // auth user (มี email)
      profile,       // app user (มี role/username)
      isLoggedIn,

      // auth actions
      signUp,
      signIn,
      signOut,

      // popup
      isLoginPopupOpen,
      setIsLoginPopupOpen,
      openLoginPopup,
      closeLoginPopup,

      // helpers
      requireAuth,
      hasRole,
      isAdmin,
    }),
    [
      loading,
      session,
      user,
      profile,
      isLoggedIn,
      signUp,
      signIn,
      signOut,
      isLoginPopupOpen,
      openLoginPopup,
      closeLoginPopup,
      requireAuth,
      hasRole,
      isAdmin,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
