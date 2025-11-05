import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

// Fix: Define an interface for nav links to include the optional 'external' property.
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

  const activeLinkClass = "text-brand-accent";
  const normalLinkClass = "text-gray-300 hover:text-white transition-colors duration-300";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tighter">
              Value <span className="text-brand-accent">M</span>
            </h1>
            <p className="text-base font-light text-gray-400 -mt-1">
              - The Cloud Technology
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
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
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
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
          className="md:hidden bg-brand-dark pb-4"
        >
          <nav className="flex flex-col items-center space-y-4">
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