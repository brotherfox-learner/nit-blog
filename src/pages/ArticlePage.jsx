import { NavBar, Footer } from "../components/layout";
import ArticleContent from "../components/article-page/ArticleContent";
import CommentSection from "../components/article-page/CommentSection";
import { useParams } from "react-router-dom";
import { fetchBlogPostById } from "../data/fetchBlogPost";
import { useState, useEffect } from "react";
import avatarImage from "../assets/images/Author-main-pic.jpg";
import { usePopups } from "../components/article-page/hooks/usePopups";
import LoginAlertDialog from "../components/article-page/components/LoginAlertDialog";

export default function ArticlePage() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  
  // ไว้เปลี่ยนเป็น actual authentication logic
  const isLoggedIn = false; 
  
  // ยก popup state ขึ้นมาที่ ArticlePage เพื่อใช้ร่วมกันทั้งหมด
  const { isLoginPopupOpen, openLoginPopup, setIsLoginPopupOpen } = usePopups();
  
  useEffect(() => {
    const fetchPost = async () => {
      const data = await fetchBlogPostById(postId);
      setPost(data);
    };
    fetchPost();
  }, [postId]);
  
  if (!post) return <div>Loading...</div>;
  
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
        isLoggedIn={isLoggedIn}
        openLoginPopup={openLoginPopup}
      />
      <CommentSection 
        isLoggedIn={isLoggedIn}
        openLoginPopup={openLoginPopup}
      />
      <Footer />
      
      {/* Dialog ใช้ร่วมกันทั้งหน้า */}
      <LoginAlertDialog 
        open={isLoginPopupOpen} 
        onOpenChange={setIsLoginPopupOpen} 
      />
    </div>
  );
}
