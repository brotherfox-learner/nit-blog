/**
 * Reusable Icon Components
 * Following DRY principle - define SVGs once, use everywhere
 * High Cohesion - all icons in one place
 */

// Base icon wrapper for consistent sizing and styling
export function Icon({ children, className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

// Heart/Like icon
export function HeartIcon({ className = "w-4 h-4", filled = false, ...props }) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}

// Share/Upload icon
export function ShareIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    </svg>
  );
}

// More/Dots icon (vertical)
export function MoreIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

// Bookmark icon
export function BookmarkIcon({ className = "w-5 h-5", filled = false, ...props }) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  );
}

// Clock/Time icon
export function ClockIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

// Checkmark icon
export function CheckIcon({ className = "w-2.5 h-2.5", ...props }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// Star icon (for sparkle effects)
export function StarIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
    </svg>
  );
}

// Hamburger menu icon (for mobile nav)
export function MenuIcon({ className = "w-6 h-6", isOpen = false }) {
  return (
    <div className={`relative ${className} flex flex-col justify-between`}>
      <span
        className={`w-full h-0.5 bg-[#26231E] rounded-full transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`w-full h-0.5 bg-[#26231E] rounded-full transition-all duration-300 ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <span
        className={`w-full h-0.5 bg-[#26231E] rounded-full transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </div>
  );
}

// Home icon
export function HomeIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  );
}

// Articles icon
export function ArticlesIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
      />
    </svg>
  );
}

// User/About icon
export function UserIcon({ className = "w-5 h-5", ...props }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );
}

