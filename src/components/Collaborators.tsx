import React from "react";
import { motion } from "framer-motion";
import unicImg from "../assets/UNIC.png";
import fairgazeImg from "../assets/fairgaze.png"
import unescoImg from "../assets/UNESCO.png";
import inccuImg from "../assets/INCCU.png";
const collaborators = [
  {
    name: "UN Information Centre for India and Bhutan",
    logo: unicImg, // replace with your actual image path
  },
  {
    name: "FAIRGAZE",
    logo: fairgazeImg,
  },
  {
    name: "UNESCO & INC (Government of India)",
    logo: unescoImg ,
  },
  {
    name: "Indian National Commission for Cooperation with UNESCO (INCCU)",
    logo: inccuImg,
  },
];

const Collaborators = () => {
  return (
    <section
      id="collaborators"
      className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white mb-12"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Collaborators
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
          {collaborators.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-lg hover:shadow-purple-500/20 transition"
            >
              <img
                src={collab.logo}
                alt={collab.name}
                className="w-40 h-24 object-contain mx-auto"
              />
              <p className="text-purple-200 text-sm mt-4">{collab.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
