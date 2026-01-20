import { NavBar, Footer } from "../components/layout";
import ArticleContent from "../components/article-page/ArticleContent";
import CommentSection from "../components/article-page/CommentSection";
import { useParams } from "react-router-dom";
import { useArticle, useAuth } from "../hooks";
import avatarImage from "../assets/images/Author-main-pic.jpg";
import LoginAlertDialog from "../components/article-page/components/LoginAlertDialog";

export default function ArticlePage() {
  const { postId } = useParams();
  
  // ใช้ useArticle hook แทน useState + useEffect
  const { article: post, isLoading } = useArticle(postId);
  
  // ใช้ useAuth context แทน prop drilling
  const { isLoginPopupOpen, setIsLoginPopupOpen } = useAuth();
  
  if (isLoading || !post) return <div>Loading...</div>;
  
  return (
    <div className="bg-[#F9F8F6]">
      <NavBar px={0} />
      <ArticleContent
        articleData={{
          ...post,
          author: {
            name: post.author,
            avatar: avatarImage,
          },
          authorBio: [
            "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.",
            "When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.",
          ],
        }}
      />
      <CommentSection />
      <Footer />
      
      {/* Dialog ใช้ร่วมกันทั้งหน้า - ใช้ context แทน props */}
      <LoginAlertDialog 
        open={isLoginPopupOpen} 
        onOpenChange={setIsLoginPopupOpen} 
      />
    </div>
  );
}
