import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const SkillBar = ({ name, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <motion.div 
          className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800 h-full flex flex-col"
    >
      <div className="flex items-center mb-5">
        <div className="w-10 h-10 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-500 mr-3">
          {icon}
        </div>
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex-1">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const skillCategories = {
    frontend: [
      { name: "React", percentage: 90 },
      { name: "Redux", percentage: 85 },
      { name: "Tailwind CSS", percentage: 90 },
      { name: "HTML/CSS", percentage: 95 },
      { name: "JavaScript", percentage: 85 },
    ],
    backend: [
      { name: "Python", percentage: 95 },
      { name: "Django", percentage: 90 },
      { name: "Django REST Framework", percentage: 90 },
      { name: "Laravel", percentage: 80 },
      { name: "PHP", percentage: 75 },
    ],
    databases: [
      { name: "PostgreSQL", percentage: 85 },
      { name: "MySQL", percentage: 85 },
      { name: "MongoDB", percentage: 70 },
    ],
    tools: [
      { name: "Git & GitHub", percentage: 90 },
      { name: "Postman", percentage: 85 },
      { name: "Razorpay Integration", percentage: 80 },
      { name: "Docker", percentage: 75 },
    ]
  };

  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-indigo-500 font-medium mb-2">MY EXPERTISE</p>
          <h2 className="text-white text-4xl font-bold">Skills & Proficiency</h2>
          <div className="w-20 h-1 bg-indigo-600 mt-4"></div>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0 }}
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "all" 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            All Skills
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={() => setActiveTab("frontend")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "frontend" 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Frontend
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={() => setActiveTab("backend")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "backend" 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Backend
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            onClick={() => setActiveTab("databases")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "databases" 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Databases
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={() => setActiveTab("tools")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeTab === "tools" 
                ? "bg-indigo-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Tools
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {(activeTab === "all" || activeTab === "frontend") && (
            <SkillCard 
              title="Frontend Development" 
              icon={<FaCode size={22} />}
              skills={skillCategories.frontend} 
            />
          )}
          {(activeTab === "all" || activeTab === "backend") && (
            <SkillCard 
              title="Backend Development" 
              icon={<FaServer size={22} />}
              skills={skillCategories.backend} 
            />
          )}
          {(activeTab === "all" || activeTab === "databases") && (
            <SkillCard 
              title="Databases" 
              icon={<FaDatabase size={22} />}
              skills={skillCategories.databases} 
            />
          )}
          {(activeTab === "all" || activeTab === "tools") && (
            <SkillCard 
              title="Tools & Others" 
              icon={<FaTools size={22} />}
              skills={skillCategories.tools} 
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills; 