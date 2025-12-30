import { useMemo } from "react";
import authorPic from "../../assets/images/Author-main-pic.jpg";
import { randomNumber } from "../../lib/utils";

export function BlogCard2({
  image = "https://cataas.com/cat",
  category = "Cat",
  title = "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
  description = "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
  author = "Thompson P.",
  date = "11 September 2024",
  src = authorPic,
}) {
  return (
    <article className="relative flex flex-col justify-between items-center mt-[5px] gap-[16px] w-[375px] h-[60vh] min-h-[400px] bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out cursor-pointer group border border-gray-100 hover:border-white-200 hover:-translate-y-3 min-[1280px]:w-[39vw] min-[1280px]:h-[600px] p-[20px] pb-[10px]">
      {/* Ambient Glow Effect - appears on hover */}
      <div className="absolute -inset-1 bg-linear-to-r from-white-500/20 via-white-300/10 to-white-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

      {/* Image Container */}
      <a
        href="#"
        className="relative w-[343px] min-[1024px]:w-full h-[64%] overflow-hidden rounded-2xl block group/image"
      >
        {/* Main Image */}
        <img
          className="w-[343px] min-[1024px]:w-full h-full min-[1024px]:h-[full] object-cover rounded-2xl transition-all duration-1000 ease-out group-hover:scale-105 object-[50%_25%]"
          src={image}
          alt={title}
          loading="lazy"
        />

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Shimmer Sweep Effect */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

        {/* Reading Time Badge - Top Left (show on hover) */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-4 h-4 text-[#1a1a1a]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span className="text-[#1a1a1a] text-xs font-semibold">
            {randomNumber(10)} min read
          </span>
        </div>

        {/* Category Badge - Top Right */}
        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide text-emerald-600 shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:bg-emerald-500 hover:text-white group-hover:scale-105 group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)] border border-emerald-100">
          {category}
        </span>
      </a>

      {/* Content Container */}
      <div className="flex flex-col box-border gap-3 relative">
        {/* Decorative Line */}
        {/* <div className="absolute -top-2 left-0 w-12 h-1 bg-linear-to-r from-emerald-500 to-emerald-500/1 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" /> */}

        {/* Title */}
        <a href="#" className="group/title">
          <h2 className="text-start font-bold text-xl leading-tight overflow-hidden line-clamp-2 text-gray-900 transition-colors duration-300 group-hover/title:text-emerald-600">
            {title}
          </h2>
        </a>

        {/* Description */}
        <p className="text-[#75716B] text-sm leading-relaxed line-clamp-2 h-[44px] transition-all duration-500 group-hover:text-[#43403B]">
          {description}
        </p>
      </div>

      {/* Author & Date Section */}
      <div className="relative flex items-center justify-between text-xs w-full">
        {/* Divider - Positioned above author section */}
        <div className="absolute -top-2 left-0 right-0 h-px bg-linear-to-r from-gray-100 via-gray-50 to-gray-100" />
        {/* Author Info */}
        <div className="flex items-center gap-2">
          {/* Author Image */}
          <div className="relative hover:scale-130 transition-transform duration-300">
            <img
              className="w-6 h-6 min-[1280px]:w-7 min-[1280px]:h-7 rounded-full object-cover ring-1 ring-gray-200 shadow-sm"
              src={src}
              alt={author}
            />
            {/* Verified Badge */}
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-[1.5px] border-white shadow-sm flex items-center justify-center">
              <svg
                className="w-2 h-2 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>

          {/* Author & Date Text - Same Line */}
          <div className="flex items-center gap-1.5">
            <span className="font-medium text-gray-900 text-[11px] min-[1280px]:text-xs hover:text-emerald-600 transition-colors duration-300">
              {author}
            </span>
            <span className="text-gray-300 text-[10px]">|</span>
            <span className="text-gray-500 text-[10px] min-[1280px]:text-[11px]">
              {date}
            </span>
          </div>
        </div>

        {/* Action Icons - Premium Style */}
        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          {/* Like Button */}
          <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-red-50 transition-all duration-300 hover:scale-110 group/like border border-transparent hover:border-red-200">
            <svg
              className="w-4 h-4 text-gray-500 group-hover/like:text-red-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>

          {/* Share Button */}
          <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-blue-50 transition-all duration-300 hover:scale-110 group/share border border-transparent hover:border-blue-200">
            <svg
              className="w-4 h-4 text-gray-500 group-hover/share:text-blue-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </button>

          {/* More Options */}
          <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-emerald-50 transition-all duration-300 hover:scale-110 group/more border border-transparent hover:border-emerald-200">
            <svg
              className="w-4 h-4 text-gray-500 group-hover/more:text-emerald-600 transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="12" cy="19" r="2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-linear-to-r from-emerald-400 via-emerald-600 to-emerald-400 rounded-full group-hover:w-1/2 transition-all duration-700" />
    </article>
  );
}
