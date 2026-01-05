import hamsterImage from "../assets/images/Dummy Cute Animal Pic/Workout hamster.jpg";
import avatarImage from "../assets/images/Author-main-pic.jpg";

export const articleData = {
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
  authorBio: [
    "I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.",
    "When I'm not writing, I spend time volunteering at my local animal shelter, helping cats find loving homes.",
  ],
};

export const articleSections = [
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
