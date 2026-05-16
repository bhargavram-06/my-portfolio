import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import { fadeIn, textVariant } from "../../animations/motion";

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)} // Reduced delay for smoother feel
      className="relative pl-8 pb-12 border-l-2 border-neon-blue/20 last:pb-0"
    >
      {/* Timeline Dot with Pulse Effect */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-neon-blue shadow-[0_0_10px_rgba(0,255,255,0.8)] z-10" />
      
      {/* Connector Line Glow */}
      <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-neon-blue/10 -z-0" />

      <div className="bg-tertiary p-6 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 shadow-xl group overflow-hidden">
        {/* Subtle hover glow inside card */}
        <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            <h3 className="text-white text-[20px] sm:text-[24px] font-bold tracking-tight group-hover:text-neon-blue transition-colors">
              {experience.title}
            </h3>
            <p className="text-secondary text-[14px] sm:text-[16px] font-mono font-medium mt-1">
              {experience.company_name}
            </p>
          </div>

          <span className="text-secondary/50 text-[11px] sm:text-[12px] font-mono tracking-widest uppercase bg-white/5 px-3 py-1 rounded-full w-fit">
            {experience.date}
          </span>
        </div>

        <ul className="mt-6 list-none space-y-3 relative z-10">
          {experience.points.map((point, idx) => (
            <li
              key={`experience-point-${idx}`}
              className="text-secondary/80 text-[13px] sm:text-[14px] flex items-start gap-3 leading-relaxed"
            >
              {/* Custom Bullet Icon */}
              <span className="text-neon-blue mt-1.5 min-w-[6px] h-[6px] rounded-full bg-neon-blue shadow-neon" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          The Professional Roadmap
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Experience.
        </h2>
      </motion.div>

      <div className="mt-12 sm:mt-20 flex flex-col max-w-4xl mx-auto relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            index={index}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;