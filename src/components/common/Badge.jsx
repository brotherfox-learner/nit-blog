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

// Category-specific color mappings
const CATEGORY_COLORS = {
  Working: {
    text: "text-amber-600",
    border: "border-amber-200",
    bg: "bg-amber-50/95",
    hoverBg: "hover:bg-amber-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(245,158,11,0.4)]",
  },
  Lifestyle: {
    text: "text-pink-600",
    border: "border-pink-200",
    bg: "bg-pink-50/95",
    hoverBg: "hover:bg-pink-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(236,72,153,0.4)]",
  },
  Tech: {
    text: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50/95",
    hoverBg: "hover:bg-blue-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)]",
  },
  Travel: {
    text: "text-cyan-600",
    border: "border-cyan-200",
    bg: "bg-cyan-50/95",
    hoverBg: "hover:bg-cyan-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(6,182,212,0.4)]",
  },
  Education: {
    text: "text-violet-600",
    border: "border-violet-200",
    bg: "bg-violet-50/95",
    hoverBg: "hover:bg-violet-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(139,92,246,0.4)]",
  },
  Nature: {
    text: "text-emerald-600",
    border: "border-emerald-200",
    bg: "bg-emerald-50/95",
    hoverBg: "hover:bg-emerald-500",
    shadow: "group-hover:shadow-[0_8px_25px_rgba(16,185,129,0.4)]",
  },
};

// Default fallback colors
const DEFAULT_CATEGORY_COLOR = {
  text: "text-gray-600",
  border: "border-gray-200",
  bg: "bg-gray-50/95",
  hoverBg: "hover:bg-gray-500",
  shadow: "group-hover:shadow-[0_8px_25px_rgba(107,114,128,0.4)]",
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

// Specialized category badge with unique colors per category
export function CategoryBadge({ category, className = "", ...props }) {
  const colors = CATEGORY_COLORS[category] || DEFAULT_CATEGORY_COLOR;

  return (
    <span
      className={cn(
        // Base styles
        "rounded-full font-semibold shadow-lg transition-all duration-300",
        "px-5 py-2.5 text-[13px] tracking-wide",
        "backdrop-blur-xl",
        "shadow-[0_4px_15px_rgba(0,0,0,0.1)]",
        // Category-specific colors
        colors.bg,
        colors.text,
        colors.border,
        "border",
        // Hover effects
        colors.hoverBg,
        "hover:text-white",
        "group-hover:scale-105",
        colors.shadow,
        className
      )}
      {...props}
    >
      {category}
    </span>
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

