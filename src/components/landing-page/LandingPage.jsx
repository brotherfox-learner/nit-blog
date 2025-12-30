import { useState, useMemo } from "react";
import HeroSection from "./HeroSection/HeroSection";
import { BlogList } from "../blog/BlogList";
import ArticleSection from "./ArticleSection/ArticleSection";
import { blogPosts } from "../../data";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        !selectedCategory || selectedCategory === "All"
          ? true
          : post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? "All" : category);
  };

  return (
    <main>
      <HeroSection />
      <ArticleSection
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <BlogList posts={filteredPosts} />
    </main>
  );
}
