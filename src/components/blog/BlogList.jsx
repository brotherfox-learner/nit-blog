import { BlogCard } from "./BlogCard";
import catImage from "../../assets/images/Cat1.jpg";

export function BlogList() {
  return (
    <div className="px-[16px] flex flex-col justify-center items-center gap-[48px] min-[1280px]:grid min-[1280px]:grid-cols-2 min-[1280px]:gap-[20px] min-[1280px]:place-items-center min-[1280px]:place-content-center min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
      <BlogCard image={catImage} />
      <BlogCard
        title="The Fascinating World of Cats: Why We Love Our Furry Friends"
        description="Cats have captivated human hearts for thousands of years. Whether lounging in a sunny spot or playfully chasing a string, these furry companions bring warmth and joy to millions of homes. But what makes cats so special? Let’s dive into the unique traits, behaviors, and quirks that make cats endlessly fascinating."
        date="12 September 2024"
      />
      <BlogCard
      image="https://cataas.com/cat/cute"
        title="Finding Motivation: How to Stay Inspired Through Life's Challenges"
        description="This article explores strategies to maintain motivation when faced with personal or professional challenges. From setting small goals to practicing mindfulness and surrounding yourself with positive influences, it provides actionable tips to reignite your passion and keep moving forward."
        date="12 September 2024"
      />
      <BlogCard
      image="https://cataas.com/cat/lovely"
        title="The Science of the Cat’s Purr: How It Benefits Cats and Humans Alike"
        description="Discover the fascinating science behind the cat's purr, including its potential healing properties for both cats and humans. Learn how this unique sound is produced and the emotional and physical benefits it brings to both species."
        date="13 September 2024"
      />
    </div>
  );
}
