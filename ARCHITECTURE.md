# NIT Blog - Architecture Documentation

## 📁 โครงสร้างโปรเจค (Project Structure)

```
src/
├── api/                    # API configurations
├── assets/                 # Static assets (images, icons)
├── components/             # React Components
│   ├── article-page/       # Article page specific components
│   ├── blog/               # Blog list components
│   ├── common/             # Reusable UI components
│   ├── landing-page/       # Landing page components
│   ├── layout/             # Layout components (NavBar, Footer)
│   └── ui/                 # Base UI components (shadcn)
├── constants/              # App constants & design tokens
├── data/                   # Data fetching functions
├── hooks/                  # Custom React Hooks ⭐
├── lib/                    # Utility functions
└── pages/                  # Page components
```

---

## 🎯 หลักการที่ใช้ (Design Principles)

### 1. DRY (Don't Repeat Yourself)
- **Custom Hooks**: แยก logic ที่ซ้ำกันออกมาเป็น hooks
- **Shared Styles**: รวม styles ที่ใช้ซ้ำไว้ใน `useFormStyles`
- **Constants**: รวม design tokens ไว้ที่ `constants/design.js`

### 2. Loose Coupling
- **Context API**: ใช้ `AuthContext` แทน prop drilling
- **Hook Abstraction**: Components ไม่ต้องรู้ว่า data มาจากไหน

### 3. Single Responsibility
- แต่ละ hook มีหน้าที่เดียว
- Components แยกตาม feature/page

---

## 🪝 Custom Hooks

ทุก hooks อยู่ที่ `src/hooks/` และ export ผ่าน `index.js`

### Authentication

#### `useAuth()`
จัดการ authentication state และ login popup

```jsx
import { useAuth } from "../hooks";

function MyComponent() {
  const { 
    isLoggedIn,           // boolean - สถานะ login
    user,                 // object - ข้อมูล user
    login,                // function - login user
    logout,               // function - logout user
    isLoginPopupOpen,     // boolean - สถานะ popup
    openLoginPopup,       // function - เปิด popup
    closeLoginPopup,      // function - ปิด popup
    requireAuth,          // function - helper เช็ค auth ก่อนทำ action
  } = useAuth();
  
  // ใช้ requireAuth สำหรับ actions ที่ต้อง login
  const handleLike = () => {
    if (requireAuth()) {
      // ทำ action ได้
    }
    // ถ้าไม่ได้ login จะเปิด popup อัตโนมัติ
  };
}
```

### Data Fetching

#### `useArticle(postId)`
Fetch ข้อมูลบทความตาม ID

```jsx
import { useArticle } from "../hooks";

function ArticlePage() {
  const { article, isLoading, error, refetch } = useArticle(postId);
  
  if (isLoading) return <Loading />;
  if (error) return <Error message={error} />;
  
  return <Article data={article} />;
}
```

#### `useBlogPosts(options)`
Fetch และ pagination ของ blog posts

```jsx
import { useBlogPosts } from "../hooks";

function BlogList() {
  const {
    posts,            // array - รายการ posts
    isLoading,        // boolean - กำลังโหลดครั้งแรก
    isFetchingMore,   // boolean - กำลังโหลดเพิ่ม
    hasMoreData,      // boolean - มีข้อมูลเพิ่มอีกไหม
    fetchMore,        // function - โหลดเพิ่ม
    refetch,          // function - โหลดใหม่
  } = useBlogPosts({
    category: "Cat",      // หมวดหมู่ (default: "All")
    searchQuery: "",      // คำค้นหา
    limit: 6,             // จำนวนต่อหน้า
  });
}
```

### Social Features

#### `useSocialShare(initialReactions)`
จัดการ social sharing และ reactions

```jsx
import { useSocialShare, useAuth } from "../hooks";

function ShareSection() {
  const { requireAuth } = useAuth();
  const {
    copied,           // boolean - copied link แล้วหรือยัง
    reactionCount,    // number - จำนวน reactions
    hasReacted,       // boolean - user กด react แล้วหรือยัง
    handleCopyLink,   // function - copy link
    handleReaction,   // function - toggle reaction
    shareOnSocial,    // function - share บน social media
  } = useSocialShare(321);
  
  // ใช้กับ requireAuth
  <button onClick={() => handleReaction(requireAuth)}>Like</button>
}
```

#### `useComments(initialComments)`
จัดการ comments

```jsx
import { useComments, useAuth } from "../hooks";

function CommentSection() {
  const { requireAuth } = useAuth();
  const {
    comments,         // array - รายการ comments
    commentText,      // string - ข้อความที่กำลังพิมพ์
    setCommentText,   // function - set ข้อความ
    handleSubmit,     // function - submit comment
  } = useComments(initialComments);
  
  // ใช้กับ requireAuth
  <form onSubmit={(e) => handleSubmit(e, requireAuth)}>
    ...
  </form>
}
```

### Form Styling

#### `useFormStyles()`
Styles สำหรับ form inputs (ใช้ใน Login/Signup)

```jsx
import { useFormStyles } from "../hooks";

function LoginForm() {
  const {
    getInputClassName,    // function(hasError) - return className
    labelStyles,          // string - label className
    errorStyles,          // string - error message className
    submitButtonStyles,   // string - submit button className
  } = useFormStyles();
  
  return (
    <input className={getInputClassName(errors.email)} />
  );
}
```

---

## 🔄 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   AuthProvider                       │    │
│  │  (provides: isLoggedIn, requireAuth, popup state)   │    │
│  │                                                      │    │
│  │  ┌─────────────────────────────────────────────┐    │    │
│  │  │              Page Components                 │    │    │
│  │  │                                              │    │    │
│  │  │  useAuth() ←── context                      │    │    │
│  │  │  useArticle() ←── fetch data                │    │    │
│  │  │  useBlogPosts() ←── fetch data              │    │    │
│  │  │  useSocialShare() ←── local state           │    │    │
│  │  │  useComments() ←── local state              │    │    │
│  │  │                                              │    │    │
│  │  └─────────────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ ก่อน vs หลัง Refactoring

### ❌ ก่อน (Prop Drilling)
```jsx
// ArticlePage.jsx
<ArticleContent 
  isLoggedIn={isLoggedIn}
  openLoginPopup={openLoginPopup}
/>

// ArticleContent.jsx
<SocialShareSection 
  isLoggedIn={isLoggedIn}
  openLoginPopup={openLoginPopup}
/>

// SocialShareSection.jsx
onClick={() => handleReaction(isLoggedIn, openLoginPopup)}
```

### ✅ หลัง (Context + Hooks)
```jsx
// ArticlePage.jsx
<ArticleContent articleData={...} />  // ไม่ต้องส่ง auth props

// SocialShareSection.jsx
const { requireAuth } = useAuth();
onClick={() => handleReaction(requireAuth)}
```

### ❌ ก่อน (Duplicated Logic)
```jsx
// NewBlogList.jsx
const [posts, setPosts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
// ... 50+ lines of fetch logic

// Another component ที่ต้องการ fetch posts
// ... copy paste 50+ lines
```

### ✅ หลัง (Reusable Hook)
```jsx
// NewBlogList.jsx
const { posts, isLoading, fetchMore } = useBlogPosts({ category, limit });

// Another component
const { posts } = useBlogPosts({ category: "Cat" });
```

---

## 📝 วิธีเพิ่ม Feature ใหม่

### 1. เพิ่ม Custom Hook
```jsx
// src/hooks/useNewFeature.js
export function useNewFeature() {
  // logic here
  return { ... };
}
```

### 2. Export จาก index.js
```jsx
// src/hooks/index.js
export { useNewFeature } from './useNewFeature';
```

### 3. ใช้งานใน Component
```jsx
import { useNewFeature } from "../hooks";
```

---

## 🚀 Best Practices

1. **ใช้ hooks จาก `src/hooks` เท่านั้น** - ไม่สร้าง hooks ใน component folders
2. **ใช้ `requireAuth` สำหรับ protected actions** - ไม่ต้องเช็ค `isLoggedIn` เอง
3. **Export ผ่าน index.js** - สะดวกในการ import
4. **แยก concerns** - hook หนึ่งทำหน้าที่หนึ่ง

---

## 📚 Files Changed

| File | การเปลี่ยนแปลง |
|------|---------------|
| `src/main.jsx` | เพิ่ม `AuthProvider` wrapper |
| `src/hooks/index.js` | Export ทุก hooks |
| `src/hooks/useAuth.js` | **ใหม่** - Auth context |
| `src/hooks/useArticle.js` | **ใหม่** - Fetch article |
| `src/hooks/useBlogPosts.js` | **ปรับปรุง** - Fetch posts |
| `src/hooks/useComments.js` | **ย้ายมา** - Comments logic |
| `src/hooks/useSocialShare.js` | **ย้ายมา** - Social share logic |
| `src/hooks/usePopups.js` | **ย้ายมา** - Popup state |
| `src/hooks/useFormStyles.js` | **ใหม่** - Form styles |
| `src/pages/ArticlePage.jsx` | ใช้ hooks + context |
| `src/pages/LogInPage.jsx` | ใช้ `useFormStyles` |
| `src/pages/SignUpPage.jsx` | ใช้ `useFormStyles` |
| `src/components/article-page/*` | ลบ prop drilling |
| `src/components/blog/NewBlogList.jsx` | ใช้ `useBlogPosts` |

---

*Last updated: January 2026*
