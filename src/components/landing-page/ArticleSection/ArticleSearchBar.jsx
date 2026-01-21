import {
  SelectBar,
  ShimmerEffect,
  SparkleEffect,
  SearchBoxWithAutocomplete,
} from "@/components/common";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/constants/design";

/**
 * ArticleSearchBar - ส่วนการค้นหา & ป้ายหมวดหมู่ของ Blog
 * Parent: LandingPage
 * @param {string} searchQuery - ค่าที่ใช้ fetch blog list
 * @param {function} onSearchChange - function สำหรับกดปุ่ม search
 * @param {function} onKeyDown - function สำหรับกด Enter
 * @param {function} onSearchClick - function สำหรับกดปุ่ม search
 * @param {function} onClear - function สำหรับล้างค่า
 * @param {string} selectedCategory - ค่าที่ใช้ fetch blog list
 * @param {function} onCategoryChange - function สำหรับกดปุ่ม search
 * @param {array} suggestions - ค่าที่ใช้ fetch blog list
 * @param {boolean} isLoadingSuggestions - ค่าที่ใช้ fetch blog list
 * @param {boolean} showSuggestions - ค่าที่ใช้ fetch blog list
 * @param {function} onSelectSuggestion - function สำหรับกดปุ่ม search
 * @param {function} onSearchFocus - function สำหรับกดปุ่ม search
 * @param {function} onSearchBlur - function สำหรับกดปุ่ม search
 */

export default function ArticleSearchBar({
  id,
  searchQuery,
  onSearchChange,
  onKeyDown,
  onSearchClick,
  onClear,
  selectedCategory,
  onCategoryChange,
  suggestions = [],
  isLoadingSuggestions = false,
  showSuggestions = false,
  onSelectSuggestion,
  onSearchFocus,
  closeSuggestions,
}) {
  return (
    <section
      id={id}
      className="flex flex-col gap-[16px] py-[16px] min-[1280px]:px-[120px] min-[1280px]:h-[144px] group/section"
    >
      {/* หัวข้อของ Blog: Section Title with Sparkle Effect */}
      <h2 className="font-semibold text-[24px] leading-[32px] text-[#26231E] pl-[16px] min-[1280px]:pl-0 transition-all duration-500 group-hover/section:translate-x-1">
        Latest articles
        <SparkleEffect />
      </h2>

      {/* ส่วนการค้นหา & ป้ายหมวดหมู่ของ Blog: Filter Container */}
      <div className="relative flex flex-col gap-[16px] bg-[#EFEEEB] p-[38px] min-[1280px]:rounded-xl min-[1280px]:flex-row-reverse min-[1280px]:items-center min-[1280px]:gap-[16px] min-[1280px]:justify-between min-[1280px]:min-h-[80px] transition-all duration-500 hover:shadow-2xl min-[1280px]:hover:bg-linear-to-br min-[1280px]:hover:from-[#E8E6E3] min-[1280px]:hover:to-[#EFEEEB] border-2 border-transparent min-[1280px]:hover:border-[#DAD6D1]/50 overflow-visible">
        {/* สีภายในส่วนการค้นหา & ป้ายหมวดหมู่ของ Blog: Background Effects */}
        <div className="absolute inset-0 bg-linear-to-r from-[#12B279]/0 via-[#12B279]/5 to-[#12B279]/0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <ShimmerEffect className="group-hover/section:translate-x-full" />

        {/* กล่องค้นหาของ Blog: SearchBox with Autocomplete */}
        <div className="flex min-[1280px]:w-[360px] relative z-50">
          <SearchBoxWithAutocomplete
            value={searchQuery}
            onChange={onSearchChange}
            onKeyDown={onKeyDown}
            onSearchClick={onSearchClick}
            onClear={onClear}
            placeholder="Search by title..."
            suggestions={suggestions}
            isLoading={isLoadingSuggestions}
            showSuggestions={showSuggestions}
            onSelectSuggestion={onSelectSuggestion}
            onFocus={onSearchFocus}
            closeSuggestions={closeSuggestions}
          />
        </div>

        {/*Mobile กล่องเลือกหมวดหมู่ของ Blog: Category Select */}
        <MobileCategorySelect
          categories={CATEGORIES}
          value={selectedCategory}
          onCategoryChange={onCategoryChange}
        />

        {/*Desktop ป้ายหมวดหมู่ของ Blog: Category Buttons */}
        <DesktopCategoryButtons
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </section>
  );
}

// Sub-component: Mobile category selector
function MobileCategorySelect({ categories, value, onCategoryChange }) {
  const categoryLabels = categories.map((category) => category.label);
  const categoryMap = Object.fromEntries(
    categories.map((category) => [category.label, category.value])
  );

  const handleChange = (label) => {
    onCategoryChange(categoryMap[label]);
  };

  const selectedLabel =
    categories.find((cat) => cat.value === value)?.label || "Highlight (All)";

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
        items={categoryLabels}
        label="Category"
        value={selectedLabel}
        onValueChange={handleChange}
      />
    </div>
  );
}

// Sub-component: Desktop category buttons
function DesktopCategoryButtons({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <nav className="hidden min-[1280px]:flex min-[1280px]:items-center min-[1280px]:gap-[8px] relative z-10">
      {categories.map((category, index) => (
        <CategoryButton
          key={category.value}
          category={category.label}
          value={category.value}
          colors={category.colors}
          index={index}
          isSelected={selectedCategory === category.value}
          onClick={() => onCategoryChange(category.value)}
        />
      ))}
    </nav>
  );
}

// Sub-component: Individual category button
function CategoryButton({ category, colors, index, isSelected, onClick }) {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={`min-w-[70px] relative overflow-hidden font-medium text-[16px] leading-[24px] backdrop-blur-sm rounded-full h-[48px] px-5 transition-all duration-300 ease-out hover:scale-105 active:scale-95 hover:-translate-y-1 group/button  ${
        isSelected
          ? `${colors.active} ${colors.hoverText} shadow-lg`
          : `text-[#75716B] ${colors.hoverBg} ${colors.hoverText} ${colors.hoverShadow} hover:border-transparent`
      }`}
      style={{
        animationDelay: `${index * 100}ms`,
        transition: "all 0.3s ease-out",
      }}
    >
      {/* Shimmer effect on hover */}
      {!isSelected && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700" />
      )}

      <span className="relative z-10 flex items-center gap-[8px] transition-colors duration-300 hover:cursor-pointer">
        {category}
        {isSelected && (
          <span className={`inline-block w-[6px] h-[6px] ${colors.dotColor || "bg-gray-700"} rounded-full animate-pulse`} />
        )}
      </span>
    </Button>
  );
}
