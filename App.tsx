import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CloudExpertise from './pages/CloudExpertise';
import AIInnovation from './pages/AIInnovation';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Cieber from './pages/Cieber';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

import { motion, AnimatePresence } from 'framer-motion';

// Component for animated page routing
const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, filter: "blur(5px)" },
    in: { opacity: 1, scale: 1, filter: "blur(0px)" },
    out: { opacity: 0, filter: "blur(5px)" }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Home /></motion.div>} />
        <Route path="/about" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><About /></motion.div>} />
        <Route path="/services" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Services /></motion.div>} />
        <Route path="/cieber" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Cieber /></motion.div>} />
        <Route path="/expertise" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><CloudExpertise /></motion.div>} />
        <Route path="/ai-innovation" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><AIInnovation /></motion.div>} />
        <Route path="/contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Contact /></motion.div>} />
        <Route path="/privacy-policy" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><PrivacyPolicy /></motion.div>} />
        <Route path="/terms-of-service" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><TermsOfService /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
};

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-brand-dark text-white min-h-screen flex flex-col selection:bg-brand-primary/30">
        <Router>
          <ScrollToTop />
          <Header />
          <main className="flex-grow pt-20">
            <AnimatedRoutes />
          </main>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;