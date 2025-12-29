import logo from "../../../assets/images/Logo.svg";

export default function Logo() {
  return (
    <a href="#" className="block transition-transform duration-300 hover:scale-105 active:scale-95">
      <img src={logo} alt="Logo" className="w-auto h-auto transition-opacity duration-300 hover:opacity-80" />
    </a>
  );
}

