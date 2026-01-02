import AuthorTitle from "./AuthorTitle";
import AuthorPicture from "./AuthorPic";
import AuthorDesciption from "./AuthorDesciption";

export default function HeroSection() {
  return (
    <section className="mb-[48px] flex flex-col items-center justify-center gap-[48px] w-full max-w-full overflow-x-hidden min-[1280px]:flex-row min-[1280px]:items-center min-[1280px]:justify-center min-[1280px]:w-[1200px] min-[1280px]:mx-auto min-[1280px]:mt-[78px] min-[1280px]:gap-[60px]">
      {/* Hero Section Top */}
      <AuthorTitle />
      {/* Hero Section Picture */}
      <AuthorPicture />
      {/* Hero Section Description */}
      <AuthorDesciption />
    </section>
  );
}