import { SearchBox } from "../../common/SearchBox";
import { SelectBar } from "../../common/SelectBar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/Button";

export default function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  return (
    <section className="flex flex-col gap-[16px] py-[16px] min-[1280px]:px-[120px] min-[1280px]:h-[144px] group/section">
      <h2 className="font-semibold text-[24px] leading-[32px] text-[#26231E] pl-[16px] min-[1280px]:pl-0 transition-all duration-500  group-hover/section:translate-x-1">
        Latest articles
        <span className="inline-flex items-center ml-2 opacity-0 group-hover/section:opacity-100 transition-all duration-700 group-hover/section:translate-x-1 relative w-8 h-8">
          {/* Main Sparkle Star - Luxury Gold */}
          <svg
            className="w-5 h-5 text-[#FFD700] animate-spin-slow absolute top-0 left-0 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>

          {/* Second Sparkle - Black with Gold Glow */}
          <svg
            className="w-4 h-6 text-[#fff130] animate-ping absolute top-0 left-8 delay-100 drop-shadow-[0_0_8px_rgba(255,215,0,1)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
          </svg>

          {/* Third Sparkle - Bright Gold Dot */}
          <svg
            className="w-2 h-2 text-[#636363] animate-pulse absolute bottom-0.5 left-2 drop-shadow-[0_0_6px_rgba(255,215,0,1)]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>

          {/* Glowing Particles - Black & Gold Luxury */}
          <span className="absolute top-4 left-4 w-1 h-1 bg-[#fff130] rounded-full animate-ping delay-200 shadow-[0_0_8px_rgba(255,215,0,1)] ring-1 ring-[#FFD700]"></span>
          <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping delay-300 shadow-[0_0_10px_rgba(255,215,0,1)]"></span>
          <span className="absolute top-2 right-1 w-1 h-1 bg-[#1a1a1a] rounded-full animate-bounce delay-150 shadow-[0_0_6px_rgba(255,215,0,0.8)] ring-1 ring-[#C9A961]"></span>
        </span>
      </h2>
      <div className="relative flex flex-col gap-[16px] bg-[#EFEEEB] p-[38px] min-[1280px]:rounded-xl min-[1280px]:flex-row-reverse min-[1280px]:items-center min-[1280px]:gap-[16px] min-[1280px]:justify-between min-[1280px]:h-[80px] transition-all duration-500 hover:shadow-2xl min-[1280px]:hover:bg-linear-to-br min-[1280px]:hover:from-[#E8E6E3] min-[1280px]:hover:to-[#EFEEEB] min-[1280px]:hover:scale-[1.01] overflow-hidden border-2 border-transparent min-[1280px]:hover:border-[#DAD6D1]/50">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#12B279]/0 via-[#12B279]/5 to-[#12B279]/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover/section:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

        {/* SearchBox */}
        <div className="flex min-[1280px]:w-[360px] relative z-10">
          <SearchBox />
        </div>
        {/* Mobile: SelectBar */}
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
        {/* Desktop: Category Buttons */}
        <div className="hidden min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-[8px] relative z-10">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant="ghost"
              className="min-w-[70px] relative overflow-hidden font-medium text-[16px] leading-[24px] text-[#75716B] backdrop-blur-sm hover:bg-white hover:text-[#26231E] hover:border-gray-200 hover:shadow-xl rounded-[10px] h-[48px] px-4 transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:-translate-y-1 group/button"
              style={{
                animationDelay: `${index * 100}ms`,
                transition: "all 0.3s ease-out",
              }}
            >
              {/* Button Background on Hover - White */}
              <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-100 transition-opacity duration-300 rounded-[10px]"></span>

              {/* Sparkle Effect */}
              {/* <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover/button:opacity-100 group-hover/button:animate-ping shadow-[0_0_6px_rgba(16,185,129,0.8)]"></span> */}

              <span className="relative z-10 transition-colors duration-300 hover:cursor-pointer">
                {category}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
