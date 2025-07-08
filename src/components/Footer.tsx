import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';

const Footer = () => {
  const sponsors = [
    { name: 'UN Logo', logo: '🇺🇳' },
    { name: 'IIT BHU', logo: '🏛️' },
    { name: 'UNESCO', logo: '🌍' },
    { name: 'UNICEF', logo: '🧒' },
    { name: 'WHO', logo: '🏥' },
    { name: 'World Bank', logo: '🏦' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Secretariat', href: '#secretariat' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Register', href: '#register' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Sponsors Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Partners & Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <span className="text-2xl">{sponsor.logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">IIT</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">IIT BHU MUN</h3>
                <p className="text-purple-300 text-sm">Rise. Speak. Resolve.</p>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Join us at IITBHU MUN 2025 for an unforgettable diplomatic experience that will shape your future in international relations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-purple-200 hover:text-purple-300 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="text-purple-400" size={16} />
                <span className="text-purple-200 text-sm">iitbhumun2025@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-purple-400" size={16} />
                <span className="text-purple-200 text-sm">+91-9999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-purple-400" size={16} />
                <span className="text-purple-200 text-sm">IIT BHU, Varanasi, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="text-purple-400" size={16} />
                <span className="text-purple-200 text-sm">21-23 February 2025</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/40 transition-all duration-300 hover:scale-110"
                >
                  <span className="text-purple-300 text-xs font-bold">
                    {social.name.slice(0, 2).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Globe className="text-purple-400" size={16} />
                <span className="text-purple-200 text-sm">www.iitbhumun.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-purple-300 text-sm mb-4 md:mb-0">
              © 2025 IIT BHU Model United Nations. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-purple-300 hover:text-purple-200 text-sm transition-colors">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;