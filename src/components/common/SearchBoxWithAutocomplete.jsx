import { useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, Loader2, X } from "lucide-react";
import { CategoryBadge } from "./Badge";

/**
 * SearchBoxWithAutocomplete - Search box พร้อม autocomplete dropdown
 * Parent: ArticleSearchBar
 */
export function SearchBoxWithAutocomplete({
  value,
  onChange,
  onKeyDown,
  onSearchClick,
  onClear,
  placeholder = "Search by title...",
  suggestions = [],
  isLoading = false,
  showSuggestions = false,
  onSelectSuggestion,
  onFocus,
  closeSuggestions,
}) {
  const wrapperRef = useRef(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        closeSuggestions?.();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSuggestions]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          className={`rounded-[8px] bg-white placeholder:font-medium font-poppins placeholder:text-[14px] min-[768px]:placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-[#75716B] min-[1280px]:h-[48px] ${
            value.trim() ? "pr-20" : "pr-10"
          }`}
        />
        
        {/* Clear Button - แสดงเมื่อมีค่า */}
        {value.trim() && !isLoading && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-[#75716B] hover:text-[#26231E] transition-colors cursor-pointer z-10"
            aria-label="Clear search"
          >
            <X className="size-4 hover:text-red-500" />
          </button>
        )}
        
        {/* Search Button / Loading */}
        {isLoading ? (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[#43403B] animate-spin" />
        ) : (
          <button
            type="button"
            onClick={onSearchClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#43403B] hover:text-[#26231E] transition-colors cursor-pointer z-10"
            aria-label="Search"
          >
            <Search className="size-4" />
          </button>
        )}
      </div>

      {/* Autocomplete Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#DAD6D1] rounded-lg shadow-2xl max-h-[300px] overflow-y-auto z-[9999]">
          {suggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <button
                type="button"
                onClick={() => onSelectSuggestion(suggestion)}
                className="w-full px-4 py-3 text-left hover:bg-[#F5F5F5] transition-colors duration-150 flex items-start gap-3 border-b border-[#EFEEEB] last:border-b-0"
              >
                {/* Thumbnail */}
                <img
                  src={suggestion.image}
                  alt=""
                  className="w-14 h-14    rounded-md object-cover shrink-0"
                />
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-[#26231E] line-clamp-1">
                    {suggestion.title}
                  </p>
                  <p className="text-[12px] text-[#75716B] line-clamp-1 mt-0.5">
                    {suggestion.description}
                  </p>
                  <span >
                    <CategoryBadge className="inline-block mt-1 px-2 py-0.5  text-[10px] font-medium rounded-full" category={suggestion.category} />
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* No Results */}
      {showSuggestions && value.trim() && suggestions.length === 0 && !isLoading && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#DAD6D1] rounded-lg shadow-2xl p-4 z-9999">
          <p className="text-[14px] text-[#75716B] text-center">
            No articles found for "{value}"
          </p>
        </div>
      )}
    </div>
  );
}
