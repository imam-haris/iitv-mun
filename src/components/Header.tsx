import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png.png'; // Adjust path if needed

interface HeaderProps {
  onRegisterClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Committees', href: '#committees' },
    { name: 'Secretariat', href: '#secretariat' },
    { name: 'Gallery', href: '#gallery' },
    // { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f073c]/50 backdrop-blur-lg shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo section if needed */}
          <div className="flex items-center space-x-3"></div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={onRegisterClick}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Register
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
            <nav className="flex flex-col space-y-3 pt-4">
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
              <button
                onClick={() => {
                  onRegisterClick();
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-purple-700 transition-all duration-300 text-center"
              >
                Register
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
