/**
 * ArticleSection Component - Refactored
 * Following DRY - uses reusable effects
 * High Cohesion - focused on article filtering UI
 */

import {
  SearchBox,
  SelectBar,
  ShimmerEffect,
  SparkleEffect,
} from "@/components/common";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";

// Category data - could be moved to constants or fetched from API
const CATEGORIES = ["Working", "Lifestyle", "Tech", "Travel","Education","Nature"];

export default function ArticleSection() {
  return (
    <section className="flex flex-col gap-[16px] py-[16px] min-[1280px]:px-[120px] min-[1280px]:h-[144px] group/section">
      {/* หัวข้อของ Blog: Section Title with Sparkle Effect */}
      <h2 className="font-semibold text-[24px] leading-[32px] text-[#26231E] pl-[16px] min-[1280px]:pl-0 transition-all duration-500 group-hover/section:translate-x-1">
        Latest articles
        <SparkleEffect />
      </h2>

      {/* ส่วนการค้นหา & ป้ายหมวดหมู่ของ Blog: Filter Container */}
      <div className="relative flex flex-col gap-[16px] bg-[#EFEEEB] p-[38px] min-[1280px]:rounded-xl min-[1280px]:flex-row-reverse min-[1280px]:items-center min-[1280px]:gap-[16px] min-[1280px]:justify-between min-[1280px]:h-[80px] transition-all duration-500 hover:shadow-2xl min-[1280px]:hover:bg-linear-to-br min-[1280px]:hover:from-[#E8E6E3] min-[1280px]:hover:to-[#EFEEEB] min-[1280px]:hover:scale-[1.01] overflow-hidden border-2 border-transparent min-[1280px]:hover:border-[#DAD6D1]/50">
        {/* สีภายในส่วนการค้นหา & ป้ายหมวดหมู่ของ Blog: Background Effects */}
        <div className="absolute inset-0 bg-linear-to-r from-[#12B279]/0 via-[#12B279]/5 to-[#12B279]/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <ShimmerEffect className="group-hover/section:translate-x-full" />

        {/* กล่องค้นหาของ Blog: SearchBox */}
        <div className="flex min-[1280px]:w-[360px] relative z-10">
          <SearchBox />
        </div>

        {/*Mobile กล่องเลือกหมวดหมู่ของ Blog: Category Select */}
        <MobileCategorySelect categories={CATEGORIES} />

        {/*Desktop ป้ายหมวดหมู่ของ Blog: Category Buttons */}
        <DesktopCategoryButtons categories={CATEGORIES} />
      </div>
    </section>
  );
}

// Sub-component: Mobile category selector
function MobileCategorySelect({ categories }) {
  return (
    <div className="flex flex-col gap-[4px] min-[1280px]:hidden relative z-10">
      <Label
        htmlFor="category"
        className="font-medium text-[14px] leading-[20px] text-[#75716B] transition-colors duration-300 group-hover/section:text-[#43403B]"
      >
        Category
      </Label>
      <SelectBar
        className="text-[#75716B]"
        placeholder="Highlight"
        id="category"
        items={categories}
        label="Category"
      />
    </div>
  );
}

// Sub-component: Desktop category buttons
function DesktopCategoryButtons({ categories }) {
  return (
    <nav className="hidden min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-[8px] relative z-10">
      {categories.map((category, index) => (
        <CategoryButton key={category} category={category} index={index} />
      ))}
    </nav>
  );
}

// Sub-component: Individual category button
function CategoryButton({ category, index }) {
  return (
    <Button
      variant="ghost"
      className="min-w-[70px] relative overflow-hidden font-medium text-[16px] leading-[24px] text-[#75716B] backdrop-blur-sm hover:bg-white hover:text-[#26231E] hover:border-gray-200 hover:shadow-xl rounded-[10px] h-[48px] px-4 transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:-translate-y-1 group/button"
      style={{
        animationDelay: `${index * 100}ms`,
        transition: "all 0.3s ease-out",
      }}
    >
      {/* Button Background on Hover */}
      <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded-[10px]" />

      <span className="relative z-10 transition-colors duration-300 hover:cursor-pointer">
        {category}
      </span>
    </Button>
  );
}
