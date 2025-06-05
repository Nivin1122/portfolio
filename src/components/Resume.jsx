import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap, FaLaptopCode, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const TimelineItem = ({ date, title, subtitle, location, icon, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 group"
    >
    
      <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700 group-last:bg-gradient-to-b group-last:from-gray-700 group-last:to-transparent"></div>
      
      <div className="absolute left-[-8px] top-1 w-4 h-4 rounded-full border-2 border-indigo-600 bg-gray-900"></div>
      
      <div className="bg-gray-900/70 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-indigo-500/30 transition-all">
        <div className="flex items-center text-gray-400 mb-2 text-sm gap-3">
          <FaCalendarAlt className="text-indigo-500" />
          <span>{date}</span>
          {location && (
            <>
              <span className="mx-1">•</span>
              <FaMapMarkerAlt className="text-indigo-500" />
              <span>{location}</span>
            </>
          )}
        </div>
        
        <div className="flex items-center mb-3">
          <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-500">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-indigo-400">{subtitle}</p>
          </div>
        </div>
        
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </motion.div>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  
  const educationData = [
    {
      date: "2022 - Present",
      title: "Full-Stack Development Bootcamp",
      subtitle: "Brototype",
      location: "Kerala",
      icon: <FaGraduationCap size={20} />,
      description: "Intensive, project-based training in full-stack web development, focusing on Python, Django, React, and database management. Created multiple full-stack applications with real-world applications."
    },
    {
      date: "2022",
      title: "Web Development Certification",
      subtitle: "Online Platform",
      location: null,
      icon: <FaGraduationCap size={20} />,
      description: "Completed certification in modern web development techniques and best practices, including responsive design, API integration, and state management."
    },
    {
      date: "2020 - 2022",
      title: "Computer Science Fundamentals",
      subtitle: "Self Study",
      location: null,
      icon: <FaGraduationCap size={20} />,
      description: "Self-taught programming fundamentals, data structures, algorithms, and database concepts through online resources and personal projects."
    }
  ];

  const experienceData = [
    {
      date: "2023 - Present",
      title: "Full-Stack Developer",
      subtitle: "Project Experience",
      location: "Freelance",
      icon: <FaBriefcase size={20} />,
      description: "Developed and deployed the AI-MENTOR platform, an AI-powered learning assistant using Python, Django, and React. Implemented features like user authentication, interactive learning materials, and progress tracking."
    },
    {
      date: "2022 - 2023",
      title: "Web Developer",
      subtitle: "Project Experience",
      location: "Bootcamp",
      icon: <FaLaptopCode size={20} />,
      description: "Built TenZo, a full-featured eCommerce platform with Django and React. Integrated payment gateways, implemented admin dashboards, product management systems, and user authentication."
    },
    {
      date: "2022",
      title: "Backend Developer",
      subtitle: "Project Experience",
      location: "Bootcamp",
      icon: <FaLaptopCode size={20} />,
      description: "Created RESTful APIs with Django REST Framework for various applications, implementing authentication, authorization, and data validation systems."
    }
  ];

  const timelineData = activeTab === 'education' ? educationData : experienceData;

  return (
    <section id="resume" className="relative w-full py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-indigo-500 font-medium mb-2">MY JOURNEY</p>
          <h2 className="text-white text-4xl font-bold">Resume</h2>
          <div className="w-20 h-1 bg-indigo-600 mt-4"></div>
        </motion.div>

        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4 relative z-20">
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              href="/resume/Nivin_resume1.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 rounded-md bg-transparent border border-indigo-500 text-indigo-400 text-sm font-medium hover:bg-indigo-500/10 transition-all relative z-20"
              onClick={(e) => {
                e.preventDefault();
                window.open('/resume/Nivin_resume1.pdf', '_blank');
              }}
            >
              <FaDownload /> Download CV
            </motion.a>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'education' 
                  ? "bg-indigo-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <FaGraduationCap /> Education
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === 'experience' 
                  ? "bg-indigo-600 text-white" 
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <FaBriefcase /> Experience
            </motion.button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-10">
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="mr-3 w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-500">
                  {activeTab === 'education' ? <FaGraduationCap size={20} /> : <FaBriefcase size={20} />}
                </div>
                {activeTab === 'education' ? 'Education' : 'Work Experience'}
              </h3>
              <div className="pl-4">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    subtitle={item.subtitle}
                    location={item.location}
                    icon={item.icon}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-10">
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Languages & Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'Django', 'Django REST', 'React', 'Redux', 'Laravel', 'PHP', 'HTML/CSS', 'Tailwind CSS'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Databases & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MySQL', 'MongoDB', 'Git & GitHub', 'Docker', 'Postman', 'VS Code', 'Razorpay', 'Nginx', 'AWS'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-indigo-400 mb-3">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability', 'Continuous Learning'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-md text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 