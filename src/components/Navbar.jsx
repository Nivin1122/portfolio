import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaBriefcase, FaFileAlt, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if(scrollTop >= sectionTop - 200 && scrollTop < sectionTop + sectionHeight - 200) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Home', icon: <FaHome /> },
    { id: 'about', name: 'About', icon: <FaUser /> },
    { id: 'skills', name: 'Skills', icon: <FaCode /> },
    { id: 'services', name: 'Services', icon: <FaBriefcase /> },
    { id: 'projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'resume', name: 'Resume', icon: <FaFileAlt /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
     
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3 bg-[#0a0a0a]/90 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#home"
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            Nivin<span className="text-indigo-500">MB</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-indigo-600/20 rounded-md -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-indigo-500">{link.icon}</span>
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: menuOpen ? 45 : 0,
                    y: menuOpen ? 8 : 0
                  }}
                  className="w-full h-0.5 bg-white transition-all origin-left"
                ></motion.span>
                <motion.span
                  animate={{
                    opacity: menuOpen ? 0 : 1
                  }}
                  className="w-full h-0.5 bg-white transition-all"
                ></motion.span>
                <motion.span
                  animate={{
                    rotate: menuOpen ? -45 : 0,
                    y: menuOpen ? -8 : 0
                  }}
                  className="w-full h-0.5 bg-white transition-all origin-left"
                ></motion.span>
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-lg z-40 md:hidden pt-20"
          >
            <div className="flex flex-col items-center justify-center h-full">
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`flex items-center gap-3 px-8 py-4 w-full text-center text-lg font-medium ${
                    activeSection === link.id
                      ? 'text-white bg-indigo-600/20 border-l-4 border-indigo-500'
                      : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-indigo-500">{link.icon}</span>
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 