import { useState } from "react";
import HeroSection from "../components/landing-page/HeroSection/HeroSection";
import ArticleSearchBar from "../components/landing-page/ArticleSection/ArticleSearchBar";
import { NavBar, Footer } from "../components/layout";
import { NewBlogList } from "../components/blog/NewBlogList";
import { useSearch } from "../hooks";

export default function LandingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // ใช้ useSearch hook - blog list จะ fetch เฉพาะเมื่อ searchQuery เปลี่ยน
  const {
    inputValue,
    searchQuery, // ค่าที่ใช้ fetch blog list
    suggestions,
    isLoadingSuggestions,
    showSuggestions,
    handleInputChange,
    handleSearch, // function สำหรับกดปุ่ม search
    handleKeyDown, // function สำหรับกด Enter
    handleSelectSuggestion,
    clearSearch, // function สำหรับล้างค่า
    closeSuggestions,
    openSuggestions,
  } = useSearch({ autocompleteLimit: 5 });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main >
      {/* NavBar */}
      <NavBar />

      {/* HeroSection */}
      <HeroSection />

      {/* ArticleSearchBar */}
      <ArticleSearchBar
        id="landing-page-article-search-bar"
        searchQuery={inputValue}
        onSearchChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onSearchClick={handleSearch}
        onClear={clearSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        suggestions={suggestions}
        isLoadingSuggestions={isLoadingSuggestions}
        showSuggestions={showSuggestions}
        onSelectSuggestion={handleSelectSuggestion}
        onSearchFocus={openSuggestions}
        closeSuggestions={closeSuggestions}
      />

      {/* NewBlogList */}
      <NewBlogList
        selectedCategory={selectedCategory}
        searchQuery={searchQuery} // ใช้ searchQuery ที่ update เฉพาะเมื่อกด Enter/search/select
        limit={6}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
