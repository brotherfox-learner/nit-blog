import {createContext, useContext, useState, useCallback } from "react";

// สร้าง Context สำหรับ Authentication
const AuthContext = createContext();

/**
 * AuthProvider - จัดการ state ของ authentication และ login popup
 * ใช้แทน prop drilling ของ isLoggedIn, openLoginPopup
 * รองรับ role-based access (admin, user)
 */
export function AuthProvider({ children }) {
  // Auth state - โหลดจาก localStorage ถ้ามี
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return !!savedUser;
  });
  
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  
  // Login popup state
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // Auth actions
  const login = useCallback((userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    // บันทึกลง localStorage
    localStorage.setItem("user", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
    // ลบออกจาก localStorage
    localStorage.removeItem("user");
  }, []);

  // Popup actions
  const openLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(false);
  }, []);

  // Helper function สำหรับ actions ที่ต้องการ login
  const requireAuth = useCallback((action) => {
    if (!isLoggedIn) {
      openLoginPopup();
      return false;
    }
    if (action) action();
    return true;
  }, [isLoggedIn, openLoginPopup]);

  // Helper function สำหรับเช็ค role
  const hasRole = useCallback((role) => {
    return user?.role === role;
  }, [user]);

  const isAdmin = useCallback(() => {
    return user?.role === "admin";
  }, [user]);

  const value = {
    // Auth state
    isLoggedIn,
    user,
    // Auth actions
    login,
    logout,
    // Popup state
    isLoginPopupOpen,
    setIsLoginPopupOpen,
    // Popup actions
    openLoginPopup,
    closeLoginPopup,
    // Helper
    requireAuth,
    hasRole,
    isAdmin,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth - Custom hook สำหรับเข้าถึง auth context
 * @returns {Object} Auth context value
 * @throws {Error} ถ้าใช้นอก AuthProvider
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
