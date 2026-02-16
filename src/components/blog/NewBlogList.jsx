import { useState, useEffect } from "react";
import { useBlogPosts } from "../../hooks";
import { BlogCard } from "./BlogCard";
import { Spinner } from "../common";
import { calculateReadTime, formatDate } from "../../lib/utils";
import { getUserForProfile } from "@/api/usersAPI";
import { BLOG_DEFAULTS } from "@/constants/design";

export function NewBlogList({ selectedCategory = "All", searchQuery = "", limit = 6 }) {
  const {
    posts,
    isLoading,
    isFetchingMore,
    hasMoreData,
    fetchMore,
  } = useBlogPosts({
    category: selectedCategory,
    searchQuery,
    limit,
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getUserForProfile()
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch(() => {
        if (!cancelled) setUser(null);
      });
    return () => { cancelled = true; };
  }, []);

  const authorFallback = user?.name ?? BLOG_DEFAULTS.author;
  const authorPicFallback = user?.profile_pic ?? null;

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
                postId={post.id}
                image={post.image}
                category={post.category}
                title={post.title}
                description={post.description}
                date={formatDate(post.date)}
                readTime={calculateReadTime(post.content)}
                author={authorFallback}
                imageSrc={authorPicFallback}
              />
            ))}
          </div>

          {/* Load More Button / All Posts Seen */}
          {hasMoreData ? (
            <button
              onClick={fetchMore}
              disabled={isFetchingMore}
              className="mt-[16px] px-[24px] py-[12px] bg-[#26231E] text-white font-semibold rounded-[8px] hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer flex items-center gap-[8px] disabled:opacity-70 disabled:cursor-wait"
            >
              {isFetchingMore ? (
                <Spinner message="Loading more posts..." />
              ) : (
                "Load More Post"
              )}
            </button>
          ) : (
            <div className="mt-[16px] px-[24px] py-[12px] bg-gradient-to-r from-gray-50 to-gray-100 text-[#75716B] font-medium rounded-full flex items-center justify-center gap-[8px] border border-gray-200 shadow-sm">
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
