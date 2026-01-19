import { useState, useCallback } from "react";

/**
 * useComments - จัดการ state และ logic ของ comments
 * ย้ายมาจาก src/components/article-page/hooks/useComments.js
 * @param {Array} initialComments - comments เริ่มต้น
 */
export function useComments(initialComments = []) {
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = useCallback((e, requireAuth) => {
    e.preventDefault();
    
    // ถ้ามี requireAuth function ให้เช็คก่อน
    if (requireAuth && !requireAuth()) {
      return;
    }
    
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        author: "Anonymous",
        avatar: null,
        date: new Date().toLocaleString(),
        content: commentText,
      };
      setComments(prev => [...prev, newComment]);
      setCommentText("");
    }
  }, [commentText]);

  const addComment = useCallback((comment) => {
    setComments(prev => [...prev, comment]);
  }, []);

  const removeComment = useCallback((commentId) => {
    setComments(prev => prev.filter(c => c.id !== commentId));
  }, []);

  return {
    comments,
    commentText,
    setCommentText,
    handleSubmit,
    addComment,
    removeComment,
  };
}
