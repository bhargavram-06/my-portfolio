import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../../animations/motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";

// Fail-safe: Try to import emailjs. If it fails (package not installed), 
// we will handle it gracefully in the handleSubmit function.
let emailjs;
try {
  emailjs = require("@emailjs-com/browser");
} catch (e) {
  emailjs = null;
}

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // If EmailJS is available and configured
    if (emailjs) {
      emailjs
        .send(
          'YOUR_SERVICE_ID', // Replace with your Service ID
          'YOUR_TEMPLATE_ID', // Replace with your Template ID
          {
            from_name: form.name,
            to_name: "Bhargav Ram",
            from_email: form.email,
            to_email: "bhargavrampachila@gmail.com",
            message: form.message,
          },
          'YOUR_PUBLIC_KEY' // Replace with your Public Key
        )
        .then(() => {
          setLoading(false);
          alert("Thank you! I have received your message.");
          setForm({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          handleMailtoFallback();
        });
    } else {
      // Fallback for network/install issues
      handleMailtoFallback();
    }
  };

  const handleMailtoFallback = () => {
    setLoading(false);
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Message: ${form.message}\n\nSender Email: ${form.email}`);
    const mailtoUrl = `mailto:bhargavrampachila@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    alert("Opening your local email client to send the message...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-10 overflow-hidden relative z-10">
      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        
        {/* Contact Form Container */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-tertiary p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-neon-blue/5 pointer-events-none rounded-2xl" />

          <p className="text-secondary font-mono tracking-widest uppercase text-[14px]">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-6 relative z-10"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-primary/50 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue transition-all font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Email Address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-primary/50 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue transition-all font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-3">Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className="bg-primary/50 py-4 px-6 placeholder:text-secondary/50 text-white rounded-xl outline-none border border-white/5 focus:border-neon-blue transition-all font-medium resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-neon-blue py-4 px-10 rounded-xl outline-none w-fit text-primary font-black uppercase tracking-widest shadow-neon hover:bg-white hover:text-primary transition-all duration-300 active:scale-95"
            >
              {loading ? "Transmitting..." : "Send Command"}
            </button>
          </form>
        </motion.div>

        {/* Info Panel Container */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 flex flex-col justify-center"
        >
          <div className="bg-white/5 p-8 sm:p-10 rounded-2xl border border-white/5 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <h4 className="text-white font-bold text-[24px] sm:text-[28px] mb-8 tracking-tight">Access Directory</h4>
            
            <div className="flex flex-col gap-8">
              {[
                { icon: <AiOutlineMail />, label: "Email", value: "bhargavrampachila@gmail.com" },
                { icon: <AiOutlinePhone />, label: "Phone", value: "+91 8341342605" },
                { icon: <AiOutlineEnvironment />, label: "Base Location", value: "Visakhapatnam, India" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-tertiary flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-primary transition-all duration-300 shadow-lg">
                    {React.cloneElement(item.icon, { size: 24 })}
                  </div>
                  <div>
                    <p className="text-secondary text-[11px] font-mono uppercase tracking-[0.2em]">{item.label}</p>
                    <p className="text-white font-semibold text-[14px] sm:text-[16px]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;