/**
 * API Index - รวม exports จากทุก API modules
 * ตรงกับ routes ใน nit-blog-server
 */

// Posts - /posts
export {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "./postsAPI.js";

// Users - /users
export {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "./usersAPI.js";

// Statuses - /statuses
export {
  getStatuses,
  getStatusById,
} from "./statusesAPI.js";

// Categories - /categories
export {
  fetchCategories,
  fetchCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "./categoryAPI.js";

// Likes - /likes
export {
  getLikesByPostId,
  checkUserLiked,
  likePost,
  unlikePost,
} from "./likesAPI.js";

// Comments - /comments
export {
  createComment,
  getCommentsByPostId,
  getCommentsByUserId,
  updateCommentById,
  deleteCommentById,
  fetchCommentsByPostId,
} from "./commentAPI.js";

// Auth - /auth
export {
  signUp,
  signIn,
  getMe,
  updateMe,
} from "./authAPI.js";
