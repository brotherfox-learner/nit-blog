import { useComments } from "../../hooks";
import { useAuth } from "../../contexts";
import CommentForm from "./components/CommentForm";
import Comment from "./components/Comment";

export default function CommentSection({ postId }) {
  const { requireAuth, token, session, profile } = useAuth();
  const accessToken = token ?? session?.access_token;

  const { comments, commentText, setCommentText, handleSubmit, isLoading } =
    useComments(postId, accessToken);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[90%] lg:w-[95%] lg:max-w-[1440px] py-8 px-4 md:px-6 font-poppins">
        <div className="flex flex-col gap-[12px]">
          <div className="text-[16px] leading-[24px] font-semibold text-[#75716B] font-poppins">
            Comments ({comments.length})
          </div>

          {/* Comment Form - ใช้ requireAuth จาก context */}
          <CommentForm
            commentText={commentText}
            onCommentChange={(e) => setCommentText(e.target.value)}
            onSubmit={(e) => handleSubmit(e, requireAuth, profile)}
          />
        </div>

        {/* Loading state */}
        {isLoading && (
          <div className="py-4 text-center text-[#75716B]">
            Loading comments...
          </div>
        )}

        {/* Comments List */}
        {!isLoading && (
          <div className="mt-6">
            {comments.length === 0 ? (
              <p className="text-[#75716B] text-center py-4">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment, index) => (
                <Comment
                  key={comment.id}
                  comment={comment}
                  isLast={index === comments.length - 1}
                />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
