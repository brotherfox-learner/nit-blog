import { useState, useMemo } from "react";

/**
 * Hook for managing article filters (search, category, status)
 * Follows SRP - single responsibility for filtering logic
 */
export function useArticleFilters(articles = []) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedStatus, setSelectedStatus] = useState("Status");

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch = article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Category" || article.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "Status" || article.status === selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [articles, searchQuery, selectedCategory, selectedStatus]);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    filteredArticles,
  };
}
