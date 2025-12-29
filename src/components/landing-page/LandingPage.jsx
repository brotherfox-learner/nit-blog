import NavBar from "./NavBar/NavBar";
import HeroSection from "./HeroSection/HeroSection";
import Footer from "./Footer/Footer";
import { BlogList } from "../blog/BlogList";
import ArticleSection from "./ArticleSection/ArticleSection";

export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ArticleSection />
      <BlogList/>
      <Footer />
    </div>
  );
}
