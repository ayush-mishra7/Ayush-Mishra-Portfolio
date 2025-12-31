import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaFileDownload } from 'react-icons/fa';
import { NAV_ITEMS } from '../constants';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100; // Height of navbar + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-md py-4' 
      : 'bg-transparent py-6'
  }`;

  const linkClasses = (section: string) => `
    text-sm font-medium transition-colors duration-300 hover:text-light-primary dark:hover:text-dark-primary cursor-pointer
    ${activeSection === section 
      ? 'text-light-primary dark:text-dark-primary font-bold' 
      : 'text-gray-600 dark:text-gray-300'}
  `;

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo and CV Button Container */}
        <div className="flex items-center gap-6">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-2xl font-heading font-bold text-gray-900 dark:text-white tracking-tight"
          >
            AM<span className="text-light-primary dark:text-dark-primary">.</span>
          </a>
          
          <a 
            href="https://drive.google.com/file/d/1dKigEk_jx9kW66S2rczkg_Bm1rx5pdFB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold rounded-full bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FaFileDownload className="text-lg" />
            <span>View CV</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className={linkClasses(item.href.substring(1))}
            >
              {item.label}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === Theme.DARK ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {theme === Theme.DARK ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-dark-card border-b border-gray-100 dark:border-gray-800 transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 h-0'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-light-primary dark:hover:text-dark-primary"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://drive.google.com/file/d/1dKigEk_jx9kW66S2rczkg_Bm1rx5pdFB/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-primary dark:text-dark-primary font-medium flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <FaFileDownload /> View CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;