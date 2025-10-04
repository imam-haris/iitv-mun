import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


interface HeaderProps {
  onRegisterClick: () => void;
  onLogout: () => void;
  user: User | null;
  isRegistered: boolean;
  loadingCheck: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onRegisterClick,
  onLogout,
  user,
  isRegistered,
  loadingCheck,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Committees", href: "/committees" },
    { name: "Secretariat", href: "/secretariat" },
    { name: "Gallery", href: "/gallery" },
    { name: "Partners", href: "/sponsors" },
    { name: "FAQ", href: "/faq" }
  ];

  const renderButtonText = () => {
    if (!user) return "Login / Register";
    if (loadingCheck) return "Checking...";
    if (isRegistered) return "Registered";
    return "Register";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#1f073c]/1 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
          <div className="border-l-2 border-purple-400 pl-4">
            <h1 className="text-white font-bold text-lg sm:text-xl">IITBHU MUN</h1>
            <h2 className="text-white font-bold text-xs sm:text-sm">14TH EDITION</h2>
            <p className="text-purple-300 text-xs sm:text-sm">Rise. Speak. Resolve.</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <span
              key={item.name}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              <Link to={item.href}>{item.name}</Link>
            </span>
          ))}

          {!user ? (
            <button
              onClick={onRegisterClick}
              className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300"
            >
              {renderButtonText()}
            </button>
          ) : (
            <>
              <button
                onClick={onRegisterClick}
                disabled={isRegistered || loadingCheck}
                className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${isRegistered
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                  }`}
              >
                {renderButtonText()}
              </button>

              <button
                onClick={onLogout}
                className="px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all duration-300"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 pb-6 border-t border-purple-500/20">
          <nav className="flex flex-col space-y-3 pt-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {!user ? (
              <button
                onClick={() => {
                  onRegisterClick();
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center"
              >
                {renderButtonText()}
              </button>
            ) : (
              <>
                <button
                  onClick={() => {
                    onRegisterClick();
                    setIsMenuOpen(false);
                  }}
                  disabled={isRegistered || loadingCheck}
                  className={`px-6 py-2 rounded-full text-white transition-all duration-300 ${isRegistered
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                    } text-center`}
                >
                  {renderButtonText()}
                </button>

                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false);
                  }}
                  className="px-4 py-2 rounded-full text-white bg-red-600 hover:bg-red-700 transition-all duration-300 text-center"
                >
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>

  );
};

export default Header;
