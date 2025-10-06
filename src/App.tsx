import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Committees from "./components/Committees";
import Secretariat from "./components/Secretariat";
import Gallery from "./components/Gallery";
import Registration from "./components/Registration";
import Footer from "./components/Footer";
import { supabase } from "../supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { User } from "@supabase/supabase-js";
import ScrollToTop from "./ScrollToTop";
import SecretaryGeneralLetter from "./components/SecretaryGeneralLetter";
import Teams from "./components/Teams";
import Sponsors from "./components/sponsors";
import FAQ from "./components/FAQ";
import Collaborators from "./components/Collaborators";
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loadingCheck, setLoadingCheck] = useState(true);
  const [showRegistration, setShowRegistration] = useState(false);
  console.log(user);

  // Check if user already registered in DB
  const checkRegistration = async (email?: string) => {
    const userEmail = email ?? user?.email;
    if (!userEmail) return;

    setLoadingCheck(true);
    const { data, error } = await supabase
      .from("registrations")
      .select("id")
      .eq("email", userEmail)
      .limit(1); // <- only get 1 row

    if (error) {
      console.error("Error checking registration:", error.message);
      setIsRegistered(false);
    } else {
      setIsRegistered(data && data.length > 0); // true if at least 1 row exists
    }
    setLoadingCheck(false);
  };

  // On mount: get current session and listen for auth changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const currentUser = data.session?.user ?? null;
      setUser(currentUser);
      if (currentUser) checkRegistration(currentUser.email);
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        if (currentUser) checkRegistration(currentUser.email);
        else setIsRegistered(false);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  // Handle login / register button
  const handleRegisterClick = async () => {
    if (!user) {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) alert(error.message);
    } else {
      setShowRegistration(true);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else {
      setUser(null);
      setIsRegistered(false);
      setShowRegistration(false);
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 scroll-smooth">
        <Header
          user={user}
          isRegistered={isRegistered}
          loadingCheck={loadingCheck}
          onRegisterClick={handleRegisterClick}
          onLogout={handleLogout}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero onRegisterClick={handleRegisterClick} />
                <About />
                <SecretaryGeneralLetter />
              </div>
            }
          />
          <Route
            path="/committees"
            element={
              <div>
                <Committees />
                {/* <Footer /> */}
              </div>
            }
          />
          <Route
            path="/secretariat"
            element={
              <div>
                <Secretariat />
                <Teams />
                {/* <footer /> */}
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <div>
                <Gallery />
              </div>
            }
          />
          <Route
            path="/sponsors"
            element={
              <div>
                <Collaborators />
                <Sponsors />
              </div>
            }
          />
          <Route
            path="/faq"
            element={
              <div>
                <FAQ />
              </div>
            }
          />
          <Route path="/secretariat" element={<Secretariat />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        {showRegistration && !isRegistered && (
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
                  email={user?.email || ""}
                  closeRegistration={() => setShowRegistration(false)}
                  onRegisterSuccess={checkRegistration}
                />
              </div>
            </div>
          </div>
        )}
        <div className="fixed bottom-6 left-0 w-full overflow-hidden z-50">
          <div className="whitespace-nowrap animate-marquee">
            <div className="inline-block bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white px-6 py-3 rounded-xl shadow-lg border border-purple-400 mx-4">
              <span className="font-bold text-pink-400">FREE FOR ALL</span> – ✨
              Integrated Orientation Session : MUN and Research Training ✨ |
              Registration is Live! 🚀 Limited Seats Available
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
