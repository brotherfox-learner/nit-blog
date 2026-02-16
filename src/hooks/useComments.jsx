import { useState, useCallback, useEffect } from "react";
import { getCommentsByPostId, createComment } from "../api/commentsAPI";

/**
 * useComments - จัดการ state และ logic ของ comments
 * @param {string|number} postId - ID ของ post
 * @param {string} token - access token สำหรับ protected routes
 */
export function useComments(postId, token) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ดึง comments จาก API เมื่อ postId เปลี่ยน
  useEffect(() => {
    if (!postId) return;

    const fetchComments = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCommentsByPostId(postId);
        // แปลง data จาก API ให้ตรงกับ format ที่ใช้ใน UI
        const formattedComments = data.map((c) => ({
          id: c.id,
          author: c.username || c.name || "Anonymous",
          avatar: c.profile_pic || null,
          date: new Date(c.created_at).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: c.comment_text,
          userId: c.user_id,
        }));
        setComments(formattedComments);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmit = useCallback(
    async (e, requireAuth, profile) => {
      e.preventDefault();

      // ถ้ามี requireAuth function ให้เช็คก่อน
      if (requireAuth && !requireAuth()) {
        return;
      }

      if (!commentText.trim() || !postId || !token) return;

      try {
        const newCommentData = await createComment(postId, commentText.trim(), token);

        // เพิ่ม comment ใหม่เข้า state ทันที (optimistic update)
        const formattedComment = {
          id: newCommentData.id,
          author: profile?.username || profile?.name || "You",
          avatar: profile?.profile_pic || null,
          date: new Date(newCommentData.created_at).toLocaleString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }),
          content: newCommentData.comment_text,
          userId: newCommentData.user_id,
        };

        setComments((prev) => [...prev, formattedComment]);
        setCommentText("");
      } catch (err) {
        console.error("Failed to create comment:", err);
        setError(err.response?.data?.message || err.message);
      }
    },
    [commentText, postId, token]
  );

  const addComment = useCallback((comment) => {
    setComments((prev) => [...prev, comment]);
  }, []);

  const removeComment = useCallback((commentId) => {
    setComments((prev) => prev.filter((c) => c.id !== commentId));
  }, []);

  return {
    comments,
    commentText,
    setCommentText,
    handleSubmit,
    addComment,
    removeComment,
    isLoading,
    error,
  };
}
