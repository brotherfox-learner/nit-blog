import { useState, useMemo } from "react";
import HeroSection from "../components/landing-page/HeroSection/HeroSection";
import { BlogList } from "../components/blog";
import ArticleSearchBar from "../components/landing-page/ArticleSection/ArticleSearchBar";
import { blogPosts } from "../data";
import { NavBar, Footer } from "../components/layout";

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
      <NavBar />
      <HeroSection />
      <ArticleSearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <BlogList posts={filteredPosts} />
      <Footer />
    </main>
  );
}
