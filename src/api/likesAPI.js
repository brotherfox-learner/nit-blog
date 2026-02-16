import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Likes API - ตรงกับ /likes routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// GET /likes/posts/:postId - ดึง likes ของ post
export const getLikesByPostId = async (postId) => {
  const response = await axios.get(`${API_BASE}/likes/posts/${postId}`);
  return response.data;
};

// GET /likes/posts/:postId/check - เช็คว่า user ได้ like หรือยัง
export const checkUserLiked = async (postId, userId) => {
  const response = await axios.get(
    `${API_BASE}/likes/posts/${postId}/check`,
    { params: { user_id: userId } }
  );
  return response.data;
};

// POST /likes/posts/:postId - like post (protected User, user จาก token)
export const likePost = async (postId, _userId, token) => {
  const response = await axios.post(
    `${API_BASE}/likes/posts/${postId}`,
    {},
    authHeader(token)
  );
  return response.data;
};

// DELETE /likes/posts/:postId - unlike post (protected User, user จาก token)
export const unlikePost = async (postId, _userId, token) => {
  const response = await axios.delete(
    `${API_BASE}/likes/posts/${postId}`,
    authHeader(token)
  );
  return response.data;
};
