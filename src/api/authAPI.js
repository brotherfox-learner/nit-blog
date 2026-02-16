import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Auth API - ตรงกับ /auth routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// POST /auth/signup - สมัครสมาชิก
export const signUp = async ({ email, password, username, name }) => {
  const response = await axios.post(`${API_BASE}/auth/signup`, {
    email,
    password,
    username,
    name,
  });
  return response.data;
};

// POST /auth/signin - เข้าสู่ระบบ
export const signIn = async ({ email, password }) => {
  const response = await axios.post(`${API_BASE}/auth/signin`, {
    email,
    password,
  });
  return response.data;
};

// GET /auth/me - ดึง profile ของตัวเอง (protected)
export const getMe = async (token) => {
  const response = await axios.get(`${API_BASE}/auth/me`, authHeader(token));
  return response.data;
};

// PUT /auth/me - อัพเดต profile ของตัวเอง (protected)
export const updateMe = async (profileData, token) => {
  const response = await axios.put(
    `${API_BASE}/auth/me`,
    profileData,
    authHeader(token)
  );
  return response.data;
};
