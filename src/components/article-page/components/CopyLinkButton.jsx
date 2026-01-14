export default function CopyLinkButton({ copied, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 lg:gap-1 xl:gap-2 px-5 lg:px-3 xl:px-5 h-[48px] lg:h-9 xl:h-[48px] bg-white border border-neutral-200 rounded-full cursor-pointer font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-300 hover:bg-neutral-50 whitespace-nowrap text-base lg:text-sm xl:text-base box-border"
      aria-label={copied ? "Link copied!" : "Copy link to clipboard"}
    >
      <svg
        className="w-[18px] h-[18px] lg:w-4 lg:h-4 xl:w-[18px] xl:h-[18px] text-neutral-600"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <span>{copied ? "Copied!" : "Copy link"}</span>
    </button>
  );
}

