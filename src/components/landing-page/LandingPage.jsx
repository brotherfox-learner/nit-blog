import HeroSection from "./HeroSection/HeroSection";
import { BlogList } from "../blog/BlogList";
import ArticleSection from "./ArticleSection/ArticleSection";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ArticleSection />
      <BlogList />
    </main>
  );
}
