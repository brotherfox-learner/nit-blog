import { useState, useEffect, useCallback } from "react";
import { fetchBlogPostById } from "../data/fetchBlogPost";

/**
 * useArticle - จัดการการ fetch และ state ของ article
 * @param {string} postId - ID ของบทความ
 * @returns {Object} { article, isLoading, error, refetch }
 */
export function useArticle(postId) {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticle = useCallback(async () => {
    if (!postId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchBlogPostById(postId);
      setArticle(data);
    } catch (err) {
      setError(err.message || "Failed to fetch article");
      console.error("Error fetching article:", err);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchArticle();
  }, [fetchArticle]);

  return {
    article,
    isLoading,
    error,
    refetch: fetchArticle,
  };
}
