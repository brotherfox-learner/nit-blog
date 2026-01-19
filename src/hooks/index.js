/**
 * Hooks Index
 * Centralized exports for all custom hooks
 * Following DRY principle - single source of truth
 */

// Authentication
export { AuthProvider, useAuth } from './useAuth.jsx';

// Popups
export { usePopups } from './usePopups.jsx';

// Comments
export { useComments } from './useComments.jsx';

// Social Share
export { useSocialShare } from './useSocialShare.jsx';

// Article
export { useArticle } from './useArticle.jsx';

// Blog Posts
export { useBlogPosts } from './useBlogPosts.jsx';

// Form Styles
export { useFormStyles, FORM_STYLES } from './useFormStyles.jsx';
