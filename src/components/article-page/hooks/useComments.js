import { useState } from "react";

export const useComments = (initialComments = []) => {
  const [comments, setComments] = useState(initialComments);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        author: "Anonymous",
        avatar: null,
        date: new Date().toLocaleString(),
        content: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  return {
    comments,
    commentText,
    setCommentText,
    handleSubmit,
  };
};

