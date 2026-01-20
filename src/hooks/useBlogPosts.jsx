import { useState, useEffect, useCallback } from "react";
import { fetchBlogPostQuery } from "../data/fetchBlogPost";

/**
 * useBlogPosts - จัดการการ fetch และ pagination ของ blog posts
 * ย้าย logic จาก NewBlogList มาเป็น reusable hook
 * @param {Object} options - ตัวเลือกการ fetch
 * @param {string} options.category - หมวดหมู่ (All = ทุกหมวด)
 * @param {string} options.searchQuery - คำค้นหา
 * @param {number} options.limit - จำนวนต่อหน้า
 */
export function useBlogPosts({ 
  category = "All", 
  searchQuery = "", 
  limit = 6 
} = {}) {
  const [posts, setPosts] = useState([]); // ข้อมูลบทความ
  const [page, setPage] = useState(1); // หน้าที่ต้องการแสดง
  const [isLoading, setIsLoading] = useState(true); // ตรวจสอบการ loading
  const [isFetchingMore, setIsFetchingMore] = useState(false); // ตรวจสอบการ fetch เพิ่ม
  const [hasMoreData, setHasMoreData] = useState(true); // ตรวจสอบการมีข้อมูลเหลือให้ fetch หรือไม่
  const [error, setError] = useState(null); // ตรวจสอบการ error

  // แปลง category value สำหรับ API (All -> empty string)
  const apiCategory = category === "All" ? "" : category;

  // Function โหลด Posts (reset)
  const loadPosts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchBlogPostQuery(1, limit, apiCategory, searchQuery);
      setPosts(data);
      setPage(1);
      // เช็คว่ามีข้อมูลเหลือให้ fetch หรือไม่
      setHasMoreData(data.length >= limit);
    } catch (err) {
      setError(err.message || "Failed to fetch posts");
      setHasMoreData(false);
    } finally {
      setIsLoading(false);
    }
  }, [apiCategory, searchQuery, limit]);

  // Fetch posts เมื่อ category หรือ search query เปลี่ยน
  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  // Function โหลด posts เพิ่ม
  const fetchMore = useCallback(async () => {
    if (isFetchingMore || !hasMoreData) return;

    try {
      setIsFetchingMore(true);
      const data = await fetchBlogPostQuery(page + 1, limit, apiCategory, searchQuery);
      setPosts(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
      // เช็คว่ามีข้อมูลเหลือให้ fetch หรือไม่
      setHasMoreData(data.length >= limit);
    } catch (err) {
      console.error("Error fetching more posts:", err);
      setHasMoreData(false);
    } finally {
      setIsFetchingMore(false);
    }
  }, [page, limit, apiCategory, searchQuery, isFetchingMore, hasMoreData]);

  // Reset และ refetch
  const refetch = useCallback(() => {
    loadPosts();
  }, [loadPosts]);

  return {
    posts,
    isLoading,
    isFetchingMore,
    hasMoreData,
    error,
    fetchMore,
    refetch,
    page,
  };
}