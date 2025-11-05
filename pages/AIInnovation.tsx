
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FiTrendingUp, FiZap, FiDollarSign, FiLock, FiRepeat } from 'react-icons/fi';

const innovations = [
  {
    icon: <FiZap className="w-10 h-10 text-brand-primary" />,
    title: 'Enhance Cloud Performance',
    description: 'Our AI models analyze workloads and automatically scale resources, ensuring optimal performance and responsiveness at all times, preventing bottlenecks before they occur.',
  },
  {
    icon: <FiTrendingUp className="w-10 h-10 text-brand-secondary" />,
    title: 'Predict Future Outcomes',
    description: 'Leveraging predictive analytics, we help you forecast demand, identify potential issues, and make data-driven decisions to stay ahead of the competition.',
  },
  {
    icon: <FiRepeat className="w-10 h-10 text-brand-accent" />,
    title: 'Automate Complex Workflows',
    description: 'We design intelligent automation for everything from CI/CD pipelines to infrastructure provisioning, freeing up your team to focus on innovation instead of manual tasks.',
  },
  {
    icon: <FiDollarSign className="w-10 h-10 text-yellow-500" />,
    title: 'Optimize Cloud Costs',
    description: 'AI-driven analysis of your cloud usage identifies waste and recommends cost-saving strategies, ensuring you only pay for the resources you truly need.',
  },
  {
    icon: <FiLock className="w-10 h-10 text-red-500" />,
    title: 'Improve Security Posture',
    description: 'Our AI-powered security systems monitor for threats in real-time, detect anomalies, and automate responses to keep your cloud environment secure 24/7.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const AIInnovation: React.FC = () => {
  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">AI-Powered Innovation</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Harnessing the power of Artificial Intelligence to build smarter, more efficient cloud solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-brand-dark p-6 rounded-lg shadow-lg flex items-start space-x-4 border border-gray-700/50"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 bg-gray-800 p-4 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default AIInnovation;