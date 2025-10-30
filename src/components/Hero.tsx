import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import collegeImage from "../assets/college_img.png";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface HeroProps {
  onRegisterClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick = () => { } }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-31T00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeData = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section id="home" className="min-h-screen bg-[#1f073c] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={collegeImage}
          alt="IIT BHU Building"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-[#1f073c] opacity-60" />
      </div>

      {/* Main content */}
      <div className="flex justify-center items-center min-h-screen relative z-10 px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="font-bold text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block sm:inline">IITBHU <br /></span>{" "}
            <span className="block sm:inline">MODEL UNITED NATIONS</span>
          </h1>


          <p className="text-lg sm:text-xl md:text-2xl text-purple-300 font-medium mt-4">
            RISE. SPEAK. RESOLVE.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white font-medium mt-1">
            31st OCTOBER – 2nd NOVEMBER 2025
          </p>

          {/* Register Button */}
          <div className="mt-6">
            <button
            disabled = {true}
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transition-all duration-300"
            >
              Register
            </button>
          </div>

          {/* Floating Glass Countdown */}
          {/* Floating Glass Countdown (Compact) */}
          <div className="mt-10">
            <p className="italic text-purple-200 text-lg mb-4">
              IITBHU MUN 2025 Begins In...
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {timeData.map((item) => (
                <div
                  key={item.label}
                  className="backdrop-blur-md bg-white/10 border border-purple-400/30 rounded-xl 
                   px-4 py-2 w-24 sm:w-28 md:w-32 shadow-[0_0_12px_rgba(168,85,247,0.25)] 
                   transform transition-all duration-300 hover:scale-105 
                   hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] animate-float"
                >
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-0.5">
                    {String(item.value).padStart(2, "0")}
                  </h2>
                  <p className="text-[10px] sm:text-xs text-purple-300 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-white/60" size={32} />
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
