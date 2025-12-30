/**
 * Reusable Author Info Component
 * Following High Cohesion - author-related UI in one component
 * DRY - used across all blog cards
 */

import { cn } from "@/lib/utils";
import { CheckIcon } from "./icons";

const AUTHOR_SIZES = {
  sm: {
    image: "w-6 h-6",
    badge: "w-3 h-3",
    badgeIcon: "w-2 h-2",
    name: "text-[11px]",
    date: "text-[10px]",
    separator: "text-[10px]",
    gap: "gap-1.5",
  },
  md: {
    image: "w-8 h-8",
    badge: "w-4 h-4",
    badgeIcon: "w-2.5 h-2.5",
    name: "text-sm",
    date: "text-xs",
    separator: "text-xs",
    gap: "gap-2",
  },
  lg: {
    image: "w-10 h-10",
    badge: "w-5 h-5",
    badgeIcon: "w-3 h-3",
    name: "text-base",
    date: "text-sm",
    separator: "text-sm",
    gap: "gap-3",
  },
};

export function AuthorInfo({
  author,
  date,
  imageSrc,
  size = "sm",
  showVerified = true,
  layout = "inline", // 'inline' | 'stacked'
  className = "",
}) {
  const sizeStyles = AUTHOR_SIZES[size] || AUTHOR_SIZES.sm;

  return (
    <div className={cn("flex items-center", sizeStyles.gap, className)}>
      {/* รูปภาพผู้เขียนของ Blog: Author Image */}
      <div className="relative hover:scale-110 transition-transform duration-300">
        <img
          className={cn(
            sizeStyles.image,
            "rounded-full object-cover ring-1 ring-gray-200 shadow-sm"
          )}
          src={imageSrc}
          alt={author}
        />
        {showVerified && (
          <span
            className={cn(
              sizeStyles.badge,
              "absolute -bottom-0.5 -right-0.5 bg-emerald-500 rounded-full border-[1.5px] border-white shadow-sm flex items-center justify-center"
            )}
          >
            <CheckIcon className={cn(sizeStyles.badgeIcon, "text-white")} />
          </span>
        )}
      </div>

      {/* ข้อมูลผู้เขียน & วันที่ของ Blog: Author & Date Text */}
      {layout === "inline" ? (
        <div className={cn("flex items-center", sizeStyles.gap)}>
          <span
            className={cn(
              sizeStyles.name,
              "font-medium text-gray-900 hover:text-emerald-600 transition-colors duration-300"
            )}
          >
            {author}
          </span>
          <span className={cn(sizeStyles.separator, "text-gray-300")}>|</span>
          <span className={cn(sizeStyles.date, "text-gray-500")}>{date}</span>
        </div>
      ) : (
        <div className="flex flex-col gap-0.5">
          <span
            className={cn(
              sizeStyles.name,
              "font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600"
            )}
          >
            {author}
          </span>
          <span className={cn(sizeStyles.date, "text-gray-500 tracking-wide")}>
            {date}
          </span>
        </div>
      )}
    </div>
  );
}
