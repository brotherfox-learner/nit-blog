import { useState } from "react";
import SignUpBtn from "./SignUpBtn";
import LogInBtn from "./LogInBtn";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { User, LogOut, UserCircle, Shield, Home, FileText, Info } from "lucide-react";

export default function HamburgerBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user, profile, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  // สร้าง initials จากอีเมล
  const getInitials = (email) => {
    return email ? email.charAt(0).toUpperCase() : "U";
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
        {/* Menu Header - แสดงต่างกันตาม login state */}
        {isLoggedIn ? (
          <div className="bg-[#EFEEEB] px-5 py-4 border-b border-[#DAD6D1]/50">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              {profile?.profile_pic ? (
                <img
                  src={profile.profile_pic}
                  alt={profile.name || user?.email}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#26231E] text-white flex items-center justify-center font-semibold">
                  {getInitials(user?.email)}
                </div>
              )}
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="text-[#26231E] font-semibold text-sm truncate">
                  {user?.email}
                </p>
                <p className="text-[#75716B] text-xs mt-0.5 capitalize">
                  {profile?.role || user?.role || "user"} account
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#EFEEEB] px-5 py-4 border-b border-[#DAD6D1]/50">
            <p className="text-[#26231E] font-semibold text-sm">Welcome!</p>
            <p className="text-[#75716B] text-xs mt-1">
              Sign in to access all features
            </p>
          </div>
        )}

        {/* Menu Content */}
        <div className="flex flex-col gap-3 p-5">
          {/* Auth Section - แสดงเฉพาะเมื่อยังไม่ login */}
          {!isLoggedIn && (
            <>
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
            </>
          )}

          {/* User Menu - แสดงเฉพาะเมื่อ login แล้ว */}
          {isLoggedIn && (
            <>
              {/* Admin Panel - แสดงเฉพาะ admin */}
              {isAdmin() && (
                <Link
                  to="/admin"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
                  onClick={closeMenu}
                >
                  <Shield className="w-5 h-5" />
                  <span className="font-medium text-sm">Admin Panel</span>
                </Link>
              )}

              {/* Member Page */}
              <Link
                to="/member"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
                onClick={closeMenu}
              >
                <UserCircle className="w-5 h-5" />
                <span className="font-medium text-sm">Member Page</span>
              </Link>

              {/* Profile */}
              <Link
                to="/member"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
                onClick={closeMenu}
              >
                <User className="w-5 h-5" />
                <span className="font-medium text-sm">Profile</span>
              </Link>

              {/* Divider */}
              <div className="h-px bg-[#DAD6D1]/50 my-2" />
            </>
          )}

          {/* Quick Links - แสดงเสมอ */}
          <div className="flex flex-col gap-1">
            {/* Home Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium text-sm">Home</span>
            </Link>
            {/* Articles Link */}
            <Link
              to="/#landing-page-article-search-bar"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium text-sm">Articles</span>
            </Link>
            {/* About Link */}
            <Link
              to="/about"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={closeMenu}
            >
              <Info className="w-5 h-5" />
              <span className="font-medium text-sm">About</span>
            </Link>
          </div>

          {/* Logout Button - แสดงเฉพาะเมื่อ login แล้ว */}
          {isLoggedIn && (
            <>
              {/* Divider */}
              <div className="h-px bg-[#DAD6D1]/50 my-2" />
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium text-sm">Log out</span>
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
