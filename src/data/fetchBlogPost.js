import axios from 'axios';

const fetchBlogPost = async (page = 1, limit = 6, category = "", keyword = "") => {
    const response = await axios.get(`https://blog-post-project-api.vercel.app/posts?page=${page}&limit=${limit}&category=${category}&keyword=${keyword}`);
    return response.data.posts;
};

export default fetchBlogPost;

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