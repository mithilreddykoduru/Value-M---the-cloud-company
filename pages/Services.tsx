
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt, FaRobot, FaChartLine, FaCodeBranch, FaCog, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCloudUploadAlt className="text-4xl text-brand-primary" />,
    title: 'Cloud Migration',
    description: 'Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal downtime.',
  },
  {
    icon: <FaRobot className="text-4xl text-brand-secondary" />,
    title: 'AI Cloud Automation',
    description: 'Automate complex workflows and processes using AI, enhancing efficiency and reducing operational costs.',
  },
  {
    icon: <FaChartLine className="text-4xl text-brand-accent" />,
    title: 'Data Analytics',
    description: 'Unlock valuable insights from your data with our advanced analytics and business intelligence solutions.',
  },
  {
    icon: <FaCodeBranch className="text-4xl text-yellow-500" />,
    title: 'DevOps & CI/CD',
    description: 'Accelerate your development lifecycle with our robust DevOps practices and CI/CD pipeline implementation.',
  },
  {
    icon: <FaCog className="text-4xl text-blue-400" />,
    title: 'Multi-Cloud Integration',
    description: 'Integrate and manage services across multiple cloud platforms for maximum flexibility and resilience.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
    title: 'Security & Compliance',
    description: 'Implement comprehensive security strategies to protect your assets and ensure industry compliance.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Services: React.FC = () => {
  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Comprehensive solutions to power your digital transformation journey.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-brand-primary"
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-bold text-white ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default Services;