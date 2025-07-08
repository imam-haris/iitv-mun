import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import collegeImage from '../assets/college_img.png';
import logo from '../assets/logo.png';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-02-21T00:00:00').getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-[#1f073c] relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={collegeImage}
          alt="IIT BHU Building"
          className="w-full h-full object-cover opacity-40"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-[#1f073c] opacity-60" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[30%] w-32 h-32 border-4 border-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-[30%] right-[20%] w-16 h-16 bg-purple-500/10 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-0 left-[45%] w-0.5 h-full bg-gradient-to-b from-purple-300/40 via-transparent to-transparent rotate-12 animate-pulse" />
        <div className="absolute top-1/4 right-[35%] w-0.5 h-64 bg-gradient-to-b from-purple-500/30 to-transparent rotate-12 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-400/20 rotate-45 animate-pulse blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/3 w-10 h-10 border-2 border-purple-300/20 rotate-45 blur-sm"></div>
        <div className="absolute bottom-[10%] left-[15%] w-3 h-3 bg-purple-400/30 rounded-full blur-sm animate-ping"></div>
        <div className="absolute top-[60%] right-[10%] w-2 h-2 bg-purple-300/20 rounded-full blur-sm animate-pulse"></div>
      </div>

      {/* Top Left - Logo and Text (shifted down) */}
      <div className="absolute top-20 left-6 z-10 flex items-center space-x-4">
        <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
        <div className="border-l-2 border-purple-400 pl-4">
          <h1 className="text-white font-bold text-xl sm:text-2xl">IITBHU MUN</h1>
          <h2 className="text-white font-bold text-sm sm:text-base">14TH EDITION</h2>
          <p className="text-purple-300 text-sm font-medium">Rise. Speak. Resolve.</p>
        </div>
      </div>

      {/* Centered Content */}
      <div className="flex justify-center items-center min-h-screen relative z-10 px-4 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">IITBHU</h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">MODEL UNITED NATIONS</h1>
          <p className="text-xl md:text-2xl text-purple-300 font-medium mt-4">RISE. SPEAK. RESOLVE.</p>
          <p className="text-lg md:text-xl text-white font-medium mt-1">28–30 OCTOBER 2025</p>

          <div className="mt-6">
            <a
              href="#register"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </a>
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
