import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-24 h-1.5 bg-light-primary dark:bg-dark-primary mx-auto rounded-full mb-8"></div>
        </div>

        {/* Profile Section: Image + Text */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          
          {/* Avatar Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-[3px] border-white dark:border-gray-800 shadow-2xl group bg-white dark:bg-gray-900">
              <img 
                src="https://raw.githubusercontent.com/ayush-mishra7/profile-assets/main/profile_pic.png" 
                alt="Ayush Mishra" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-light-primary/10 dark:bg-dark-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light mb-6">
              I am a Final Year B.Tech Student and an AI/ML Engineer passionate about building intelligent, scalable systems that turn data into real-world impact.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              I enjoy working across the full AI pipeline—from data preprocessing and model development to deployment and optimization—while focusing on clean code, performance, and practical problem-solving.
              When I'm not coding, you can find me reading research papers, contributing to open source, or exploring new coffee shops.
            </p>
          </div>
        </div>
            
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-300 h-full min-h-[180px]">
            <div className="w-12 h-12 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 flex items-center justify-center mb-4 text-light-primary dark:text-dark-primary text-xl">
              <FaGraduationCap />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Education</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-center mb-3">
              B.Tech in CSE<br/>(Data Science Specialization)
            </p>
            <span className="text-xs font-semibold text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10 px-3 py-1 rounded-full">
              Aug 2022 - Present
            </span>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-300 h-full min-h-[180px]">
            <div className="w-12 h-12 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 flex items-center justify-center mb-4 text-light-primary dark:text-dark-primary text-xl">
              <FaMapMarkerAlt />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Location</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Jalandhar, Punjab, India
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-[#111] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-light-primary dark:hover:border-dark-primary transition-colors duration-300 h-full min-h-[180px]">
            <div className="w-12 h-12 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 flex items-center justify-center mb-4 text-light-primary dark:text-dark-primary text-xl">
              <FaBriefcase />
            </div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Availability</h4>
            <p className="text-sm text-light-primary dark:text-dark-primary font-bold text-center">
              Open to Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;