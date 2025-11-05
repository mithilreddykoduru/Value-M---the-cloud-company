import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCloud, FaRobot, FaChartBar, FaAws, FaGoogle, FaMicrosoft, FaQuoteLeft, FaUserTie, FaRocket, FaHandshake, FaCogs } from 'react-icons/fa';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative text-center py-32 md:py-48 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
              Value <span className="text-brand-accent">M</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              - The Cloud Technology
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter"
          >
            Pioneering the Future of <span className="text-brand-primary">Cloud & AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We deliver intelligent, secure, and scalable cloud solutions to accelerate your business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/services" className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center">
              Explore Our Services <FaArrowRight className="ml-2" />
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-brand-accent hover:bg-brand-accent text-white font-bold py-3 px-8 rounded-md transition-colors duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4">
            Core Services
            </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We provide a comprehensive suite of services to meet your cloud and AI needs.
            </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaCloud className="text-4xl text-brand-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Cloud Migration</h3>
              <p className="text-gray-400">Seamlessly transition your infrastructure to the cloud for enhanced scalability and efficiency.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaRobot className="text-4xl text-brand-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">AI Automation</h3>
              <p className="text-gray-400">Leverage AI to automate complex processes, reduce costs, and boost productivity.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaChartBar className="text-4xl text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Data Analytics</h3>
              <p className="text-gray-400">Unlock actionable insights from your data to make smarter business decisions.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-dark/50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us?
            </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            We are more than just a service provider; we are your technology partner.
            </motion.p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaUserTie className="text-4xl text-brand-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Deep Expertise</h3>
              <p className="text-gray-400">Our certified experts bring years of experience across all major cloud platforms.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaRocket className="text-4xl text-brand-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Innovation-Driven</h3>
              <p className="text-gray-400">We leverage cutting-edge AI and automation to keep you ahead of the curve.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaHandshake className="text-4xl text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Customer-Centric</h3>
              <p className="text-gray-400">Your success is our priority. We build partnerships based on trust and transparency.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50">
              <FaCogs className="text-4xl text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Tailored Solutions</h3>
              <p className="text-gray-400">We don't believe in one-size-fits-all. We craft solutions specific to your unique needs.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50 text-left flex flex-col">
              <FaQuoteLeft className="text-2xl text-brand-primary mb-4" />
              <p className="text-gray-300 italic mb-4 flex-grow">
                "Value M built a comprehensive dashboard for our sales, inventory, and CRM. It has completely streamlined our boutique's operations."
              </p>
              <p className="font-bold text-white mt-auto">- BPL Designer Studio</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50 text-left flex flex-col">
              <FaQuoteLeft className="text-2xl text-brand-primary mb-4" />
              <p className="text-gray-300 italic mb-4 flex-grow">
                "Partnering with Value M allowed us to build and scale a secure cloud platform for patient data management. Their expertise has been invaluable."
              </p>
              <p className="font-bold text-white mt-auto">- Children's Hospital</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-brand-dark p-8 rounded-lg shadow-lg border border-gray-700/50 text-left flex flex-col">
              <FaQuoteLeft className="text-2xl text-brand-primary mb-4" />
              <p className="text-gray-300 italic mb-4 flex-grow">
                "They developed a micro-financing app that scaled my business on the cloud, opening up new opportunities for growth."
              </p>
              <p className="font-bold text-white mt-auto">- Anonymous Financer</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-brand-dark/50">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Trusted by Industry Leaders</h2>
            <div className="flex flex-wrap justify-center items-center gap-12 text-gray-400">
                <FaAws className="w-16 h-16 hover:text-white transition-colors" />
                <FaMicrosoft className="w-14 h-14 hover:text-white transition-colors" />
                <FaGoogle className="w-14 h-14 hover:text-white transition-colors" />
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6 text-center bg-gray-800/50 border border-gray-700/50 rounded-lg p-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our cloud and AI expertise can help you achieve your goals.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link to="/contact" className="bg-brand-accent hover:bg-brand-primary text-white font-bold py-3 px-8 rounded-md transition-colors duration-300 inline-block">
                    Get in Touch
                </Link>
            </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;