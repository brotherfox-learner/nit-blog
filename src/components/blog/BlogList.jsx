import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";
import { Spinner } from "../common";

const POSTS_PER_PAGE = 4;

export function BlogList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);

  // รีเซ็ต visibleCount เมื่อ posts เปลี่ยน (เช่น เมื่อค้นหา/กรอง)
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [posts]);

  // ดึงบทความที่จะแสดงผล
  const visiblePosts = posts.slice(0, visibleCount);

  // ตรวจสอบว่ามีบทความที่จะโหลดเพิ่มเติมหรือไม่
  const hasMorePosts = visibleCount < posts.length;

  // ฟังก์ชัน Handle load more button click
  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + POSTS_PER_PAGE);
      setIsLoading(false);
    }, 1000);
  };

  if (posts.length === 0) {
    return (
      <section className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
        <p className="text-[#75716B] text-[18px] font-medium py-[40px]">
          No articles found matching your search.
        </p>
      </section>
    );
  }

  // แสดงบทความทั้งหมด
  return (
    <section className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
      <div className="flex flex-col justify-center items-center gap-[24px] min-[1280px]:grid min-[1280px]:grid-cols-2 min-[1280px]:gap-[20px] min-[1280px]:place-items-center min-[1280px]:place-content-center">
        {visiblePosts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            description={post.description}
            date={post.date}
            loading={post.loading}
            readTime={post.readTime}
          />
        ))}
      </div>
      {/* ปุ่มโหลดบทความเพิ่มเติม */}
      {hasMorePosts && (
        <button
          onClick={handleLoadMore}
          disabled={isLoading}
          className="mt-[16px] px-[24px] py-[12px] bg-[#26231E] text-white font-semibold rounded-[8px] hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-[8px]"
        >
          {isLoading ? (
            <Spinner message="Loading more posts..." />
          ) : (
            "Load More Post"
          )}
        </button>
      )}
    </section>
  );
}
