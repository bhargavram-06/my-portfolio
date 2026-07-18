import React from "react";
import { motion as framerMotion } from "framer-motion";
import { technicalSkills } from "../../constants";
import { textVariant, fadeIn } from "../../animations/motion";

const SkillBar = ({ name, proficiency, idx }) => (
  <framerMotion.div 
    variants={fadeIn("up", "spring", idx * 0.1, 0.5)}
    className="flex flex-col w-full"
  >
    <div className="flex justify-between text-xs font-mono mb-1.5 text-secondary">
      <span className="text-white font-bold tracking-wide group-hover:text-neon-blue transition-colors">{name}</span>
      <span className="text-neon-blue font-bold">{proficiency}%</span>
    </div>
    <div className="w-full bg-primary/60 h-2 rounded-full p-[1px] overflow-hidden border border-white/5 shadow-inner relative group">
      <framerMotion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "circOut", delay: idx * 0.05 }}
        className="h-full bg-gradient-to-r from-neon-blue via-accent-blue to-purple-500 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"
      />
    </div>
  </framerMotion.div>
);

const SkillCategory = ({ title, items, catIdx }) => (
  <framerMotion.div
    variants={fadeIn("up", "spring", catIdx * 0.2, 0.75)}
    whileHover={{ y: -6, scale: 1.01 }}
    className="bg-tertiary/40 border border-white/5 rounded-2xl p-6 backdrop-blur-xl relative z-10 flex-1 min-w-[280px] sm:min-w-[340px] shadow-2xl transition-all duration-300 hover:border-neon-blue/20 hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] group"
  >
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-neon-blue/5 rounded-full blur-2xl group-hover:bg-neon-blue/10 transition-colors duration-500" />
    
    <h4 className="text-white font-mono font-black text-sm uppercase tracking-[0.15em] mb-6 border-b border-white/5 pb-3 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
      {title}
    </h4>
    <div className="flex flex-col gap-5 relative z-10">
      {items?.map((skill, idx) => (
        <SkillBar key={idx} idx={idx} {...skill} />
      ))}
    </div>
  </framerMotion.div>
);

const Tech = () => {
  return (
    <section id="tech" className="max-w-7xl mx-auto px-6 py-10 relative z-10 overflow-hidden">
      <framerMotion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          Capabilities Matrix
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Skills & Systems.
        </h2>
      </framerMotion.div>

      <div className="mt-12 sm:mt-16 flex flex-row flex-wrap justify-center gap-6 w-full">
        <SkillCategory title="Frontend Topologies" items={technicalSkills?.frontend} catIdx={0} />
        <SkillCategory title="Backend Core Engines" items={technicalSkills?.backend} catIdx={1} />
        <SkillCategory title="AI Frameworks & Models" items={technicalSkills?.aiMl} catIdx={2} />
        <SkillCategory title="Development Orchestration" items={technicalSkills?.tools} catIdx={3} />
      </div>
    </section>
  );
};

export default Tech;