export default function AuthorCard({ author, bio }) {
  return (
    <section className="max-lg:flex max-lg:flex-col max-lg:justify-center items-center">
      <div className="min-w-[343px] lg:min-w-[370px] xl:min-w-[400px] w-[80vw] lg:max-w-[20vw] mx-0 px-4 md:px-6 my-5 lg:py-[15px] lg:sticky top-[15px]">
        <footer className="p-6 md:p-8 min-h-[376px] bg-[#EFEEEB] rounded-2xl">
          <section className="flex flex-col gap-6">
            {/* Author Info */}
            <figure className="flex items-center gap-4 m-0 pb-6 border-b border-stone-300">
              <img
                src={author.avatar}
                alt={`Avatar of ${author.name}`}
                className="w-[44px] h-[44px] rounded-full object-cover ring-2 ring-[#acacac]"
              />
              <figcaption className="flex flex-col">
                <span className="font-poppins text-sm text-[#75716B]">
                  Author
                </span>
                <span className="font-poppins text-lg font-bold text-[#43403B]">
                  {author.name}
                </span>
              </figcaption>
            </figure>

            {/* Author Bio */}
            {bio.map((paragraph, idx) => (
              <p
                key={idx}
                className="font-poppins text-base md:text-lg lg:text-base xl:text-lg text-[#75716B] leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </section>
        </footer>
      </div>
    </section>
  );
}

//เอาไป Render ใน ArticleContent.jsx