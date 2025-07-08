import React from 'react';
import { Crown, Star, Users, Award } from 'lucide-react';

const Secretariat = () => {
  const secretariatMembers = [
    {
      name: 'Abhishek Anand',
      position: 'Secretary General',
      // image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'A spirited force in a small frame, he’s the second-gen soul of IIT BHU MUN—quietly commanding, endlessly supportive, and proof that stature is measured by impact, not inches.',
      icon: Crown
    },
    {
      name: 'Kamal Banna',
      position: 'Director General',
      // image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'Our fire-forged Director General—steering the team with sharp precision, a fierce drive, and just the right spark of anger when excellence demands it.',
      icon: Star
    },
    {
      name: 'Dhruv Yadav',
      position: 'Head of Operations',
      // image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'A mischievous marvel with a boyish grin, but when duty calls, he’s ten steps ahead, turning chaos into clockwork with effortless flair.',
      icon: Users
    },
    {
      name: 'Devashish Tripathi',
      position: 'Head of Marketing',
      // image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300',
      bio: 'A true Varanasi virtuoso and deal-making dynamo, blending charm and street-smart strategy to squeeze gold from every gully like a textbook baniya with a masterstroke.',
      icon: Users
    },
    {
      name: 'Anvita Srivastava',
      position: 'Head of Committee Affairs',
      image: 'image-url-here',
      bio: 'The quiet powerhouse whose academic brilliance is only rivaled by her relentless commitment, gracefully carrying the core of the committee on shoulders steadier than most storms.',
      icon: Users // or any other icon from lucide-react
    },
    {
      name: 'Akansha',
      position: 'Head of Public Relations',
      image: 'image-url-here',
      bio: 'A natural fit, blending professionalism with warmth, her friendliness not just a trait but a strategy, building bridges with a smile that speaks louder than any pitch.',
      icon: Users // or any other icon from lucide-react
    },
    {
      name: 'Raghav Bansal',
      position: 'Head of Publicity',
      image: 'image-url-here',
      bio: 'The ever-charming Punjabi munda, sprinkling dildari in every direction, turning strangers into supporters with a grin and a perfectly timed “Oye hoye!”',
      icon: Users // or any other icon from lucide-react
    },
    {
      name: 'Chahat Chauhan',
      position: 'Head of Creative Affairs',
      image: 'image-url-here',
      bio: 'An introvert by nature, but when it comes to Creative Affairs, her ideas speak louder than words, weaving magic quietly and proving that brilliance doesn’t need a spotlight to shine.',
      icon: Users // or any other icon from lucide-react
    }

  ];

  const additionalRoles = [
    { title: 'Committee Chairs', count: 8, description: 'Leading discussions in specialized committees' },
    { title: 'Vice Chairs', count: 16, description: 'Supporting committee operations and procedures' },
    { title: 'Rapporteurs', count: 8, description: 'Documenting proceedings and resolutions' },
    { title: 'Organising Committee', count: 25, description: 'Ensuring smooth conference operations' }
  ];

  return (
    <section id="secretariat" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Secretariat</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Meet the dedicated team of experienced leaders who will guide you through this extraordinary diplomatic journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {secretariatMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <member.icon className="text-white" size={16} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-2">{member.position}</p>
                  <p className="text-purple-200 text-sm mb-3">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secretariat;
