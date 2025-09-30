// import React from "react";
import {
  Shield,
  Globe,
  Gavel,
  Users,
  Building,
  Heart,
  // Zap,
  // TreePine,
} from "lucide-react";

const Committees = () => {
  const committees = [
    {
      icon: Shield,
      name: "Disarmament and International Security Committee",
      acronym: "DISEC",
      agenda:
        "Prevention of an arms race in outer space and the promotion of its peaceful use for the benefit of all humankind.",
      description:
        "The Disarmament and International Security Committee (DISEC) works on disarmament, arms control, and maintaining international peace and security.",
      // delegates: 15,
      level: "Advanced",
    },
    {
      icon: Globe,
      name: "United Nations Human Resources Committee",
      acronym: "UNHRC",
      agenda:
        "Addressing staff welfare, mental health, and work-life balance within UN missions.",
      description:
        "The Human Resources Committee focuses on managing UN personnel, staff welfare, recruitment, training, and promoting an inclusive and efficient workforce.",
      // delegates: 193,
      level: "Beginner",
    },
    {
      icon: Gavel,
      name: "Joint Parliamentary Committee",
      acronym: "JPC",
      agenda:
        "Investigating policies, bills, or matters that require oversight by multiple parliamentary committees.",
      description:
        "The Joint Parliamentary Committee is a special committee formed by both houses of Parliament to examine specific issues, bills, or policies in detail and ensure effective oversight.",
      // delegates: 30,
      level: "Advanced",
    },
    {
      icon: Users,
      name: "United Nations Commission on the status of Women",
      acronym: "CSW",
      agenda:
        "Promoting gender equality and the empowerment of women globally.",
      description:
        "The Commission on the Status of Women works to promote gender equality, protect women’s rights, and empower women worldwide.",
      // delegates: 47,
      level: "Intermediate",
    },
    {
      icon: Building,
      name: "All India Political Party Meet",
      acronym: "AIPPM",
      agenda:
        "Discussing national policy priorities and strategies for upcoming elections.",
      description:
        "The All India Political Party Meet is a gathering of political parties to discuss national policies, coordinate strategies, and address key issues affecting the country.",
      // delegates: 54,
      level: "Advanced",
    },
    {
      icon: Heart,
      name: "United Nations Environment Programme",
      acronym: "UNEP",
      agenda:
        "Addressing climate change and promoting sustainable environmental practices worldwide.",
      description:
        "The United Nations Environment Programme works to protect the environment, promote sustainability, and address global ecological challenges.",
      // delegates: 40,
      level: "Beginner",
    },
  ];

  // const getLevelColor = (level: string) => {
  //   switch (level) {
  //     case "Beginner":
  //       return "bg-green-500/20 text-green-400 border-green-500/30";
  //     case "Intermediate":
  //       return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
  //     case "Advanced":
  //       return "bg-red-500/20 text-red-400 border-red-500/30";
  //     default:
  //       return "bg-purple-500/20 text-purple-400 border-purple-500/30";
  //   }
  // };

  return (
    <section
      id="committees"
      className="py-20 bg-[#1f073c] relative overflow-hidden"
    >
      {/* Sparkles and visual effects */}
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
              Committees
            </span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Engage with diverse international bodies and tackle pressing global
            challenges across multiple domains
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
                  {/* <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {committee.name}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
                        committee.level
                      )}`}
                    >
                      {committee.level}
                    </span>
                  </div> */}
                  <p className="text-purple-400 font-medium mb-2">
                    {committee.acronym}
                  </p>
                  <p className="text-purple-200 text-sm mb-4">
                    {committee.description}
                  </p>
                  <div className="space-y-2">
                    {/* <div className="bg-purple-900/30 rounded-lg p-3">
                      <p className="text-white font-medium text-sm mb-1">
                        Agenda:
                      </p>
                      <p className="text-purple-200 text-sm">
                        {committee.agenda}
                      </p>
                    </div> */}
                    {/* <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">
                        Level: {committee.level}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Committees;
