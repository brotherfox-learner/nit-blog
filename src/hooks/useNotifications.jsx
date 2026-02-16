import { useState, useEffect, useCallback } from "react";
import {
  getNotifications,
  getUnreadCount,
  markAsRead as markAsReadAPI,
  markAllAsRead as markAllAsReadAPI,
  deleteNotification as deleteNotificationAPI,
} from "../api/notificationAPI";
import { useAuth } from "../contexts/AuthContext";

/**
 * useNotifications - จัดการ notification state + API
 */
export function useNotifications() {
  const { token } = useAuth();

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // ดึง notifications จาก API
  const fetchNotifications = useCallback(async () => {
    if (!token) return;
    try {
      setIsLoading(true);
      const data = await getNotifications(token);
      setNotifications(data.notifications);
      setUnreadCount(data.unread_count);
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  // ดึง unread count อย่างเดียว (เบากว่า)
  const fetchUnreadCount = useCallback(async () => {
    if (!token) return;
    try {
      const data = await getUnreadCount(token);
      setUnreadCount(data.unread_count);
    } catch (err) {
      console.error("Failed to fetch unread count:", err);
    }
  }, [token]);

  // เมื่อ token เปลี่ยน ให้ fetch ข้อมูลใหม่
  useEffect(() => {
    if (token) {
      fetchNotifications();
    } else {
      setNotifications([]);
      setUnreadCount(0);
    }
  }, [token, fetchNotifications]);

  // mark as read
  const handleMarkAsRead = useCallback(async (id) => {
    if (!token) return;
    try {
      await markAsReadAPI(id, token);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: true, read_at: new Date().toISOString() } : n))
      );
      setUnreadCount((prev) => Math.max(0, prev - 1));
      // Refetch เพื่อให้แน่ใจว่า sync กับ server
      await fetchUnreadCount();
    } catch (err) {
      console.error("Failed to mark as read:", err);
    }
  }, [token, fetchUnreadCount]);

  // mark all as read
  const handleMarkAllAsRead = useCallback(async () => {
    if (!token) return;
    try {
      await markAllAsReadAPI(token);
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, is_read: true, read_at: new Date().toISOString() }))
      );
      setUnreadCount(0);
      // Refetch เพื่อให้แน่ใจว่า sync กับ server
      await fetchUnreadCount();
    } catch (err) {
      console.error("Failed to mark all as read:", err);
    }
  }, [token, fetchUnreadCount]);

  // delete
  const handleDeleteNotification = useCallback(async (id) => {
    if (!token) return;
    try {
      const noti = notifications.find((n) => n.id === id);
      await deleteNotificationAPI(id, token);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      if (noti && !noti.is_read) {
        setUnreadCount((prev) => Math.max(0, prev - 1));
      }
    } catch (err) {
      console.error("Failed to delete notification:", err);
    }
  }, [token, notifications]);

  return {
    notifications,
    unreadCount,
    isLoading,
    fetchNotifications,
    fetchUnreadCount,
    handleMarkAsRead,
    handleMarkAllAsRead,
    handleDeleteNotification,
  };
}
