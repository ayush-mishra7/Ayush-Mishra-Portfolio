import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
          <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">My professional journey and internships</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800 rounded-full"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-light-primary dark:bg-dark-primary border-4 border-white dark:border-black shadow-lg z-10 flex items-center justify-center">
                    <div className="text-white text-xs">
                        {exp.icon}
                    </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300 hover:border-light-primary dark:hover:border-dark-primary relative group">
                    
                    {/* Arrow for desktop */}
                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white dark:bg-[#111] border-t border-r border-gray-100 dark:border-gray-800 transition-colors duration-300 group-hover:border-light-primary dark:group-hover:border-dark-primary ${index % 2 === 0 ? '-right-2 rotate-45' : '-left-2 -rotate-135'}`}></div>
                    
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wide text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10 rounded-full">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.role}</h3>
                    <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-light-primary dark:bg-dark-primary rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;