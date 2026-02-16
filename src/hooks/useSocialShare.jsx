import { useState, useCallback } from "react";
import { useToast } from "../contexts/ToastContext";

// Social media share URLs
const SHARE_URLS = {
  facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  linkedin: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
  twitter: (url, text) => `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
};

/**
 * useSocialShare - จัดการ social sharing และ reactions
 * ย้ายมาจาก src/components/article-page/hooks/useSocialShare.js
 * @param {number} initialReactions - จำนวน reactions เริ่มต้น
 */
export function useSocialShare(initialReactions = 0) {
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const [reactionCount, setReactionCount] = useState(initialReactions);
  const [hasReacted, setHasReacted] = useState(false);

  // คัดลอกลิงค์ของบทความ
  const handleCopyLink = useCallback(async (requireAuth) => {
    if (requireAuth && !requireAuth()) {
      return;
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      // แสดง toast notification
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      showToast(
        "Copied!",
        "This article has been copied to your clipboard.",
        2000
      );
    } catch (err) {
      console.error("Failed to copy link:", err);
      showToast(
        "Failed to copy",
        "Please try again.",
        2000
      );
    }
  }, [showToast]);

  // ควบคุมการกดปุ่ม reaction ของบทความ
  const handleReaction = useCallback((requireAuth, userId) => {
    if (requireAuth && !requireAuth()) {
      return;
    }
    setReactionCount(prev => hasReacted ? prev - 1 : prev + 1);
    setHasReacted(prev => !prev);
    if (hasReacted) {
      onUnlike(userId);
    } else {
      onLike(userId);
    }
  }, [hasReacted]);

  // แชร์บทความบนโซเชียลมีเดีย
  const shareOnSocial = useCallback((platform, text = "Check out this article!", requireAuth) => {
    if (requireAuth && !requireAuth()) {
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
  }, []);

  return {
    reactionCount,
    hasReacted,
    copied,
    handleCopyLink,
    handleReaction,
    shareOnSocial,
  };
}
