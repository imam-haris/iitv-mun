import { createClient, SupabaseClient } from "@supabase/supabase-js";
import React, { useState } from "react";

const SUPABASE_URL = "https://oauanxichcsmshpzhfdb.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdWFueGljaGNzbXNocHpoZmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAwMjU3NTEsImV4cCI6MjA3NTYwMTc1MX0.6Q6deCwHsaVIXkQtru1TGa_Q8npLHec5PWa4Zrn31qE";
const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

const Session: React.FC = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userName = localStorage.getItem("userName");
  const userPhone = localStorage.getItem("userPhone");
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  const handleJoinClick = async () => {
    if (!userEmail) {
      alert("Please log in to join the session!");
      return;
    }
    setShowJoinPopup(true);
  };

  const confirmJoin = async () => {
    if (!userEmail) return;
    try {
      const { error } = await supabase
        .from("session_participants")
        .insert([{ name: userName, email: userEmail, phone: userPhone }]);

      if (error) throw error;
      alert("🎉 You have successfully joined the session!");
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : err && typeof err === "object" && "message" in err
          ? String((err as any).message)
          : String(err);
      console.error("Error joining session:", message);
      alert("❌ Something went wrong while joining. Try again.");
    } finally {
      setShowJoinPopup(false);
    }
  };

  return (
    <>
      {/* Join Confirmation Popup */}
      {showJoinPopup && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#2b0a4a] text-white p-8 rounded-xl shadow-2xl text-center max-w-sm">
            <h2 className="text-2xl font-bold mb-4">Join the Session?</h2>
            <p className="mb-6 text-purple-200">
              Confirm to officially join the orientation session. 🌟
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmJoin}
                className="bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Yes, Join
              </button>
              <button
                onClick={() => setShowJoinPopup(false)}
                className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 💻 Desktop Announcement Card */}
      <div className="hidden md:block">
        {showAnnouncement ? (
          <div className="fixed right-6 top-1/2 transform translate-y-[20%] z-40 transition-all">
            <div className="relative bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white p-5 rounded-2xl shadow-2xl w-80 border border-purple-400 animate-glow overflow-hidden">
              {/* shining overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>

              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute top-2 right-3 text-white text-lg font-bold hover:text-pink-400 transition-all z-10"
              >
                ✕
              </button>
              <h3 className="font-bold text-pink-400 text-lg mb-2 relative z-10">
                FREE FOR ALL
              </h3>
              <p className="text-sm mb-4 leading-relaxed relative z-10">
                ✨ Integrated Orientation Session : MUN and Research Training ✨
                <br />
                Registration is Live! 🚀 Limited Seats Available
              </p>
              <button
                onClick={() => handleJoinClick()}
                className="bg-pink-600 hover:bg-pink-700 w-full py-2 rounded-lg font-semibold shadow-lg transition-all relative z-10"
              >
                Join the Session
              </button>
            </div>
          </div>
        ) : (
          <div className="fixed right-6 top-1/2 transform translate-y-[20%] z-30">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>

            <button
              onClick={() => setShowAnnouncement(true)}
              className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white px-4 py-2 rounded-full shadow-lg font-semibold hover:scale-105 transition-all"
            >
              🔔 Show Announcement
            </button>
          </div>
        )}
      </div>

      {/* 📱 Mobile Floating Button & Slide-in Card */}
      <div className="md:hidden">
        {!showAnnouncement && (
          <button
            onClick={() => setShowAnnouncement(true)}
            className="fixed bottom-20 right-5 z-40 bg-gradient-to-r from-purple-700 to-indigo-900 text-white p-3 rounded-full shadow-lg text-xl hover:scale-110 transition-all"
          >
            🔔
          </button>
        )}

        {showAnnouncement && (
          <div className="fixed bottom-0 right-0 w-80 max-w-[90%] bg-gradient-to-r from-purple-700 via-purple-900 to-indigo-900 text-white p-5 rounded-tl-2xl shadow-2xl border border-purple-400 z-50 animate-slideIn animate-glow overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>

            <button
              onClick={() => setShowAnnouncement(false)}
              className="absolute top-2 right-3 text-white text-lg font-bold hover:text-pink-400 transition-all z-10"
            >
              ✕
            </button>
            <h3 className="font-bold text-pink-400 text-lg mb-2 relative z-10">
              FREE FOR ALL
            </h3>
            <p className="text-sm mb-4 leading-relaxed relative z-10">
              ✨ Integrated Orientation Session : MUN and Research Training ✨
              <br />
              Registration is Live! 🚀 Limited Seats Available
            </p>
            <button
              onClick={() => handleJoinClick()}
              className="bg-pink-600 hover:bg-pink-700 w-full py-2 rounded-lg font-semibold shadow-lg transition-all relative z-10"
            >
              Join the Session
            </button>
          </div>
        )}
      </div>

      {/* ✨ Animations */}
      <style>
        {`
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideIn 0.4s ease-out;
          }

          /* Soft pulsing glow */
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(236,72,153,0.3); }
            50% { box-shadow: 0 0 40px rgba(236,72,153,0.6); }
          }
          .animate-glow {
            animation: glow 2.5s ease-in-out infinite;
          }

          /* Shimmer line moving across */
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-shine {
            animation: shine 3s linear infinite;
          }
        `}
      </style>
    </>
  );
};

export default Session;
