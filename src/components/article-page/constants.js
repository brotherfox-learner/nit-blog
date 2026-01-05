// Category color configurations
export const CATEGORY_COLORS = {
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

// Social media share URLs
export const SHARE_URLS = {
  facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  linkedin: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  twitter: (url, text) => `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
};

// LinkedIn "in" SVG path
export const LINKEDIN_IN_PATH = "M14.3067 40.89H7.09V17.9667H14.3067V40.89ZM10.6933 14.79C9.87473 14.7854 9.07583 14.5384 8.39747 14.0802C7.71911 13.622 7.19168 12.9731 6.88175 12.2154C6.57183 11.4577 6.4933 10.6252 6.65606 9.82291C6.81883 9.02063 7.2156 8.28455 7.79631 7.70756C8.37702 7.13057 9.11563 6.73853 9.91893 6.58092C10.7222 6.42331 11.5542 6.50719 12.3099 6.82197C13.0656 7.13675 13.7111 7.66833 14.1649 8.34962C14.6188 9.03092 14.8606 9.83138 14.86 10.65C14.8677 11.1981 14.765 11.7421 14.558 12.2496C14.351 12.7571 14.044 13.2178 13.6551 13.6041C13.2663 13.9905 12.8037 14.2946 12.2948 14.4983C11.786 14.702 11.2413 14.8012 10.6933 14.79ZM40.9067 40.91H33.6933V28.3867C33.6933 24.6933 32.1233 23.5533 30.0967 23.5533C27.9567 23.5533 25.8567 25.1667 25.8567 28.48V40.91H18.64V17.9833H25.58V21.16H25.6733C26.37 19.75 28.81 17.34 32.5333 17.34C36.56 17.34 40.91 19.73 40.91 26.73L40.9067 40.91Z";

