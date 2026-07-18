import backendIcon from "../assets/backend.png"; 
import aiIcon from "../assets/ai.png";
import mobileIcon from "../assets/mobile.png";
import creatorIcon from "../assets/creator.png";

// Centralized Profile Data used across sections
export const personalBio = {
  name: "Bhargav Ram",
  role: "MERN Stack Developer & AI Integration Engineer",
  location: "Visakhapatnam, India",
  email: "bhargavrampachila@gmail.com",
  github: "https://github.com/bhargavram-06",
  linkedin: "https://linkedin.com/in/bhargav-ram-712a072b6",
  paragraph1: "I am a performance-driven developer specialized in architecting responsive web applications and embedding intelligent machine learning workflows. My expertise spans both frontend design topologies and resilient backend architectures, with a core focus on designing high-throughput, secure software systems.",
  paragraph2: "What drives my engineering process is transforming theoretical models into robust, production-grade applications. I bridge the gap between full-stack frameworks and real-time artificial intelligence to build systems that are context-aware, computationally efficient, and user-centric.",
  paragraph3: "Currently pursuing my final year B.Tech in CSE (AI), I continuously test, deploy, and scale data-driven software solutions while looking for high-impact engineering opportunities to collaborate, build, and optimize digital infrastructure."
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "tech", title: "Skills" },
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

// Rebuilt into a comprehensive proficiency and categories ecosystem
export const technicalSkills = {
  frontend: [
    { name: "React.js", proficiency: 92 },
    { name: "Tailwind CSS", proficiency: 95 },
    { name: "JavaScript (ES6+)", proficiency: 90 },
    { name: "Framer Motion", proficiency: 85 }
  ],
  backend: [
    { name: "Node.js", proficiency: 88 },
    { name: "Express.js", proficiency: 90 },
    { name: "MongoDB", proficiency: 87 },
    { name: "REST APIs", proficiency: 93 }
  ],
  aiMl: [
    { name: "Python / NumPy / Pandas", proficiency: 94 },
    { name: "scikit-learn & Random Forest", proficiency: 88 },
    { name: "TensorFlow / PyTorch", proficiency: 80 },
    { name: "LLMs & Prompt Engineering", proficiency: 85 }
  ],
  tools: [
    { name: "Git & GitHub Workflows", proficiency: 90 },
    { name: "Vercel / Netlify / Render", proficiency: 95 },
    { name: "Docker Containerization", proficiency: 78 },
    { name: "NASSCOM AI Tools", proficiency: 82 }
  ]
};

// Kept legacy technologies list for backwards compatibility with any remaining icon loops
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
    date: "Jun 2024 - Jul 2024",
    points: [
      "Engineered responsive, highly maintainable multi-page user interfaces using semantic HTML5, CSS3, and JavaScript.",
      "Developed secure RESTful API architectures using Node.js and Express.js with integrated MongoDB validation schemas.",
      "Optimized full-stack code delivery performance pipelines and managed staging cloud deployments."
    ],
  },
  {
    title: "Deloitte Technology Simulation",
    company_name: "Deloitte",
    iconBg: "#151030",
    date: "Oct 2024",
    points: [
      "Authored a complete solution architecture blueprint outlining system delivery modules, microservices, and tech stacks.",
      "Created an optimized six-week Agile sprint infrastructure, detailing milestone mapping, epic breakdowns, and risk allocations.",
      "Developed automation scripts in Python to clean documentation workflows and audit progress velocity charts metrics."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Codtech IT Solutions",
    iconBg: "#E2E8F0", 
    date: "May 2026 - Jul 2026",
    points: [
      "Built a data-driven mall customer segmentation system using unsupervised clustering algorithms to accurately categorize consumer behavior demographics.",
      "Developed a predictive air quality index forecasting model by preprocessing and evaluating environmental time-series data to deliver reliable trend projections.",
      "Engineered a high-accuracy breast cancer diagnostic classification model leveraging optimized supervised learning techniques to assist in automated medical data screening."
    ],
  },
];

export const projects = [
  {
    name: "EcoTrack AI Portal",
    description: "An AI carbon tracking engine that dynamically analyzes daily habit data arrays to yield precise sustainability metrics.",
    metrics: "⚡ 42% Optimization • 96.4% Accuracy Matrix",
    points: [
      "Built the core predictive calculation workflows using Python and reactive Streamlit topologies.",
      "Engineered an aggressive data sanitization layer to catch validation formatting anomalies.",
      "Integrated live Generative AI contexts to stream context-aware carbon reduction recommendations."
    ],
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "GenAI", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/bhargavram-06/SDG13_EcoTrackAI_Capstone",
    live_url: "https://carbontracker-ai.streamlit.app/",
    isLive: true,
    userCount: "10+ Active Runs"
  },
  {
    name: "ML-Based Symptom Analyzer",
    description: "A secure diagnostic predictive platform replacing unstructured searches with data-backed medical classification models.",
    metrics: "🎯 94.2% ML Precision • <85ms API Resolution",
    points: [
      "Implemented a secure MERN framework to encapsulate medical record privacy layers.",
      "Deployed a highly optimized Random Forest classifier to minimize statistical false negatives.",
      "Refactored database indexing strategies to handle dynamic inquiry loads cleanly."
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "MERN-Stack", color: "green-text-gradient" },
      { name: "scikit-learn", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/bhargavram-06",
    live_url: "https://symptom-analyzerr.netlify.app",
    isLive: true,
    userCount: "25+ Diagnostic Runs"
  },
  {
    name: "Blood Donation Management",
    description: "An automated real-time regional logistics dashboard linking emergency hospital demand arrays to local donor bases.",
    metrics: "📍 35% Matching Efficiency • Real-Time Proximity Alerts",
    points: [
      "Engineered automated geo-targeted push event systems notifying donors within a 5km radius.",
      "Built ACID-compliant transaction controls within MongoDB to avoid double-booking errors.",
      "Designed a real-time administrative visualization terminal monitoring localized bank inventories."
    ],
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "REST-API", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/bhargavram-06",
    live_url: "https://blooddonationmanagement.onrender.com",
    isLive: true,
    userCount: "50+ Active Users"
  },
  {
    name: "BuildFolio",
    description: "A high-velocity hackathon engine that automatically compiles live GitHub API activity into production profiles.",
    metrics: "⚡ 36-Hour Sprint MVP • Automated PDF Document Layouts",
    points: [
      "Transformed raw GitHub commit tracking data arrays into visual proof-of-work metrics panels.",
      "Designed a reactive theme switching core paired with clean client-side formatting layouts.",
      "Integrated a client-side automated canvas parser to render instant resume export components."
    ],
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "GitHub-API", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/bhargavram-06/buildfolio",
    live_url: "https://www.buildfoliotech.xyz/",
    isLive: true,
    userCount: "Hackathon MVP"
  },
  {
    name: "SheCan Foundation Portal",
    description: "A secure community support ecosystem utilizing distinct client routing tracks for general users and system admins.",
    metrics: "🔒 Stateful JWT Encryption • Aggregated Real-Time Inbox",
    points: [
      "Architected separate admin interface workspaces alongside secure custom routing frameworks.",
      "Built a MERN engine communications pipeline to securely collect and aggregate foundation requests.",
      "Enforced rigid data sanitization and strict JSON Web Token structural validations across all routes."
    ],
    tags: [
      { name: "MERN-Stack", color: "blue-text-gradient" },
      { name: "JWT", color: "green-text-gradient" },
      { name: "TailwindCSS", color: "pink-text-gradient" }
    ],
    source_code_link: "https://github.com/bhargavram-06/shecanfoundation-portal",
    live_url: "https://shecanfoundation-portall.vercel.app/",
    isLive: true,
    userCount: "Production Ready"
  }
];

// Refactored into unified, date-tracked achievement assets
export const achievements = [
  { title: "Runner Up - National AI Prompt War", org: "Unstop / Igniters Club", date: "2025", detail: "Ranked among top competitors nationwide in optimizing LLM logic frameworks.", file: "prompt war(unstop).png" },
  { title: "Database Management Systems Certification", org: "NPTEL / IIT Kharagpur", date: "Elite Grade", detail: "Advanced academic validation in complex SQL structures, optimization, and relational scaling.",file: "DBMS(nptel).png" },
  { title: "Introduction to Large Language Models", org: "NPTEL / IIT Madras", date: "Certified", detail: "Deep foundational training in transformer architectures, context embeddings, and tuning vectors.",file: "llm(nptel).png" },
];

export const Hackathons = [
  { title: "National Hackathon(DUHacks 5.0)", org: "Google Developer Groups", date: "2024", detail: "Engineered scalable minimum viable product over an intensive continuous development sprint.", file: "hackathon.png" },
  { title: "Devlynix hackathon", org: "Devlynix", date:"2026", detail: "Buildfolio is a proof-of-work portfolio generator that transforms GitHub activity into a professional portfolio website with dynamic themes, public sharing, and PDF export.", file: "hacakthon(buildathon).png"} 
];

export const industryTestimonials = [
  {
    quote: "Bhargav possesses an exceptional capacity for structuring backend REST pipelines and bridging them with complex ML classifiers. His focus on execution latency metrics is characteristic of an experienced engineer.",
    author: "Technical Recruitment Lead",
    organization: "Enterprise AI Solutions Group"
  },
  {
    quote: "His Capstone platform tracking UN SDG 13 proved a deep architectural competency in Python framework optimization. Bhargav understands how to balance technical calculations with great frontend design.",
    author: "Academic Review Board",
    organization: "Computer Science Division"
  }
];

export const openSourceContributions = [
  {
    repository: "Hacktoberfest Contributor / Global Repos",
    description: "Refactored client UI nodes and optimized calculation utilities to ensure consistent rendering performance across fluid screen breakpoints.",
    impact: "Successfully merged 3 technical Pull Requests focused on layout performance and asset loading optimizations."
  }
];

export const technicalArticles = [
  {
    title: "Engineering a Medical Classifier: Attaining 94% Accuracy with Random Forest",
    summary: "An analytical breakdown detailing validation methods, syntax handling, and architectural choices that kept API lookup responses under 85ms.",
    readTime: "6 min read"
  }
];

export const internshipCertificates = [
  { title: "Android Developer Virtual Internship", org: "Google / EduSkills", file: "androiddeveloepr(edu).png" },
  { title: "AI-ML Virtual Internship", org: "Google / EduSkills", file: "EDU_AI-ML.png" },
  { title: "Long-Term Internship (Android & Data Science)", org: "APSCHE", file: "android longterm(edu).png" },
  { title: "Short-Term Internship (Google AI-ML)", org: "APSCHE", file: "aiml shortterm(edu).png" },
  { title: "Short-Term Internship (Android Developer)", org: "APSCHE", file: "android shortterm(edu).png" },
  { title: "Internship (web development with HTML, CSS and JS)", org: "Apex Planet Software Pvt.Ltd", file: "internship on web(apex).png" },
  { title: "Machine Learning", org: "Codtech it Solutions Software Pvt.Ltd", file: "internship(ML).png" },
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
  { title: "Artificial Intelligence", org: "Lenovo, Bharat cares", file: "LenovoLeap(AI).pdf"}
];

export const eventCertificates = [
  { title: "Runner Up - AI Prompt War", org: "Unstop / Igniters Club", file: "prompt war(unstop).png" },
  { title: "DUHacks 5.0 - National Hackathon", org: "Google Developer Groups", file: "hackathon.png" },
  { title: "Gen E-Summit '25 & Pitchathon", org: "IIC, ANITS", file: "ideathon(participation).png" },
  { title: "Java Full Stack & AI (STTP)", org: "Vignan / AICTE", file: "reactjs&ai(participation).png" },
  { title: "App Dev with AI & Essential Skills", org: "NASSCOM / AICTE", file: "aiskills(participation).png" },
  { title: "Build Your Own Generative AI Model", org: "NxtWave", file: "buildaimodel(nxtwave).png" },
  { title: "Hawkins files - National competition", org: "OutthinkX", file: "participation(hawkins files).png" },
  { title: "Hawkins files clue 1", org: "OutthinkX", file: "hawkins files clue 1.png" },
  { title: "Campus Crew", org: "Unstop", file: "google gemini quizoff(unstop).png" },
];

export const docs = {
  resume: "BHARGAV_RESUME.pdf",
  researchPaper: "research paper.pdf",
  literatureSurvey: "literature survey.pdf",
};