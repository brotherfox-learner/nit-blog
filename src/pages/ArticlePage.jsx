import { NavBar, Footer } from "../components/layout";
import ArticleContent from "../components/article-page/ArticleContent";
import CommentSection from "../components/article-page/CommentSection";

export default function ArticlePage() {
  return (
    <div className="bg-[#F9F8F6]">
      <NavBar px={0} />
      <ArticleContent />
      <CommentSection />
      <Footer />
    </div>
  );
}
