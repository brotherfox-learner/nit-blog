import { useState } from "react";
import avatarImage from "../../assets/images/Author-main-pic.jpg";
import catImage from "../../assets/images/Dummy Cute Animal Pic/Cat.jpg";

const comments = [
  {
    id: 1,
    author: "Jacob Lash",
    avatar: avatarImage,
    date: "12 September 2024 at 18:30",
    content:
      "I loved this article! It really explains why my cat is so independent yet loving. The purring section was super interesting.",
  },
  {
    id: 2,
    author: "Ahri",
    avatar: avatarImage,
    date: "12 September 2024 at 18:30",
    content:
      "Such a great read! I've always wondered why my cat slow blinks at me—now I know it's her way of showing trust!",
  },
  {
    id: 3,
    author: "Mimi mama",
    avatar: catImage,
    date: "12 September 2024 at 18:30",
    content:
      "This article perfectly captures why cats make such amazing pets. I had no idea their purring could help with healing. Fascinating stuff!",
  },
];

export default function CommentSection() {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      // Handle comment submission here
      console.log("Comment submitted:", commentText);
      setCommentText("");
    }
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-[95%] lg:max-w-[1440px] py-8 px-4 md:px-6 font-poppins">
        <div className="flex flex-col gap-[12px]">
          <div className=" text-[16px] leading-[24px] font-semibold text-[#75716B] font-poppins">
            Comments
          </div>

          {/* Comment Form */}
          <form
            onSubmit={handleSubmit}
            className="mb-8 flex flex-col gap-[12px]"
          >
            {/* Comment Textarea */}
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="What are your thoughts?"
              className="w-full border border-[#DAD6D1] bg-white text-[#75716B] rounded-lg p-4 resize-y min-h-[120px] font-poppins text-base leading-6 font-medium placeholder:text-[#75716B] focus:outline-none focus:ring-2 focus:ring-amber-400"
              rows={4}
            />
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#26231E] hover:bg-[#2d2923] text-white font-poppins text-base font-medium py-2.5 px-3 transition-colors duration-200 w-[121px] rounded-full"
            >
              Send
            </button>
          </form>
        </div>
        {/* Comments List */}
        <div>
          {comments.map((comment, index) => (
            <article
              key={comment.id}
              className={
                index !== comments.length - 1
                  ? "mb-6 pb-6 border-b border-neutral-300"
                  : ""
              }
            >
              {/* Avatar */}
              <div className="flex flex-col">
                <div className="flex flex-row gap-[12px]">
                  <figure>
                    <img
                      src={comment.avatar}
                      alt={`Avatar of ${comment.author}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </figure>

                  {/* Comment Content */}
                  <div className="flex-1">
                    {/* Author Name and Date */}
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
                {/* Comment Text */}
                <p className="text-[#75716B] font-poppins text-base leading-6">
                  {comment.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
