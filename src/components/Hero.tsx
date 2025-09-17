import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import collegeImage from "../assets/college_img.png";
import logo from "../assets/logo.png";

const Hero = ({ onRegisterClick = () => {} }) => {
  const [timeLeft, setTimeLeft] = useState({
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
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#1f073c] relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={collegeImage}
          alt="IIT BHU Building"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0 bg-[#1f073c] opacity-60" />
      </div>
      <div className="absolute top-20 left-6 z-10 flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        <div className="border-l-2 border-purple-400 pl-4">
          <h1 className="text-white font-bold text-xl sm:text-2xl">
            IITBHU MUN
          </h1>
          <h2 className="text-white font-bold text-sm sm:text-base">
            14TH EDITION
          </h2>
          <p className="text-purple-300 text-sm font-medium">
            Rise. Speak. Resolve.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen relative z-10 px-4 text-center">
        <div className="max-w-3xl">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
  IITBHU <br  /> MODEL UNITED NATIONS
</h1>

          <p className="text-xl md:text-2xl text-purple-300 font-medium mt-4">
            RISE. SPEAK. RESOLVE.
          </p>
          <p className="text-lg md:text-xl text-white font-medium mt-1">
            31st OCTOBER – 2nd NOVEMBER 2025
          </p>

          <div className="mt-6 flex flex-col items-center justify-center text-center">
            <button
              onClick={onRegisterClick}
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
            <div className="mt-6">
              <p className="italic text-purple-200 text-lg mb-2">
                IITBHU MUN 2025 Begins In...
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded shadow-md">
                  <div className="text-2xl font-bold text-white">
                    {timeLeft.days}
                  </div>
                  <div className="text-sm text-purple-300">Days</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded shadow-md">
                  <div className="text-2xl font-bold text-white">
                    {timeLeft.hours}
                  </div>
                  <div className="text-sm text-purple-300">Hours</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded shadow-md">
                  <div className="text-2xl font-bold text-white">
                    {timeLeft.minutes}
                  </div>
                  <div className="text-sm text-purple-300">Minutes</div>
                </div>
                <div className="text-2xl font-bold text-white">:</div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded shadow-md">
                  <div className="text-2xl font-bold text-white">
                    {timeLeft.seconds}
                  </div>
                  <div className="text-sm text-purple-300">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
