import "./App.css";
import { NavBar, Footer } from "./components/layout";
import LandingPage from "./components/landing-page/LandingPage";
import { ActionButtonGroup } from "./components/common";

function App() {
  return (
    <>
      {/* <h1><ActionButton variant="like" size="md" /></h1> */}
      <div className="flex items-center gap-2">
        Hello World
        <ActionButtonGroup
          actions={["like", "share"]}
          size="lg"
          showOnHover={true}
        />
      </div>
      <NavBar />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
