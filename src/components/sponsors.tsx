import React from "react";

// ✅ Importing images directly from src/assets
import sbi from "../assets/union.png";
import khadak from "../assets/dhaba.png";
import waffle from "../assets/holy.png";
import rao from "../assets/rao.png";
import pankhuri from "../assets/suzuki.png";
import presto from "../assets/vision.png";
import hotel from "../assets/goli.png";
import deb from "../assets/debating.png";
const sponsors = [
  { name: "SBI", logo: sbi },
  { name: "Khadak Singh", logo: khadak },
  { name: "deb", logo: deb },
  { name: "Holy Waffle", logo: waffle },
  { name: "Rao IAS", logo: rao },
  { name: "Pankhuri", logo: pankhuri },
  { name: "Presto", logo: presto },
  { name: "Hotel Yug Residency", logo: hotel },
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-20 bg-[#1f073c]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Sponsors
          </span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
          {sponsors.map((sponsor, index) => (
            <img
              key={index}
              src={sponsor.logo}
              alt={sponsor.name}
              className="max-h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
