import authorPic from "../../assets/images/Author-main-pic.jpg";
import { randomViewCount } from "../../lib/utils";

export function BlogCard2({
  image = "https://cataas.com/cat",
  category = "Cat",
  title = "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
  description = "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
  author = "Thompson P.",
  date = "11 September 2024",
  src = authorPic,
  viewCount = randomViewCount,
}) {
  return (
    <article className="flex flex-col justify-center mt-[5px] gap-[16px] w-[375px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-gray-100 hover:-translate-y-2 min-[1280px]:w-[39vw] min-[1280px]:h-[582px] p-[20px]">
      {/* Image Container */}
      <a
        href="#"
        className="relative w-[343px] min-[1024px]:w-full h-[68%] overflow-hidden rounded-xl block group/image"
      >
        <img
          className="w-[343px] min-[1024px]:w-full h-[212px] min-[1024px]:h-full object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-95 object-[50%_25%]"
          src={image}
          alt={title}
          loading="lazy"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge - Floating on Image */}
        <span className="absolute top-4 left-4 bg-white/98 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-emerald-600 shadow-xl transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105 group-hover:shadow-2xl">
          {category}
        </span>

        {/* Bookmark Indicator */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4 hover:bg-white-500 hover:scale-110 ">
          <svg
            className="w-6 text-gray-800  transition-colors duration-300 hover:text-emerald-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </div>

        {/* View Count Badge */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fillRule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-white text-xs font-semibold">
            {viewCount()}
          </span>
        </div>
      </a>

      {/* Content Container */}
      <div className="flex flex-col box-border gap-2">
        {/* Title */}
        <a href="#" className="group/title">
          <h2 className="text-start font-bold text-xl leading-tight mb-2 overflow-hidden line-clamp-2 text-gray-900 transition-all duration-300 group-hover/title:text-emerald-600">
            {title}
          </h2>
        </a>
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 h-[44px] transition-colors duration-300 group-hover:text-gray-800">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent" />

      {/* Author & Date */}
      <div className="flex items-center justify-between gap-[5px] text-sm">
        {/* Author Info */}
        <div className="flex items-center gap-2">
          {/* Author Image with Ring */}
          <div className="relative group/avatar">
            <img
              className="min-[1280px]:w-8 min-[1280px]:h-8 w-6 h-6 rounded-full object-cover ring-2 ring-gray-200 transition-all duration-300 group-hover:ring-emerald-100 group-hover:ring-4 group-hover:scale-110 shadow-sm"
              src={src}
              alt={author}
            />
            {/* Online Status Indicator */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm" />
          </div>

          {/* Author & Date Text */}
          <div className="flex flex-row items-center gap-[8px] min-w-0 flex-1">
            <span className="font-medium text-[#43403B] transition-colors duration-300 group-hover:text-emerald-600 text-[12px] min-[1280px]:text-xs whitespace-nowrap">
              {author}
            </span>
            <span className="text-gray-300 shrink-0 text-[10px] min-[1280px]:text-xs">|</span>
            <span className="text-gray-500 text-[12px] min-[1280px]:text-xs transition-colors duration-300 group-hover:text-gray-700 whitespace-nowrap">
              {date}
            </span>
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Like Button */}
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50 transition-all duration-200 hover:scale-110">
            <svg
              className="w-4 h-4 text-gray-600 hover:text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Share Button */}
          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-50 transition-all duration-200 hover:scale-110">
            <svg
              className="w-4 h-4 text-gray-600 hover:text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
