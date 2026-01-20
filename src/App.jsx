import "./App.css";
import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/article/:postId" element={<ArticlePage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
