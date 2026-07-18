import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode, SiCodechef } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-primary border-t border-white/5 text-center relative z-10">
      {/* Background Glow to transition from the Contact section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-5 flex-wrap">
          {/* GitHub */}
          <a 
            href="https://github.com/bhargavram-06" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-neon-blue transition-all duration-300 hover:scale-125"
            aria-label="GitHub Profile"
          >
            <AiFillGithub size={26}/>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/pachila-bhargav-ram" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-neon-blue transition-all duration-300 hover:scale-125"
            aria-label="LinkedIn Profile"
          >
            <AiFillLinkedin size={26}/>
          </a>

          {/* LeetCode */}
          <a 
            href="https://leetcode.com/u/Bhargav_ram06/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-neon-blue transition-all duration-300 hover:scale-125"
            aria-label="LeetCode Profile"
          >
            <SiLeetcode size={24}/>
          </a>

          {/* CodeChef */}
          <a 
            href="https://www.codechef.com/users/bhargavrampach" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-neon-blue transition-all duration-300 hover:scale-125"
            aria-label="CodeChef Profile"
          >
            <SiCodechef size={24}/>
          </a>
        </div>

        {/* Dynamic Copyright Text */}
        <p className="text-secondary/60 text-[11px] sm:text-[12px] font-mono tracking-[0.1em] uppercase">
          © {new Date().getFullYear()} <span className="text-white font-bold">Bhargav Ram</span> | 
          <span className="hidden sm:inline"> System Status: </span>
          <span className="text-neon-blue animate-pulse"> Optimized for MERN & AI</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;