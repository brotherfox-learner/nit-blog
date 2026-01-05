import { NavBar, Footer } from "../layout";
import ArticleContent2 from "./ArticleContent";
import CommentSection2 from "./CommentSection";
export default function ArticlePage() {
  return (
    <div className="bg-[#F9F8F6]">
      <NavBar />
      <ArticleContent2 />
      <CommentSection2 />
      <Footer />
    </div>
  );
}
