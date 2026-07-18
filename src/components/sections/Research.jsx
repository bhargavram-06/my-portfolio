import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../animations/motion";
import { AiOutlineFilePdf } from "react-icons/ai";
import { docs } from "../../constants";

const ResearchCard = ({ title, type, file, abstract, metrics, finding, impact, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ y: -8, scale: 1.01 }}
    className="bg-tertiary p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all duration-300 w-full lg:w-[48%] flex flex-col justify-between shadow-2xl relative group overflow-hidden"
  >
    <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-purple-500/5 rounded-full blur-[60px] group-hover:bg-purple-500/10 transition-colors duration-500" />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue shrink-0 group-hover:bg-neon-blue group-hover:text-primary transition-all duration-300 shadow-lg">
          <AiOutlineFilePdf size={24} />
        </div>
        <div>
          <span className="text-secondary text-[11px] font-mono tracking-widest uppercase block mb-0.5">
            {type}
          </span>
          <h3 className="text-white text-[18px] sm:text-[21px] font-bold tracking-tight leading-snug group-hover:text-neon-blue transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>

      <div className="mt-4 mb-6 bg-primary/40 border border-white/5 rounded-xl p-4 font-normal text-secondary/90 text-[13px] sm:text-[14px] leading-relaxed">
        <span className="text-white font-mono text-[11px] uppercase tracking-wider font-bold block mb-2 text-neon-blue/90">
          DOCUMENT ABSTRACT:
        </span>
        
        {/* Opening statement */}
        <p className="text-white/90 text-[13px] sm:text-[14px] font-medium mb-3">
          {abstract}
        </p>

        {/* Metrics - styled like project impact */}
        {metrics && (
          <div className="flex items-center gap-3 mb-3 mt-2 flex-wrap">
            <span className="text-neon-blue text-[12px] font-mono font-bold">🎯 KEY METRICS:</span>
            {metrics.map((metric, idx) => (
              <span key={idx} className="text-white/80 text-[12px] bg-neon-blue/10 px-2 py-0.5 rounded-full">
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Key finding bullet points */}
        {finding && (
          <div className="mb-3">
            {finding.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2 mb-1.5">
                <span className="text-neon-blue text-sm">•</span>
                <span className="text-secondary/90 text-[12px] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        )}

        {/* Impact statement */}
        {impact && (
          <div className="mt-2 pt-2 border-t border-white/10">
            <p className="text-neon-blue/80 text-[11px] font-mono uppercase tracking-wider">✓ REAL IMPACT</p>
            <p className="text-white/70 text-[12px] italic mt-1">{impact}</p>
          </div>
        )}
      </div>
    </div>

    <a 
      href={`/${file}`}
      target="_blank"
      rel="noreferrer"
      className="w-full relative z-10 py-3.5 rounded-xl border border-neon-blue/40 text-neon-blue font-bold hover:bg-neon-blue hover:text-primary transition-all flex justify-center items-center gap-2 text-[14px] font-mono uppercase tracking-wider bg-neon-blue/5 shadow-md active:scale-[0.98]"
    >
      <AiOutlineFilePdf size={18} /> Compile Document View
    </a>
  </motion.div>
);

const Research = () => {
  const publications = [
    { 
      title: "ML-Based Symptom Prediction Framework", 
      type: "Research Paper", 
      file: docs.researchPaper,
      abstract: "I built and compared 3 machine learning models to predict diseases from 133 symptoms using 5,000 patient records.",
      metrics: ["100% SVM accuracy", "97.6% Random Forest"],
      finding: [
        "SVM hit 100% on tests, but Random Forest won for real-world reliability",
        "Unlike basic symptom checkers, my system gives precautions + nutrition + chatbot"
      ],
      impact: "Now running in Vital Portal: predicts 40+ diseases in under 2 seconds at 94%+ accuracy"
    },
    { 
      title: "Vital Portal - AI in Medical Systems", 
      type: "Literature Survey", 
      file: docs.literatureSurvey,
      abstract: "I reviewed 30+ research papers on AI disease prediction systems - from decision trees to deep learning and IoT-based healthcare.",
      metrics: ["80% systems lack guidance", "30+ papers analyzed"],
      finding: [
        "Chatbots are friendly but inaccurate",
        "Deep learning is powerful but too slow for real-time use"
      ],
      impact: "My survey shaped Vital Portal: Random Forest + precautions + diet tips + chatbot = accurate and useful"
    },
  ];

  return (
    <section id="research" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">
          Academic Contributions
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">
          Research.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start items-stretch">
        {publications.map((pub, index) => (
          <ResearchCard key={index} index={index} {...pub} />
        ))}
      </div>
    </section>
  );
};

export default Research;