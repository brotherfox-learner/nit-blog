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

