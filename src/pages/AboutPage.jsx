import { NavBar, Footer } from "../components/layout";
import { BookOpen, Lightbulb, Code, Target, Rocket, Heart } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    number: "01",
    title: "What This Blog Is About",
    paragraphs: [
      "This is a small space for thinking, building, and growing.",
      "Here, I write about ideas on life, productivity, and personal growth — along with lessons learned from coding, problem-solving, and creating real projects.",
    ],
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Why I Started Writing",
    paragraphs: [
      "I started writing because thinking alone is not enough.",
      "Writing forces clarity. It turns vague thoughts into structured ideas. This blog is both a laboratory for refining my thinking and a platform for sharing what I learn along the way.",
    ],
  },
  {
    icon: Target,
    number: "03",
    title: "What You'll Find Here",
    list: [
      "Reflections on mindset and self-development",
      "Lessons from building projects and solving problems",
      "Thoughts on coding and structured thinking",
      "Practical insights rather than motivational noise",
    ],
  },
  {
    icon: Code,
    number: "04",
    title: "My Approach",
    paragraphs: ["I believe in:"],
    list: [
      "Long-term growth over short-term hype",
      "Systems over motivation",
      "Depth over speed",
      "Learning by building",
    ],
    closing: "Most articles aim to connect theory with real-world application.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "An Invitation",
    paragraphs: [
      "If you're someone who is building something — a skill, a career, a product, or a better version of yourself — you're in the right place.",
      "I hope something here helps you think more clearly and move forward with confidence.",
    ],
  },
  {
    icon: Heart,
    number: "06",
    title: "Why This Blog Exists",
    paragraphs: [
      "This blog started as my first blog-app project — a place to practice building, writing, and thinking in public.",
      "Instead of learning silently, I decided to document the journey.",
      "Some posts are experiments. Some are structured lessons. All of them are part of the process.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#F9F8F6] min-h-screen">
      <NavBar />

      <main className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
        {/* Hero */}
        <header className="text-center mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-[#75716B] mb-4">
            About
          </p>
          <h1 className="font-poppins text-4xl sm:text-5xl font-bold text-[#26231E] leading-tight mb-6">
            A space for thinking,
            <br />
            building &amp; growing.
          </h1>
          <div className="w-16 h-1 bg-[#26231E] mx-auto rounded-full" />
        </header>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article key={section.number} className="group">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#EFEEEB] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#26231E]">
                    <Icon
                      size={22}
                      className="text-[#43403B] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-widest text-[#75716B] uppercase">
                      {section.number}
                    </span>
                    <h2 className="font-poppins text-xl sm:text-2xl font-bold text-[#26231E]">
                      {section.title}
                    </h2>
                  </div>
                </div>

                {/* Content */}
                <div className="pl-16 space-y-4">
                  {section.paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="font-poppins text-base sm:text-lg text-[#43403B] leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#26231E] shrink-0" />
                          <span className="font-poppins text-base sm:text-lg text-[#43403B] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.closing && (
                    <p className="font-poppins text-base sm:text-lg text-[#43403B] leading-relaxed pt-2">
                      {section.closing}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing divider */}
        <div className="flex items-center justify-center gap-3 mt-20">
          <div className="w-12 h-px bg-[#DAD6D1]" />
          <span className="text-[#75716B] text-sm">Thanks for reading</span>
          <div className="w-12 h-px bg-[#DAD6D1]" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
