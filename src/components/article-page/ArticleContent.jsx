import ArticleHero from "./components/ArticleHero";
import ArticleBody from "./components/ArticleBody";
import AuthorCard from "./components/AuthorCard";
import SocialShare from "./SocialShare";
import { calculateReadTime } from "../../lib/utils";
import ScrollProgress from "./components/ScrollProgress";

export default function ArticleContent({ articleData }) {
  console.log(articleData)
  console.log(articleData.content)
  return (
    <>
      <ScrollProgress />
      <main className="flex flex-col justify-center items-center min-h-screen bg-[#F9F8F6] from-stone-50 to-amber-50/30">
        {/* Featured Image - Full Width Hero */}
        <ArticleHero
          image={articleData.image}
          category={articleData.category}
          title={articleData.title}
          date={articleData.date}
          readTime={calculateReadTime(articleData.content)}
        />

        {/* Article Content */}
        <div className="flex flex-col justify-center lg:flex-row lg:gap-[20px] xl:gap-[60px] px-[2vw] lg:max-w-[1440px]">
          <article className="lg:w-[80%] max-w-[815px] xl:max-w-[1000px] px-4 md:px-6 py-8 md:py-[20px]">
            <ArticleBody
              description={articleData.description}
              content={articleData.content}
              category={articleData.category}
            />

            {/* Social Share Section - Hidden on lg and above */}
            <div className="max-lg:hidden mt-[48px]">
              <SocialShare reactions={321} rounded={true} />
            </div>
          </article>

          {/* Author Section */}
          <AuthorCard author={articleData.author} bio={articleData.authorBio} />
        </div>

        {/* Social Share Section - Full Width, Show on lg and above */}
        <div className="lg:hidden w-full mt-[48px]">
          <SocialShare reactions={321} />
        </div>
      </main>
    </>
  );
}
