import { useState } from "react";
import facebookIcon from "../../assets/icons/f.svg";

export default function SocialShare({ reactions = 321, rounded }) {
  const [copied, setCopied] = useState(false);
  const [reactionCount, setReactionCount] = useState(reactions);
  const [hasReacted, setHasReacted] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleReaction = () => {
    if (hasReacted) {
      setReactionCount((prev) => prev - 1);
    } else {
      setReactionCount((prev) => prev + 1);
    }
    setHasReacted(!hasReacted);
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this article!");
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      className={`bg-[#EFEEEB] flex flex-col justify-center items-center md:flex-row gap-4 lg:gap-4 xl:gap-4 py-6 lg:py-4 xl:py-6 font-poppins box-border px-[10px] md:px-10 lg:px-4 xl:px-10 ${
        rounded ? "rounded-[32px]" : ""
      }`}
      aria-label="Social sharing options"
    >
      {/* Reactions Counter */}
      <button
        onClick={handleReaction}
        className={`flex max-lg:w-[343px] lg:max-w-[17vw] xl:max-w-[20vw] lg:w-[25vw] items-center justify-center gap-2.5 lg:gap-1.5 xl:gap-2.5 px-6 lg:px-4 xl:px-6 py-3.5 lg:py-2.5 xl:py-3.5 bg-white border rounded-full cursor-pointer transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 ${
          hasReacted ? "border-amber-400 bg-amber-50" : "border-neutral-200"
        }`}
        aria-label={`${reactionCount} reactions. Click to ${
          hasReacted ? "remove" : "add"
        } your reaction`}
      >
        <svg
          className={`w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ${
            hasReacted ? "text-amber-500" : "text-neutral-600"
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
          <path
            d="M8 14s1.5 2 4 2 4-2 4-2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-lg lg:text-base xl:text-lg font-medium text-neutral-700">
          {reactionCount}
        </span>
      </button>

      {/* Share Actions */}
      <div className="min-w-[343px] lg:min-w-0 flex flex-row justify-between items-center gap-2 lg:gap-4 xl:gap-4 bg-[#EFEEEB]">
        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-2 lg:gap-1 xl:gap-2 px-5 lg:px-3 xl:px-5 h-[48px] lg:h-9 xl:h-[48px] bg-white border border-neutral-200 rounded-full cursor-pointer font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 whitespace-nowrap text-base lg:text-sm xl:text-base box-border"
          aria-label={copied ? "Link copied!" : "Copy link to clipboard"}
        >
          <svg
            className="w-[18px] h-[18px] lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] text-neutral-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>{copied ? "Copied!" : "Copy link"}</span>
        </button>

        {/* Social Media Buttons */}
        <div className="flex items-center gap-2.5 lg:gap-1.5 xl:gap-2.5">
          {/* Facebook */}
          <button
            onClick={shareOnFacebook}
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
            onClick={shareOnLinkedIn}
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
              {/* Letter "in" only - extracted from original SVG */}
              <path
                d="M14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z"
                fill="white"
              />
            </svg>
          </button>

          {/* Twitter */}
          <button
            onClick={shareOnTwitter}
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
      </div>
    </section>
  );
}
