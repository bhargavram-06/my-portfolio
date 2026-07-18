import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../animations/motion";
import { projects } from "../../constants";

const ProjectCard = ({ index, name, description, metrics, points, tags, source_code_link, live_url, userCount }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ y: -10 }} 
    >
      <div className='bg-tertiary p-6 rounded-2xl sm:w-[360px] w-full border border-white/5 hover:border-neon-blue/30 transition-all duration-300 flex flex-col h-full justify-between shadow-2xl relative group overflow-hidden'>
        
        {/* Subtle Background Radial Glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon-blue/5 rounded-full blur-[50px] group-hover:bg-neon-blue/10 transition-colors" />

        <div className='flex-1 relative z-10'>
          {/* Deployment Health Metric Badges */}
          <div className="flex justify-between items-center mb-4 select-none">
            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              LIVE IN PRODUCTION
            </span>
            <span className="text-secondary/60 text-[11px] font-mono font-bold">
              {userCount}
            </span>
          </div>

          <div className="flex justify-between items-start gap-2">
            <h3 className='text-white font-bold text-[22px] tracking-tight group-hover:text-neon-blue transition-colors'>
              {name}
            </h3>
            
            <div className="flex gap-2 shrink-0">
              {/* GitHub Link */}
              {source_code_link && (
                <a
                  href={source_code_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-neon-blue text-white hover:text-primary transition-all"
                  title="Source Code"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              )}

              {/* Live Link */}
              {live_url && (
                <a
                  href={live_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className="text-neon-blue bg-neon-blue/10 px-3 py-1 rounded-md text-[11px] font-bold hover:bg-neon-blue hover:text-primary transition-all flex items-center gap-1"
                >
                  LIVE
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
                  </span>
                </a>
              )}
            </div>
          </div>
          
          <p className='mt-3 text-secondary text-[14px] leading-relaxed font-medium'>
            {description}
          </p>

          {/* Hard Metrics Performance Container */}
          {metrics && (
            <div className="mt-4 bg-primary/40 border border-white/5 rounded-xl p-3.5 text-xs font-mono text-neon-blue/90 leading-relaxed">
              <span className="text-white font-bold block mb-1">📈 Impact Metric:</span>
              {metrics}
            </div>
          )}

          {/* STAR Challenge Engineering Points */}
          {points && (
            <ul className="mt-4 flex flex-col gap-2.5 text-secondary/80 text-[12px] list-disc list-inside leading-relaxed pl-1">
              {points.map((point, pIdx) => (
                <li key={pIdx} className="text-left align-top">
                  <span className="relative -left-1 text-secondary/90 font-medium">{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <div className='mt-6 flex flex-wrap gap-1.5 relative z-10'>
            {tags?.map((tag) => (
              <span 
                key={`${name}-${tag.name}`} 
                className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white/5 border border-white/5 ${tag.color}`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-10 relative z-0">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          Practical Deployments
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Production Systems.
        </h2>
      </motion.div>

      <div className='mt-12 sm:mt-16 flex flex-wrap gap-7 justify-center md:justify-start items-stretch'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>

      {/* Portfolio Tech Stack Verification Module */}
      <div className="mt-16 bg-white/5 border border-white/5 rounded-2xl p-6 font-mono text-xs text-secondary/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 select-none">
        <div>
          <span className="text-white font-bold block mb-1">⚙️ Architecture Verification Protocol</span>
          Compiled using React 18, Tailwind CSS compilation layers, and hardware-accelerated Framer Motion matrix structures.
        </div>
        <span className="shrink-0 bg-neon-blue/10 text-neon-blue px-3 py-1 rounded-md border border-neon-blue/20 font-bold">
          STATUS: OPTIMIZED
        </span>
      </div>
    </section>
  );
};

export default Projects;