/**
 * Design Tokens - Single source of truth for design values
 * Following DRY principle - define once, use everywhere
 */

// Color Palette
export const COLORS = {
  // Primary
  primary: {
    dark: '#26231E',
    DEFAULT: '#43403B',
    light: '#75716B',
    lighter: '#DAD6D1',
  },
  // Background
  background: {
    white: '#FFFFFF',
    light: '#FAFAF9',
    muted: '#F5F5F5',
    gray: '#EFEEEB',
  },
  // Accent
  accent: {
    emerald: '#12B279',
    emeraldLight: '#D7F2E9',
    emeraldDark: '#10B981',
  },
  // Status
  status: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
  // Social
  like: '#EF4444',
  share: '#3B82F6',
};

// Shadows
export const SHADOWS = {
  sm: '0_4px_15px_rgba(0,0,0,0.1)',
  md: '0_4px_20px_rgba(0,0,0,0.08)',
  lg: '0_8px_25px_rgba(0,0,0,0.15)',
  xl: '0_20px_60px_rgba(0,0,0,0.15)',
  glow: {
    emerald: '0_8px_25px_rgba(16,185,129,0.4)',
    gold: '0_0_10px_rgba(255,215,0,0.9)',
  },
};

// Transitions
export const TRANSITIONS = {
  fast: 'duration-200',
  normal: 'duration-300',
  slow: 'duration-500',
  slower: 'duration-700',
  slowest: 'duration-1000',
};

// Border Radius
export const RADIUS = {
  sm: 'rounded-md',
  DEFAULT: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
  full: 'rounded-full',
};

// Spacing values commonly used
export const SPACING = {
  card: {
    padding: 'p-[20px]',
    gap: 'gap-[16px]',
  },
  section: {
    paddingX: 'px-[16px] min-[1280px]:px-[120px]',
    paddingY: 'py-[16px]',
  },
};

// Common class compositions for consistency
export const STYLES = {
  // Card styles
  card: {
    base: 'bg-white rounded-3xl overflow-hidden border border-gray-100 cursor-pointer group',
    shadow: 'shadow-[0_4px_20px_rgba(0,0,0,0.08)]',
    hoverShadow: 'hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]',
    hoverLift: 'hover:-translate-y-3',
    transition: 'transition-all duration-700 ease-out',
  },
  // Button styles
  button: {
    base: 'rounded-full border font-medium transition-all duration-300',
    primary: 'bg-[#26231E] border-[#75716B] text-white hover:bg-[#43403B] hover:border-[#43403B]',
    secondary: 'bg-white border-[#75716B] text-black hover:bg-[#F5F5F5] hover:border-[#DAD6D1]',
    hover: 'hover:shadow-md active:scale-95 active:shadow-sm',
  },
  // Badge styles
  badge: {
    base: 'px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-xl',
    category: 'bg-white/95 text-emerald-600 border border-emerald-100',
    categoryHover: 'hover:bg-emerald-500 hover:text-white group-hover:scale-105',
  },
  // Image styles
  image: {
    cover: 'w-full h-full object-cover',
    hoverScale: 'transition-transform duration-700 group-hover:scale-105',
  },
};

// Default blog post values
export const BLOG_DEFAULTS = {
  image: 'https://cataas.com/cat',
  objectPosition: 20,
  category: 'Cat',
  title: 'Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do',
  description: 'Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey.',
  author: 'Thompson P.',
  date: '11 Sep 2024',
  loading: 'lazy',
};

// Article Content Colors - styling based on category
export const ARTICLECONTENT_COLORS = {
  General: {
    // Blue theme
    descriptionBorder: "border-blue-400",
    headingBorder: "border-blue-300",
    headingText: "text-blue-800",
    bodyText: "text-slate-700",
    accent: "blue",
  },
  Technology: {
    // Amber/Orange theme
    descriptionBorder: "border-amber-400",
    headingBorder: "border-amber-300",
    headingText: "text-amber-800",
    bodyText: "text-stone-700",
    accent: "amber",
  },
  Inspiration: {
    // Pink theme
    descriptionBorder: "border-pink-400",
    headingBorder: "border-pink-300",
    headingText: "text-pink-800",
    bodyText: "text-slate-700",
    accent: "pink",
  },
  // Default / Highlight (emerald theme)
  default: {
    descriptionBorder: "border-emerald-400",
    headingBorder: "border-emerald-300",
    headingText: "text-emerald-800",
    bodyText: "text-stone-700",
    accent: "emerald",
  },
};

// Highlight style ใช้เป็น default สำหรับ category ที่ไม่มีใน design
export const HIGHLIGHT_STYLE = {
  text: "text-white",
  active:
    "bg-gradient-to-r from-[#12B279] to-[#0fa06b] shadow-[#12B279]/30",
  hoverBg: "hover:bg-gradient-to-r hover:from-[#12B279] hover:to-[#0fa06b]",
  hoverText: "hover:text-white",
  hoverShadow: "hover:shadow-lg hover:shadow-[#12B279]/30",
};

export const CATEGORIES = [
  {
    label: "Highlight",
    value: "All",
    colors: HIGHLIGHT_STYLE,
  },
  {
    label: "General",
    value: "General",
    colors: {
      text: "text-white",
      active:
        "bg-gradient-to-r from-[#3B82F6] to-[#2563EB] shadow-[#3B82F6]/30",
      hoverBg: "hover:bg-gradient-to-r hover:from-[#3B82F6] hover:to-[#2563EB]",
      hoverText: "hover:text-white",
      hoverShadow: "hover:shadow-lg hover:shadow-[#3B82F6]/30",
    },
  },
  {
    label: "Cat",
    value: "Cat",
    colors: {
      text: "text-white",
      active:
        "bg-gradient-to-r from-[#F59E0B] to-[#D97706] shadow-[#F59E0B]/30",
      hoverBg: "hover:bg-gradient-to-r hover:from-[#F59E0B] hover:to-[#D97706]",
      hoverText: "hover:text-white",
      hoverShadow: "hover:shadow-lg hover:shadow-[#F59E0B]/30",
    },
  },
  {
    label: "Inspiration",
    value: "Inspiration",
    colors: {
      text: "text-white",
      active:
        "bg-gradient-to-r from-[#EC4899] to-[#DB2777] shadow-[#EC4899]/30",
      hoverBg: "hover:bg-gradient-to-r hover:from-[#EC4899] hover:to-[#DB2777]",
      hoverText: "hover:text-white",
      hoverShadow: "hover:shadow-lg hover:shadow-[#EC4899]/30",
    },
  },
];

/**
 * Map API categories (จาก fetchCategories) เป็น format พร้อม colors
 * ถ้า label ตรงกับ CATEGORIES ใน design ใช้ style นั้น ถ้าไม่ตรงใช้ HIGHLIGHT_STYLE
 * @param {Array<{id: number, name: string}>} apiCategories - categories จาก API
 * @returns {Array<{label: string, value: string, colors: object}>}
 */
export const mapCategoriesWithStyles = (apiCategories = []) => {
  const styleByLabel = Object.fromEntries(
    CATEGORIES.map((c) => [c.label, c.colors])
  );

  const highlightOption = {
    label: "Highlight",
    value: "All",
    colors: HIGHLIGHT_STYLE,
  };

  const mapped = (apiCategories || []).map((cat) => ({
    label: cat.name,
    value: cat.name,
    colors: styleByLabel[cat.name] ?? HIGHLIGHT_STYLE,
  }));

  return [highlightOption, ...mapped];
};