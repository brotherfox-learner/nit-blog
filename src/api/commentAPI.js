import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Comments API - ตรงกับ /comments routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// POST /comments - สร้าง comment (protected User)
export const createComment = async (commentData, token) => {
  const response = await axios.post(
    `${API_BASE}/comments`,
    commentData,
    authHeader(token)
  );
  return response.data;
};

// GET /comments/post/:post_id - ดึง comments ตาม post
export const getCommentsByPostId = async (postId) => {
  const response = await axios.get(`${API_BASE}/comments/post/${postId}`);
  const data = response.data;
  return Array.isArray(data) ? data : (data?.comments ?? []);
};

// GET /comments/user/:user_id - ดึง comments ตาม user
export const getCommentsByUserId = async (userId) => {
  const response = await axios.get(`${API_BASE}/comments/user/${userId}`);
  const data = response.data;
  return Array.isArray(data) ? data : (data?.comments ?? []);
};

// PUT /comments/:id - อัพเดต comment (protected User)
export const updateCommentById = async (commentId, commentData, token) => {
  const response = await axios.put(
    `${API_BASE}/comments/${commentId}`,
    commentData,
    authHeader(token)
  );
  return response.data;
};

// DELETE /comments/:id - ลบ comment (protected User)
export const deleteCommentById = async (commentId, token) => {
  const response = await axios.delete(
    `${API_BASE}/comments/${commentId}`,
    authHeader(token)
  );
  return response.data;
};

/** @deprecated ใช้ getCommentsByPostId แทน */
export const fetchCommentsByPostId = getCommentsByPostId;

