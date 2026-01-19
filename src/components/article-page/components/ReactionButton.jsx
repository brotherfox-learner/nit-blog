export default function ReactionButton({ reactionCount, hasReacted, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex max-lg:w-[343px] lg:max-w-[10vw] xl:max-w-[10vw] lg:w-[25vw] items-center justify-center gap-2.5 lg:gap-1.5 xl:gap-2.5 px-6 lg:px-4 xl:px-6 py-2 lg:py-2 xl:py-2 bg-white border rounded-full cursor-pointer transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 ${hasReacted ? "border-amber-400 bg-amber-50" : "border-neutral-200"
        }`}
      aria-label={`${reactionCount} reactions. Click to ${hasReacted ? "remove" : "add"
        } your reaction`}
    >
      <svg
        className={`w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6 ${hasReacted ? "text-amber-500" : "text-neutral-600"
          }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none" />
        <path
          d="M8 14s1.5 2 4 2 4-2 4-2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-lg lg:text-base xl:text-lg font-medium text-neutral-700">
        {reactionCount}
      </span>
    </button>
  );
}
//เอาไป Render ใน SocialShareSection.jsx