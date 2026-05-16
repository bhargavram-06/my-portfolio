import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
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
        scrolled ? "bg-primary/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
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
          <p className="text-neon-blue text-[18px] font-bold cursor-pointer flex tracking-wider">
            BHARGAV &nbsp;
            <span className="sm:block hidden text-white font-light">| AI DEVELOPER</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-neon-blue" : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-all hover:scale-105`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Toggle */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <button
            className="w-7 h-7 flex flex-col justify-between items-center p-1 z-50"
            onClick={() => setToggle(!toggle)}
          >
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-neon-blue rounded-full transition-all duration-300 ${toggle ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Mobile Menu Content */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-8 bg-primary/95 backdrop-blur-2xl absolute top-0 right-0 w-2/3 h-screen z-40 border-l border-white/10 shadow-2xl sidebar flex-col items-start gap-8 pt-24 transition-all duration-500`}
          >
            <ul className="list-none flex flex-col gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[20px] transition-all ${
                    active === link.title ? "text-neon-blue" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
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