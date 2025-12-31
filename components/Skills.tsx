import React from 'react';
import { SKILLS, SLIDER_EXTRA_SKILLS } from '../constants';

const Skills: React.FC = () => {
  // Group skills by category
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  // Combine all skills for the marquee
  const sliderItems = [...SKILLS, ...SLIDER_EXTRA_SKILLS];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">My technical toolkit and proficiency levels</p>
        </div>

        {/* Updated grid: 2x2 on medium/large screens, 4 columns on extra large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-50 dark:bg-[#0f0f0f] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                {category}
              </h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-medium text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-light-primary dark:bg-dark-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Scroll Tech Stack Marquee */}
      <div className="relative w-full border-t border-gray-100 dark:border-gray-900 pt-16">
        <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">Technologies & Tools</p>
        </div>
        
        {/* Shadow overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-16 md:w-32 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 md:w-32 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>

        <div className="flex w-max animate-skill-scroll hover:pause gap-16 px-6 items-center">
          {/* Duplicate list to create seamless loop */}
          {[...sliderItems, ...sliderItems].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`} 
              className="flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer"
            >
              <div className="text-4xl md:text-5xl filter grayscale hover:grayscale-0 transition-all duration-300">
                {skill.icon}
              </div>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes skill-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-skill-scroll {
          animation: skill-scroll 50s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;