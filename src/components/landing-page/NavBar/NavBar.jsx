import Hamburger from "./HamburgerBar";
import Logo from "./Logo";
import { SignUpButton, LogInButton } from "@/components/common/Button";

export default function NavBar() {
  return (
    <nav className="relative flex items-center justify-between border-b border-[#DAD6D1] px-[24px] py-[12px] min-[1440px]:px-[120px] min-[1440px]:py-[16px] max-w-full z-50">
      <Logo />
      <Hamburger />
      <div className="flex gap-[8px] max-md:hidden">
        <SignUpButton>Sign Up</SignUpButton>    
        <LogInButton>Log In</LogInButton>
      </div>
    </nav>
  );
}
