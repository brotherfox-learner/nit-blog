/**
 * Footer Component - Layout Level
 * Re-exports from landing-page for use in App.jsx
 */

import { SocialIcon } from "@/components/common";

export default function Footer({ onLike, onUnlike }) {
  return (
    <footer className="font-medium flex flex-col items-center justify-between gap-[24px] mt-[48px] py-[40px] bg-[#EFEEEB] min-lg:flex-row min-lg:justify-between min-lg:items-center min-lg:px-[120px] min-lg:py-[60px]">
      <div className="flex items-center gap-6">
        <a
          href="#"
          className="font-medium text-[#43403B] cursor-pointer transition-all duration-300 hover:text-[#26231E] hover:scale-105 active:scale-95 relative group"
        >
          Get in touch
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#26231E] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <div className="flex items-center gap-[16px]">
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-[#43403B] flex items-center justify-center transition-all duration-300 hover:bg-[#26231E] hover:scale-110 active:scale-95"
            aria-label="LinkedIn"
          >
            <SocialIcon
              type="linkedin"
              size={24}
              className="text-white transition-transform duration-300"
            />
          </a>
          <a
            href="https://github.com/brotherfox-learner/nit-blog"
            target="_blank"
            className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#DAD6D1] hover:scale-110 active:scale-95"
            aria-label="GitHub"
          >
            <SocialIcon
              type="github"
              size={24}
              className="text-[#43403B] transition-colors duration-300 hover:text-[#26231E]"
            />
          </a>
          <a
            href="#"
            className="w-6 h-6 rounded-full bg-[#43403B] flex items-center justify-center transition-all duration-300 hover:bg-[#26231E] hover:scale-110 active:scale-95"
            aria-label="Google"
          >
            <SocialIcon
              type="google"
              size={24}
              className="text-white transition-transform duration-300"
            />
          </a>
        </div>
      </div>
      <a
        href="/"
        className="font-medium text-center max-[375px]:mt-6 mt-0 underline cursor-pointer transition-all duration-300 hover:text-[#26231E] hover:scale-105 active:scale-95 relative group decoration-[#43403B] hover:decoration-[#26231E]"
      >
        Home page
      </a>
    </footer>
  );
}

