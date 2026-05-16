import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../../constants";
import { fadeIn, textVariant } from "../../animations/motion";

const TechCard = ({ index, name, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      whileHover={{ y: -8 }} // Floating effect
      className="group relative p-[1px] rounded-xl overflow-hidden"
    >
      {/* High-Tech Animated Gradient Border - Visible only on hover */}
      <div className="absolute inset-[-500%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f3ff_0%,#4facfe_50%,#00f3ff_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-tertiary/90 rounded-xl py-5 px-4 flex flex-col items-center justify-center min-w-[110px] sm:min-w-[140px] backdrop-blur-2xl border border-white/5 shadow-2xl">
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-3">
          {/* Hexagon-style Icon Wrapper */}
          <div className="absolute inset-0 bg-neon-blue/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
          
          <div className="relative z-10 flex items-center justify-center">
            {/* 
              Icon Logic: 
              We assume icons are stored as strings in 'public/assets/tech/[icon].png'
              or you can use a library mapping here.
            */}
            <img 
              src={`/assets/tech/${icon}.png`} 
              alt={name}
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback for missing images */}
            <div className="hidden w-full h-full text-neon-blue font-bold text-[14px] sm:text-[16px] font-mono">
              {name.slice(0, 2).toUpperCase()}
            </div>
          </div>
        </div>

        <p className="text-secondary group-hover:text-white text-[12px] sm:text-[14px] font-mono font-bold tracking-tighter uppercase transition-colors">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          Technical Arsenal
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Skills.
        </h2>
      </motion.div>

      {/* Optimized Grid for Mobile and Desktop */}
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10 mt-12 sm:mt-16">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
        ))}
      </div>
    </section>
  );
};

export default Tech;