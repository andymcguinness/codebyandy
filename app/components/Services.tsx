'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { FaCode, FaServer, FaSearch, FaLaptop, FaBoxOpen, FaRobot } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-white" />,
      title: "website development",
      description: "custom websites and web applications built with modern technologies and best practices."
    },
    {
      icon: <FaServer className="text-4xl text-white" />,
      title: "backend development",
      description: "server, api, and database development for scalable and efficient solutions."
    },
    {
      icon: <FaSearch className="text-4xl text-white" />,
      title: "seo optimization",
      description: "search engine optimization to improve your website's visibility and ranking."
    },
    {
      icon: <FaLaptop className="text-4xl text-white" />,
      title: "mvp development",
      description: "i can be a reliable partner to help develop your mvp and get it to market."
    },
    {
      icon: <FaBoxOpen className="text-4xl text-white" />,
      title: "containerization",
      description: "i can help you containerize your application and deploy it to the cloud."
    },
    {
      icon: <FaRobot className="text-4xl text-white" />,
      title: "ai-generated code reviews",
      description: "got your app started with ai? no problem, i can review the code."
    }
  ];

  return (
    <section className="relative flex bg-asparagus/20 min-h-screen">
      <div className="container mx-auto max-w-screen-xl flex flex-col justify-center">
        <h2 className="text-5xl font-bold mb-8 tracking-tight">services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white px-6 py-20 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}  
            >
              <div className="flex justify-center mb-4">
                <span className="p-2 bg-asparagus rounded-xl shadow-md">{service.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {service.title}
              </h3>
              <p className="text-black text-center">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
