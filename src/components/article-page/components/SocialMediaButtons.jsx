import facebookIcon from "@/assets/icons/f.svg";
import { LINKEDIN_IN_PATH } from "../constants";

export default function SocialMediaButtons({ onShare }) {
  return (
    <div className="flex items-center gap-2.5 lg:gap-1.5 xl:gap-2.5">
      {/* Facebook */}
      <button
        onClick={() => onShare("facebook")}
        className="flex items-center justify-center w-[48px] h-[48px] lg:w-9 lg:h-9 xl:w-[48px] xl:h-[48px] bg-[#1877f2] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Share on Facebook"
      >
        <img
          src={facebookIcon}
          alt="Facebook"
          className="w-5 h-6 lg:w-4 lg:h-5 xl:w-5 xl:h-7"
          aria-hidden="true"
        />
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => onShare("linkedin")}
        className="flex items-center justify-center w-[48px] h-[48px] lg:w-9 lg:h-9 xl:w-[48px] xl:h-[48px] bg-[#0a66c2] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Share on LinkedIn"
      >
        <svg
          className="w-8 h-8 lg:w-6 lg:h-6 xl:w-8 xl:h-8"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d={LINKEDIN_IN_PATH} fill="white" />
        </svg>
      </button>

      {/* Twitter */}
      <button
        onClick={() => onShare("twitter")}
        className="flex items-center justify-center w-[48px] h-[48px] lg:w-9 lg:h-9 xl:w-[48px] xl:h-[48px] bg-[#1da1f2] rounded-full cursor-pointer transition-transform duration-200 hover:scale-110 hover:shadow-lg"
        aria-label="Share on Twitter"
      >
        <svg
          className="w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </button>
    </div>
  );
}

