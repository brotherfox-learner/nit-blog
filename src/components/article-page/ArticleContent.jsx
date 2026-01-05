import hamsterImage from "../../assets/images/Dummy Cute Animal Pic/Workout hamster.jpg";
import avatarImage from "../../assets/images/Author-main-pic.jpg";
import SocialShare from "./SocialShare";

// Category colors matching Badge.jsx
const CATEGORY_COLORS = {
  Working: {
    bg: "bg-amber-500",
    text: "text-white",
    border: "border-amber-400",
  },
  Lifestyle: {
    bg: "bg-pink-500",
    text: "text-white",
    border: "border-pink-400",
  },
  Tech: {
    bg: "bg-blue-500",
    text: "text-white",
    border: "border-blue-400",
  },
  Travel: {
    bg: "bg-cyan-500",
    text: "text-white",
    border: "border-cyan-400",
  },
  Education: {
    bg: "bg-violet-500",
    text: "text-white",
    border: "border-violet-400",
  },
  Nature: {
    bg: "bg-emerald-500",
    text: "text-white",
    border: "border-emerald-400",
  },
};

// Article data similar to blogPosts structure
const articleData = {
  image: hamsterImage,
  category: "Working",
  title: "Fitness Goals: When Hamster Is More Motivated Than You",
  description:
    "This dedicated hamster is putting us all to shame with their workout routine. Sometimes the smallest creatures have the biggest determination. Discover how pets can inspire us to prioritize fitness and maintain healthy habits, even when we don't feel like it.",
  date: "4 Dec 2024",
  readTime: 6,
  author: {
    name: "Thomson P.",
    avatar: avatarImage,
  },
};

const articleSections = [
  {
    id: 1,
    heading: "Independent Yet Affectionate",
    content: `One of the most remarkable traits of cats is their balance between independence and affection. Unlike dogs, who are often eager for constant attention, cats enjoy their alone time. They can spend hours grooming themselves, exploring the house, or napping in quiet corners.

However, when they want affection, they know how to seek it out with a soft purr, a gentle nuzzle, or by curling up on your lap. This duality makes cats appealing to many people who appreciate the fact that their feline companions are low-maintenance but still loving. It's like having a roommate who enjoys your company but doesn't demand too much of your time!`,
  },
  {
    id: 2,
    heading: "Playful Personalities",
    content: `Cats are naturally curious and playful. From kittens to adults, they enjoy engaging with toys, climbing furniture, or chasing after imaginary prey. Their play often mimics hunting behavior, which is a nod to their wild ancestors. Whether they're pouncing on a feather toy or darting across the room after a laser pointer, their agility and energy are mesmerizing to watch.

This playfulness also serves as mental stimulation for cats. Providing toys and opportunities to climb or explore helps them stay active and reduces boredom, which is especially important for indoor cats who may not have access to the outdoor adventures their instincts crave.`,
  },
  {
    id: 3,
    heading: "Communication Through Body Language",
    content: `Cats are master communicators, though they do so in subtle ways. Understanding a cat's body language can deepen the bond between you and your pet. Learning to read these cues can help you respond to your cat's needs and emotions more effectively, creating a stronger connection between you and your feline friend.`,
    listItems: [
      {
        term: "Purring",
        description:
          "Usually a sign of contentment, though cats may also purr when anxious or in pain as a self-soothing mechanism.",
      },
      {
        term: "Tail Position",
        description:
          "A tail held high usually indicates a happy and confident cat, while a puffed-up tail suggests fear or aggression.",
      },
      {
        term: "Slow Blinks",
        description:
          "Cats often use slow blinking as a way to express trust and affection. If your cat slow blinks at you, try returning the gesture to strengthen your bond.",
      },
      {
        term: "Ear Position",
        description:
          "Forward-facing ears show interest and alertness, while flattened ears indicate fear or irritation.",
      },
    ],
  },
  {
    id: 4,
    heading: "Health Benefits of Having a Cat",
    content: `Did you know that owning a cat can be good for your health? Studies have shown that petting a cat can reduce stress and lower blood pressure. The calming sound of a cat's purr is often associated with relaxation and well-being. Additionally, the companionship of a cat can help combat loneliness, providing emotional support to their owners.

People who live with cats may also experience reduced feelings of anxiety and depression, thanks to the comfort and companionship these animals provide. The rhythmic sound of purring has even been shown to have healing properties, with frequencies that can promote bone density and tissue regeneration.`,
  },
  {
    id: 5,
    heading: "A History with Humans",
    content: `Cats were first domesticated in the Near East around 9,000 years ago, likely because they were excellent at catching rodents that threatened food supplies. Over time, their relationship with humans evolved from pest control to cherished companionship.

In ancient Egypt, cats were revered and even worshipped. The goddess Bastet, often depicted with the head of a cat, was a deity of home, fertility, and protection. Killing a cat, even accidentally, was punishable by death, and families often mummified their cats to honor them after death.

Today, while not seen as divine figures, cats remain beloved members of millions of families worldwide. They've transitioned from useful hunters to internet celebrities and treasured companions who bring joy, comfort, and endless entertainment to our lives.`,
  },
];

export default function ArticleContent() {
  // Get category colors
  const categoryColors = CATEGORY_COLORS[articleData.category];

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      {/* รูปภาพ Featured Image - Full Width Hero */}
      <figure className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden m-0">
        <img
          src={articleData.image}
          alt={articleData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

        {/* กล่อง Overlay Content */}
        <header className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16 ">
          <div className="max-w-4xl mx-auto">
            <span
              className={`inline-block ${categoryColors.bg} ${categoryColors.text} font-poppins text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4`}
            >
              {articleData.category}
            </span>
            <h1 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
              {articleData.title}
            </h1>
            <time className="font-poppins text-xs md:text-xs lg:text-s text-white">
              {articleData.date}
            </time>
          </div>
        </header>
        <span className="absolute top-6 right-4 font-poppins text-sm text-stone-500 bg-stone-100 px-4 py-2 rounded-full">
          {articleData.readTime} min read
        </span>
      </figure>
      {/* Article Content */}
      <div className=" flex flex-col justify-center lg:flex-row lg:gap-[50px] px-[2vw] lg:max-w-[1440px]">
        <article className="lg:w-[70%] max-w-[815px] px-4 md:px-6 py-8 md:py-[20px]">
          {/* Article Meta */}

          {/* Description */}
          <p className="text-lg text-stone-600 leading-relaxed mt-4 mb-10 border-l-4 border-amber-400 pl-6 italic">
            {articleData.description}
          </p>

          {/* Article Body */}
          <section className="space-y-10">
            {articleSections.map((section) => (
              <section key={section.id} className="space-y-4">
                <h2 className="font-poppins text-xl md:text-2xl font-semibold text-stone-800 pb-2 border-b-2 border-amber-300">
                  {section.id}. {section.heading}
                </h2>
                {section.content.split("\n\n").map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-poppins text-base md:text-lg text-stone-700 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.listItems && (
                  <ul className="space-y-3 mt-6">
                    {section.listItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="bg-gradient-to-r from-amber-50 to-stone-50 p-4 rounded-lg border-l-4 border-amber-500 hover:translate-x-1 hover:shadow-md transition-all duration-200"
                      >
                        <strong className="font-poppins font-semibold text-amber-800">
                          {item.term}:
                        </strong>{" "}
                        <span className="font-poppins text-sm text-stone-600 leading-relaxed">
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </section>
          {/* Social Share Section - Hidden on lg and above */}
          <div className="max-lg:hidden mt-[48px] ">
            <SocialShare reactions={321} rounded={true} />
          </div>
        </article>

        {/* Author Section */}
        <section className="max-lg:flex max-lg:flex-col max-lg:justify-center items-center ">
          <div className="min-w-[343px] lg:min-w-[400px] w-[80vw] lg:max-w-[20vw] mx-0 px-4 md:px-6 my-5 lg:py-[15px] lg:sticky top-[15px]">
            <footer className=" p-6 md:p-8 min-h-[376px] bg-[#EFEEEB] rounded-2xl ">
              <section className="flex flex-col gap-6">
                {/* Author Info */}
                <figure className="flex items-center gap-4 m-0 pb-6 border-b border-stone-300">
                  <img
                    src={articleData.author.avatar}
                    alt={`Avatar of ${articleData.author.name}`}
                    className="w-[44px] h-[44px] rounded-full object-cover ring-2 ring-[#acacac]"
                  />
                  <figcaption className="flex flex-col">
                    <span className="font-poppins text-sm text-[#75716B]">
                      Author
                    </span>
                    <span className="font-poppins text-lg font-bold text-[#43403B]">
                      {articleData.author.name}
                    </span>
                  </figcaption>
                </figure>

                {/* Author Bio */}
                <p className="font-poppins text-base md:text-lg text-[#75716B] leading-relaxed">
                  I am a pet enthusiast and freelance writer who specializes in
                  animal behavior and care. With a deep love for cats, I enjoy
                  sharing insights on feline companionship and wellness.
                </p>
                <p className="font-poppins text-base md:text-lg text-[#75716B] leading-relaxed">
                  When I'm not writing, I spend time volunteering at my local
                  animal shelter, helping cats find loving homes.
                </p>
              </section>
            </footer>
          </div>
        </section>
      </div>

      {/* Social Share Section - Full Width, Show on lg and above */}
      <div className="lg:hidden w-full mt-[48px]">
        <SocialShare reactions={321} />
      </div>
    </main>
  );
}
