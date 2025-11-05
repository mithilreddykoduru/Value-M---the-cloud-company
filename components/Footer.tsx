import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-4xl font-extrabold tracking-tighter text-white">Value <span className="text-brand-accent">M</span></h3>
              <p className="text-base font-light text-gray-400">- The Cloud Technology</p>
            </div>
            <p className="text-gray-400 max-w-md">
              Pioneering the future of cloud technology with intelligent, secure, and scalable solutions. We integrate AI with cloud platforms to drive innovation and growth for your business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/expertise" className="text-gray-400 hover:text-brand-primary transition-colors">Expertise</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-brand-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-brand-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Value M. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;