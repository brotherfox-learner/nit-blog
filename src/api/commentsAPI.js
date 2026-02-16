import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Comments API - ตรงกับ /comments routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// GET /comments/post/:post_id - ดึง comments ของ post
export const getCommentsByPostId = async (postId) => {
  const response = await axios.get(`${API_BASE}/comments/post/${postId}`);
  return response.data;
};

// POST /comments - สร้าง comment ใหม่ (protected)
export const createComment = async (postId, commentText, token) => {
  const response = await axios.post(
    `${API_BASE}/comments`,
    { post_id: postId, comment_text: commentText },
    authHeader(token)
  );
  return response.data;
};

// PUT /comments/:id - อัปเดต comment (protected)
export const updateComment = async (commentId, commentText, token) => {
  const response = await axios.put(
    `${API_BASE}/comments/${commentId}`,
    { comment_text: commentText },
    authHeader(token)
  );
  return response.data;
};

// DELETE /comments/:id - ลบ comment (protected)
export const deleteComment = async (commentId, token) => {
  const response = await axios.delete(
    `${API_BASE}/comments/${commentId}`,
    authHeader(token)
  );
  return response.data;
};
