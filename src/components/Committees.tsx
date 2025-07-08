import React from 'react';
import { Shield, Globe, Gavel, Users, Building, Heart, Zap, TreePine } from 'lucide-react';

const Committees = () => {
  const committees = [
    {
      icon: Shield,
      name: 'United Nations Security Council',
      acronym: 'UNSC',
      agenda: 'Addressing Regional Conflicts and Peacekeeping Operations',
      description: 'The premier body for maintaining international peace and security.',
      delegates: 15,
      level: 'Advanced'
    },
    {
      icon: Globe,
      name: 'United Nations General Assembly',
      acronym: 'UNGA',
      agenda: 'Sustainable Development Goals and Climate Action',
      description: 'The main deliberative body of the United Nations.',
      delegates: 193,
      level: 'Beginner'
    },
    {
      icon: Gavel,
      name: 'International Court of Justice',
      acronym: 'ICJ',
      agenda: 'Maritime Boundary Disputes',
      description: 'The principal judicial organ of the United Nations.',
      delegates: 30,
      level: 'Advanced'
    },
    {
      icon: Users,
      name: 'United Nations Human Rights Council',
      acronym: 'UNHRC',
      agenda: 'Protection of Human Rights in Conflict Zones',
      description: 'Promoting and protecting human rights around the globe.',
      delegates: 47,
      level: 'Intermediate'
    },
    {
      icon: Building,
      name: 'United Nations Economic and Social Council',
      acronym: 'ECOSOC',
      agenda: 'Economic Recovery Post-Pandemic',
      description: 'Coordinating economic and social work of UN specialized agencies.',
      delegates: 54,
      level: 'Intermediate'
    },
    {
      icon: Heart,
      name: 'World Health Organization',
      acronym: 'WHO',
      agenda: 'Global Health Security and Pandemic Preparedness',
      description: 'Directing and coordinating international health work.',
      delegates: 40,
      level: 'Beginner'
    },
    // {
    //   icon: Zap,
    //   name: 'International Atomic Energy Agency',
    //   acronym: 'IAEA',
    //   agenda: 'Nuclear Non-Proliferation and Safety',
    //   description: 'Promoting peaceful use of nuclear energy.',
    //   delegates: 35,
    //   level: 'Advanced'
    // },
    // {
    //   icon: TreePine,
    //   name: 'United Nations Environment Programme',
    //   acronym: 'UNEP',
    //   agenda: 'Combating Climate Change and Environmental Degradation',
    //   description: 'Leading global environmental authority.',
    //   delegates: 45,
    //   level: 'Intermediate'
    // }
  ];

  const getLevelColor = (level:String) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Advanced': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
    }
  };

  return (
    <section id="committees" className="py-20 bg-[#1f073c] relative overflow-hidden">
      {/* Sparkles and visual effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 left-1/4 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400/20 rotate-45"></div>
        <div className="absolute bottom-1 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-300/30 to-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Committees</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Engage with diverse international bodies and tackle pressing global challenges across multiple domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <committee.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{committee.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(committee.level)}`}>
                      {committee.level}
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">{committee.acronym}</p>
                  <p className="text-purple-200 text-sm mb-4">{committee.description}</p>
                  <div className="space-y-2">
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <p className="text-white font-medium text-sm mb-1">Agenda:</p>
                      <p className="text-purple-200 text-sm">{committee.agenda}</p>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">Delegates: {committee.delegates}</span>
                      <span className="text-purple-300">Level: {committee.level}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Committee Registration</h3>
            <p className="text-purple-200 mb-6">
              Choose your preferred committee and secure your spot in IITBHU MUN 2025. Limited seats available!
            </p>
            <a
              href="#register"
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Register for Committees
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Committees;