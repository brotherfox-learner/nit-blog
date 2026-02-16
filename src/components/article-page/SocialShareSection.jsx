import { useSocialShare } from "../../hooks";
import { useAuth } from "../../contexts";
import ReactionButton from "./components/ReactionButton";
import CopyLinkButton from "./components/CopyLinkButton";
import SocialMediaButtons from "./components/SocialMediaButtons";

export default function SocialShareSection({ reactions = 0, hasReacted = false, rounded, onLike, onUnlike }) {
  const { requireAuth } = useAuth();

  const {
    copied,
    handleCopyLink,
    shareOnSocial,
  } = useSocialShare(reactions);

  const handleReactionClick = () => {
    if (!requireAuth()) return;
    if (hasReacted && onUnlike) onUnlike();
    else if (!hasReacted && onLike) onLike();
  };

  return (
    <section
      className={`bg-[#EFEEEB] flex flex-col justify-center lg:justify-between items-center md:flex-row gap-4 lg:gap-4 xl:gap-4 py-6 lg:py-4 xl:py-6 font-poppins box-border px-[10px] md:px-10 lg:px-4 xl:px-10 ${
        rounded ? "rounded-[32px]" : ""
      }`}
      aria-label="Social sharing options"
    >
      {/* Reactions Counter - ต้อง login กดได้, กดอีกครั้ง = unlike */}
      <ReactionButton
        reactionCount={reactions}
        hasReacted={hasReacted}
        onClick={handleReactionClick}
      />

      {/* Share Actions */}
      <div className="min-w-[343px] lg:min-w-0 flex flex-row justify-between items-center gap-2 lg:gap-4 xl:gap-4 bg-[#EFEEEB]">
        <CopyLinkButton 
          copied={copied}
          onClick={() => handleCopyLink()} 
        />
        <SocialMediaButtons 
          onShare={(platform, text) => shareOnSocial(platform, text, requireAuth)} 
        />
      </div>
    </section>
  );
}
