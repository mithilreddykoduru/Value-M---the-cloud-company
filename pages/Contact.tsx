import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin } from 'react-icons/fi';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);

    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mldoyaap';

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
            const errorMessage = data["errors"].map((error: any) => error["message"]).join(", ");
            setStatus(`Error: ${errorMessage}`);
        } else {
            setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Oops! There was a problem submitting your form. Please check your network connection.');
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Get In Touch</h1>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-brand-dark p-8 rounded-lg shadow-xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiMail className="w-6 h-6 text-brand-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email Us</h3>
                    <a href="mailto:sales@valuemtcc.com" className="text-gray-300 hover:text-brand-accent">sales@valuemtcc.com</a>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="w-6 h-6 text-brand-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300">Based in the USA</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-brand-dark p-8 rounded-lg shadow-xl border border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input id="name" type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input id="email" type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                <div>
                    <label htmlFor="subject" className="sr-only">Subject</label>
                    <input id="subject" type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                <div className="relative">
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows={6} className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-brand-primary hover:bg-brand-secondary text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {status && <p className="text-center text-gray-300 mt-4">{status}</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;