import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws, FaGoogle, FaMicrosoft, FaDatabase } from 'react-icons/fa';
import { SiSalesforce } from 'react-icons/si';

const platforms = [
  {
    name: 'AWS',
    icon: <FaAws className="w-12 h-12 text-yellow-500" />,
    description: 'We leverage the full power of Amazon Web Services to build scalable, secure, and high-performance applications. Our expertise spans from EC2 and S3 to serverless with Lambda and advanced database solutions.',
    benefits: ['Unmatched Scalability', 'Comprehensive Service Portfolio', 'Robust Security'],
  },
  {
    name: 'Azure',
    icon: <FaMicrosoft className="w-12 h-12 text-blue-500" />,
    description: 'Our Microsoft Azure expertise enables us to deliver powerful hybrid cloud solutions, enterprise-grade applications, and intelligent services. We specialize in Azure Active Directory, aPaaS, and AI services.',
    benefits: ['Seamless Hybrid Cloud', 'Strong Enterprise Integration', 'Advanced AI/ML'],
  },
  {
    name: 'Google Cloud',
    icon: <FaGoogle className="w-12 h-12 text-red-500" />,
    description: "We harness Google Cloud's cutting-edge capabilities in data analytics, machine learning, and containerization with Kubernetes Engine. Our solutions are built for speed, intelligence, and open-source flexibility.",
    benefits: ['Superior Data Analytics', 'Kubernetes Leadership', 'Global Network'],
  },
  {
    name: 'Oracle',
    icon: <FaDatabase className="w-12 h-12 text-red-700" />,
    description: 'We provide expertise in Oracle Cloud Infrastructure (OCI), focusing on high-performance computing, mission-critical enterprise workloads, and robust database management for our clients.',
    benefits: ['High-Performance Computing', 'Enterprise-Grade Reliability', 'Autonomous Database'],
  },
  {
    name: 'Salesforce',
    icon: <SiSalesforce className="w-12 h-12 text-blue-400" />,
    description: 'Our team helps you customize and integrate the Salesforce platform to create powerful CRM solutions, automate sales and marketing processes, and build custom applications on the App Cloud.',
    benefits: ['Leading CRM Platform', 'Extensive Customization', 'Strong Ecosystem'],
  },
];

const CloudExpertise: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(platforms[0]);

  return (
    <PageWrapper className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Our Cloud Platform Expertise</h1>
          <p className="text-lg text-gray-500 mt-4 max-w-3xl mx-auto">
            Mastering the leading cloud platforms to build the perfect solution for you.
          </p>
        </motion.div>

        <div className="w-full max-w-5xl mx-auto bg-gray-50 rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100">
          <nav className="flex flex-wrap justify-center border-b border-gray-200 mb-6">
            {platforms.map(platform => (
              <button
                key={platform.name}
                className={`px-4 py-3 font-semibold text-lg transition-colors duration-300 ${selectedTab.name === platform.name ? 'text-brand-primary border-b-2 border-brand-primary' : 'text-gray-400 hover:text-gray-800'}`}
                onClick={() => setSelectedTab(platform)}
              >
                {platform.name}
              </button>
            ))}
          </nav>
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab.name}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="p-4"
              >
                <div className="flex flex-col md:flex-row items-center mb-6">
                  {selectedTab.icon}
                  <h2 className="text-3xl font-bold text-gray-900 mt-4 md:mt-0 md:ml-6">{selectedTab.name} Expertise</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{selectedTab.description}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Benefits:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {selectedTab.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-primary mr-2 mt-1">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CloudExpertise;