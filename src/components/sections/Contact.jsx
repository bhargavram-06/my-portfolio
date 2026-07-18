import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../animations/motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: form.name,
          to_name: "Bhargav Ram",
          from_email: form.email,
          to_email: "bhargavrampachila@gmail.com",
          message: form.message,
        },
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setLoading(false);
        alert("Thank you! I have received your message.");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error("EmailJS Error, falling back to mailto:", error);
        handleMailtoFallback();
      });
  };

  const handleMailtoFallback = () => {
    setLoading(false);
    const subject = encodeURIComponent(`System Hook from ${form.name}`);
    const body = encodeURIComponent(`Message: ${form.message}\n\nSender Data: ${form.email}`);
    window.location.href = `mailto:bhargavrampachila@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-10 overflow-hidden relative z-10">
      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        
        {/* Left Form Panel */}
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.8)}
          className="flex-[0.75] bg-tertiary p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-neon-blue/[0.02] pointer-events-none" />

          <p className="text-secondary font-mono tracking-widest uppercase text-[14px]">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 relative z-10">
            <label className="flex flex-col">
              <span className="text-white font-mono text-xs uppercase tracking-wider mb-2">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ex: Recruiting Coordinator"
                className="bg-primary/50 py-3.5 px-5 placeholder:text-secondary/30 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue focus:bg-primary/80 transition-all font-mono text-sm"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-mono text-xs uppercase tracking-wider mb-2">Email Routing Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Ex: company@domain.com"
                className="bg-primary/50 py-3.5 px-5 placeholder:text-secondary/30 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue focus:bg-primary/80 transition-all font-mono text-sm"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-mono text-xs uppercase tracking-wider mb-2">Message Payload</span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Input communication parameters..."
                className="bg-primary/50 py-3.5 px-5 placeholder:text-secondary/30 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue focus:bg-primary/80 transition-all font-mono text-sm resize-none"
                required
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,255,255,0.4)" }}
              whileActive={{ scale: 0.98 }}
              type="submit"
              className="bg-neon-blue py-3.5 px-8 rounded-xl outline-none w-fit text-primary font-black uppercase tracking-widest font-mono text-xs"
            >
              {loading ? "Transmitting..." : "Execute Connection"}
            </motion.button>
          </form>
        </motion.div>

        {/* Right Information Directory */}
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.8)}
          className="xl:flex-1 flex flex-col justify-center"
        >
          <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <h4 className="text-white font-bold text-[24px] mb-6 tracking-tight">Access Directory</h4>
            
            <div className="flex flex-col gap-6">
              {[
                { icon: <AiOutlineMail />, label: "Email Secure Routing", value: "bhargavrampachila@gmail.com", href: "mailto:bhargavrampachila@gmail.com" },
                { icon: <AiOutlinePhone />, label: "Direct Terminal Phone", value: "+91 8341342605", href: "tel:+918341342605" },
                { icon: <AiOutlineEnvironment />, label: "Base Coordinate Location", value: "Visakhapatnam, India", href: "https://maps.google.com/?q=Visakhapatnam", isExternal: true }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group w-full cursor-pointer bg-primary/20 border border-white/[0.02] hover:border-neon-blue/20 p-3 rounded-xl transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-tertiary flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-primary transition-all duration-300 shadow-md shrink-0">
                    {React.cloneElement(item.icon, { size: 22 })}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-secondary text-[10px] font-mono uppercase tracking-[0.15em] mb-0.5">{item.label}</p>
                    <p className="text-white font-semibold text-[13px] sm:text-[15px] group-hover:text-neon-blue transition-colors duration-300 truncate">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;