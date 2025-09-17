// If using Next.js app router, uncomment the next line:
// "use client";

import React from "react";
import { motion } from "framer-motion";

import sbi from "../assets/sbi.jpg";
import union from "../assets/union2.jpg";
import unstop from "../assets/clg.jpg";
import rao from "../assets/rao.png";
import pankhuri from "../assets/pankhuri.jpg";
import suzuki from "../assets/suzuki.png";
import presto from "../assets/vision.png";
import resonance from "../assets/coaching.jpg";

const sponsors = [
  { name: "SBI", logo: sbi },
  { name: "union", logo: union },
  { name: "resonance", logo: resonance },
  { name: "unstop", logo: unstop },
  { name: "Rao IAS", logo: rao },
  { name: "Pankhuri", logo: pankhuri },
  { name: "Presto", logo: presto },
  { name: "Suzuki", logo: suzuki },
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true, amount: 0.25 }}
              className="w-full flex justify-center"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
