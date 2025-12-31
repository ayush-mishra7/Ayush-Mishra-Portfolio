import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';
import { FaPaperPlane, FaFileDownload } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:ayush963ash@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities in AI/ML. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Vertical Social Links */}
          <div className="flex flex-col space-y-6 order-2 md:order-1 h-full justify-center">
             
             {/* Download CV Button */}
             <a 
               href="https://drive.google.com/file/d/1dKigEk_jx9kW66S2rczkg_Bm1rx5pdFB/view?usp=sharing" 
               target="_blank"
               rel="noopener noreferrer"
               className="w-full py-4 px-6 bg-white text-black font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg transform hover:-translate-y-1"
             >
                <FaFileDownload className="text-xl" />
                <span className="text-lg">Download CV</span>
             </a>

             <div className="flex flex-col space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-5 bg-gray-800 rounded-2xl hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-gray-600"
                    aria-label={link.label}
                  >
                    <div className="text-2xl text-light-primary dark:text-dark-primary">
                      {link.icon}
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white break-all">{link.label}</span>
                  </a>
                ))}
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-3xl backdrop-blur-sm order-1 md:order-2 border border-gray-700 h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-light-primary dark:bg-dark-primary text-white dark:text-black font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="text-sm" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="pt-16 mt-16 border-t border-gray-800 text-sm text-center text-gray-500">
          <p>&copy; 2026 Built with <span className="text-red-500">❤️</span> by Ayush Mishra</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;