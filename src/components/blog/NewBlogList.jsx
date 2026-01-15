import { useState, useEffect } from "react";
import fetchBlogPost from "../../data/fetchBlogPost";
import { BlogCard } from "./BlogCard";
import { Spinner } from "../common";
import { calculateReadTime, formatDate } from "../../lib/utils";

export function NewBlogList({ selectedCategory = "All", searchQuery = "", limit = 6 }) {
  const [posts, setPosts] = useState([]);
  const [fetchMore, setFetchMore] = useState(false);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(true);

  // แปลง category value สำหรับ API (All -> empty string)
  const apiCategory = selectedCategory === "All" ? "" : selectedCategory;

  // Function โหลด Posts
  const loadPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetchBlogPost(1, limit, apiCategory, searchQuery);
      setPosts(data);
      setPage(1);
      setIsLoading(false);
      // เช็คว่ามีข้อมูลเหลือให้ fetch หรือไม่ (ถ้าได้ข้อมูลน้อยกว่า limit แสดงว่าไม่มีข้อมูลเหลือ)
      setHasMoreData(data.length >= limit);
    } catch (error) {
      setIsLoading(false);
      setHasMoreData(false);
    }
  };

  // Fetch posts เมื่อ category หรือ search query เปลี่ยน
  useEffect(() => {
    loadPosts();
  }, [apiCategory, searchQuery]);

  const handleFetchMore = async () => {
    try {
      setFetchMore(true);
      const data = await fetchBlogPost(page + 1, limit, apiCategory, searchQuery);
      setPosts([...posts, ...data]);
      setPage(page + 1);
      // เช็คว่ามีข้อมูลเหลือให้ fetch หรือไม่
      setHasMoreData(data.length >= limit);
    } catch (error) {
      console.error("Error fetching more posts:", error);
      setHasMoreData(false);
    } finally {
      setFetchMore(false);
    }
  };

  return (
    <section className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
      {/* Posts Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center min-h-[400px]">
          <Spinner message="Loading posts..." />
        </div>
      ) : posts.length > 0 ? (
        <>
          <div className="flex flex-col justify-center items-center gap-[24px] min-[1280px]:grid min-[1280px]:grid-cols-2 min-[1280px]:gap-[20px] min-[1280px]:place-items-center min-[1280px]:place-content-center">
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                date={formatDate(post.date)}
                readTime={calculateReadTime(post.content)}
              />
            ))}
          </div>

          {/* Load More Button / All Posts Seen */}
          {hasMoreData ? (
            <button
              onClick={handleFetchMore}
              disabled={fetchMore}
              className="mt-[16px] px-[24px] py-[12px] bg-[#26231E] text-white font-semibold rounded-[8px] hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer flex items-center gap-[8px] disabled:opacity-70 disabled:cursor-wait"
            >
              {fetchMore ? (
                <Spinner message="Loading more posts..." />
              ) : (
                "Load More Post"
              )}
            </button>
          ) : (
            <div className="mt-[16px] px-[24px] py-[12px] bg-gradient-to-r from-gray-50 to-gray-100 text-[#75716B] font-medium rounded-[8px] flex items-center justify-center gap-[8px] border border-gray-200 shadow-sm">
              <span className="text-emerald-600 text-base">✓</span>
              <span className="text-sm">All posts seen</span>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-[16px]">
          <div className="text-[48px]">📭</div>
          <p className="text-[18px] text-[#75716B] font-medium">
            No posts found in this category
          </p>
        </div>
      )}
    </section>
  );
}
