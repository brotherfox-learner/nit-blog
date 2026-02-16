import { useState, useCallback } from "react";

/**
 * usePopups - จัดการ state ของ popups ทั่วไป
 * ย้ายมาจาก src/components/article-page/hooks/usePopups.js
 * ใช้ได้กับทุก popup ในแอป
 */
export function usePopups() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const openLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setIsLoginPopupOpen(false);
  }, []);

  return { 
    isLoginPopupOpen, 
    openLoginPopup, 
    closeLoginPopup,
    setIsLoginPopupOpen 
  };
}
