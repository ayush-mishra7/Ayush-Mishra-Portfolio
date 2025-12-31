import React from 'react';
import { BLOGS } from '../constants';
import { FaArrowRight } from 'react-icons/fa';

const Blogs: React.FC = () => {
  return (
    <section id="blogs" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900 dark:text-white">Blogs</h2>
          <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        <div className="flex w-max animate-scroll hover:pause gap-6 px-6">
          {/* Duplicate list to create seamless loop */}
          {[...BLOGS, ...BLOGS, ...BLOGS].map((blog, index) => (
            <article 
              key={`${blog.id}-${index}`} 
              className="w-[300px] md:w-[400px] flex-shrink-0 flex flex-col h-auto p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-light-primary dark:hover:border-dark-primary transition-all duration-300 bg-white dark:bg-[#0a0a0a] shadow-sm hover:shadow-lg"
            >
              <div className="flex justify-between items-center mb-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                {blog.excerpt}
              </p>
              <a 
                href={blog.link} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-light-primary dark:text-dark-primary hover:underline group"
              >
                Read More 
                <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Move by 1/3 since we have 3 sets */
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Blogs;