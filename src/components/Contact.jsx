import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaCode, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactInfo = ({ icon, title, value, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center mb-6 group relative"
    >
      <div className="w-12 h-12 rounded-lg bg-indigo-900/20 flex items-center justify-center mr-4 text-indigo-400 text-xl group-hover:bg-indigo-900/30 transition-all">
        {icon}
      </div>
      <div className="relative">
        <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
        {link ? (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:text-indigo-400 transition-colors cursor-pointer relative z-50 block"
            onClick={(e) => {
              e.stopPropagation();
              window.open(link, '_blank', 'noopener,noreferrer');
            }}
          >
            {value}
          </a>
        ) : (
          <p className="text-white font-medium">{value}</p>
        )}
      </div>
    </motion.div>
  );
};


const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    emailjs.sendForm(
      'service_zs1cdad',
      'template_ytz8jgs',
      form.current,
      'y3FAhFodpPFm-Ztxt'
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setFormStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => setFormStatus(null), 3000);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
      setIsSubmitting(false);
      setFormStatus('error');
      
      setTimeout(() => setFormStatus(null), 3000);
    });
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-indigo-500 font-medium mb-2">GET IN TOUCH</p>
          <h2 className="text-white text-4xl font-bold">Contact</h2>
          <div className="w-20 h-1 bg-indigo-600 mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-white text-2xl font-bold mb-3">Let's talk about your project</h3>
              <p className="text-gray-300">
                Have a project in mind? Looking to partner or work together? Reach out through the form or any of my social platforms and I'll get back to you promptly.
              </p>
            </motion.div>

            <div className="space-y-4 relative">
              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
                <ContactInfo 
                  icon={<FaEnvelope />} 
                  title="Email" 
                  value="bnivin71@gmail.com" 
                  link="mailto:bnivin71@gmail.com" 
                />
              </div>
              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
                <ContactInfo 
                  icon={<FaPhone />} 
                  title="Phone" 
                  value="+91 7708183728" 
                  link="tel:+917708183728" 
                />
              </div>
              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
                <ContactInfo 
                  icon={<FaLinkedin />} 
                  title="LinkedIn" 
                  value="linkedin.com/in/nivinb"
                  link="https://linkedin.com/in/nivinb" 
                />
              </div>
              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
                <ContactInfo 
                  icon={<FaGithub />} 
                  title="GitHub" 
                  value="github.com/Nivin1122" 
                  link="https://github.com/Nivin1122" 
                />
              </div>
              <div className="relative z-10" style={{ pointerEvents: 'auto' }}>
                <ContactInfo 
                  icon={<FaMapMarkerAlt />} 
                  title="Location" 
                  value="Kerala, India" 
                />
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800"
          >
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;