import React, { useState } from "react";
import { motion } from "framer-motion";

const LockScreen = ({ onUnlocked }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  // Define your system access key here
  const SYSTEM_KEY = "loshi2009"; 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === SYSTEM_KEY) {
      setError(false);
      localStorage.setItem("portfolio_session_auth", "true"); // Persists login session
      onUnlocked();
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="fixed inset-0 bg-primary z-[99999] flex flex-col justify-center items-center font-mono px-6 select-none">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-black/80 rounded-xl border border-neon-blue/30 p-8 shadow-[0_0_40px_rgba(0,255,255,0.1)] text-center relative overflow-hidden"
      >
        <div className="flex gap-2 mb-6 justify-start absolute top-4 left-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>

        <h2 className="text-white font-black tracking-tight text-xl uppercase mt-4">
          Security Authentication
        </h2>
        <p className="text-secondary/60 text-xs mt-1 mb-8">
          Enter cryptographic system key to decrypt core shell
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative flex items-center bg-white/5 border border-white/10 rounded-lg px-4 py-3 group focus-within:border-neon-blue/50 transition-colors">
            <span className="text-neon-blue font-bold mr-2 select-none">root#</span>
            <input
              type="password"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
              className="bg-transparent border-none outline-none flex-1 text-white caret-neon-blue tracking-widest placeholder:tracking-normal placeholder:text-white/20"
              autoFocus
            />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -2 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#ff5f56] text-xs font-bold tracking-wide text-left"
            >
              [ERROR]: Access Denied. Invalid System Key.
            </motion.p>
          )}

          <button
            type="submit"
            className="w-full bg-neon-blue hover:bg-white text-primary font-bold py-3 px-6 rounded-lg transition-all duration-300 transform active:scale-95 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-neon"
          >
            Decrypt System
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default LockScreen;