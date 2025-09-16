import React from 'react';
import { Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';
import logo from '../assets/logo.png';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import un from '../assets/union.png';
import suzuki from '../assets/suzuki.png';
import debating from '../assets/debating.png';
import bhubaneshwar from '../assets/bhub_mun.png';
import rao from '../assets/rao.png';
import vision from '../assets/vision.png';
const Footer = () => {
  const sponsors = [
    { name: 'UNION', logo: un },
    { name: 'deb', logo: debating },
    { name: 'mun', logo: bhubaneshwar },
    { name: 'IAS', logo: rao },
    { name: 'VISION', logo: vision },
    { name: 'car', logo: suzuki } // 👈 new example image
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Committees', href: '/committees' },
    { name: 'Secretariat', href: '/secretariat' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/iitbhumun', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/iitbhu_mun/?hl=en', icon: Instagram },
    { name: 'Twitter', href: 'https://www.twitter.com/iitbhumun', icon: Twitter },
    { name: 'LinkedIn', href: 'https://in.linkedin.com/company/iitbhumun', icon: Linkedin }
  ];

  return (
    <footer className="bg-[#1f073c] py-16 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 left-1/4 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400/20 rotate-45"></div>
        <div className="absolute bottom-1 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-300/30 to-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Partners & Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div 
                key={index}
                className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 overflow-hidden"
              >
                {typeof sponsor.logo === "string" && sponsor.logo.length <= 3 ? (
                  <span className="text-2xl">{sponsor.logo}</span>
                ) : (
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="w-full h-full object-contain" 
                  />
                )}
              </div>
            ))}
          </div>
        </div> */}

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400/40 to-purple-600/40 rounded-full flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">IITBHU MUN</h3>
                <p className="text-purple-300 text-sm">Rise. Speak. Resolve.</p>
              </div>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Join us at IITBHU MUN 2025 for an unforgettable diplomatic experience that will shape your future in international relations.
            </p>
          </div>

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
                <span className="text-purple-200 text-sm">31st Oct-2nd Nov 2025</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center hover:bg-purple-600/40 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="text-purple-300" size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Globe className="text-purple-400" size={16} />
                <a
                  href="https://www.iitbhumun.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 text-sm hover:underline"
                >
                  www.iitbhumun.org
                </a>
              </div>
            </div>
          </div>
        </div>

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
