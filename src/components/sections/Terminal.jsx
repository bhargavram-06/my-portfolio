import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../../animations/motion";
import { personalBio, services, technicalSkills, projects } from "../../constants";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", content: "Bhargav OS [Version 1.0.48]" },
    { type: "system", content: "(c) 2026 Bhargav Corporation. All rights reserved." },
    { type: "system", content: " " },
    { type: "system", content: "Type 'help' to begin your session..." },
  ]);
  const [commandHistory, setCommandHistory] = useState([]); 
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const COMMANDS = {
    help: "Available commands: about, skills, projects, contact, github, linkedin, clear",
    about: `${personalBio.name} — ${personalBio.role}.\n\n${personalBio.paragraph1}\n\n${personalBio.paragraph2}\n\n${personalBio.paragraph3}`,
    skills: `Core Tracks:\n- ${services.map(s => s.title).join("\n- ")}\n\nTech Arsenal:\n- Frontend: ${technicalSkills.frontend.map(f => f.name).join(", ")}\n- Backend: ${technicalSkills.backend.map(b => b.name).join(", ")}\n- AI/ML: ${technicalSkills.aiMl.map(a => a.name).join(", ")}\n- Tools: ${technicalSkills.tools.map(t => t.name).join(", ")}`,
    projects: projects.map((p, idx) => `${idx + 1}. ${p.name} [${p.userCount || 'Active'}]\n   Description: ${p.description}\n   Metrics: ${p.metrics}\n   Highlights:\n   • ${p.points.join("\n   • ")}\n   Live URL: ${p.live_url}`).join("\n\n"),
    contact: `Email: ${personalBio.email} | Base Location: ${personalBio.location}.\nFeel free to drop a line using the form below!`,
    github: `Redirecting to GitHub: ${personalBio.github}`,
    linkedin: `Redirecting to LinkedIn: ${personalBio.linkedin}`,
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase().trim();
      if (!cmd) return;

      if (cmd === "clear") {
        setHistory([]);
        setCommandHistory((prev) => [input, ...prev]);
        setHistoryIndex(-1);
        setInput("");
        return;
      }

      const newEntry = { type: "user", content: `guest@bhargav:~$ ${input}` };
      const responseContent = COMMANDS[cmd] || `Error: Command '${cmd}' not recognized. Type 'help' for valid commands.`;
      const response = { type: "bot", content: responseContent };

      setHistory((prevHistory) => [...prevHistory, newEntry, response]);
      setCommandHistory((prevCommands) => [input, ...prevCommands]);
      setHistoryIndex(-1);
      setInput("");

      if (cmd === "github") window.open(personalBio.github, "_blank");
      if (cmd === "linkedin") window.open(personalBio.linkedin, "_blank");

    } else if (e.key === "ArrowUp") {
      if (historyIndex < commandHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section id="terminal" className="max-w-7xl mx-auto px-6 py-10 relative z-10">
      <motion.div variants={textVariant()}>
        <p className="text-secondary text-[16px] sm:text-[18px] font-mono tracking-widest uppercase">System Console</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] text-[38px] tracking-tighter">Terminal.</h2>
      </motion.div>

      <div 
        onClick={focusInput}
        className="mt-10 w-full max-w-4xl mx-auto bg-black/90 rounded-xl border border-neon-blue/20 overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.1)] group cursor-text"
      >
        <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5 select-none">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[11px] font-mono text-secondary tracking-widest uppercase">bash — 80x24</span>
          <div className="w-10" />
        </div>

        <div 
          ref={terminalRef}
          className="p-5 h-[350px] sm:h-[450px] overflow-y-auto font-mono text-sm sm:text-base scrollbar-thin scrollbar-thumb-neon-blue/20"
        >
          {history.map((line, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              key={i} 
              className={`mb-1.5 leading-relaxed whitespace-pre-line ${line.type === 'bot' ? 'text-neon-blue' : line.type === 'system' ? 'text-white/60' : 'text-emerald-400'}`}
            >
              {line.content}
            </motion.div>
          ))}
          
          <div className="flex items-center mt-3 text-emerald-400">
            <span className="font-bold mr-2 select-none">guest@bhargav:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="bg-transparent border-none outline-none flex-1 text-white caret-neon-blue font-mono"
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;