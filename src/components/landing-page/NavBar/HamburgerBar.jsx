import { useState } from "react";
import SignUpBtn from "./SignUpBtn";
import LogInBtn from "./LogInBtn";
import { Link } from "react-router-dom";

export default function HamburgerBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#EFEEEB] active:scale-95 p-[8px] rounded-lg"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <div className="relative w-3 h-4 flex flex-col justify-between">
          <span
            className={`w-6 h-[2px] bg-[#26231E] rounded-full transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#26231E] rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              }`}
          />
          <span
            className={`w-6 h-[2px] bg-[#26231E] rounded-full transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </div>
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Dropdown Menu */}
      <nav
        className={`absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-[#DAD6D1]/50 z-50 overflow-hidden transition-all duration-300 ease-out ${isOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
      >
        {/* Menu Header */}
        <div className="bg-[#EFEEEB] px-5 py-4 border-b border-[#DAD6D1]/50">
          <p className="text-[#26231E] font-semibold text-sm">Welcome!</p>
          <p className="text-[#75716B] text-xs mt-1">
            Sign in to access all features
          </p>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col gap-3 p-5">
          {/* Auth Buttons */}
          <div className="flex flex-row justify-center items-center gap-5">
            <LogInBtn className="w-full justify-center h-11" />

            <SignUpBtn
              BtnName="Sign Up"
              className="w-full justify-center h-11"
            />
          </div>

          {/* Divider */}
          <div className="h-px bg-[#DAD6D1]/50 my-2" />

          {/* Quick Links */}
          <div className="flex flex-col gap-1">
            {/* Home Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="font-medium text-sm">Home</span>
            </Link>
            {/* Articles Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span className="font-medium text-sm">Articles</span>
            </Link>
            {/* About Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="font-medium text-sm">About</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
