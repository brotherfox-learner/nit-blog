import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

/**
 * Notification API
 */

// GET /notifications - ดึง notifications ของ user ที่ login
export const getNotifications = async (token, { limit = 20, offset = 0 } = {}) => {
  const response = await axios.get(`${API_BASE}/notifications`, {
    params: { limit, offset },
    ...authHeader(token),
  });
  return response.data;
};

// GET /notifications/unread-count - นับจำนวนที่ยังไม่อ่าน
export const getUnreadCount = async (token) => {
  const response = await axios.get(`${API_BASE}/notifications/unread-count`, authHeader(token));
  return response.data;
};

// PATCH /notifications/:id/read - mark ว่าอ่านแล้ว
export const markAsRead = async (id, token) => {
  const response = await axios.patch(`${API_BASE}/notifications/${id}/read`, {}, authHeader(token));
  return response.data;
};

// PATCH /notifications/read-all - mark ทั้งหมดว่าอ่านแล้ว
export const markAllAsRead = async (token) => {
  const response = await axios.patch(`${API_BASE}/notifications/read-all`, {}, authHeader(token));
  return response.data;
};

// DELETE /notifications/:id - ลบ notification
export const deleteNotification = async (id, token) => {
  const response = await axios.delete(`${API_BASE}/notifications/${id}`, authHeader(token));
  return response.data;
};
