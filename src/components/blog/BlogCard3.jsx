import authorPic from "../../assets/images/Author-main-pic.jpg";

export function BlogCard3({
  image = "https://cataas.com/cat",
  category = "Cat",
  title = "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
  description = "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
  author = "Thompson P.",
  date = "11 September 2024",
  src = authorPic,
}) {
  return (
    <article className="flex flex-col justify-center gap-[16px] w-[375px] bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group border border-border/50 hover:-translate-y-1 min-[1280px]:w-[39vw] min-[1280px]:h-[582px] p-[20px] ">
      {/* Image Container */}
      <a
        href="#"
        className="relative w-[343px] min-[1024px]:w-full h-[68%] overflow-hidden rounded-md block"
      >
        <img
          className="w-[343px] min-[1024px]:w-full h-[212px] min-[1024px]:h-full object-cover rounded-md transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
          src={image}
          alt={title}
          loading="lazy"
        />
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Badge - Floating on Image */}
        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-emerald-600 shadow-lg transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white group-hover:scale-105">
          {category}
        </span>

        {/* Bookmark Indicator */}
        <div className="absolute bottom-4 right-4 bg-gray-200 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
          <svg
            className="w-5 h-5 text-black transition-transform duration-300 group-hover:scale-110"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z" />
          </svg>
        </div>
      </a>

      {/* Content Container */}
      <div className="flex flex-col box-border">
        {/* Title */}
        <a href="#" className="group/title transition-colors duration-300">
          <h2 className="text-start font-bold text-xl mb-2 overflow-hidden line-clamp-2 transition-all duration-300 group-hover/title:text-emerald-600">
            {title}
          </h2>
        </a>
        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 h-[44px] transition-colors duration-300 group-hover:text-secondary-foreground">
          {description}
        </p>
      </div>

      {/* Author & Date */}
      <div className="flex items-center gap-[16px] text-sm">
        {/* Author Image with Ring */}
        <div className="relative">
          <img
            className="w-9 h-9 rounded-full object-cover ring-2 ring-gray-100 transition-all duration-300 group-hover:ring-gray-200 group-hover:scale-110"
            src={src}
            alt={author}
          />
          {/* Green Dot Indicator */}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
        </div>

        {/* Author & Date Text */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600 truncate">
            {author}
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700 whitespace-nowrap">
            {date}
          </span>
        </div>
      </div>
    </article>
  );
}
