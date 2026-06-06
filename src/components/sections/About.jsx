import React from "react";
import { motion } from "framer-motion";
import { services, personalBio } from "../../constants";
import { fadeIn, textVariant } from "../../animations/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-[45%] sm:w-[180px]' // Responsive sizing for uniform grid distribution
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

      {/* Clean Full-Width Content Container */}
      <div className="w-full mt-10 flex flex-col gap-8">
        
        {/* Text Block spanning completely across without sidebar constraints */}
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-secondary text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] flex flex-col gap-4 max-w-5xl"
        >
          <p>{personalBio.paragraph1}</p>
          <p>{personalBio.paragraph2}</p>
          <p>{personalBio.paragraph3}</p>
        </motion.div>

        {/* Service Cards Grid placed directly underneath the full-width paragraphs */}
        <div className='mt-4 flex flex-wrap gap-4 justify-center md:justify-start w-full'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;