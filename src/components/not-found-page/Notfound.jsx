import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="grow flex flex-col items-center gap-4 justify-center min-h-[60vh] px-4 py-8">
        <div className="w-18 h-18 bg-white border-5 border-black rounded-full flex items-center justify-center mb-6">
          <span className="text-black text-5xl font-bold">!</span>
        </div>
        <h1 className="text-4xl font-bold text-black mb-8">Page Not Found</h1>
        <Link 
          to="/" 
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Go To Homepage
        </Link>
      </main>
      <Footer />
    </div>
  );
}