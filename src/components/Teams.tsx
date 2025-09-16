import React from "react";

const teams = [
  {
    name: "Committee Affairs Team",
    members: [
      "Oppilan Iniyan",
      "Yashaswa Ram",
      "Ritvik Gupta",
      "Bhavesh Yadav",
      "Garima Sharma",
      "Eashoo Ranjan",
      "Bhargavi Sai Chinnari",
    ],
  },
  {
    name: "Design and Content Team",
    members: ["Ishanika Radder", "Simran Nareda", "Swetha Yalamanchi", "Noordeep Kaur"],
  },
  {
    name: "Public Relations Team",
    members: ["Priyanka Hichkad", "Gourav Pandey", "Sristi Swarupa", "Mohitesh Anand Yadav"],
  },
  {
    name: "Marketing Team",
    members: [
      "Ashmit Singh",
      "Kamal Banna",
      "Harris Imam",
      "Abhishek Anand",
      "Chahat Chauhan",
      "Abhishek Anand",
      "Edamalapati Mokshitha",
      "Devashish Tripathi",
      "Akansha Ray",
      "Pulkit Gulati",
    ],
  },
  {
    name: "Publicity Team",
    members: [
      "Anvita Srivastava",
      "Rituraj Singh",
      "Kanishk Gajbe",
      "Manish Kumar",
      "Harman Singh",
      "Satyam Sharma",
      "Raghav Bansal",
    ],
  },
  {
    name: "Tech Team",
    members: ["Tridip Barman", "Bhavesh Yadav"],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
