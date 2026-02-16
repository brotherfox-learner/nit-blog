// ArticleContent.jsx ส่วนเนื้อหาของบทความ

import ArticleHero from "./components/ArticleHero";
import ArticleBody from "./components/ArticleBody";
import AuthorCard from "./components/AuthorCard";
import SocialShareSection from "./SocialShareSection";
import { calculateReadTime } from "../../lib/utils";
import ScrollProgress from "./components/ScrollProgress";

export default function ArticleContent({ articleData, likeCount = 0, hasLiked = false, onLike, onUnlike }) {
  return (
    <>
      <ScrollProgress />
      <main className="flex flex-col items-center min-h-screen bg-[#F9F8F6] from-stone-50 to-amber-50/30">
        {/* Featured Image - Full Width Hero */}
        <ArticleHero
          image={articleData.image}
          category={articleData.category}
          title={articleData.title}
          date={articleData.date}
          readTime={calculateReadTime(articleData.content)}
        />

        {/* Article Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-[20px] xl:gap-[60px] px-[2vw] lg:max-w-[1440px] w-full lg:pb-20">
          <article className="flex-1 max-w-[815px] xl:max-w-[1000px] px-4 md:px-6 py-8 md:py-[20px]">
            <ArticleBody
              description={articleData.description}
              content={articleData.content}
              category={articleData.category}
            />

            {/* Social Share Section - Hidden on lg and above */}
            <div className="max-lg:hidden mt-[48px]">
              <SocialShareSection 
                reactions={likeCount} 
                hasReacted={hasLiked}
                rounded={true} 
                onLike={onLike}
                onUnlike={onUnlike}
              />
            </div>
          </article>

          {/* Author Section */}
          <AuthorCard author={articleData.author} bio={articleData.authorBio} />
        </div>

        {/* Social Share Section - Full Width, Show on lg and above */}
        <div className="lg:hidden w-full mt-[48px]">
          <SocialShareSection 
            reactions={likeCount} 
            hasReacted={hasLiked}
            onLike={onLike}
            onUnlike={onUnlike}
          />
        </div>
      </main>
    </>
  );
}
