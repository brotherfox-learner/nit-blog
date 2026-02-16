import logo from "@/assets/images/Logo.svg";

export default function Logo() {
  return (
    <a href="/" className="block transition-transform duration-300 hover:scale-105 active:scale-95">
      <img src={logo} alt="Logo" className="w-[22.66925048828125px] min-[1280px]:w-[41.56029510498047px] h-[11.95199966430664px] min-[1280px]:h-[21.912002563476562px] transition-opacity duration-300 hover:opacity-80" />
    </a>
  );
}

