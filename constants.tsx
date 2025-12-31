import React from 'react';
import { Project, Skill, Blog, Experience } from './types';
import { FaGithub, FaLinkedin, FaEnvelope, FaPython, FaJava, FaDocker, FaGitAlt, FaAws, FaBrain, FaDatabase, FaCode, FaComments, FaUsers, FaFileAlt, FaLightbulb, FaBriefcase, FaLaptopCode } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTensorflow, SiPytorch, SiFastapi, SiKubernetes, SiOpencv, SiMysql, SiPostgresql, SiMlflow, SiApachespark, SiApachekafka } from 'react-icons/si';

export const SOCIAL_LINKS = [
  { id: 1, icon: <FaEnvelope />, href: "mailto:ayush963ash@gmail.com", label: "ayush963ash@gmail.com" },
  { id: 2, icon: <FaGithub />, href: "https://github.com/ayush-mishra7", label: "github.com/ayush-mishra7" },
  { id: 3, icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ayushmishra77/", label: "linkedin.com/in/ayushmishra77" },
];

export const SKILLS: Skill[] = [
  { name: "Python", percentage: 85, category: "Languages", icon: <FaPython className="text-[#3776AB]" /> },
  { name: "Java", percentage: 70, category: "Languages", icon: <FaJava className="text-[#007396]" /> },
  { name: "JavaScript/TypeScript", percentage: 65, category: "Languages", icon: <div className="flex gap-1"><SiJavascript className="text-[#F7DF1E]" /><SiTypescript className="text-[#3178C6]" /></div> },
  { name: "SQL (MySQL/PostgreSQL)", percentage: 80, category: "Languages", icon: <div className="flex gap-1"><SiMysql className="text-[#4479A1]" /><SiPostgresql className="text-[#336791]" /></div> },
  { name: "TensorFlow / PyTorch", percentage: 80, category: "ML/AI", icon: <div className="flex gap-1"><SiTensorflow className="text-[#FF6F00]" /><SiPytorch className="text-[#EE4C2C]" /></div> },
  { name: "Computer Vision", percentage: 75, category: "ML/AI", icon: <SiOpencv className="text-[#5C3EE8]" /> },
  { name: "NLP (Transformers)", percentage: 70, category: "ML/AI", icon: <FaBrain className="text-pink-500" /> },
  { name: "RAG", percentage: 75, category: "ML/AI", icon: <FaDatabase className="text-blue-400" /> },
  { name: "Backend (FastAPIs)", percentage: 75, category: "Tools", icon: <SiFastapi className="text-[#009688]" /> },
  { name: "Docker & Kubernetes", percentage: 60, category: "Tools", icon: <div className="flex gap-1"><FaDocker className="text-[#2496ED]" /><SiKubernetes className="text-[#326CE5]" /></div> },
  { name: "AWS SageMaker", percentage: 55, category: "Tools", icon: <FaAws className="text-[#FF9900]" /> },
  { name: "Git", percentage: 80, category: "Tools", icon: <FaGitAlt className="text-[#F05032]" /> },
  { name: "Communication", percentage: 95, category: "Soft Skills", icon: <FaComments className="text-teal-500" /> },
  { name: "Team Work", percentage: 90, category: "Soft Skills", icon: <FaUsers className="text-indigo-500" /> },
  { name: "Documentation", percentage: 85, category: "Soft Skills", icon: <FaFileAlt className="text-gray-500" /> },
  { name: "Problem Solving", percentage: 90, category: "Soft Skills", icon: <FaLightbulb className="text-yellow-500" /> },
];

export const SLIDER_EXTRA_SKILLS = [
  { name: "MLflow", icon: <SiMlflow className="text-[#0194E2]" /> },
  { name: "Apache Spark", icon: <SiApachespark className="text-[#E25A1C]" /> },
  { name: "Kafka", icon: <SiApachekafka className="text-[#231F20] dark:text-white" /> },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Machine Learning & AI Intern",
    company: "Board Infinity",
    date: "Jun 2024 – Jul 2024",
    description: [
      "Engineered predictive models using Python, scikit-learn, and TensorFlow, implementing Regression, Random Forests, and CNNs.",
      "Performed comprehensive data analysis and visualization with Pandas and Seaborn to extract patterns from complex datasets.",
      "Developed NLP solutions using TF-IDF and Word2Vec, optimizing text classification and sentiment analysis workflows."
    ],
    icon: <FaLaptopCode className="text-white" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Computer Vision Projects",
    description: "A comprehensive collection of various computer vision implementations including object detection, segmentation, and tracking algorithms.",
    tags: ["OpenCV", "PyTorch", "YOLO", "Python"],
    githubUrl: "https://github.com/ayush-mishra7/Computer-Vision-Projects"
  },
  {
    id: 2,
    title: "Kidney Disease Classification",
    description: "Deep learning model architecture designed to classify kidney disease stages from medical imaging data with high accuracy.",
    tags: ["Deep Learning", "Medical Imaging", "TensorFlow", "CNN"],
    githubUrl: "https://github.com/ayush-mishra7/Kidney-Disease-Classification-using-Deep-Learning"
  },
  {
    id: 3,
    title: "Aegis AI Surveillance System",
    description: "Intelligent surveillance system capable of anomaly detection and real-time threat assessment using advanced computer vision.",
    tags: ["Computer Vision", "Real-time Processing", "AI Security"],
    githubUrl: "https://github.com/ayush-mishra7/aegis-ai-intelligent-surveillance-system"
  },
  {
    id: 4,
    title: "ATC Safe NLP",
    description: "Natural Language Processing solution for Air Traffic Control communications to enhance safety and reduce communication errors.",
    tags: ["NLP", "Audio Processing", "Transformers", "Python"],
    githubUrl: "https://github.com/ayush-mishra7/ATC-Safe-NLP"
  },
  {
    id: 5,
    title: "Marketing Analytics Pipeline",
    description: "End-to-end automation pipeline for marketing analytics, integrating data ingestion, processing, and predictive modeling.",
    tags: ["Data Engineering", "Automation", "Machine Learning"],
    githubUrl: "https://github.com/ayush-mishra7/AyushMishra_HighBar_V2"
  },
  {
    id: 6,
    title: "Intelligent Retail Vision",
    description: "Smart retail analytics system using computer vision to track customer behavior and optimize store layout.",
    tags: ["Computer Vision", "Retail Analytics", "Object Tracking"],
    githubUrl: "https://github.com/ayush-mishra7/Intelligent-Retail-Vision-System"
  }
];

export const BLOGS: Blog[] = [
  {
    id: 1,
    title: "GPT-5.1 — The Most Human AI Yet",
    excerpt: "Exploring the nuances of the latest GPT model and its implications for human-like interaction.",
    date: "Nov 21, 2025",
    readTime: "4 min read",
    link: "https://medium.com/@ayush963ash/gpt-5-1-the-most-human-ai-yet-8780f36b9463"
  },
  {
    id: 2,
    title: "AutoML, GenAI & The Future of Data Work",
    excerpt: "What should you learn next in a world dominated by AutoML and Generative AI?",
    date: "Nov 12, 2025",
    readTime: "4 min read",
    link: "https://medium.com/@ayush963ash/automl-genai-the-future-of-data-work-what-should-you-learn-next-e75c55a54a61"
  },
  {
    id: 3,
    title: "From Assistants to Co-Creators: The Rise of Agentic AI",
    excerpt: "Understanding the shift from passive AI assistants to active, autonomous co-creators.",
    date: "Nov 12, 2025",
    readTime: "4 min read",
    link: "https://medium.com/@ayush963ash/from-assistants-to-co-creators-the-rise-of-agentic-ai-79c657a90d02"
  },
  {
    id: 4,
    title: "Chasing >90% Silhouette Score",
    excerpt: "A technical lesson in data clustering, expectations, and the reality of metrics.",
    date: "Nov 9, 2025",
    readTime: "5 min read",
    link: "https://medium.com/@ayush963ash/chasing-90-silhouette-score-a-lesson-in-data-expectations-138a44de1ee2"
  }
];

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];