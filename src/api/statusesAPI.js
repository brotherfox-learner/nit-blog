import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Statuses API - ตรงกับ /statuses routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// GET /statuses - ดึง statuses ทั้งหมด (protected Admin)
export const getStatuses = async (token) => {
  const response = await axios.get(`${API_BASE}/statuses`, authHeader(token));
  return response.data;
};

// GET /statuses/:statusId - ดึง status ตาม id (protected Admin)
export const getStatusById = async (statusId, token) => {
  const response = await axios.get(
    `${API_BASE}/statuses/${statusId}`,
    authHeader(token)
  );
  return response.data;
};
