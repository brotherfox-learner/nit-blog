import avatarImage from "../../assets/images/Author-main-pic.jpg";
import catImage from "../../assets/images/Dummy Cute Animal Pic/Cat.jpg";
import { useComments } from "./hooks/useComments";
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

const initialComments = [
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
  const { comments, commentText, setCommentText, handleSubmit } =
    useComments(initialComments);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-[95%] lg:max-w-[1440px] py-8 px-4 md:px-6 font-poppins">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[16px] leading-[24px] font-semibold text-[#75716B] font-poppins">
            Comments
          </div>

          {/* Comment Form */}
          <CommentForm
            commentText={commentText}
            onCommentChange={(e) => setCommentText(e.target.value)}
            onSubmit={handleSubmit}
          />
        </div>

        {/* Comments List */}
        <div>
          {comments.map((comment, index) => (
            <Comment
              key={comment.id}
              comment={comment}
              isLast={index === comments.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

