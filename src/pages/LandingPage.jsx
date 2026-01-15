import { useState } from "react";
import HeroSection from "../components/landing-page/HeroSection/HeroSection";
import ArticleSearchBar from "../components/landing-page/ArticleSection/ArticleSearchBar";
import { NavBar, Footer } from "../components/layout";
import { NewBlogList } from "../components/blog/NewBlogList";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
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
      <NewBlogList 
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        limit={6}
      />
      <Footer />
    </main>
  );
}
