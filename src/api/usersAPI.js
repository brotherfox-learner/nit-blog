import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

/**
 * Users API - ตรงกับ /users routes
 */

const authHeader = (token) =>
  token ? { headers: { Authorization: `Bearer ${token}` } } : {};

// GET /users - ดึง users ทั้งหมด (protected Admin)
export const getUsers = async (token) => {
  const response = await axios.get(`${API_BASE}/users`, authHeader(token));
  return response.data;
};

export const getUserForProfile = async () => {
  const response = await axios.get(`${API_BASE}/users/profile`);
  return response.data;
};

// GET /users/:userId - ดึง user ตาม id (protected User)
export const getUserById = async (userId, token) => {
  const response = await axios.get(
    `${API_BASE}/users/${userId}`,
    authHeader(token)
  );
  return response.data;
};

// PUT /users/:userId - อัพเดต user (protected User)
export const updateUser = async (userData, token) => {
  const response = await axios.put(
    `${API_BASE}/users/`,
    userData,
    authHeader(token)
  );
  return response.data;
};

// DELETE /users/:userId - ลบ user (protected User)
export const deleteUser = async (userId, token) => {
  const response = await axios.delete(
    `${API_BASE}/users/${userId}`,
    authHeader(token)
  );
  return response.data;
};

// PUT /users/change-password - เปลี่ยนรหัสผ่าน (protected User)
export const changePassword = async (passwordData, token) => {
  try {
    const response = await axios.put(`${API_BASE}/users/change-password`, passwordData, authHeader(token));
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const changePassword = async (newPassword) => {
//   const { data, error } = await supabase.auth.updateUser({
//     password: newPassword
//   });

//   if (error) {
//     console.error(error.message);
//   } else {
//     console.log("Password updated successfully");
//   }
// };
