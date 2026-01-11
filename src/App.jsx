import "./App.css";
import LandingPage from "./pages/LandingPage";
import ArticlePage from "./pages/ArticlePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/article" element={<ArticlePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}
export default App;
