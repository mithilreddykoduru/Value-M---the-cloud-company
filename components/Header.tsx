import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface NavLinkItem {
  name: string;
  path: string;
  external?: boolean;
}

const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Cieber.net', path: '/cieber' },
  { name: 'Expertise', path: '/expertise' },
  { name: 'AI Innovation', path: '/ai-innovation' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkClass = "text-brand-primary font-medium";
  const normalLinkClass = "text-gray-500 hover:text-gray-900 transition-colors duration-300 text-sm";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white/60 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            Value M
          </h1>
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">
            Cloud Technology
          </p>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            if (link.external) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={normalLinkClass}
                >
                  {link.name}
                </a>
              );
            }
            return (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-100 pb-4"
        >
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => {
              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={normalLinkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) => (isActive ? activeLinkClass : normalLinkClass)}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;