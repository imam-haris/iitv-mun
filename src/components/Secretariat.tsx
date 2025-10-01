import React from "react";
import anvitaImg from "../assets/anvita2.jpg";
import creativeImg from "../assets/creative.jpg";
import harisImg from "../assets/haris.jpg";
import ashmitImg from "../assets/ashmit.jpg";
import kamalImg from "../assets/kamal3.jpg";
import raghavImg from "../assets/raghav2.jpeg";
import abhishekImg from "../assets/abhishek2.jpg";
import devaImg from "../assets/deva.jpeg";
const Secretariat = () => {
  const secretariatMembers = [
    {
      name: "Abhishek Anand",
      position: "Secretary General",
      image: abhishekImg,
    },
    {
      name: "Kamal Banna",
      position: "Director General",
      image: kamalImg,
    },
    {
      name: "Anvita Srivastava",
      position: "Head of Committee Affairs",
      image: anvitaImg,
    },
    {
      name: "Devashish Tripathi",
      position: "Head of Marketing",
      image: devaImg,
    },
    {
      name: "Dhruv Yadav",
      position: "Head of Operations",
      image: "image-url-here",
    },
    {
      name: "Akansha",
      position: "Head of Public Relations",
      image: "image-url-here",
    },
    {
      name: "Raghav Bansal",
      position: "Head of Publicity",
      image: raghavImg,
    },
    {
      name: "Chahat Chauhan",
      position: "Head of Creative Affairs",
      image: creativeImg,
    },
    {
      name: "Haris Imam",
      position: "Head of Technical Affairs",
      image: harisImg,
    },
    {
      name: "Ashmit Singh",
      position: "Head of Internal Affairs",
      image: ashmitImg,
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
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {secretariatMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 
                         hover:border-purple-500/40 transition-all duration-300 group hover:scale-105 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-purple-500/30 
                           group-hover:border-purple-400/50 transition-all duration-300"
              />
              <h3 className="text-xl font-bold text-white mt-4">
                {member.name}
              </h3>
              <p className="text-purple-400 font-medium">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Secretariat;
