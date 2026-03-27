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

- **React 19.2.0**
- **Vite 7.2.4**
- **Tailwind CSS 4.1.18**
- **shadcn/ui** (Radix UI components)
- **lucide-react** (Icons)
- **React Router DOM 7.11.0**
- **Supabase** (Backend/Database)
- **React Hook Form** (Form handling)
- **React Markdown** (Markdown rendering)
- **Axios** (HTTP client)

---

## 📁 Project Structure

```text
src/
├─ pages/             # Page components
│  ├─ LandingPage.jsx
│  ├─ AboutPage.jsx
│  ├─ LogInPage.jsx
│  ├─ SignUpPage.jsx
│  ├─ ArticlePage.jsx
│  ├─ HealthPage.jsx
│  ├─ AdminPage.jsx
│  ├─ MemberPage.jsx
│  └─ NotFoundPage.jsx
├─ components/        # Reusable components
│  ├─ landing-page/   # Landing page specific components
│  ├─ admin-page/     # Admin page components
│  ├─ article-page/   # Article/blog page components
│  ├─ member-page/    # Member page components
│  ├─ not-found-page/ # 404 page components
│  ├─ ui/             # shadcn/ui components (Button, dropdown-menu, etc.)
│  ├─ layout/         # Layout components (Header, Footer, Layout)
│  ├─ blog/           # Blog-related components (BlogCard, BlogList, BlogPost)
│  └─ common/         # Reusable shared components (Loading, Error)
├─ api/               # API functions and services
├─ constants/         # Constants and configuration (routes, config)
├─ contexts/          # React contexts for state management
├─ data/              # Static data and mock data
├─ hooks/             # Custom React hooks
├─ lib/               # Utilities and helpers (cn function, etc.)
├─ assets/            # Static assets
│  ├─ images/         # Image files
│  └─ icons/           # Icon files
├─ App.jsx            # Main App component
├─ App.css            # App-specific styles
├─ index.css          # Global styles
└─ main.jsx           # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nit-blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 📝 Features Details

### Blog Management
- Create, read, update, and delete blog posts
- Markdown support for rich content
- Category and tag organization
- Search functionality

### User Interface
- Modern, responsive design
- Dark/light mode toggle
- Mobile-friendly navigation
- Smooth animations and transitions

### Backend Integration
- Supabase for authentication and database
- RESTful API design
- Real-time updates
- File upload support

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- [Live Demo](#) (Add your live demo link)
- [Documentation](./CODE_DOCUMENTATION.md)
- [Architecture](./ARCHITECTURE.md)
