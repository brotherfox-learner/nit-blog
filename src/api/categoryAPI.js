import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Categories API - ตรงกับ /categories routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// GET /categories - ดึง categories ทั้งหมด
export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE}/categories`);
  const data = response.data;
  return Array.isArray(data) ? data : (data?.categories ?? []);
};

// GET /categories/:categoryId - ดึง category ตาม id
export const fetchCategoryById = async (categoryId) => {
  const response = await axios.get(`${API_BASE}/categories/${categoryId}`);
  return response.data;
};

// POST /categories - สร้าง category (protected Admin)
export const createCategory = async (categoryData, token) => {
  const response = await axios.post(
    `${API_BASE}/categories`,
    categoryData,
    authHeader(token)
  );
  return response.data;
};

// PUT /categories/:categoryId - อัพเดต category (protected Admin)
export const updateCategory = async (categoryId, categoryData, token) => {
  const response = await axios.put(
    `${API_BASE}/categories/${categoryId}`,
    categoryData,
    authHeader(token)
  );
  return response.data;
};

// DELETE /categories/:categoryId - ลบ category (protected Admin)
export const deleteCategory = async (categoryId, token) => {
  const response = await axios.delete(
    `${API_BASE}/categories/${categoryId}`,
    authHeader(token)
  );
  return response.data;
};