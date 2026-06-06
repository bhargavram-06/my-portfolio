import React, { useEffect } from "react"; // Added useEffect here
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

const App = () => {
  // FORCE SCROLL RESET ON SITE LOAD
  useEffect(() => {
    // This tells the browser to instantly jump back to the top-left corner (0,0) on refresh
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary w-full overflow-x-hidden">
        
        {/* Advanced AI Background Effect */}
        <div className="fixed inset-0 z-[-1] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <Navbar />
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