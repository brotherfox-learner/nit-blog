import { useState, useEffect, useCallback, useRef } from "react";
import { NavBar, Footer } from "../components/layout";
import ArticleContent from "../components/article-page/ArticleContent";
import CommentSection from "../components/article-page/CommentSection";
import { useParams } from "react-router-dom";
import { useArticle, useAuth } from "../hooks";
import defaultAvatar from "../assets/images/Author-main-pic.jpg";
import LoginAlertDialog from "../components/article-page/components/LoginAlertDialog";
import LoadingPage from "../components/common/LoadingPage";
import { likePost, unlikePost, getLikesByPostId, checkUserLiked } from "../api/likesAPI";
import { recordPostView } from "../api/statisticsAPI";

export default function ArticlePage() {
  const { postId } = useParams();
  const { article: post, isLoading } = useArticle(postId);
  const { isLoginPopupOpen, setIsLoginPopupOpen, user, token, session } = useAuth();
  const accessToken = token ?? session?.access_token;

  const [likeCount, setLikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  // Reading time tracking
  const startTimeRef = useRef(null);
  const sentRef = useRef(false);

  useEffect(() => {
    if (!postId || isLoading) return;
    startTimeRef.current = Date.now();
    sentRef.current = false;

    const sendReadingTime = () => {
      if (sentRef.current || !startTimeRef.current) return;
      sentRef.current = true;
      const seconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
      if (seconds < 3) return;
      recordPostView(
        { post_id: parseInt(postId, 10), reading_time_seconds: seconds },
        accessToken || null
      ).catch(() => {});
    };

    const handleBeforeUnload = () => sendReadingTime();
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      sendReadingTime();
    };
  }, [postId, isLoading, accessToken]);

  useEffect(() => {
    if (!postId) return;
    getLikesByPostId(postId)
      .then((res) => {
        setLikeCount(res.like_count ?? 0);
      })
      .catch(() => {});
  }, [postId]);

  useEffect(() => {
    if (!postId || !user?.id) {
      setHasLiked(false);
      return;
    }
    checkUserLiked(postId, user.id)
      .then((res) => setHasLiked(!!res.liked))
      .catch(() => setHasLiked(false));
  }, [postId, user?.id]);

  const handleLike = useCallback(async () => {
    if (!accessToken) return;
    try {
      await likePost(postId, user?.id, accessToken);
      setLikeCount((c) => c + 1);
      setHasLiked(true);
    } catch (err) {
      if (err.response?.data?.message?.includes("already liked")) {
        setHasLiked(true);
        setLikeCount((c) => Math.max(c, 1));
      }
    }
  }, [postId, user?.id, accessToken]);

  const handleUnlike = useCallback(async () => {
    if (!accessToken) return;
    try {
      await unlikePost(postId, user?.id, accessToken);
      setLikeCount((c) => Math.max(0, c - 1));
      setHasLiked(false);
    } catch (err) {
      setHasLiked(false);
    }
  }, [postId, user?.id, accessToken]);

  if (isLoading || !post) return <LoadingPage />;

  // ใช้ author info จาก API ถ้ามี หรือใช้ default
  const authorName = post.author || "Unknown Author";
  const authorAvatar = post.author_avatar || defaultAvatar;
  const authorBio = post.author_bio
    ? [post.author_bio]
    : [
        "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.",
        "When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.",
      ];

  return (
    <div className="bg-[#F9F8F6]">
      <NavBar px={0} />
      <ArticleContent
        articleData={{
          ...post,
          author: {
            name: authorName,
            avatar: authorAvatar,
          },
          authorBio,
        }}
        likeCount={likeCount}
        hasLiked={hasLiked}
        onLike={handleLike}
        onUnlike={handleUnlike}
      />
      <CommentSection postId={postId} />
      <Footer />
      
      {/* Dialog ใช้ร่วมกันทั้งหน้า - ใช้ context แทน props */}
      <LoginAlertDialog 
        open={isLoginPopupOpen} 
        onOpenChange={setIsLoginPopupOpen} 
      />
    </div>
  );
}
