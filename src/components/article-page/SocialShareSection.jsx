import { useSocialShare } from "./hooks/useSocialShare";
import ReactionButton from "./components/ReactionButton";
import CopyLinkButton from "./components/CopyLinkButton";
import SocialMediaButtons from "./components/SocialMediaButtons";

export default function SocialShareSection({ reactions = 321, rounded, isLoggedIn = false, openLoginPopup }) {
  const {
    copied,
    reactionCount,
    hasReacted,
    handleCopyLink,
    handleReaction,
    shareOnSocial,
  } = useSocialShare(reactions);

  return (
    <section
      className={`bg-[#EFEEEB] flex flex-col justify-center lg:justify-between items-center md:flex-row gap-4 lg:gap-4 xl:gap-4 py-6 lg:py-4 xl:py-6 font-poppins box-border px-[10px] md:px-10 lg:px-4 xl:px-10 ${
        rounded ? "rounded-[32px]" : ""
      }`}
      aria-label="Social sharing options"
    >
      {/* Reactions Counter */}
      <ReactionButton
        reactionCount={reactionCount}
        hasReacted={hasReacted}
        onClick={() => handleReaction(isLoggedIn, openLoginPopup)}
      />

      {/* Share Actions */}
      <div className="min-w-[343px] lg:min-w-0 flex flex-row justify-between items-center gap-2 lg:gap-4 xl:gap-4 bg-[#EFEEEB]">
        <CopyLinkButton 
          copied={copied} 
          onClick={() => handleCopyLink(isLoggedIn, openLoginPopup)} 
        />
        <SocialMediaButtons 
          onShare={(platform, text) => shareOnSocial(platform, text, isLoggedIn, openLoginPopup)} 
        />
      </div>
    </section>
  );
}
