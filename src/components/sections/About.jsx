import React from "react";
import { motion } from "framer-motion";
import { services, personalBio } from "../../constants";
import { fadeIn, textVariant } from "../../animations/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-[45%] sm:w-[180px]' // Adjusted to be slightly smaller and responsive
  >
    <div className='w-full p-[1px] rounded-[15px] shadow-card bg-gradient-to-b from-neon-blue to-accent-blue'>
      <div className='bg-tertiary rounded-[15px] py-3 px-4 min-h-[140px] flex justify-center items-center flex-col gap-3'>
        <img src={icon} alt={title} className='w-10 h-10 object-contain' />
        <h3 className='text-white text-[14px] font-bold text-center leading-tight'>{title}</h3>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">Overview.</h2>
      </motion.div>

      {/* Main Flex Wrapper */}
      <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16 mt-10">
        
        {/* Left Side: Your Picture */}
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="relative w-full max-w-[280px] md:max-w-[320px] shrink-0 mx-auto md:mx-0"
        >
          <div className="absolute inset-0 rounded-2xl bg-neon-blue blur-3xl opacity-10" />
          <img
            src="/me1.jpg" 
            alt={personalBio.name}
            className="relative w-full h-auto rounded-2xl object-cover border-2 border-neon-blue shadow-[0_0_20px_rgba(0,255,255,0.2)]"
          />
        </motion.div>

        {/* Right Side: Text Paragraphs + Cards Layout Together */}
        <div className="flex-1 flex flex-col justify-between h-full">
          
          {/* Content Block */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="text-secondary text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] flex flex-col gap-4"
          >
            <p>{personalBio.paragraph1}</p>
            <p>{personalBio.paragraph2}</p>
            <p>{personalBio.paragraph3}</p>
          </motion.div>

          {/* Service Cards Grid placed directly underneath the text block */}
          <div className='mt-8 flex flex-wrap gap-4 justify-center md:justify-start w-full'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;