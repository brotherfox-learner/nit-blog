import { NavBar, Footer } from "../layout";
import ArticleContent from "./ArticleContent";
import CommentSection from "./CommentSection";
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
