import { SocialIcon } from "@/components/common";

export default function Footer() {
  return (
    <footer className="font-medium flex flex-col items-center justify-center mt-[48px] py-[40px] bg-[#EFEEEB] min-[1440px]:flex-row min-[1440px]:justify-between min-[1440px]:items-center min-[1440px]:px-[120px] min-[1440px]:py-[60px]">
      <div className="flex items-center gap-6">
        <div className="font-medium text-[#43403B] cursor-pointer transition-colors duration-300 hover:text-[#26231E]">
          Get in touch
        </div>
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
            href="#"
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
        href="#"
        className="font-medium text-center max-[375px]:mt-6 mt-0 underline cursor-pointer transition-colors duration-300 hover:text-[#26231E]"
      >
        Home page
      </a>
    </footer>
  );
}
