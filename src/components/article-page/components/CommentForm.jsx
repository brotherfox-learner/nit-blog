export default function CommentForm({ commentText, onCommentChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="mb-8 flex flex-col gap-[12px]">
      <textarea
        value={commentText}
        onChange={onCommentChange}
        placeholder="What are your thoughts?"
        className="w-full border border-[#DAD6D1] bg-white text-[#75716B] rounded-lg p-4 resize-y min-h-[120px] font-poppins text-base leading-6 font-medium placeholder:text-[#75716B] focus:outline-none focus:ring-2 focus:ring-amber-400"
        rows={4}
      />
      <button
        type="submit"
        className="bg-[#26231E] hover:bg-[#2d2923] text-white font-poppins text-base font-medium py-2.5 px-3 transition-colors duration-200 w-[121px] rounded-full"
      >
        Send
      </button>
    </form>
  );
}
//เอาไป Render ใน CommentSection.jsx
