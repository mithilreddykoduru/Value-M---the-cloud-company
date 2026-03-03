import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaArrowRight, FaCloud, FaRobot, FaChartBar, FaAws, FaGoogle, FaMicrosoft, FaShieldAlt, FaCogs, FaHandshake, FaUserTie, FaRocket } from 'react-icons/fa';

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const bentoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <PageWrapper>
      {/* Grandiose Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-brand-dark overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,113,227,0.15)_0%,rgba(0,0,0,0)_60%)]"></div>

        <motion.div
          style={{ y: yHeroText, opacity: opacityHeroText }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-2xl md:text-3xl font-medium text-gray-400 tracking-tight mb-4"
          >
            Value M.
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-bold text-white leading-none tracking-tighter"
          >
            Cloud.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-400 to-brand-accent">
              Perfected.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 text-xl md:text-2xl text-[#a1a1a6] font-medium max-w-2xl mx-auto tracking-tight"
          >
            Intelligent, secure, and infinitely scalable architecture for the modern web.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link to="/services" className="bg-white hover:bg-gray-200 text-black font-semibold py-4 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Discover Services
            </Link>
            <Link to="/contact" className="text-white hover:text-brand-primary font-medium py-4 px-8 flex items-center transition-colors duration-300 text-lg group">
              Contact Sales <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bento Box Services Section */}
      <section className="py-32 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Everything you need. <br className="hidden md:block" />
              <span className="text-gray-500">Built right in.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
            {/* Large Card */}
            <motion.div
              variants={bentoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-2 bg-brand-card rounded-[2rem] p-10 md:p-14 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-[100px] rounded-full group-hover:bg-brand-primary/30 transition-colors"></div>
              <FaCloud className="text-5xl text-brand-primary mb-8 relative z-10" />
              <h3 className="text-4xl font-semibold text-white mb-4 relative z-10 tracking-tight">Cloud Migration</h3>
              <p className="text-[#a1a1a6] text-xl max-w-md leading-relaxed relative z-10">
                Move your infrastructure to the future with zero downtime. Scalable, resilient, and blazing fast.
              </p>
            </motion.div>

            {/* Small Card 1 */}
            <motion.div
              variants={bentoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-brand-card rounded-[2rem] p-10 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <FaRobot className="text-4xl text-purple-500 mb-6" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">AI Automation</h3>
                <p className="text-[#a1a1a6] leading-relaxed">Intelligence applied to your workflows. Automate the mundane, amplify the human.</p>
              </div>
            </motion.div>

            {/* Small Card 2 */}
            <motion.div
              variants={bentoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-brand-card rounded-[2rem] p-10 border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors"
            >
              <FaChartBar className="text-4xl text-brand-accent mb-6" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Data Analytics</h3>
                <p className="text-[#a1a1a6] leading-relaxed">Turn infinite data streams into structured, actionable business intelligence.</p>
              </div>
            </motion.div>

            {/* Medium Horizontal Card */}
            <motion.div
              variants={bentoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-2 bg-brand-card rounded-[2rem] p-10 md:p-14 border border-white/5 flex flex-col md:flex-row items-center justify-between hover:border-white/10 transition-colors"
            >
              <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
                <FaShieldAlt className="text-5xl text-red-500 mb-6 mx-auto md:mx-0" />
                <h3 className="text-3xl font-semibold text-white mb-4 tracking-tight">Cieber.net Security</h3>
                <p className="text-[#a1a1a6] text-lg max-w-sm">
                  Proactive threat networks and infrastructure hardening. Included with every deployment.
                </p>
              </div>
              <Link to="/cieber" className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-medium text-[#a1a1a6] mb-12 tracking-wide uppercase">Powered by the best</h2>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 text-[#a1a1a6] opacity-50">
            <FaAws className="w-16 h-16 hover:text-white transition-colors duration-500 hover:opacity-100 cursor-pointer" />
            <FaMicrosoft className="w-14 h-14 hover:text-white transition-colors duration-500 hover:opacity-100 cursor-pointer" />
            <FaGoogle className="w-14 h-14 hover:text-white transition-colors duration-500 hover:opacity-100 cursor-pointer" />
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimalist List */}
      <section className="py-32 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
                Designed for scale.<br />
                <span className="text-[#a1a1a6]">Engineered for you.</span>
              </h2>
              <p className="text-xl text-[#a1a1a6] leading-relaxed mb-10">
                We believe that the most powerful cloud architectures shouldn't feel complicated. We abstract the complexity so you can focus on building your product.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 space-y-12"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <FaUserTie className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2 tracking-tight">Deep Expertise</h4>
                  <p className="text-[#a1a1a6] leading-relaxed">Decades of combined experience traversing the most complex enterprise migrations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <FaRocket className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2 tracking-tight">Innovation-Driven</h4>
                  <p className="text-[#a1a1a6] leading-relaxed">Always implementing the cutting edge, from serverless to advanced LLM integrations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <FaHandshake className="text-xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2 tracking-tight">Customer-Centric</h4>
                  <p className="text-[#a1a1a6] leading-relaxed">Dedicated support teams that act as an extension of your own engineering force.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Start building<br />the future.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#a1a1a6] mb-12 max-w-2xl mx-auto tracking-tight">
            Reach out to our cloud architects today for a free evaluation of your infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/contact" className="bg-white hover:bg-gray-200 text-black font-semibold py-4 px-12 rounded-full transition-all duration-300 inline-block text-lg shadow-lg">
              Let's Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;