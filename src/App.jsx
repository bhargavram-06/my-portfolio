import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
//import LockScreen from "./components/LockScreen"; // Importing your LockScreen component

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

const App = () => {
  // Read token from localStorage to check if user has already unlocked it during this visit
  const [isUnlocked, setIsUnlocked] = useState(() => {
    return localStorage.getItem("portfolio_session_auth") === "true";
  });

  // Intercept routing immediately if the screen is locked
  if (!isUnlocked) {
    return <LockScreen onUnlocked={() => setIsUnlocked(true)} />;
  }

  // Once unlocked, run your fully structured portfolio application
  return (
    <BrowserRouter>
      {/* The "bg-hero-pattern" or a custom CSS class can be added to index.css 
        to create the AI grid effect. I've added a relative wrapper here.
      */}
      <div className="relative z-0 bg-primary w-full overflow-x-hidden">
        
        {/* Advanced AI Background Effect */}
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <Navbar />
        
        {/* Main Sections in Structured Order */}
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
      </div>
    </BrowserRouter>
  );
};

export default App;