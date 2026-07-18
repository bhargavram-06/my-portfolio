import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-primary py-8 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright Text */}
        <p className="text-secondary/50 text-xs font-mono tracking-wider text-center sm:text-left">
          &copy; {currentYear} <span className="text-white font-bold">Bhargav Ram</span>. All rights reserved.
        </p>

        {/* Active Social Anchor Networks */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/bhargav-ram-712a072b6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-neon-blue font-mono text-xs uppercase tracking-widest transition-colors duration-300 py-1"
          >
            LinkedIn
          </a>
          <span className="text-white/10 select-none">/</span>
          <a
            href="https://github.com/bhargavram-06"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-neon-blue font-mono text-xs uppercase tracking-widest transition-colors duration-300 py-1"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;