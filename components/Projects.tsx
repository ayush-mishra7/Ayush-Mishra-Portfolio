import React from 'react';
import { PROJECTS } from '../constants';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto rounded-full mb-6"></div>
          
          <a 
            href="https://github.com/ayush-mishra7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300 group"
          >
            <FaGithub className="text-xl" />
            <span className="font-medium">View all my projects on GitHub</span>
            <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-[#111] p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 relative overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-light-primary dark:via-dark-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors">
                      {project.title}
                    </h3>
                    <a 
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors ml-4"
                      aria-label="GitHub Repo"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-light-primary/10 dark:group-hover:bg-dark-primary/20 group-hover:text-light-primary dark:group-hover:text-dark-primary transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;