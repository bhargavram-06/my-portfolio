import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  const profileImg = "/profile.jpg";

  return (
    <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center overflow-hidden bg-primary">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-blue/20 rounded-full blur-[140px] z-0 animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] z-0" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10"
        >
          <div className="absolute inset-0 rounded-full bg-neon-blue blur-xl opacity-30 animate-pulse" />
          
          <div className="relative group">
            <img 
              src={profileImg} 
              alt="Bhargav Ram" 
              className="w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover border-2 border-neon-blue shadow-[0_0_30px_rgba(0,255,255,0.3)] z-10"
              onError={(e) => {
                e.target.src = "/vite.svg";
              }}
            />
            <div className="absolute inset-0 rounded-full bg-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-white dark:text-white text-primary font-black lg:text-[75px] sm:text-[55px] xs:text-[45px] text-[36px] leading-tight uppercase tracking-tighter">
            Hi, I'm <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,243,255,0.4)]">Bhargav Ram</span>
          </h1>
          
          <div className="mt-4 text-secondary font-mono text-[18px] sm:text-[24px] tracking-widest h-[40px]">
            <span className="text-neon-blue">root@portfolio:~# </span>
            <Typewriter
              words={[
                "MERN Stack Developer",
                "AI Integration Engineer",
                "Backend Specialist",
                "Research Oriented",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-secondary font-medium lg:text-[19px] sm:text-[17px] text-[15px] lg:leading-[32px] mt-8 max-w-2xl"
        >
          “Driven to engineer scalable software ecosystems from data logic arrays to production deployment.” <br className="hidden md:block" />
          Specializing in automated artificial intelligence integrations and context-aware full-stack structures.
        </motion.p>

        {/* Updated Action Panels: Replaced Center Download with Social Channels */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-row justify-center items-center gap-4 mt-12 w-full sm:w-auto flex-wrap select-none"
        >
          <a href="#projects" className="w-full sm:w-auto shrink-0">
            <button className="w-full sm:w-auto bg-neon-blue hover:bg-white text-primary font-black uppercase tracking-wider text-xs py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-neon transform hover:-translate-y-0.5 active:scale-95 cursor-pointer">
              View Projects
            </button>
          </a>
          
          {/* Interactive GitHub Icon Core */}
          <a 
            href="https://github.com/bhargavram-06" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 light-bg-card border border-white/10 dark:border-white/10 light-border text-secondary hover:text-neon-blue hover:border-neon-blue/40 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg"
            title="Launch GitHub Engine Link"
          >
            <AiFillGithub size={24} />
          </a>

          {/* Interactive LinkedIn Icon Core */}
          <a 
            href="https://linkedin.com/in/pachila-bhargav-ram" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 light-bg-card border border-white/10 dark:border-white/10 light-border text-secondary hover:text-neon-blue hover:border-neon-blue/40 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-lg"
            title="Launch LinkedIn Engine Link"
          >
            <AiFillLinkedin size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-secondary/30 flex justify-center items-start p-1.5">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full bg-neon-blue"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;