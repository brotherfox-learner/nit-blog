import SignUpBtn from "./SignUpBtn";
import LogInBtn from "./LogInBtn";
import Hamburger from "./HamburgerBar";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#DAD6D1] px-[24px] py-[12px] min-[1440px]:px-[120px] min-[1440px]:py-[16px] max-w-full overflow-x-hidden">
      <Logo />
      <Hamburger />
      <div className="flex gap-[8px] max-[376px]:hidden">
        <SignUpBtn />
        <LogInBtn />
      </div>
    </nav>
  );
}

