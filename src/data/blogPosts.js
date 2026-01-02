import { v4 as uuid } from 'uuid';

// Import images from Dummy Cute Animal Pic folder
import capibaraImage from "../assets/images/Dummy Cute Animal Pic/Capibara.jpg";
import catBoobaImage from "../assets/images/Dummy Cute Animal Pic/Cat with Booba tea.jpg";
import hamsterImage from "../assets/images/Dummy Cute Animal Pic/Hamster.jpg";
import penguinImage from "../assets/images/Dummy Cute Animal Pic/Penguin.jpg";
import rabbitImage from "../assets/images/Dummy Cute Animal Pic/Rabbit.jpg";
import redPandaImage from "../assets/images/Dummy Cute Animal Pic/Red Panada.jpg";
import goldenRetrieverImage from "../assets/images/Dummy Cute Animal Pic/A gloden retriever selfie.jpg";
import angryCatImage from "../assets/images/Dummy Cute Animal Pic/Angry cat.jpg";
import angrySharkCatImage from "../assets/images/Dummy Cute Animal Pic/Angry shark cat.jpg";
import catWithCarImage from "../assets/images/Dummy Cute Animal Pic/Cat with car.jpg";
import catImage from "../assets/images/Dummy Cute Animal Pic/Cat.jpg";
import cat1Image from "../assets/images/Dummy Cute Animal Pic/Cat1.jpg";
import chillRabbitImage from "../assets/images/Dummy Cute Animal Pic/ChillRabbit.jpg";
import coupleOwlsImage from "../assets/images/Dummy Cute Animal Pic/Couple Owls.jpg";
import seaOtterImage from "../assets/images/Dummy Cute Animal Pic/cute sea otter-2.jpg";
import dogFlowerImage from "../assets/images/Dummy Cute Animal Pic/Dog flower.jpg";
import dogWithHatImage from "../assets/images/Dummy Cute Animal Pic/Dog with hat.jpg";
import doorDogImage from "../assets/images/Dummy Cute Animal Pic/Door Dog.jpg";
import dorkyOwlImage from "../assets/images/Dummy Cute Animal Pic/dorky owl.jpg";
import foxImage from "../assets/images/Dummy Cute Animal Pic/Fox.jpg";
import huskyImage from "../assets/images/Dummy Cute Animal Pic/HUsky.jpg";
import lollImage from "../assets/images/Dummy Cute Animal Pic/loll.jpg";
import penguin2Image from "../assets/images/Dummy Cute Animal Pic/Penguin 2.jpg";
import sleepyCatImage from "../assets/images/Dummy Cute Animal Pic/SleepyWorkingCat.jpg";
import workoutHamsterImage from "../assets/images/Dummy Cute Animal Pic/Workout hamster.jpg";
import capybaraCrocImage from "../assets/images/Dummy Cute Animal Pic/Capybara with Croc.jpg";
import studyingPenguinImage from "../assets/images/Dummy Cute Animal Pic/StudyPenguin.jpg";
import NatureRabbitImage from "../assets/images/Dummy Cute Animal Pic/NatureRabbit.jpg";
import catTechImage from "../assets/images/Dummy Cute Animal Pic/CatTech.jpg";
export const blogPosts = [
  {
    id: uuid(),
    image: capibaraImage,
    category: "Working",
    title: "Capybaras: The World's Chillest Animal and Internet's Favorite Pet",
    description:
      "Meet the capybara - the giant rodent that's taken over social media. Known for their calm demeanor and ability to befriend literally any animal, these gentle giants from South America have become the ultimate symbol of relaxation in our chaotic world.",
    date: "28 Dec 2024",
    loading: "eager",
    readTime: 7,
  },
  {
    id: uuid(),
    image: catBoobaImage,
    category: "Lifestyle",
    title: "Cat Lifestyle Goals: When Your Feline Has Better Fashion Than You",
    description:
      "From designer bags to bubble tea runs, modern cats are living their best lives. Explore the hilarious trend of pet fashion photography and why dressing up our furry friends has become a worldwide phenomenon. Spoiler: they're more photogenic than us.",
    date: "27 Dec 2024",
    loading: "eager",
    readTime: 5,
  },
  {
    id: uuid(),
    image: hamsterImage,
    category: "Tech",
    title: "Work From Home: When Your Hamster Becomes Your IT Support",
    description:
      "In the age of remote work, even our smallest pets want to contribute. This adorable hamster with glasses has mastered the art of looking productive while actually doing nothing - relatable content for every office worker.",
    date: "26 Dec 2024",
    loading: "eager",
    readTime: 6,
  },
  {
    id: uuid(),
    image: penguinImage,
    category: "Travel",
    title: "Cool Rides Only: A Penguin's Guide to Traveling in Style",
    description:
      "Who says penguins can't be cool? This fashionable bird proves that sunglasses and a good attitude are all you need for the perfect road trip. Follow along as we explore the viral trend of penguin content taking over the internet.",
    date: "25 Dec 2024",
    loading: "eager",
    readTime: 8,
  },
  {
    id: uuid(),
    image: rabbitImage,
    category: "Education",
    title: "Bunny Scholars: The Most Adorable Study Buddies on the Internet",
    description:
      "Nothing motivates you to read more than a fluffy white rabbit in reading glasses. Discover why rabbits make the perfect study companions and how this viral photo has inspired thousands to pick up a book (or at least pretend to).",
    date: "24 Dec 2024",
    loading: "lazy",
    readTime: 4,
  },
  {
    id: uuid(),
    image: redPandaImage,
    category: "Nature",
    title: "Red Pandas: Nature's Most Playful and Mischievous Creatures",
    description:
      "With their adorable faces and playful tongue-out expressions, red pandas have captured hearts worldwide. Learn about these endangered cuties, their bamboo-loving habits, and why conservation efforts are more important than ever.",
    date: "23 Dec 2024",
    loading: "lazy",
    readTime: 10,
  },
  {
    id: uuid(),
    image: goldenRetrieverImage,
    category: "Travel",
    title: "Selfie Culture: When Dogs Master Social Media Better Than Humans",
    description:
      "Golden retrievers have taken selfie-taking to a whole new level. With their natural photogenic qualities and unapologetic confidence, these dogs are showing us that maybe we're not the best at capturing our good side. Discover the secret behind their perfect angles.",
    date: "22 Dec 2024",
    loading: "lazy",
    readTime: 6,
  },
  {
    id: uuid(),
    image: angryCatImage,
    category: "Lifestyle",
    title: "Mood Goals: Embracing Your Inner Grumpy Cat Energy",
    description:
      "Sometimes life calls for a good scowl, and nobody does it better than cats. This fierce feline reminds us that it's okay to have bad days and express our displeasure with the world. Learn why embracing our grumpy side can actually be liberating.",
    date: "21 Dec 2024",
    loading: "lazy",
    readTime: 5,
  },
  {
    id: uuid(),
    image: angrySharkCatImage,
    category: "Tech",
    title: "Shark vs Cat: The Ultimate Internet Meme Battle",
    description:
      "What happens when you combine a shark's ferocity with a cat's attitude? Pure internet gold. This hybrid creature has become the symbol of unstoppable determination in the tech world. Explore how memes shape our perception of productivity and success.",
    date: "20 Dec 2024",
    loading: "eager",
    readTime: 7,
  },
  {
    id: uuid(),
    image: catWithCarImage,
    category: "Travel",
    title: "Road Trip Essentials: Cats Who Love the Open Road",
    description:
      "Who says cats don't enjoy travel? This adventurous feline proves that with the right attitude and a good vehicle, anyone can become a road trip enthusiast. From highway views to pit stops, discover how pets are redefining the travel experience.",
    date: "19 Dec 2024",
    loading: "eager",
    readTime: 8,
  },
  {
    id: uuid(),
    image: catImage,
    category: "Education",
    title: "The Curious Cat: Learning Through Observation",
    description:
      "Cats are natural learners, always observing and adapting to their environment. This thoughtful feline demonstrates the importance of curiosity in education. Discover how observing animals can teach us valuable lessons about patience, persistence, and lifelong learning.",
    date: "18 Dec 2024",
    loading: "lazy",
    readTime: 6,
  },
  {
    id: uuid(),
    image: cat1Image,
    category: "Nature",
    title: "Feline Photography: Capturing the Perfect Cat Portrait",
    description:
      "The art of cat photography requires patience, timing, and understanding of feline behavior. This stunning portrait showcases the beauty and personality that makes cats such beloved subjects. Learn the secrets behind capturing that perfect shot that tells a story.",
    date: "17 Dec 2024",
    loading: "eager",
    readTime: 9,
  },
  {
    id: uuid(),
    image: chillRabbitImage,
    category: "Lifestyle",
    title: "Zen and the Art of Rabbit Relaxation",
    description:
      "In our fast-paced world, sometimes we need to take a lesson from the most relaxed creatures on earth. This chilled-out bunny demonstrates the perfect work-life balance, showing us that productivity doesn't have to mean constant stress. Master the art of calm.",
    date: "16 Dec 2024",
    loading: "lazy",
    readTime: 5,
  },
  {
    id: uuid(),
    image: coupleOwlsImage,
    category: "Lifestyle",
    title: "Couple Goals: When Owls Show Us What True Partnership Looks Like",
    description:
      "These adorable owl couples remind us that relationships are about companionship, trust, and sometimes just sitting together in comfortable silence. Explore how animals demonstrate the simple joys of being together and what we can learn from their bonds.",
    date: "15 Dec 2024",
    loading: "eager",
    readTime: 7,
  },
  {
    id: uuid(),
    image: seaOtterImage,
    category: "Tech",
    title: "Sea Otters: Nature's Most Playful Problem Solvers",
    description:
      "Known for their intelligence and tool use, sea otters are like the engineers of the ocean. Watch as they demonstrate innovative problem-solving skills that put many tech professionals to shame. Discover how their playful approach to challenges can inspire innovation.",
    date: "14 Dec 2024",
    loading: "eager",
    readTime: 8,
  },
  {
    id: uuid(),
    image: dogFlowerImage,
    category: "Travel",
    title: "Blooming Adventures: Dogs and Their Floral Journeys",
    description:
      "Some journeys are about the destination, others are about the flowers along the way. This dog reminds us that travel is about appreciating the small beauties we encounter. From garden walks to field explorations, discover how pets enhance our travel experiences.",
    date: "13 Dec 2024",
    loading: "lazy",
    readTime: 6,
  },
  {
    id: uuid(),
    image: dogWithHatImage,
    category: "Education",
    title: "Fashion Forward: When Dogs Attend Style School",
    description:
      "Accessories can make all the difference, and this stylish dog proves that education includes learning how to present yourself with confidence. From hats to attitude, explore how pets are becoming fashion icons and what they teach us about personal expression.",
    date: "12 Dec 2024",
    loading: "eager",
    readTime: 5,
  },
  {
    id: uuid(),
    image: doorDogImage,
    category: "Nature",
    title: "Door Guardians: Dogs and Their Protective Instincts",
    description:
      "Dogs have been our loyal guardians for thousands of years. This vigilant pup demonstrates the natural instinct to protect and watch over their territory. Learn about the bond between humans and dogs and how these animals continue to serve as our first line of defense.",
    date: "11 Dec 2024",
    loading: "lazy",
    readTime: 7,
  },
  {
    id: uuid(),
    image: dorkyOwlImage,
    category: "Working",
    title: "Embrace Your Dorkiness: When Being Quirky Is Your Superpower",
    description:
      "This charmingly dorky owl reminds us that personality matters more than perfection. In the workplace and beyond, embracing our unique quirks can be our greatest strength. Discover why authenticity beats conformity every single time.",
    date: "10 Dec 2024",
    loading: "eager",
    readTime: 6,
  },
  {
    id: uuid(),
    image: foxImage,
    category: "Working",
    title: "Fox Designer: The Most Stylish Wild Canine",
    description:
      "With their luxurious fur and elegant demeanor, foxes are nature's fashion icons. This stunning creature showcases how wildlife embodies style and grace. Explore how animals inspire fashion trends and why we're constantly drawn to their natural beauty.",
    date: "9 Dec 2024",
    loading: "lazy",
    readTime: 8,
  },
  {
    id: uuid(),
    image: huskyImage,
    category: "Tech",
    title: "Husky Intelligence: The Tech-Savvy Working Dogs",
    description:
      "Huskies are known for their intelligence and problem-solving abilities, making them perfect examples of natural engineers. These clever canines demonstrate that sometimes the best solutions come from thinking outside the box. Learn how their adaptability inspires innovation.",
    date: "8 Dec 2024",
    loading: "eager",
    readTime: 9,
  },
  {
    id: uuid(),
    image: lollImage,
    category: "Travel",
    title: "Adventure Ready: Pets Who Love Exploring New Places",
    description:
      "Travel isn't just for humans anymore. This adventurous pet shows us that exploration is in our nature, whether we have two legs or four. From city streets to mountain trails, discover how pets are joining us on our greatest adventures and enriching our journeys.",
    date: "7 Dec 2024",
    loading: "lazy",
    readTime: 7,
  },
  {
    id: uuid(),
    image: penguin2Image,
    category: "Education",
    title: "Penguin Class: Learning About These Tuxedoed Scholars",
    description:
      "Penguins may look formal, but they're some of the most curious and social learners in the animal kingdom. This dapper bird demonstrates that education comes in many forms. Discover how penguins teach us about teamwork, adaptation, and the importance of staying curious.",
    date: "6 Dec 2024",
    loading: "eager",
    readTime: 6,
  },
  {
    id: uuid(),
    image: sleepyCatImage,
    category: "Working",
    title: "The Science of Cat Naps: Why Rest Is Essential",
    description:
      "Cats have mastered the art of rest, and science shows they're onto something. This sleepy feline demonstrates the importance of taking breaks and recharging. Learn about the benefits of quality sleep and how animals model healthy rest habits for humans.",
    date: "5 Dec 2024",
    loading: "lazy",
    readTime: 5,
  },
  {
    id: uuid(),
    image: workoutHamsterImage,
    category: "Working",
    title: "Fitness Goals: When Your Pet Is More Motivated Than You",
    description:
      "This dedicated hamster is putting us all to shame with their workout routine. Sometimes the smallest creatures have the biggest determination. Discover how pets can inspire us to prioritize fitness and maintain healthy habits, even when we don't feel like it.",
    date: "4 Dec 2024",
    loading: "eager",
    readTime: 6,
  },
  {
    id: uuid(),
    image: capybaraCrocImage,
    category: "Lifestyle",
    title: "Relaxation Masters: Learning From Nature's Most Chill Animals",
    description:
      "Capybaras have perfected the art of relaxation, and we could all learn a thing or two from their laid-back approach to life. These gentle giants show us that sometimes the best way to handle stress is to simply embrace calm. Discover their secrets to maintaining peace in chaos.",
    date: "3 Dec 2024",
    loading: "lazy",
    readTime: 7,
  },
  {
    id: uuid(),
    image: catTechImage,
    category: "Tech",
    title: "Pet Tech Trends: How Modern Pets Are Embracing Technology",
    description:
      "From bubble tea runs to smart home integration, pets are becoming more tech-savvy than ever. This fashionable cat demonstrates how technology and lifestyle are merging for our furry friends. Explore the latest trends in pet tech and what it means for the future.",
    date: "2 Dec 2024",
    loading: "eager",
    readTime: 8,
  },
  {
    id: uuid(),
    image: hamsterImage,
    category: "Travel",
    title: "Small But Mighty: Tiny Pets With Big Travel Dreams",
    description:
      "Size doesn't limit adventure, as this determined hamster proves. Even the smallest pets can have the biggest travel aspirations. Discover how small animals are joining their owners on journeys big and small, proving that adventure knows no size limits.",
    date: "1 Dec 2024",
    loading: "lazy",
    readTime: 9,
  },
  {
    id: uuid(),
    image: studyingPenguinImage,
    category: "Education",
    title: "Learning From Penguins: Lessons in Perseverance and Adaptation",
    description:
      "Penguins teach us valuable lessons about overcoming challenges and adapting to our environment. These resilient birds demonstrate that education is about more than books - it's about learning to thrive wherever life takes us. Explore what penguins can teach us about resilience.",
    date: "30 Nov 2024",
    loading: "eager",
    readTime: 7,
  },
  {
    id: uuid(),
    image: NatureRabbitImage,
    category: "Nature",
    title: "The Natural World of Rabbits: Understanding Their Habitat",
    description:
      "Rabbits are fascinating creatures with complex natural behaviors and habitats. These fluffy animals play important roles in ecosystems around the world. Learn about their natural environments, behaviors, and why understanding wildlife is crucial for conservation efforts.",
    date: "29 Nov 2024",
    loading: "lazy",
    readTime: 10,
  },
];

