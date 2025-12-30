import capibaraImage from "../../assets/images/Capibara.jpg";
import catBoobaImage from "../../assets/images/Cat with Booba tea.jpg";
import hamsterImage from "../../assets/images/Hamster.jpg";
import penguinImage from "../../assets/images/Penguin.jpg";
import rabbitImage from "../../assets/images/Rabbit.jpg";
import redPandaImage from "../../assets/images/Red Panada.jpg";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  return (
    <div className="px-[16px] mt-[10px] flex flex-col justify-center items-center gap-[24px] min-[1280px]:grid min-[1280px]:grid-cols-2 min-[1280px]:gap-[20px] min-[1280px]:place-items-center min-[1280px]:place-content-center min-[1280px]:px-[120px] min-[1280px]:py-[16px]">
      <BlogCard
        image={capibaraImage}
        category="Working"
        title="Capybaras: The World's Chillest Animal and Internet's Favorite Pet"
        description="Meet the capybara - the giant rodent that's taken over social media. Known for their calm demeanor and ability to befriend literally any animal, these gentle giants from South America have become the ultimate symbol of relaxation in our chaotic world."
        date="28 Dec 2024"
        loading="eager"
        readTime={7}
      />
      <BlogCard
        image={catBoobaImage}
        category="Lifestyle"
        title="Cat Lifestyle Goals: When Your Feline Has Better Fashion Than You"
        description="From designer bags to bubble tea runs, modern cats are living their best lives. Explore the hilarious trend of pet fashion photography and why dressing up our furry friends has become a worldwide phenomenon. Spoiler: they're more photogenic than us."
        date="27 Dec 2024"
        loading="eager"
        readTime={5}
      />
      <BlogCard
        image={hamsterImage}
        category="Tech"
        title="Work From Home: When Your Hamster Becomes Your IT Support"
        description="In the age of remote work, even our smallest pets want to contribute. This adorable hamster with glasses has mastered the art of looking productive while actually doing nothing - relatable content for every office worker."
        date="26 Dec 2024"
        loading="eager"
        readTime={6}
      />
      <BlogCard
        image={penguinImage}
        category="Travel"
        title="Cool Rides Only: A Penguin's Guide to Traveling in Style"
        description="Who says penguins can't be cool? This fashionable bird proves that sunglasses and a good attitude are all you need for the perfect road trip. Follow along as we explore the viral trend of penguin content taking over the internet."
        date="25 Dec 2024"
        loading="eager"
        readTime={8}
      />
      <BlogCard
        image={rabbitImage}
        category="Education"
        title="Bunny Scholars: The Most Adorable Study Buddies on the Internet"
        description="Nothing motivates you to read more than a fluffy white rabbit in reading glasses. Discover why rabbits make the perfect study companions and how this viral photo has inspired thousands to pick up a book (or at least pretend to)."
        date="24 Dec 2024"
        loading="eager"
        readTime={4}
      />
      <BlogCard
        image={redPandaImage}
        category="Nature"
        title="Red Pandas: Nature's Most Playful and Mischievous Creatures"
        description="With their adorable faces and playful tongue-out expressions, red pandas have captured hearts worldwide. Learn about these endangered cuties, their bamboo-loving habits, and why conservation efforts are more important than ever."
        date="23 Dec 2024"
        loading="eager"
        readTime={10}
      />
    </div>
  );
}
