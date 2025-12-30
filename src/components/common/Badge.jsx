import { cn } from "@/lib/utils";

const BADGE_VARIANTS = {
  category: {
    base: "bg-white/95 backdrop-blur-xl text-emerald-600 border border-emerald-100",
    hover: "hover:bg-emerald-500 hover:text-white group-hover:scale-105",
  },
  categoryAlt: {
    base: "bg-[#D7F2E9] text-[#12B279]",
    hover: "hover:bg-[#C4E8D8]",
  },
  readTime: {
    base: "bg-white/95 backdrop-blur-xl text-[#1a1a1a]",
    hover: "",
  },
  dark: {
    base: "bg-black/60 backdrop-blur-xl text-white border border-white/10",
    hover: "",
  },
};

const BADGE_SIZES = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-[13px]",
};

export function Badge({
  children,
  variant = "category",
  size = "md",
  className = "",
  showOnHover = false,
  ...props
}) {
  const variantStyles = BADGE_VARIANTS[variant] || BADGE_VARIANTS.category;
  const sizeStyles = BADGE_SIZES[size] || BADGE_SIZES.md;

  return (
    <span
      className={cn(
        "rounded-full font-semibold shadow-lg transition-all duration-300",
        sizeStyles,
        variantStyles.base,
        variantStyles.hover,
        showOnHover && "opacity-0 group-hover:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

// Specialized category badge with tracking
export function CategoryBadge({ category, className = "", ...props }) {
  return (
    <Badge
      variant="category"
      size="lg"
      className={cn("tracking-wide shadow-[0_4px_15px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]", className)}
      {...props}
    >
      {category}
    </Badge>
  );
}

// Reading time badge with clock icon
export function ReadTimeBadge({ minutes = 10, showOnHover = true, className = "" }) {
  return (
    <Badge
      variant="readTime"
      size="md"
      showOnHover={showOnHover}
      className={cn("flex items-center gap-2", className)}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
      <span className="font-semibold">{minutes} min read</span>
    </Badge>
  );
}

