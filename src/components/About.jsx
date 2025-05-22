import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaLaptopCode, FaPython, FaReact, FaTools } from 'react-icons/fa';

const Card = ({ icon, title, text }) => {
  return (
    <Tilt options={{ max: 15, scale: 1.03, speed: 400 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl shadow-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
      >
        <div className="p-6 flex flex-col items-center h-full">
          <div className="w-14 h-14 rounded-lg bg-indigo-500/20 flex justify-center items-center text-indigo-400 text-2xl mb-5">
            {icon}
          </div>
          <h3 className="text-white text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-300 text-center text-sm leading-relaxed">{text}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 bg-[#0a192f]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f] to-[#0f172a]"></div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent blur-xl"></div>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <div className="inline-block bg-indigo-500/10 px-4 py-1 rounded-full mb-4">
            <span className="text-indigo-400 font-medium text-sm tracking-wide">INTRODUCTION</span>
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-white text-2xl font-semibold mb-6">Who am I?</h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hi, I'm <span className="text-indigo-400 font-semibold">Nivin MB</span> — a passionate Full-Stack Web Developer specializing in Python, Django, React, and PostgreSQL, with strong skills in Laravel and MySQL as well.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm currently enrolled in a full-time coding bootcamp at Brototype, where I've been training intensively for over 1.5 years focusing on real-world, hands-on experience in full-stack web development.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              My goal is to create user-focused, scalable web applications that solve real problems and deliver great user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
            <Card 
              icon={<FaLaptopCode />} 
              title="Full-Stack Developer" 
              text="Building complete web applications from frontend to backend with modern technologies and best practices."
            />
            <Card 
              icon={<FaPython />} 
              title="Python Specialist" 
              text="Creating robust backend solutions with Python, Django, and Django REST Framework."
            />
            <Card 
              icon={<FaReact />} 
              title="Frontend Engineer" 
              text="Developing responsive, modern UIs using React, Redux, and Tailwind CSS."
            />
            <Card 
              icon={<FaTools />} 
              title="Problem Solver" 
              text="Approaching challenges with analytical thinking and creative solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 