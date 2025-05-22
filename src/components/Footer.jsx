import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] pt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">
              Nivin<span className="text-indigo-500">MB</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Full-Stack Web Developer specializing in Python, Django, React, and PostgreSQL. Creating user-focused, scalable web applications with clean code and modern tech stacks.
            </p>
            <div className="flex space-x-4 mb-6">
              <motion.a
                href="https://github.com/Nivin1122"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all"
              >
                <FaGithub size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nivinb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:bnivin71@gmail.com"
                whileHover={{ y: -5 }}
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all"
              >
                <FaEnvelope size={18} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-indigo-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-indigo-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#resume" className="text-gray-400 hover:text-indigo-400 transition-colors">Resume</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-400">
                Kerala, India
              </p>
              <p className="text-gray-400">
                bnivin71@gmail.com
              </p>
              <a 
                href="#contact" 
                className="inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white text-sm font-medium transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-0 right-0 -top-6 flex justify-center">
          <motion.button
            whileHover={{ y: -3 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-lg bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-white shadow-lg transform transition-all"
          >
            <FaArrowUp />
          </motion.button>
        </div>
        
        <div className="border-t border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nivin MB. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Designed & Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 