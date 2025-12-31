import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-light-primary dark:text-dark-primary font-bold tracking-widest uppercase text-sm md:text-base mb-4 animate-fade-in-down">
          Hello, I'm
        </h2>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Ayush Mishra
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
          AI/ML Engineer specialized in building <span className="font-semibold text-gray-900 dark:text-white">intelligent systems</span> that scale.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, '#projects')}
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg dark:shadow-neon-purple shadow-neon-green cursor-pointer"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          onClick={(e) => scrollToSection(e, '#about')}
          aria-label="Scroll down" 
          className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors cursor-pointer"
        >
          <FaArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;