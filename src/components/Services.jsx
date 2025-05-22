import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaLaptopCode, FaDatabase, FaShoppingCart, FaLock } from 'react-icons/fa';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800 p-6 flex flex-col h-full hover:border-indigo-500/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-500 mb-6">
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={24} />,
      title: "Full-Stack Web Development",
      description: "Building complete web applications from scratch using React (frontend) and Django or Laravel (backend), with secure authentication and database integration."
    },
    {
      icon: <FaServer size={24} />,
      title: "Backend API Development",
      description: "Creating scalable, secure, and well-documented REST APIs using Django REST Framework or Laravel with proper authentication and testing."
    },
    {
      icon: <FaCode size={24} />,
      title: "Frontend Development & Web Design",
      description: "Developing responsive, modern UIs using React, Tailwind CSS, and JavaScript. Converting static designs into dynamic frontend pages."
    },
    {
      icon: <FaDatabase size={24} />,
      title: "Admin Dashboards & CMS",
      description: "Building custom admin panels for managing products, users, orders, etc., with role-based access and detailed analytics."
    },
    {
      icon: <FaShoppingCart size={24} />,
      title: "E-Commerce Features",
      description: "Integrating payment gateways (like Razorpay), coupons, OTP login, and order reports for complete e-commerce functionality."
    },
    {
      icon: <FaLock size={24} />,
      title: "Authentication Systems",
      description: "Implementing secure login and registration with JWT, cookies, and refresh tokens for robust user management."
    }
  ];

  return (
    <section id="services" className="relative w-full py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-indigo-500 font-medium mb-2">WHAT I OFFER</p>
          <h2 className="text-white text-4xl font-bold">Services</h2>
          <div className="w-20 h-1 bg-indigo-600 mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 