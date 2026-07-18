import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const Navbar = ({ currentTheme, onThemeToggle }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/90 dark:bg-primary/90 light-nav backdrop-blur-lg border-b border-white/5 light-border" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-neon-blue text-[18px] font-bold cursor-pointer flex tracking-wider uppercase">
            Bhargav &nbsp;
            <span className="text-white dark:text-white light-logo-sub text-white font-light">| AI Developer</span>
          </p>
        </Link>

        {/* Navigation Actions Group */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* UPGRADED: HIGH-TECH SUN/MOON INTERACTIVE TOGGLE */}
          <button 
            onClick={onThemeToggle}
            className="w-20 h-9 rounded-full bg-tertiary border border-white/10 light-toggle-bg flex items-center p-1 cursor-pointer relative shadow-inner transition-colors duration-300"
            title="Toggle Core System Environment"
            aria-label="Theme Toggle Button"
          >
            {/* Animated sliding switch bubble */}
            <motion.div 
              layout
              className="w-7 h-7 rounded-full bg-neon-blue shadow-[0_0_15px_#00f3ff] flex items-center justify-center z-10"
              animate={{ x: currentTheme === "dark" ? 42 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {currentTheme === "dark" ? (
                // Dark Mode Icon (Moon)
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                // Light Mode Icon (Sun)
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </motion.div>
            
            {/* Background mode markers */}
            <span className="absolute left-3 text-[9px] font-mono font-bold text-secondary dark:text-secondary pointer-events-none select-none">SYS</span>
            <span className="absolute right-3 text-[9px] font-mono font-bold text-neon-blue pointer-events-none select-none">Core</span>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="list-none hidden sm:flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-neon-blue font-bold" : "text-secondary"
                } hover:text-white dark:hover:text-white light-nav-text text-[15px] font-mono uppercase tracking-wider font-medium cursor-pointer transition-all hover:translate-y-[-1px] relative py-1`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
                {active === link.title && (
                  <motion.div 
                    layoutId="navbarGlowLine"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-neon-blue shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-8 h-8 flex flex-col justify-between items-center p-1.5 z-50 cursor-pointer rounded-lg bg-white/5 border border-white/10 light-mobile-btn active:scale-90 transition-transform"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>

          {/* Mobile Menu Content Sidebar */}
          <div
            className={`${
              !toggle ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            } p-8 bg-primary/95 dark:bg-primary/95 light-bg-card backdrop-blur-2xl fixed top-0 right-0 w-2/3 h-screen z-40 border-l border-white/10 dark:border-white/10 light-border flex flex-col items-start gap-8 pt-24 transition-all duration-300 shadow-2xl`}
          >
            <ul className="list-none flex flex-col gap-6 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-mono font-bold uppercase tracking-widest cursor-pointer text-[15px] border-b border-white/5 dark:border-white/5 light-border pb-3 transition-all active:scale-[0.98] w-full ${
                    active === link.title ? "text-neon-blue pl-2" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`} className="block w-full">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;