import NavBar from "./NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import { BlogCard } from "../blog/BlogCard";
import ArticleSection from "./ArticleSection/ArticleSection";
export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      {/* <BlogCard image="https://cataas.com/cat" /> */}
      <Footer />
    </div>
  );
}

