import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Portfolio Section Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Tech from "./components/sections/Tech";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Terminal from "./components/sections/Terminal"; 
import Research from "./components/sections/Research";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import { docs } from "./constants";

const App = () => {
  const [theme, setTheme] = useState("dark");

  // FORCE SCROLL RESET ON SITE LOAD
  useEffect(() => {
    // This tells the browser to instantly jump back to the top-left corner (0,0) on refresh
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Theme Toggler Execution Engine
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.className = nextTheme;
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full overflow-x-hidden transition-colors duration-300">
        
        {/* Advanced AI Background Effect */}
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none dark:opacity-30 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* Injected Theme State Attributes to align with Navbar Toggles */}
        <Navbar currentTheme={theme} onThemeToggle={toggleTheme} />
        <Hero />
        
        <div className="relative z-0">
          <About />
          <Experience />
        </div>

        <Tech />
        
        <div className="relative z-0">
          <Projects />
          <Research />
        </div>

        <Certifications />

        <div className="relative z-0">
          <Terminal />
          <Contact />
        </div>
        
        <Footer />

        {/* FLOATING ACTION ELEMENT: STICKY RECRUITER CV BUTTON */}
        <a 
          href={`/${docs.resume}`} 
          download="Bhargav_Ram_Resume.pdf"
          className="fixed bottom-6 right-6 z-[999] flex items-center gap-2 bg-neon-blue text-primary html-light-btn font-black px-4 py-3 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:bg-white hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 font-mono text-xs uppercase group"
          title="Download Professional CV"
        >
          <svg className="w-4 h-4 text-current fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download CV
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;