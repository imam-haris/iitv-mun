import React from "react";
import { Crown, Star, Users } from "lucide-react";
import anvitaImg from "../assets/anvita.jpg";
import creativeImg from "../assets/creative.jpg";
import harisImg from "../assets/haris.jpg";
const Secretariat = () => {
  const secretariatMembers = [
    {
      name: "Abhishek Anand",
      position: "Secretary General",
      image: "image-url-here",
      bio: "A spirited force in a small frame, he’s the second-gen soul of IIT BHU MUN—quietly commanding, endlessly supportive, and proof that stature is measured by impact, not inches.",
      icon: Crown,
    },
    {
      name: "Kamal Banna",
      position: "Director General",
      image: "image-url-here",
      bio: "Our fire-forged Director General—steering the team with sharp precision, a fierce drive, and just the right spark of anger when excellence demands it.",
      icon: Star,
    },
    {
      name: "Anvita Srivastava",
      position: "Head of Committee Affairs",
      image: anvitaImg,
      bio: "The quiet powerhouse whose academic brilliance is only rivaled by her relentless commitment, gracefully carrying the core of the committee on shoulders steadier than most storms.",
      icon: Users,
    },
    {
      name: "Devashish Tripathi",
      position: "Head of Marketing",
      image: "image-url-here",
      bio: "A true Varanasi virtuoso and deal-making dynamo, blending charm and street-smart strategy to squeeze gold from every gully like a textbook baniya with a masterstroke.",
      icon: Users,
    },
      {
      name: "Dhruv Yadav",
      position: "Head of Operations",
      image: "image-url-here",
      bio: "A mischievous marvel with a boyish grin, but when duty calls, he’s ten steps ahead, turning chaos into clockwork with effortless flair.",
      icon: Users,
    },
    {
      name: "Akansha",
      position: "Head of Public Relations",
      image: "image-url-here",
      bio: "A natural fit, blending professionalism with warmth, her friendliness not just a trait but a strategy, building bridges with a smile that speaks louder than any pitch.",
      icon: Users,
    },
    {
      name: "Raghav Bansal",
      position: "Head of Publicity",
      image: "image-url-here",
      bio: "The ever-charming Punjabi munda, sprinkling dildari in every direction, turning strangers into supporters with a grin and a perfectly timed “Oye hoye!”",
      icon: Users,
    },
    {
      name: "Chahat Chauhan",
      position: "Head of Creative Affairs",
      image: creativeImg,
      bio: "An introvert by nature, but when it comes to Creative Affairs, her ideas speak louder than words, weaving magic quietly and proving that brilliance doesn’t need a spotlight to shine.",
      icon: Users,
    },
    {
      name: "Haris Imam",
      position: "Head of Technical Affairs",
      image: harisImg,
      bio: "I believe technology should stay in the background while ideas shine in the spotlight. At IIT BHU MUN, my role as Tech Head is to ensure that happens.",
      icon: Users,
    },
    {
      name: "Ashmit Singh",
      position: "Head of Internal Affairs",
      image: "image-url-here",
      bio: "Deeply dedicated to IITBHU MUN, yet carrying a carefree streak that keeps the team smiling.",
      icon: Users,
    },
  ];

  return (
    <section
      id="secretariat"
      className="py-20 bg-[#1f073c] relative overflow-hidden"
    >
      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 left-1/4 w-20 h-20 border-2 border-purple-400/20 rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-purple-400/20 rotate-45"></div>
        <div className="absolute bottom-1 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-300/30 to-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 pt-[40px] relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Secretariat
            </span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Meet the dedicated team of experienced leaders who will guide you
            through this extraordinary diplomatic journey
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
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-2">
                    {member.position}
                  </p>
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