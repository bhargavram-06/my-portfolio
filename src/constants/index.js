import backendIcon from "../assets/backend.png"; 
import aiIcon from "../assets/ai.png";
import mobileIcon from "../assets/mobile.png";
import creatorIcon from "../assets/creator.png";

// Centralized Profile Data used by both About and Terminal sections
export const personalBio = {
  name: "Bhargav Ram",
  role: "MERN Stack Developer & AI Integration Engineer",
  location: "Visakhapatnam, India",
  email: "bhargavrampachila@gmail.com",
  github: "https://github.com/bhargavram-06",
  linkedin: "https://linkedin.com/in/pachila-bhargav-ram",
  paragraph1: "I’m a passionate developer who enjoys building modern web applications and exploring how AI can make them smarter and more useful. I love working on both frontend and backend development from designing clean and interactive user interfaces to creating secure and efficient backend systems.",
  paragraph2: "What excites me most about tech is turning ideas into real applications that people can actually use. I’m especially interested in combining full-stack development with AI to build solutions that are not only functional but also intelligent and user-friendly.",
  paragraph3: "Currently pursuing B.Tech in CSE (AI), I’m continuously learning, building projects, and improving my skills while looking for opportunities to grow, collaborate, and create meaningful digital experiences."
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "credentials", title: "Credentials" },
  { id: "terminal", title: "Console Terminal" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "MERN Stack Developer", icon: backendIcon },
  { title: "AI Integration Engineer", icon: aiIcon },
  { title: "Backend Specialist", icon: mobileIcon },
  { title: "Research Oriented", icon: creatorIcon },
];

export const technologies = [
  { name: "HTML 5", icon: "html" },
  { name: "CSS 3", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "React JS", icon: "reactjs" },
  { name: "Node JS", icon: "nodejs" },
  { name: "Express Js", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Python", icon: "python" },
  { name: "Git", icon: "git" },
  { name: "Machine Learning", icon: "ml" }
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: "ApexPlanet Software Pvt. Ltd.",
    iconBg: "#383E56",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Developed responsive web pages using HTML, CSS, and JavaScript.",
      "Built backend services using Node.js, Express.js, and MongoDB.",
      "Worked on full-stack integrations and deployment workflows.",
    ],
  },
  {
    title: "Deloitte Technology Simulation",
    company_name: "Deloitte",
    iconBg: "#151030",
    date: "October 2025",
    points: [
      "Designed a structured project proposal outlining technical architecture and delivery strategy.",
      "Created a six-week Agile sprint plan demonstrating milestone tracking and workflow planning.",
      "Used Python scripts to assist documentation and project planning tasks."
    ],
  },
];

export const projects = [
  {
    name: "EcoTrack AI Portal",
    description: "An AI-powered environmental capstone platform aligned with UN SDG 13 for production-ready carbon footprint monitoring, predictive analytics, and automated compliance tracking.",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Generative-AI", color: "pink-text-gradient" },
      { name: "Predictive-Analytics", color: "orange-text-gradient" },
    ],
    source_code_link: "https://github.com/bhargavram-06/SDG13_EcoTrackAI_Capstone",
    live_url: "https://carbontracker-ai.streamlit.app/"
  },
  {
    name: "ML-Based Symptom Analyzer",
    description: "An AI-powered healthcare application predicting 40+ diseases based on 133 symptoms and health care guidance.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient"},
      { name: "ML", color: "orange-text-gradient"},
    ],
    source_code_link: "https://github.com/bhargavram-06",
    live_url: "https://symptom-analyzerr.netlify.app"
  },
  {
    name: "Blood Donation Management",
    description: "A centralized platform for managing blood requests and donor data efficiently with a MERN stack architecture.",
    tags: [
        { name: "HTML", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "Node.js", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/bhargavram-06",
    live_url: "https://blooddonationmanagement.onrender.com"
  },
];

export const internshipCertificates = [
  { title: "Android Developer Virtual Internship", org: "Google / EduSkills", file: "androiddeveloepr(edu).png" },
  { title: "AI-ML Virtual Internship", org: "Google / EduSkills", file: "EDU_AI-ML.png" },
  { title: "Long-Term Internship (Android & Data Science)", org: "APSCHE", file: "android longterm(edu).png" },
  { title: "Short-Term Internship (Google AI-ML)", org: "APSCHE", file: "aiml shortterm(edu).png" },
  { title: "Short-Term Internship (Android Developer)", org: "APSCHE", file: "android shortterm(edu).png" },
  { title: "Internship (web development with HTML, CSS and JS)", org: "Apex Planet Software Pvt.Ltd", file: "internship on web(apex).png" },
];

export const courseCertificates = [
  { title: "Database Management System", org: "NPTEL / IIT Kharagpur", file: "DBMS(nptel).png" },
  { title: "Introduction to LLMs", org: "NPTEL / IIT Madras", file: "llm(nptel).png"},
  { title: "Frontend for Java Full Stack Development", org: "Coursera", file: "frontend for java fullstack(coursera).png" },
  { title: "Introduction to Artificial Intelligence", org: "Great Learning Academy", file: "ai(greatlearn).png" },
  { title: "Machine Learning (SkillUp)", org: "Simplilearn", file: "ML(simplilearn).png" },
  { title: "HTML Essentials", org: "Cisco Networking Academy", file: "html(cisco).png" },
  { title: "CSS Essentials", org: "Cisco Networking Academy", file: "css(cisco).png" },
  { title: "JavaScript Essentials 1", org: "Cisco Networking Academy", file: "js-1(cisco).png" },
  { title: "Soft Skills Training", org: "Infosys Springboard", file: "softskills(cisco).png" },
  { title: "Group Discussion Achievement", org: "TCS iON", file: "discussion(tcs).png" },
];

export const eventCertificates = [
  { title: "Runner Up - AI Prompt War", org: "Unstop / Igniters Club", file: "prompt war(unstop).png" },
  { title: "DUHacks 5.0 - National Hackathon", org: "Google Developer Groups", file: "hackathon.png" },
  { title: "Gen E-Summit '25 & Pitchathon", org: "IIC, ANITS", file: "ideathon(participation).png" },
  { title: "Java Full Stack & AI (STTP)", org: "Vignan / AICTE", file: "reactjs&ai(participation).png" },
  { title: "App Dev with AI & Essential Skills", org: "NASSCOM / AICTE", file: "aiskills(partcipation).png" },
  { title: "Build Your Own Generative AI Model", org: "NxtWave", file: "buildaimodel(nxtwave).png" },
];

export const docs = {
  resume: "CV.pdf",
  researchPaper: "research paper.pdf",
  literatureSurvey: "literature survey.pdf",
};