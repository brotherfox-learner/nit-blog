import {createContext, useContext, useState, useCallback } from "react";

// สร้าง Context สำหรับ Authentication
const AuthContext = createContext();

/**
 * AuthProvider - จัดการ state ของ authentication และ login popup
 * ใช้แทน prop drilling ของ isLoggedIn, openLoginPopup
 */
export function AuthProvider({ children }) {
  // Auth state - ไว้เปลี่ยนเป็น actual authentication logic ภายหลัง
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  // Login popup state
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  // Auth actions
  const login = useCallback((userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
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
