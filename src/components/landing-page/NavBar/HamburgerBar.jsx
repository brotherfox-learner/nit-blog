export default function HamburgerBar() {
    return (
      <button 
        className="block cursor-pointer max-[375px]:block min-[376px]:hidden transition-all duration-300 hover:opacity-70 active:scale-95" 
        aria-label="Menu"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300"
        >
          <rect x="3" y="6" width="18" height="2" rx="1" fill="currentColor" />
          <rect x="3" y="11" width="18" height="2" rx="1" fill="currentColor" />
          <rect x="3" y="16" width="18" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
    );
  }
