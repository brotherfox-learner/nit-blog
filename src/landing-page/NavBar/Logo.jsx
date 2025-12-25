import logo from "../../assets/images/Logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <img
        src={logo}
        alt="logo"
        className="h-[11.95199966430664px] w-[22.66925048828125px] min-[1440px]:h-[21.912002563476562px] min-[1440px]:w-[41.56029510498047px]"
      />
    </a>
  );
}