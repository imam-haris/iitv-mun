import React from 'react';
import { Users, Globe, Award, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Delegates', value: '500+' },
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Award, label: 'Committees', value: '8' },
    { icon: Target, label: 'Years', value: '10+' }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#1f073c] overflow-hidden">
      {/* Background Sparkles and Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 left-1/4 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400/20 rotate-45"></div>
        <div className="absolute bottom-1 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-300/30 to-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">IITBHU MUN</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Experience the pinnacle of diplomatic excellence at one of India's most prestigious Model United Nations conferences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-purple-200 leading-relaxed">
                IITBHU MUN 2025 aims to foster diplomatic skills, critical thinking, and global awareness among young minds. We provide a platform for students to engage with contemporary international issues and develop solutions through collaborative debate and negotiation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us</h3>
              <p className="text-purple-200 leading-relaxed">
                With a decade of excellence in organizing Model UN conferences, IITBHU MUN has established itself as a premier platform for diplomatic discourse. Our commitment to quality, innovation, and educational excellence makes us the preferred choice for aspiring diplomats.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Networking</h4>
              <p className="text-purple-200">Connect with like-minded individuals from across the country and build lasting professional relationships.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Global Perspective</h4>
              <p className="text-purple-200">Gain insights into international affairs and develop a comprehensive understanding of global issues.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Excellence</h4>
              <p className="text-purple-200">Experience the highest standards of MUN procedures and witness exceptional quality in every aspect.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
