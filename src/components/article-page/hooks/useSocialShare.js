import { useState } from "react";
import { SHARE_URLS } from "../constants";

export const useSocialShare = (initialReactions = 0) => {
  const [copied, setCopied] = useState(false);
  const [reactionCount, setReactionCount] = useState(initialReactions);
  const [hasReacted, setHasReacted] = useState(false);

  // คัดลอกลิงค์ของบทความ.
  const handleCopyLink = async (isLoggedIn = false, onLoginRequired) => {
    if (!isLoggedIn && onLoginRequired) {
      onLoginRequired();
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  // ควบคุมการกดปุ่ม reaction ของบทความ.
  const handleReaction = (isLoggedIn = false, onLoginRequired) => {
    if (!isLoggedIn && onLoginRequired) {
      onLoginRequired();
      return;
    }
    setReactionCount((prev) => (hasReacted ? prev - 1 : prev + 1));
    setHasReacted(!hasReacted);
  };

  // แชร์บทความบนโซเชียลมีเดีย.
  const shareOnSocial = (platform, text = "Check out this article!", isLoggedIn = false, onLoginRequired) => {
    if (!isLoggedIn && onLoginRequired) {
      onLoginRequired();
      return;
    }
    const url = encodeURIComponent(window.location.href);
    const encodedText = encodeURIComponent(text);
    
    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = SHARE_URLS.facebook(url);
        break;
      case "linkedin":
        shareUrl = SHARE_URLS.linkedin(url);
        break;
      case "twitter":
        shareUrl = SHARE_URLS.twitter(url, encodedText);
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return {
    copied,
    reactionCount,
    hasReacted,
    handleCopyLink,
    handleReaction,
    shareOnSocial,
  };
};

