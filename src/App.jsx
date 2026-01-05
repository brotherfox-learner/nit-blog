import "./App.css";
import { NavBar, Footer } from "./components/layout";
import LandingPage from "./components/landing-page/LandingPage";
import ArticlePage from "./components/article-page/Article";
function App() {
  return (
    <>
      {/* <NavBar />
      <LandingPage />
      <Footer />  */}
      <ArticlePage /> 
    </>
  );
}

export default App;
