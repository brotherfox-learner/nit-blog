// Main exports for article page components
export { default as ArticleContent } from "./ArticleContent";
export { default as SocialShare } from "./SocialShare";
export { default as CommentSection } from "./CommentSection";

// Sub-components exports
export { default as ArticleHero } from "./components/ArticleHero";
export { default as ArticleBody } from "./components/ArticleBody";
export { default as AuthorCard } from "./components/AuthorCard";
export { default as ReactionButton } from "./components/ReactionButton";
export { default as CopyLinkButton } from "./components/CopyLinkButton";
export { default as SocialMediaButtons } from "./components/SocialMediaButtons";
export { default as Comment } from "./components/Comment";
export { default as CommentForm } from "./components/CommentForm";

// Hooks exports
export { useSocialShare } from "./hooks/useSocialShare";
export { useComments } from "./hooks/useComments";

// Constants and data exports
export { CATEGORY_COLORS, SHARE_URLS, LINKEDIN_IN_PATH } from "./constants";
export { articleData, articleSections } from "../../data/articleData";

