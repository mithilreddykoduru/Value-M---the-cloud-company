import React from 'react';
import PageWrapper from '../components/PageWrapper';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <SEO 
        title="Terms of Service | Value M"
        description="Review the Terms of Service for using Value M's website, cloud services, and AI solutions. Your use of our services constitutes acceptance of these terms."
        keywords="terms of service, user agreement, legal terms, conditions of use"
        noindex={true}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Terms of Service</h1>
          <p className="text-lg text-gray-400 mt-4">Effective Date: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          className="space-y-8 text-gray-300 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.section variants={sectionVariants}>
            <p>Welcome to Value M. These Terms of Service (“Terms”) govern your access to and use of our website, cloud services, AI solutions, and any related services we provide (collectively, the “Services”). By using our Services, you agree to be bound by these Terms.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using our Services, you agree to comply with these Terms, all applicable laws, and regulations. If you do not agree with any part of these Terms, you may not use our Services.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">2. Services Provided</h2>
            <p>Value M provides cloud computing services, AI solutions, data analytics, multi-cloud integrations, and related consulting. The Services include, but are not limited to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Cloud platform management (AWS, Azure, Google Cloud, Oracle Cloud, Salesforce)</li>
                <li>AI automation and predictive analytics</li>
                <li>Cloud migration, DevOps, and CI/CD pipelines</li>
                <li>Security, compliance, and governance frameworks</li>
                <li>Data management, storage, and analytics solutions</li>
            </ul>
            <p className="mt-2">We reserve the right to modify or discontinue any Service at our discretion.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">3. User Accounts</h2>
            <p>Some Services may require a user account. You agree to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="mt-2">You are responsible for all activity that occurs under your account.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Use our Services for illegal, harmful, or fraudulent purposes</li>
                <li>Attempt to gain unauthorized access to any systems or networks</li>
                <li>Distribute malware, spam, or disruptive content</li>
                <li>Reverse engineer, copy, or misuse the Services</li>
            </ul>
            <p className="mt-2">Violation of this section may result in termination of access and legal action.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">5. Payment and Billing</h2>
            <p>For paid services:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Fees will be specified on your service agreement or invoice</li>
                <li>Payments are due per the agreed schedule</li>
                <li>Failure to pay may result in suspension or termination of Services</li>
            </ul>
            <p className="mt-2">All fees are non-refundable unless explicitly stated.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">6. Intellectual Property</h2>
            <p>All intellectual property rights in the Services, content, logos, and designs are owned by Value M or its licensors.</p>
            <p className="mt-2">You may not reproduce, distribute, or create derivative works from our materials without prior written consent.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Privacy</h2>
            <p>Your use of Services is subject to our Privacy Policy. By agreeing to these Terms, you also accept our practices for collection, storage, and processing of personal and business data.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">8. Disclaimers</h2>
            <p>Services are provided “as is” without warranties of any kind.</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Value M does not guarantee uninterrupted or error-free operation.</li>
                <li>You assume full responsibility for using our Services, including data security and compliance.</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>Value M shall not be liable for indirect, incidental, special, or consequential damages.</li>
                <li>Total liability for any claim shall not exceed the amount paid by the user for the specific Service causing the claim.</li>
            </ul>
          </section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Value M, its affiliates, and employees from any claims, damages, or expenses arising from your use of the Services, violation of these Terms, or infringement of third-party rights.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">11. Termination</h2>
            <p>We may suspend or terminate your access immediately if:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
                <li>You violate these Terms or any applicable law</li>
                <li>You engage in abusive, fraudulent, or harmful activity</li>
                <li>We decide to discontinue or modify the Services</li>
            </ul>
            <p className="mt-2">Termination does not relieve you of obligations incurred prior to termination.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">12. Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the United States and, where applicable, the State of [Insert State]. Any disputes arising hereunder shall be resolved in the courts of that jurisdiction.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">13. Changes to Terms</h2>
            <p>Value M may modify these Terms at any time. Updates will be posted on the website with a revised “Effective Date.” Continued use of the Services after changes constitutes acceptance.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">14. Contact Information</h2>
            <p>For any questions about these Terms of Service, please contact us at:<br/>Email: info@valuemtcc.com</p>
          </motion.section>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default TermsOfService;