import authorPic from "../../../assets/images/Author-main-pic.jpg";

export default function AuthorPicture() {
  return (
    <section>
      <img
        src={authorPic}
        alt="Author illustration"
        className="w-[343px] max-w-full h-[470px] rounded-[16px] object-cover min-[1440px]:w-[386px] min-[1440px]:h-[529px]"
      />
    </section>
  );
}

