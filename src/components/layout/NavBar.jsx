/**
 * NavBar Component - Layout Level
 * Re-exports from landing-page for use in App.jsx
 */

import Hamburger from "../landing-page/NavBar/HamburgerBar";
import Logo from "../landing-page/NavBar/Logo";
import { SignUpButton, LogInButton } from "@/components/common/Button";
import { UserAvatar } from "@/components/common";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function NavBar({ px = 120 }) {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={`relative z-50 flex items-center justify-between border-b border-[#DAD6D1] px-[24px] py-[12px] min-[1280px]:px-[${px}px] min-[1280px]:py-[16px] max-w-full `}>
      <Logo />
      <Hamburger />
      
      {/* Desktop - แสดง Avatar ถ้า login แล้ว, แสดง buttons ถ้ายังไม่ login */}
      <div className="flex gap-[8px] max-md:hidden">
        {isLoggedIn ? (
          <UserAvatar />
        ) : (
          <>
            <SignUpButton asChild>
              <Link to="/signup">Sign Up</Link>
            </SignUpButton>
            <LogInButton asChild>
              <Link to="/login">Log In</Link>
            </LogInButton>
          </>
        )}
      </div>
    </nav>
  );
}
