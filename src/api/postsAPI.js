import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Posts API - ตรงกับ /posts routes
 */

// GET /posts - ดึงบทความทั้งหมด (pagination, category, keyword, status_id)
// status_id: 2 = Published เท่านั้น (ใช้กับ landing page)
export const getPosts = async (params = {}) => {
  const { page = 1, limit = 6, category = "", keyword = "", all } = params;
  const queryParams = { page, limit, category, keyword };
  if (all) queryParams.all = "1";
  const response = await axios.get(`${API_BASE}/posts`, { params: queryParams });
  return response.data;
};

// GET /posts/:postId - ดึงบทความตาม id
export const getPostById = async (postId) => {
  const response = await axios.get(`${API_BASE}/posts/${postId}`);
  return response.data;
};

// POST /posts - สร้างบทความใหม่ (protected Admin)
export const createPost = async (postData, imageFile, token) => {
  const formData = new FormData();
  formData.append("imageFile", imageFile);
  Object.entries(postData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await axios.post(`${API_BASE}/posts`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// PUT /posts/:postId - แก้ไขบทความ (protected Admin)
export const updatePost = async (postId, postData, imageFile, token) => {
  const formData = new FormData();
  if (imageFile) formData.append("imageFile", imageFile);
  Object.entries(postData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  const response = await axios.put(`${API_BASE}/posts/${postId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

// DELETE /posts/:postId - ลบบทความ (protected Admin)
export const deletePost = async (postId, token) => {
  const response = await axios.delete(`${API_BASE}/posts/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
