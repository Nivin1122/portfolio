import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';


const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-300 h-full flex flex-col"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
          onError={(e) => {
            e.target.src = `https://placehold.co/600x400/1f2937/ffffff?text=${project.title}`;
          }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-col space-y-3 mb-4">
          <h3 className="text-white text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex flex-wrap gap-3">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors flex-grow justify-center"
              aria-label="GitHub Repository"
            >
              <FaGithub /> View Code
            </a>
          )}
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-all flex-grow justify-center"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 overflow-hidden hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8">
          <span className="inline-block px-3 py-1 text-xs text-indigo-300 bg-indigo-900/30 rounded-md mb-4 border border-indigo-500/20">
            Featured Project
          </span>
          <h3 className="text-white text-2xl font-bold mb-3">{project.title}</h3>
          <p className="text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-md bg-indigo-900/30 text-indigo-300 border border-indigo-500/20">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex space-x-4">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition-colors"
              >
                <FaGithub /> View Code
              </a>
            )}
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white transition-all"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
        
        <div className="relative h-60 md:h-auto overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            onError={(e) => {
              e.target.src = `https://placehold.co/600x400/1f2937/ffffff?text=${project.title}`;
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "AI-MENTOR",
      description: "An AI-powered e-learning platform with voice interaction capabilities, providing personalized learning through AI mentors.",
      image: "https://i.imghippo.com/files/sSh1242ykA.jpg",
      technologies: ["React", "Django", "Vapi AI", "Gemini", "JWT Auth"],
      category: "featured",
      github: "https://github.com/Nivin1122/AI_MENTOR",
      live: "http://learnwithAi.online"
    },
    {
      title: "TenZo",
      description: "A full-featured eCommerce platform for selling clothing with secure payment processing and admin dashboard.",
      image: "https://i.imghippo.com/files/AtIE8746fM.jpg",
      technologies: ["Django", "React", "Razorpay", "Redux", "PostgreSQL"],
      category: "featured",
      github: "https://github.com/Nivin1122/TenZo",
      live: "http://tenzoshop.store"
    },
    {
      title: "OLX Clone",
      description: "A fully functional marketplace with user authentication, product listings, and category filtering.",
      image: "https://i.imghippo.com/files/Lm7868Yek.jpg",
      technologies: ["React", "Django", "REST API"],
      category: "web",
      github: "https://github.com/Nivin1122/OLX-Clone-React"
    },
    {
      title: "Netflix Clone",
      description: "Netflix-like platform with dynamic content fetching from TMDB API and user authentication.",
      image: "https://i.imghippo.com/files/pbk9310qL.jpg",
      technologies: ["React", "Firebase", "TMDB API"],
      category: "web",
      github: "https://github.com/Nivin1122/Netflix_Clone_REACT"
    },
    {
      title: "Tic Tac Toe Game",
      description: "Interactive Tic Tac Toe game with clean UI and game state management.",
      image: "https://i.imghippo.com/files/pTc7983dg.jpg",
      technologies: ["React", "CSS", "JavaScript"],
      category: "mini",
      github: "https://github.com/Nivin1122/Tic-Tac-Toe"
    },
    {
      title: "User Management System",
      description: "Complete user management system with authentication, role-based access control, and profile management.",
      image: "https://i.imghippo.com/files/TNCh6447jQI.jpg",
      technologies: ["Django", "React", "JWT", "PostgreSQL"],
      category: "web",
      github: "https://github.com/Nivin1122/week_21"
    },
    {
      title: "Tiles & Chemicals Backend",
      description: "Backend system for a tiles and chemicals website with admin authentication, product management, and customer inquiry handling.",
      image: "https://i.imghippo.com/files/MxO3156ElQ.jpg",
      technologies: ["PHP", "Laravel", "MySQL"],
      category: "web",
      github: "https://github.com/Nivin1122/Tiles_and_Chemicals"
    },
    {
      title: "Speech Tables",
      description: "An educational web app that speaks out multiplication tables aloud when a user selects a number, using JavaScript and the Web Speech API.",
      image: "https://i.imghippo.com/files/VIQ4042MTA.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Web Speech API"],
      category: "web",
      github: "https://github.com/Nivin1122/speech-tables"
    }
    
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative w-full py-16 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-indigo-500 font-medium mb-2">MY WORK</p>
          <h2 className="text-white text-4xl font-bold">Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mt-4"></div>
        </motion.div>

        <div className="flex gap-3 mb-12 flex-wrap">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeFilter === 'all' 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Projects
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={() => setActiveFilter('featured')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeFilter === 'featured' 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Featured
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={() => setActiveFilter('web')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeFilter === 'web' 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Web Apps
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            onClick={() => setActiveFilter('mini')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeFilter === 'mini' 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Mini Projects
          </motion.button>
        </div>

        <div className="space-y-8 mb-12">
          {filteredProjects
            .filter(project => project.category === 'featured' && (activeFilter === 'all' || activeFilter === 'featured'))
            .map((project, index) => (
              <FeaturedProject key={index} project={project} />
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(project => project.category !== 'featured' || (activeFilter !== 'all' && activeFilter !== 'featured'))
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 mb-2 text-center relative z-10"
        >
          <a
            href="https://github.com/Nivin1122?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-all duration-300 group relative z-20"
          >
            <FaGithub className="text-xl" />
            <span className="text-lg font-medium">View All Projects on GitHub</span>
            <span className="text-sm text-gray-400 group-hover:text-gray-300">
              (30+ repositories)
            </span>
          </a>
          <p className="mt-2 text-gray-400 text-sm">
            Explore more of my work, including smaller projects, experiments, and contributions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;