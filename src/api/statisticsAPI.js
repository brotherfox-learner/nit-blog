import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const authHeader = (token) => ({
  headers: { Authorization: `Bearer ${token}` },
});

/**
 * Statistics API
 */

// GET /statistics/me - ดึง stats ของ user ที่ login
export const getMyStats = async (token) => {
  const response = await axios.get(`${API_BASE}/statistics/me`, authHeader(token));
  return response.data;
};

// POST /statistics/post-view - บันทึก post view + reading time
export const recordPostView = async ({ post_id, reading_time_seconds }, token) => {
  const config = token ? authHeader(token) : {};
  const response = await axios.post(
    `${API_BASE}/statistics/post-view`,
    { post_id, reading_time_seconds },
    config
  );
  return response.data;
};
