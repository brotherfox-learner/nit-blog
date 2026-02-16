export default function Comment({ comment, isLast }) {
  return (
    <article
      className={
        !isLast ? "mb-6 pb-6 border-b border-neutral-300" : ""
      }
    >
      <div className="flex flex-col">
        <div className="flex flex-row gap-[12px]">
          <figure>
            <img
              src={comment.avatar}
              alt={`Avatar of ${comment.author}`}
              className="w-12 h-12 rounded-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-[#43403B] font-semibold font-poppins text-xl leading-7">
                {comment.author}
              </h3>
              <time className="text-[#75716B] font-poppins text-xs">
                {comment.date}
              </time>
            </div>
          </div>
        </div>
        
        <p className="text-[#75716B] font-poppins text-base leading-6">
          {comment.content}
        </p>
      </div>
    </article>
  );
}

//เอาไป Render ใน CommentSection.jsx