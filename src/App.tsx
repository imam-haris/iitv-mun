import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Committees from "./components/Committees";
import Secretariat from "./components/Secretariat";
import Gallery from "./components/Gallery";
// import FAQ from './components/FAQ';
import Registration from "./components/Registration";
import Footer from "./components/Footer";

function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    if (showRegistration) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto"; // restore scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showRegistration]);

  return (
    <div className="min-h-screen bg-gray-900 scroll-smooth">
      <Header onRegisterClick={() => setShowRegistration(true)} />
      <Hero onRegisterClick={() => setShowRegistration(true)} />
      <About />
      <Committees />
      <Secretariat />
      <Gallery />
      {/* <FAQ /> */}

      {showRegistration && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-center items-center overflow-y-auto">
          <div className="bg-[#1f073c] rounded-xl shadow-2xl w-[95%] max-w-6xl p-8 relative overflow-hidden">
            <button
              onClick={() => setShowRegistration(false)}
              className="absolute top-4 right-4 text-white hover:text-purple-300 text-xl z-10"
            >
              ✕
            </button>
            <div className="overflow-y-auto max-h-[90vh] pr-4">
              <Registration
                closeRegistration={() => setShowRegistration(false)}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
