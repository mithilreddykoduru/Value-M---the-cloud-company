
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FaRocket, FaBullseye, FaLightbulb } from 'react-icons/fa';

const About: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">About Value M</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Integrating AI with cloud platforms to provide scalable, secure, and intelligent solutions.
          </p>
        </motion.div>

        <motion.div 
          className="bg-brand-dark p-8 md:p-12 rounded-lg shadow-xl border border-gray-700/50 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-center mb-4">
            <FaRocket className="text-3xl text-brand-primary mr-4" />
            <h2 className="text-3xl font-bold text-white">Our Founding Story 🚀</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Value M was born from a vision to bridge the gap between cutting-edge cloud technology and real-world business challenges. Founded by a passionate Indian student in the USA, our journey began with a simple goal: to make sophisticated cloud and AI solutions accessible to businesses of all sizes. We saw an opportunity to not just provide services, but to build partnerships, driving growth and innovation through technology. From a dorm room concept to a dynamic startup, our core values of integrity, innovation, and customer-centricity have remained our guiding stars.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-brand-dark p-8 rounded-lg shadow-xl border border-gray-700/50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <FaBullseye className="text-3xl text-brand-secondary mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Mission 🎯</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower businesses to achieve their full potential by providing state-of-the-art cloud and AI automation solutions. We are committed to delivering excellence, fostering innovation, and building long-lasting relationships based on trust and mutual success. We strive to simplify complexity, turning technological challenges into growth opportunities for our clients.
            </p>
          </motion.div>
          <motion.div 
            className="bg-brand-dark p-8 rounded-lg shadow-xl border border-gray-700/50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-3xl text-brand-accent mr-4" />
              <h2 className="text-3xl font-bold text-white">Our Vision 💡</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where technology is a seamless, intelligent extension of every business. Our goal is to be a global leader in cloud innovation, recognized for our expertise, our forward-thinking approach, and our unwavering commitment to helping our clients navigate the ever-evolving digital landscape with confidence and a competitive edge.
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;