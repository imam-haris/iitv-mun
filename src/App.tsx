import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Committees from "./components/Committees";
// import Secretariat from "./components/Secretariat";
// import Gallery from "./components/Gallery";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Secretariat from "./components/Secretariat";
import Gallery from "./components/Gallery";

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
    <Router>
      <div className="min-h-screen bg-gray-900 scroll-smooth">
        {/* <Header onRegisterClick={() => setShowRegistration(true)} />
        <Hero onRegisterClick={() => setShowRegistration(true)} /> */}

        {/* <About />
      <Committees />
      <Secretariat />
      <Gallery /> */}
        {/* <FAQ /> */}

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header onRegisterClick={() => setShowRegistration(true)} />
                <Hero onRegisterClick={() => setShowRegistration(true)} />
                <About />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Header onRegisterClick={() => setShowRegistration(true)} />
                <About />
                <Footer />
              </div>
            }
          />
          <Route
            path="/committees"
            element={
              <div>
                <Header onRegisterClick={() => setShowRegistration(true)} />
                <Committees />
                <Footer />
              </div>
            }
          />
          <Route
            path="/secretariat"
            element={
              <div>
                <Header onRegisterClick={() => setShowRegistration(true)} />
                <Secretariat />
                <footer />
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <div>
                <Header onRegisterClick={() => setShowRegistration(true)} />
                <Gallery />
                <footer />
              </div>
            }
          />
          {/* <Route path="/secretariat" element={<Secretariat />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes> */}
        </Routes>

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

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
