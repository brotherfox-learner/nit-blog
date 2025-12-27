import AuthorTitle from "./AuthorTitle";
import AuthorPicture from "./AuthorPic";
import AuthorDesciption from "./AuthorDesciption";

export default function HeroSection() {
  return (
    <section className="mb-[48px] flex flex-col items-center justify-center gap-[48px] w-full max-w-full overflow-x-hidden min-[1440px]:flex-row min-[1440px]:items-center min-[1440px]:justify-center min-[1440px]:w-[1200px] min-[1440px]:mx-auto min-[1440px]:mt-[78px] min-[1440px]:gap-[60px]">
      {/* Hero Section Top */}
      <AuthorTitle />
      {/* Hero Section Picture */}
      <AuthorPicture />
      {/* Hero Section Description */}
      <AuthorDesciption />
    </section>
  );
}