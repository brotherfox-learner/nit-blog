/**
 * BlogCard2 Component - Refactored
 * Following DRY - uses reusable components
 * High Cohesion - focused on blog card presentation
 * Loose Coupling - depends on abstractions (props), not implementations
 */

import { cn } from "@/lib/utils";
import { randomNumber } from "@/lib/utils";
import authorPic from "@/assets/images/Author-main-pic.jpg";

// Reusable components
import {
  CategoryBadge,
  ReadTimeBadge,
  AuthorInfo,
  ActionButtonGroup,
  ShimmerEffect,
  GradientOverlay,
  AmbientGlow,
  AccentLine,
  Divider,
} from "@/components/common";

// Default values - could be moved to constants
import { BLOG_DEFAULTS } from "@/constants/design";

export function BlogCard2({
  image = BLOG_DEFAULTS.image,
  category = BLOG_DEFAULTS.category,
  title = BLOG_DEFAULTS.title,
  description = BLOG_DEFAULTS.description,
  author = BLOG_DEFAULTS.author,
  date = BLOG_DEFAULTS.date,
  src = authorPic,
  loading = BLOG_DEFAULTS.loading,
  readTime = BLOG_DEFAULTS.readTime,
  className = "",
}) {
  return (
    <article
      className={cn(
        // Layout
        "relative flex flex-col justify-between items-center",
        "w-[375px] h-[60vh] min-h-[400px]",
        "min-[1280px]:w-[39vw] min-[1280px]:h-[600px]",
        // Spacing
        "mt-[5px] gap-[16px] p-[20px] pb-[10px]",
        // Appearance
        "bg-white rounded-3xl overflow-hidden",
        "border border-gray-100 hover:border-white-200",
        // Effects
        "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
        "hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]",
        "hover:-translate-y-3",
        // Animation
        "transition-all duration-700 ease-out",
        "cursor-pointer group",
        className=""
      )}
    >
      {/*สีภายใน Card: Ambient Glow Effect */}
      <AmbientGlow color="white" />

      {/* Nav link ไปยัง Blog Post : Image Container */}
      <a
        href="#"
        className="relative w-[343px] min-[1024px]:w-full h-[64%] overflow-hidden rounded-2xl block group/image"
      >
        {/* รูปภาพหลักภายใน Card: Main Image */}
        <img
          className="w-[343px] min-[1024px]:w-full h-full object-cover rounded-2xl transition-all duration-1000 ease-out group-hover:scale-105 object-[50%_25%]"
          src={image}
          alt={title}
          loading={loading}
        />

        {/* Hover Effects */}
        <GradientOverlay />
        <ShimmerEffect />

        {/* ป้ายเวลาประมาณในการอ่าน Blog: Reading Time Badge - Top Left (show on hover) */}
        <div className="absolute top-2 left-2">
          <ReadTimeBadge minutes={readTime} showOnHover={true} />
        </div>

        {/* ป้ายหมวดหมู่ของ Blog: Category Badge - Top Right */}
        <div className="absolute top-4 right-4">
          <CategoryBadge category={category} />
        </div>
      </a>

      {/* ส่วนเนื้อหาของ Blog: Content Container */}
      <section className="flex flex-col box-border gap-3 relative w-full">
        {/* หัวข้อของ Blog: Title */}
        <a href="#" className="group/title">
          <h2 className="text-start font-bold text-xl leading-tight overflow-hidden line-clamp-2 text-gray-900 transition-colors duration-300 group-hover/title:text-emerald-600">
            {title}
          </h2>
        </a>

        {/* เนื้อหาย่อของ Blog: Description */}
        <p className="text-[#75716B] text-sm leading-relaxed line-clamp-2 h-[44px] transition-all duration-500 group-hover:text-[#43403B]">
          {description}
        </p>
      </section>

      {/* ส่วนผู้เขียน & วันที่ของ Blog: Author & Date Section */}
      <footer className="relative flex items-center justify-between text-xs w-full">
        {/* Divider - Positioned above author section */}
        <Divider className="absolute -top-2 left-0 right-0" />

        {/* ข้อมูลผู้เขียนของ Blog: Author Info */}
        <AuthorInfo
          author={author}
          date={date}
          imageSrc={src}
          size="sm"
          showVerified={true}
          layout="inline"
        />

        {/* ปุ่มการดำเนินการของ Blog: Action Buttons */}
        <ActionButtonGroup
          actions={["like", "share", "more"]}
          size="md"
          showOnHover={true}
        />
      </footer>

      {/* Bottom Accent Line */}
      <AccentLine color="emerald" />
    </article>
  );
}
