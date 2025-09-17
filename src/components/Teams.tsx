import React from "react";

const teams = [
  {
    name: "Committee Affairs Team",
    members: [
      "Bhojraj Kalwaniya",
      "Swayamjit Nanda",
      "Divyansh",
      "Gagan Kumar",
      "Hari",
      "Pravinya",
      "Sambarto",
      "Samridhi",
      "Sreevalli",
      "Ujjawal Kumar Nath"
    ],
  },
    {
    name: "Public Relations Team",
    members: ["Vansh Shrivas", "Vansh Sharma", "Tanmayee", "Rajshree Chaudhry", "Maharshi Patle"],
  },
  {
    name: "Publicity Team",
    members: [
      "Adarsh Pandey",
      "Akriti",
      "Dhirgayu",
      "Divit Sood",
      "Harish",
      "Mokshita Kiran",
      "Monish Aryan",
      "Seban",
      "Suryansh Singh",
      "Kritika Bansal",
      "Vansh Gilhotra",
      "Junaid Muhammad"
    ],
  },
  {
    name: "Marketing Team",
    members: [
      "Aishwarya Pandey",
      "Anushka Tiwari",
      "Illori Gupta",
      "Kalash",
      "Pradhyumn Mangal",
      "Prakhar Vedant",
      "Khushi",
      "Utkarsh",
      "Vansh Aggarwal",
    ],
  },
   {
    name: "Creative Affairs Team",
    members: ["Gagan", "Aaditya ", "Ananya", "Ayush" ],
  },
  {
    name: "Tech Team",
    members: ["Shivam"],
  },
];

const Teams: React.FC = () => {
  return (
    <section className="py-20 bg-[#1f073c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Teams
            </span>
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:scale-105"
            >
              <h3 className="text-purple-400 font-medium mb-2">
                {team.name}
              </h3>
              <ul className="space-y-2 text-gray-200">
                {team.members.map((member, i) => (
                  <li key={i}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
