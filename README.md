# nit-blog

**nit-blog** is a modern blog application built with **React (Vite)**, **Tailwind CSS**, and **shadcn/ui**.  
This project is created for writing, organizing, and presenting blog content with a clean UI and a scalable, developer-friendly front-end architecture.

---

## ✨ Features

- ⚡ Built with **Vite + React** for fast development and performance
- 🎨 Styled using **Tailwind CSS**
- 🧩 Reusable UI components powered by **shadcn/ui**
- 🖼️ Icons from **lucide-react**
- 📝 Markdown-based blog content
- 🧱 Clean and scalable project structure
- 📱 Fully responsive design
- 🌙 Ready for dark mode support

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **shadcn/ui**
- **lucide-react**
- **React Router**

---

## 📁 Project Structure

```text
src/
├─ landing-page/       # Landing page components
│  ├─ NavBar/         # Navigation bar components
│  │  ├─ NavBar.jsx
│  │  ├─ Logo.jsx
│  │  ├─ HamburgerBar.jsx
│  │  ├─ LogInBtn.jsx
│  │  └─ SignUpBtn.jsx
│  ├─ HeroSection/    # Hero section components
│  │  ├─ HeroSection.jsx
│  │  ├─ AuthorTitle.jsx
│  │  ├─ AuthorPic.jsx
│  │  └─ AuthorDesciption.jsx
│  └─ LandingPage.jsx # Main landing page
├─ components/
│  ├─ ui/             # shadcn/ui components (Button, dropdown-menu, etc.)
│  ├─ layout/         # Layout components (Header, Footer, Layout)
│  ├─ blog/           # Blog-related components (BlogCard, BlogList, BlogPost)
│  └─ common/         # Reusable shared components (Loading, Error)
├─ api/               # API functions and services
├─ constants/         # Constants and configuration (routes, config)
├─ hooks/             # Custom React hooks
├─ lib/               # Utilities and helpers (cn function, etc.)
├─ types/             # Type definitions (JSDoc types)
├─ assets/            # Static assets
│  ├─ images/         # Image files
│  └─ icons/           # Icon files
├─ App.jsx            # Main App component
├─ App.css            # App-specific styles
├─ index.css          # Global styles
└─ main.jsx           # Application entry point
