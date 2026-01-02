/**
 * NavBar Component - Layout Level
 * Re-exports from landing-page for use in App.jsx
 */

import SignUpBtn from "../landing-page/NavBar/SignUpBtn";
import LogInBtn from "../landing-page/NavBar/LogInBtn";
import Hamburger from "../landing-page/NavBar/HamburgerBar";
import Logo from "../landing-page/NavBar/Logo";

export default function NavBar() {
  return (
    <nav className="relative z-50 flex items-center justify-between border-b border-[#DAD6D1] px-[24px] py-[12px] min-[1280px]:px-[120px] min-[1280px]:py-[16px] max-w-full">
      <Logo />
      <Hamburger />
      <div className="flex gap-[8px] max-[768px]:hidden">
        <LogInBtn />
        <SignUpBtn />
      </div>
    </nav>
  );
}

