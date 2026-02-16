import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import axios from "axios";
import { supabase } from "../lib/supabase";

const AuthContext = createContext(null);

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Server-side Auth Approach:
 * - signUp / signIn → เรียก server ผ่าน axios (POST /auth/signup, POST /auth/signin)
 * - server ส่ง session กลับมา → set ลง Supabase client เพื่อให้ auto refresh ทำงาน
 * - signOut / session management → Supabase client (auto token refresh, onAuthStateChange)
 * - profile → ได้จาก server response หรือดึงจาก GET /auth/me
 */

// Helper: สร้าง axios header จาก access_token
const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

export function AuthProvider({ children }) {
  // Supabase session/user
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Login popup state
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // Profile from server (users table - has role, username, bio ฯลฯ)
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
  const token = session?.access_token ?? null;
  const isLoggedIn = !!user;

  // ดึง profile จาก server เมื่อ login (GET /auth/me)
  const fetchProfile = useCallback(async (accessToken) => {
    if (!accessToken) {
      setProfile(null);
      return;
    }
    try {
      const { data } = await axios.get(`${API_BASE}/auth/me`, authHeader(accessToken));
      setProfile(data);
    } catch (err) {
      console.error("fetchProfile failed:", err.response?.status, err.message);
      setProfile(null);
      // ถ้า 401 (token invalid/expired) → sign out เพื่อ clear session เก่า
      if (err.response?.status === 401) {
        console.warn("Session invalid, signing out...");
        await supabase.auth.signOut();
      }
    }
  }, []);

  useEffect(() => {
    fetchProfile(token);
  }, [token, fetchProfile]);

  // Auth actions - เรียกผ่าน server แทน Supabase client โดยตรง

  // signUp: POST /auth/signup
  const signUp = useCallback(async ({ email, password, username, name }) => {
    try {
      const { data } = await axios.post(`${API_BASE}/auth/signup`, {
        email,
        password,
        username,
        name,
      });

      // ถ้า signUp สำเร็จ + มี session → set session ด้วย Supabase client เพื่อให้ onAuthStateChange ทำงาน
      if (data.session) {
        await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });
        // profile มาจาก server response แล้ว
        if (data.profile) {
          setProfile(data.profile);
        }
      }

      return { data, error: null };
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      return { data: null, error: { message } };
    }
  }, []);

  // signIn: POST /auth/signin
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const { data } = await axios.post(`${API_BASE}/auth/signin`, {
        email,
        password,
      });

      // ถ้า signIn สำเร็จ → set session ด้วย Supabase client เพื่อให้ onAuthStateChange ทำงาน
      if (data.session) {
        await supabase.auth.setSession({
          access_token: data.session.access_token,
          refresh_token: data.session.refresh_token,
        });
        // profile มาจาก server response แล้ว
        if (data.profile) {
          setProfile(data.profile);
        }
      }

      return { data, error: null };
    } catch (err) {
      const message = err.response?.data?.message || err.message;
      return { data: null, error: { message } };
    }
  }, []);

  // signOut
  const signOut = useCallback(async () => {
    setProfile(null);
    await supabase.auth.signOut();
  }, []);

  // Popup actions
  const openLoginPopup = useCallback(() => setIsLoginPopupOpen(true), []);
  const closeLoginPopup = useCallback(() => setIsLoginPopupOpen(false), []);

  // Helper: ตรวจสอบว่า login แล้วหรือยัง ถ้ายังเปิด popup
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

  // Role helpers
  const hasRole = useCallback((role) => profile?.role === role, [profile]);
  const isAdmin = useCallback(() => profile?.role === "admin", [profile]);

  const value = useMemo(
    () => ({
      // state
      loading,
      session,
      token,
      user,            // supabase auth user (มี email, id)
      profile,         // app user from server (มี role, username, bio)
      isLoggedIn,

      // auth actions
      signUp,
      signIn,
      signOut,

      // profile
      fetchProfile,

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
      token,
      user,
      profile,
      isLoggedIn,
      signUp,
      signIn,
      signOut,
      fetchProfile,
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
