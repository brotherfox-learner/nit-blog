import Hamburger from "./HamburgerBar";
import Logo from "./Logo";
import { SignUpButton, LogInButton } from "@/components/common/Button";
import { UserAvatar } from "@/components/common";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="relative flex items-center justify-between border-b border-[#DAD6D1] px-[24px] py-[12px] min-[1440px]:px-[120px] min-[1440px]:py-[16px] max-w-full z-50">
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
