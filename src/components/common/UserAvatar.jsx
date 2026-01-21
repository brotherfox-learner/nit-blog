import { useState, useRef, useEffect } from "react";
import { User, LogOut, UserCircle, Shield, Home, FileText, Info, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { notificationDummy } from "@/data/notificationDummy";

/**
 * UserAvatar - Component สำหรับแสดง avatar และ dropdown menu
 * แสดงเมื่อ user login แล้ว
 */
export function UserAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();

  // Close dropdown เมื่อคลิกข้างนอก
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsNotificationsOpen(false);
      }
    }

    if (isOpen || isNotificationsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isNotificationsOpen]);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  if (!user) return null;

  // สร้าง initials จากอีเมล (ใช้ตัวอักษรแรกของอีเมล)
  const getInitials = (email) => {
    return email ? email.charAt(0).toUpperCase() : "U";
  };

  const notifications = Array.isArray(notificationDummy) ? notificationDummy : [];
  const notificationCount = notifications.length;
  const badgeText = notificationCount > 99 ? "99+" : String(notificationCount);

  const getNotificationText = (notification) => {
    if (notification.type === "comment") {
      return `${notification.user?.name || "Someone"} commented on: ${notification.articleTitle}`;
    }
    if (notification.type === "like") {
      return `${notification.user?.name || "Someone"} liked: ${notification.articleTitle}`;
    }
    return "New notification";
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-2">
      {/* Notifications */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setIsNotificationsOpen((prev) => !prev);
            setIsOpen(false);
          }}
          className="relative inline-flex items-center justify-center bg-transparent border-0 cursor-pointer p-2 text-[#666] transition-colors duration-300 hover:text-[#333]"
          aria-label={`Notifications${notificationCount ? ` (${notificationCount})` : ""}`}
          aria-expanded={isNotificationsOpen}
        >
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 px-1 rounded-full bg-red-600 text-white text-[11px] leading-5 font-semibold text-center">
              {badgeText}
            </span>
          )}
        </button>

        {/* Notifications Dropdown */}
        <section
          className={`absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#DAD6D1]/50 z-50 overflow-hidden transition-all duration-200 ${
            isNotificationsOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          aria-label="Notifications list"
        >
          <header className="bg-[#EFEEEB] px-4 py-3 border-b border-[#DAD6D1]/50">
            <p className="text-sm font-semibold text-[#26231E]">Notifications</p>
            <p className="text-xs text-[#75716B] mt-0.5">
              {notificationCount ? `${notificationCount} new` : "No new notifications"}
            </p>
          </header>

          <ul className="max-h-72 overflow-y-auto">
            {notifications.length === 0 ? (
              <li className="px-4 py-4 text-sm text-[#75716B]">No notifications</li>
            ) : (
              notifications.map((n) => (
                <li key={n.id} className="px-4 py-3 border-b border-[#DAD6D1]/30 last:border-b-0">
                  <p className="text-sm text-[#26231E] line-clamp-2">
                    {getNotificationText(n)}
                  </p>
                  {n.timestamp && (
                    <p className="text-xs text-[#75716B] mt-1">{n.timestamp}</p>
                  )}
                </li>
              ))
            )}
          </ul>

          <footer className="px-4 py-3 border-t border-[#DAD6D1]/50 bg-white">
            <Link
              to={isAdmin() ? "/admin" : "/member"}
              className="text-sm font-medium text-[#26231E] hover:underline"
              onClick={() => setIsNotificationsOpen(false)}
            >
              View all
            </Link>
          </footer>
        </section>
      </div>
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-[#EFEEEB] transition-all duration-200 active:scale-95"
        aria-label="User menu"
        aria-expanded={isOpen}
      >
        {/* Avatar Circle */}
        <div className="w-9 h-9 rounded-full bg-[#26231E] text-white flex items-center justify-center font-semibold text-sm">
          {getInitials(user.email)}
        </div>

        {/* User Email (hidden on small screens) */}
        <span className="text-sm font-medium text-[#26231E] max-w-[120px] truncate hidden md:block">
          {user.email.split("@")[0]}
        </span>

        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 text-[#75716B] transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      </div>
      {/* Dropdown Menu */}
      <nav
        className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#DAD6D1]/50 z-50 overflow-hidden transition-all duration-200 ${isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        {/* User Info Header */}
        <div className="bg-[#EFEEEB] px-4 py-3 border-b border-[#DAD6D1]/50">
          <p className="text-sm font-semibold text-[#26231E] truncate">
            {user.email}
          </p>
          <p className="text-xs text-[#75716B] mt-0.5 capitalize">
            {user.role} account
          </p>
        </div>

        {/* Menu Items */}
        <div className="py-2">
          {/* Admin Panel - แสดงเฉพาะ admin */}
          {isAdmin() && (
            <Link
              to="/admin"
              className="flex items-center gap-3 px-4 py-2.5 text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Admin Panel</span>
            </Link>
          )}

          {/* Profile */}
          <Link
            to="/member"
            className="flex items-center gap-3 px-4 py-2.5 text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Profile</span>
          </Link>

          {/* Divider */}
          <div className="h-px bg-[#DAD6D1]/50 my-2" />
          {/* Quick Links - แสดงเสมอ */}
          <div className="flex flex-col gap-1">
            {/* Home Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Home className="w-5 h-5" />
              <span className="font-medium text-sm">Home</span>
            </Link>
            {/* Articles Link */}
            <Link
              to="/#landing-page-article-search-bar"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="w-5 h-5" />
              <span className="font-medium text-sm">Articles</span>
            </Link>
            {/* About Link */}
            <Link
              to="/"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#43403B] hover:bg-[#EFEEEB] hover:text-[#26231E] transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Info className="w-5 h-5" />
              <span className="font-medium text-sm">About</span>
            </Link>
          </div>
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Log out</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
