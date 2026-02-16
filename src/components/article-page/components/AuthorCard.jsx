export default function AuthorCard({ author, bio }) {
  return (
    <aside className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center lg:w-[370px] xl:w-[400px] lg:flex-shrink-0">
      <div className="w-full max-w-[343px] lg:max-w-none px-4 md:px-6 my-5 lg:my-0 lg:sticky top-[20px]">
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
    </aside>
  );
}

//เอาไป Render ใน ArticleContent.jsx
