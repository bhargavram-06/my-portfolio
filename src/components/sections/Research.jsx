import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../animations/motion";
import { AiOutlineFilePdf } from "react-icons/ai";
import { docs } from "../../constants"; // Centralizing file paths

const ResearchCard = ({ title, type, file, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    whileHover={{ scale: 1.02 }}
    className="bg-tertiary p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all w-full lg:w-[48%] flex flex-col justify-between shadow-xl group"
  >
    <div className="flex items-start gap-4 mb-6">
      {/* Icon Wrapper with Glow */}
      <div className="w-12 h-12 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0 group-hover:bg-neon-blue group-hover:text-primary transition-all duration-300 shadow-neon">
        <AiOutlineFilePdf size={28} />
      </div>
      
      <div>
        <span className="text-secondary text-[12px] font-mono tracking-widest uppercase mb-1 block">
          {type}
        </span>
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold leading-snug group-hover:text-neon-blue transition-colors">
          {title}
        </h3>
      </div>
    </div>

    <a 
      href={`/${file}`}
      target="_blank"
      rel="noreferrer"
      className="w-full py-4 rounded-xl border border-neon-blue/50 text-neon-blue font-bold hover:bg-neon-blue hover:text-primary transition-all flex justify-center items-center gap-2 text-[14px] sm:text-[16px] active:scale-95"
    >
      <AiOutlineFilePdf size={20} /> View & Download {type}
    </a>
  </motion.div>
);

const Research = () => {
  // Mapping titles to your centralized docs constant
  const publications = [
    { 
      title: "ML-Based Symptom Prediction Research Paper", 
      type: "Research Paper", 
      file: docs.researchPaper 
    },
    { 
      title: "Vital Portal Literature Survey", 
      type: "Literature Survey", 
      file: docs.literatureSurvey 
    },
  ];

  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          Academic Contributions
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Research.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
        {publications.map((pub, index) => (
          <ResearchCard key={index} index={index} {...pub} />
        ))}
      </div>
    </section>
  );
};

export default Research;