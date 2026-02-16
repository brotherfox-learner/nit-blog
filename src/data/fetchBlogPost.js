import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const fetchBlogPostQuery = async (page = 1, limit = 6, category = "", keyword = "") => {
    const response = await axios.get(`${API_BASE}/posts`, {
        params: { page, limit, category, keyword }
    });
    // Response อาจเป็น { posts: [...], totalPosts: N } หรือ { posts: [...] }
    return response.data.posts || response.data;
};

const fetchBlogPostById = async (postId = "") => {
    const response = await axios.get(`${API_BASE}/posts/${postId}`);
    return response.data;
};

export { fetchBlogPostQuery, fetchBlogPostById };

// page
// number
// (Optional) หมายเลขหน้าที่ต้องการแสดง, หากไม่ใส่ Query Parameter นี้ ค่าเริ่มต้นจะเป็น 1
// limit
// number
// (Optional) จำนวนโพสต์ต่อหน้า, หากไม่ใส่ Query Parameter นี้ ค่าเริ่มต้นจะเป็น 6
// category
// string
// (Optional) กรองโพสต์ตามหมวดหมู่, หากไม่ใส่ Query Parameter นี้ ค่าเริ่มต้นจะเป็นการดึงบทความออกมาจากทุกหมวดหมู่
// keyword
// string
// (Optional) ค้นหาบทความโดยใช้ Title, Description, หรือเนื้อหาของบทความ, หากไม่ใส่ Query Parameter นี้ ค่าเริ่มต้นจะเป็นการดึงบทความออกมาโดยไม่สนใจคำค้นหา
