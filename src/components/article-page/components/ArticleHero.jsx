import { CATEGORY_COLORS } from "../constants";

export default function ArticleHero({
  image,
  category,
  title,
  date,
  readTime,
}) {
  const categoryColors = CATEGORY_COLORS[category];

  return (
    <figure className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden m-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />

      <header className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
        <div className="max-w-4xl mx-auto">
          <span
            className={`inline-block ${categoryColors.bg} ${categoryColors.text} font-poppins text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-4`}
          >
            {category}
          </span>
          <h1 className="font-poppins text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
            {title}
          </h1>
          <time className="font-poppins text-xs md:text-xs lg:text-s text-white">
            {date}
          </time>
        </div>
      </header>

      <span className="absolute top-6 right-5 font-poppins text-sm text-stone-500 bg-stone-100 px-4 py-2 rounded-full">
        {readTime} min read
      </span>
    </figure>
  );
}
