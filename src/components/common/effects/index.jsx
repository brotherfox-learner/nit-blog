/**
 * Reusable Visual Effects Components
 * Following DRY - common hover effects defined once
 * High Cohesion - all visual effects in one place
 */

import { cn } from "@/lib/utils";

// Shimmer sweep effect on hover
export function ShimmerEffect({ className = "" }) {
  return (
    <div
      className={cn(
        "absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent",
        "-translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out",
        "pointer-events-none",
        className
      )}
    />
  );
}

// Cinematic gradient overlay
export function GradientOverlay({
  direction = "to-t",
  showOnHover = true,
  className = "",
}) {
  return (
    <div
      className={cn(
        `absolute inset-0 bg-linear-${direction} from-[#1a1a1a]/60 via-transparent to-[#1a1a1a]/10`,
        showOnHover ? "opacity-0 group-hover:opacity-100" : "opacity-100",
        "transition-all duration-500 pointer-events-none",
        className
      )}
    />
  );
}

// Ambient glow effect around cards
export function AmbientGlow({ color = "white", className = "" }) {
  const colorClasses = {
    white: "from-white/20 via-white/10 to-white/20",
    emerald: "from-emerald-500/20 via-emerald-300/10 to-emerald-500/20",
    gold: "from-[#C9A961]/20 via-[#1a1a1a]/10 to-[#C9A961]/20",
  };

  return (
    <div
      className={cn(
        "absolute -inset-1 bg-linear-to-r rounded-3xl blur-xl",
        "opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10",
        colorClasses[color] || colorClasses.white,
        className
      )}
    />
  );
}

// Bottom accent line that expands on hover
export function AccentLine({ color = "emerald", className = "" }) {
  const colorClasses = {
    emerald: "from-emerald-400 via-emerald-600 to-emerald-400",
    gold: "from-[#C9A961] via-[#1a1a1a] to-[#C9A961]",
    gray: "from-gray-300 via-gray-500 to-gray-300",
  };

  return (
    <div
      className={cn(
        "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1",
        `bg-linear-to-r ${colorClasses[color] || colorClasses.emerald}`,
        "rounded-full group-hover:w-1/2 transition-all duration-700",
        className
      )}
    />
  );
}

// Divider line
export function Divider({ animated = false, className = "" }) {
  if (animated) {
    return (
      <div className={cn("relative h-px overflow-hidden", className)}>
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-gray-200 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-emerald-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "h-px bg-linear-to-r from-gray-100 via-gray-50 to-gray-100",
        className
      )}
    />
  );
}

// Sparkle decoration effect
export function SparkleEffect({ className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center ml-2 opacity-0 group-hover/section:opacity-100",
        "transition-all duration-700 group-hover/section:translate-x-1 relative w-8 h-8",
        className
      )}
    >
      {/* Main Sparkle Star */}
      <svg
        className="w-5 h-5 text-[#FFD700] animate-spin-slow absolute top-0 left-0 drop-shadow-[0_0_10px_rgba(255,215,0,0.9)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>

      {/* Second Sparkle */}
      <svg
        className="w-4 h-6 text-[#fff130] animate-ping absolute top-0 left-8 delay-100 drop-shadow-[0_0_8px_rgba(255,215,0,1)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
      </svg>

      {/* Third Sparkle */}
      <svg
        className="w-2 h-2 text-[#636363] animate-pulse absolute bottom-0.5 left-2 drop-shadow-[0_0_6px_rgba(255,215,0,1)]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>

      {/* Glowing Particles */}
      <span className="absolute top-4 left-4 w-1 h-1 bg-[#fff130] rounded-full animate-ping delay-200 shadow-[0_0_8px_rgba(255,215,0,1)] ring-1 ring-[#FFD700]" />
      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping delay-300 shadow-[0_0_10px_rgba(255,215,0,1)]" />
      <span className="absolute top-2 right-1 w-1 h-1 bg-[#1a1a1a] rounded-full animate-bounce delay-150 shadow-[0_0_6px_rgba(255,215,0,0.8)] ring-1 ring-[#C9A961]" />
    </span>
  );
}

