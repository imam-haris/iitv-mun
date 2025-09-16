import React from "react";

const SecretaryGeneralLetter: React.FC = () => {
  return (
    <section className="min-h-screen py-20 bg-[#1f073c] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A Letter from the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              Secretary General
            </span>
          </h2>
          <p className="text-lg text-purple-300 max-w-3xl mx-auto">
            A message of vision, dedication, and inspiration for IIT BHU MUN 2025.
          </p>
        </div>

        {/* Letter Box */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-lg max-w-4xl mx-auto">
          <p className="text-purple-200 leading-relaxed mb-6">
            Dear Delegates, Faculty Advisors, and Esteemed Guests,
          </p>

          <p className="text-purple-200 leading-relaxed mb-6">
            It gives me immense pleasure to welcome you all to the IIT BHU Model
            United Nations 2025. Over the years, this conference has grown into a
            beacon of diplomacy, debate, and dialogue, bringing together some of
            the brightest minds from across the nation.
          </p>

          <p className="text-purple-200 leading-relaxed mb-6">
            At IIT BHU MUN, we believe in empowering youth to think critically,
            engage meaningfully, and propose innovative solutions to the world’s
            most pressing challenges. This year, our secretariat has worked
            tirelessly to design committees and agendas that not only reflect
            contemporary global issues but also encourage diverse perspectives
            and inclusive participation.
          </p>

          <p className="text-purple-200 leading-relaxed mb-6">
            As you step into this simulation of diplomacy, I urge you to embody
            the spirit of cooperation, respect, and intellectual curiosity. May
            this conference be a transformative experience that strengthens your
            leadership, broadens your worldview, and inspires you to make a
            lasting impact beyond these walls.
          </p>

          <p className="text-purple-200 leading-relaxed mb-10">
            I look forward to witnessing the remarkable discussions, resolutions,
            and friendships that will emerge during this journey.
          </p>

          <p className="text-purple-300 font-semibold">
            Sincerely,
            <br />
            Abhishek Anand
            <br />
            Secretary General, IIT BHU MUN 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecretaryGeneralLetter;
