import { BlogCard } from "./BlogCard";

export function BlogList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
        <p className="text-[#75716B] text-[18px] font-medium py-[40px]">
          No articles found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:grid min-[1280px]:grid-cols-2 min-[1280px]:gap-[20px] min-[1280px]:place-items-center min-[1280px]:place-content-center min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
      {posts.map((post) => (
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
  );
}
