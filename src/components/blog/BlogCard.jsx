export function BlogCard({
  image = "https://cataas.com/cat",
  category = "Cat",
  title = "Understanding Cat Behavior: Why Your Feline Friend Acts the Way They Do",
  description = "Dive into the curious world of cat behavior, exploring why cats knead, purr, and chase imaginary prey. This article helps pet owners decode their feline's actions and understand how their instincts as hunters shape their daily routines.",
  author = "Thompson P.",
  date = "11 September 2024",
}) {
  return (
    <article className="flex flex-col justify-center gap-[16px] w-[375px] transition-all duration-300 hover:shadow-xl hover:bg-[#F5F5F5] rounded-md p-2 cursor-pointer group min-[1280px]:w-[42vw] min-[1280px]:h-[582px] px-[20px] py-[10px]">
      {/* Image */}
      <a
        href="#"
        className="w-[343px] min-[1024px]:w-full h-[62%] object-cover rounded-md overflow-hidden block"
      >
        <img
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={title}
        />
      </a>
      {/* Content */}
      <div className="flex flex-col box-border">
        <div className="flex">
          {/* Label Category */}
          <span className="bg-[#D7F2E9] w-[50px] h-[30px] rounded-full px-[12px] py-[4px] text-sm font-medium text-[#12B279] mb-2 transition-colors duration-300 group-hover:bg-[#C4E8D8]">
            {category}
          </span>
        </div>
        {/* Title */}
        <a href="#" className="transition-colors duration-300">
          <h2 className="text-start font-bold text-xl mb-2 overflow-hidden transition-all duration-300 group-hover:text-[#26231E]">
            {title}
          </h2>
        </a>
        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 h-[44px] transition-colors duration-300 group-hover:text-[#43403B]">
          {description}
        </p>
      </div>
      <div className="flex items-center text-[14px] leading-[22px]">
        {/* Author Image */}
        <img
          className="w-[24px] h-[24px] rounded-full mr-2 transition-transform duration-300 group-hover:scale-110"
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          alt={author}
        />
        {/* Author */}
        <span className="font-medium text-[#43403B] transition-colors duration-300 group-hover:text-[#26231E]">
          {author}
        </span>
        {/* Date */}
        <span className="mx-2 text-[#DAD6D1]">|</span>
        <span className="font-sm text-[#75716B] transition-colors duration-300 group-hover:text-[#43403B]">
          {date}
        </span>
      </div>
    </article>
  );
}
