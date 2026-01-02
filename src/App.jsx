import "./App.css";
import { NavBar, Footer } from "./components/layout";
import LandingPage from "./components/landing-page/LandingPage";
import LogInPage from "./components/AuthPage/LogInPage";
import SignUpPage from "./components/AuthPage/SignUpPage";

function App() {
  return (
    <>
      {/* <NavBar />
      <LandingPage />
      <Footer /> */}
      <LogInPage />
      {/* <SignUpPage /> */}
    </>
  );
}

export default App;
