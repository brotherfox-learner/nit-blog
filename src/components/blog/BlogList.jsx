import { useState, useEffect } from "react";
import { BlogCard } from "./BlogCard";

const POSTS_PER_PAGE = 4;

export function BlogList({ posts }) {
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Reset visibleCount when posts change (e.g., when searching/filtering)
  useEffect(() => {
    setVisibleCount(POSTS_PER_PAGE);
  }, [posts]);

  // Get only the posts that should be visible
  const visiblePosts = posts.slice(0, visibleCount);

  // Check if there are more posts to load
  const hasMorePosts = visibleCount < posts.length;

  // Handle load more button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + POSTS_PER_PAGE);
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

      {hasMorePosts && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="mt-[16px] px-[24px] py-[12px] bg-[#26231E] text-white font-semibold rounded-[8px] hover:bg-[#3a362e] transition-colors duration-200 cursor-pointer"
        >
          Load More Post
        </button>
      )}
    </section>
  );
}
