import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full-Stack Web Developer";
  const typingSpeed = 150;
  const index = useRef(0);

  useEffect(() => {
    if (index.current < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + fullText[index.current]);
        index.current += 1;
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#0f172a] opacity-95"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col"
            >
              <div className="inline-block bg-indigo-500/10 px-4 py-1 rounded-full mb-4">
                <span className="text-indigo-400 font-medium text-sm tracking-wide">FULL-STACK DEVELOPER</span>
              </div>
              
              <h1 className="text-white text-5xl md:text-6xl font-bold mb-5 leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Nivin MB</span>
              </h1>
              
              <div className="h-8 mb-5">
                <h2 className="text-gray-300 text-2xl font-medium">
                  FullStack Web Developer<span className="animate-blink"></span>
                </h2>
              </div>

              <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
                A passionate developer specializing in creating clean, scalable web applications with Python, Django, React, and PostgreSQL that solve real-world problems.
              </p>

              <div className="flex gap-5 mb-10">
                <motion.a
                  href="https://github.com/Nivin1122"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.1)' }}
                  className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  title="GitHub Profile"
                >
                  <FaGithub size={22} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/nivinb"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.1)' }}
                  className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin size={22} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.1)' }}
                  className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all duration-300"
                  title="Email: bnivin71@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('mailto:bnivin71@gmail.com', '_blank');
                  }}
                >
                  <FaEnvelope size={22} />
                </motion.a>
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-lg bg-indigo-600 text-white font-medium transition-all duration-300 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2"
                >
                  <span>Contact Me</span>
                </motion.a>
                <motion.a
                  href="../../public/resume/Nivin-MB resume.pdf"
                  download="Nivin-MB resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 text-white font-medium transition-all duration-300 hover:bg-gray-700 hover:border-indigo-500/30 flex items-center justify-center gap-2"
                >
                  <FaDownload size={16} />
                  <span>Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-600/10 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="w-96 h-96 rounded-full bg-gradient-to-b from-indigo-500/20 to-blue-500/20 p-1">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-800/50 backdrop-blur-3xl">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src="/profile-photo.png"
                        alt="Nivin MB"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = 'https://i.imghippo.com/files/Bx3447KM.png';
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="absolute -bottom-5 -left-10 bg-gray-900/90 backdrop-blur-md border border-indigo-500/20 px-4 py-2 rounded-lg shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-indigo-500/20 rounded-md">
                      <FaLaptopCode className="text-indigo-400" size={16} />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">1.5+ Years</p>
                      <p className="text-gray-400 text-xs">Experience</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <motion.a 
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 hover:text-indigo-400 transition-colors"
        >
          <FaArrowDown size={24} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;