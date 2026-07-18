import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { internshipCertificates, courseCertificates, eventCertificates, achievements, Hackathons } from "../../constants";
import { fadeIn, textVariant } from "../../animations/motion";

const CredentialCard = ({ title, org, file, date, detail, isHonor, index }) => {
  const handleView = () => window.open(`${window.location.origin}/${file || ""}`, "_blank", "noopener,noreferrer");

  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.1, 0.6)}
      whileHover={{ y: -6 }}
      className="bg-tertiary p-5 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 flex flex-col justify-between h-full shadow-2xl relative overflow-hidden group"
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-primary transition-all duration-300 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <span className="text-[9px] font-mono text-secondary/60 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded border border-white/5">
            {date || "VERIFIED"}
          </span>
        </div>
        
        <h4 className="text-white font-bold text-[16px] sm:text-[17px] leading-snug group-hover:text-neon-blue transition-colors duration-300">
          {title}
        </h4>
        <p className="text-secondary/70 text-[12px] mt-1.5 font-mono flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-neon-blue" />
          {org}
        </p>

        {detail && (
          <p className="mt-3 bg-primary/30 rounded-xl p-3 border border-white/[0.02] text-secondary text-[12px] leading-relaxed font-medium">
            {detail}
          </p>
        )}
      </div>

      {!isHonor && (
        <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-end relative z-10">
          <button  
            onClick={handleView}
            className="text-neon-blue text-[12px] font-bold font-mono uppercase tracking-wider bg-neon-blue/5 border border-neon-blue/20 hover:bg-neon-blue hover:text-primary px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer flex items-center gap-1 active:scale-95"
          >
            Launch Record
          </button>
        </div>
      )}
    </motion.div>
  );
};

const Certifications = () => {
  const [activeTab, setActiveTab] = useState("achievements");

  const tabs = [
    { id: "achievements", label: "Core Honors", data: achievements, isHonor: true },
    { id: "internships", label: "Internships", data: internshipCertificates },
    { id: "courses", label: "Specializations", data: courseCertificates },
    { id: "hackathons", label: "Hackathons", data: Hackathons },
    { id: "events", label: "Workshops", data: eventCertificates },
  ];

  return (
    <section id="credentials" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">Validated Accomplishments</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">Credentials.</h2>
      </motion.div>

      <div className="flex flex-nowrap sm:flex-wrap gap-2 mt-12 pb-1 border-b border-white/5 overflow-x-auto no-scrollbar whitespace-nowrap select-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative pb-4 px-3 font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
              activeTab === tab.id ? "text-neon-blue" : "text-secondary hover:text-white"
            }`}
          >
            {tab.label} <span className="text-[10px] opacity-40 ml-0.5">({tab.data?.length || 0})</span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="activeTabGlow"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-neon-blue shadow-[0_0_12px_rgba(0,255,255,0.8)]"
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 items-stretch"
        >
          {tabs.find(t => t.id === activeTab).data?.map((cert, index) => (
            <CredentialCard 
              key={`${activeTab}-${index}`} 
              index={index} 
              isHonor={tabs.find(t => t.id === activeTab).isHonor} 
              {...cert} 
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Certifications;