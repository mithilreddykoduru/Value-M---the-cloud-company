import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <PageWrapper className="py-20 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-lg text-gray-400 mt-4">Effective Date: {new Date().toLocaleDateString()}</p>
        </motion.div>

        <motion.div
          className="space-y-8 text-gray-300 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.section variants={sectionVariants}>
            <p>Value M (“we,” “our,” or “us”) values your privacy and is committed to protecting your personal and business data. This Privacy Policy explains how we collect, use, store, and protect information when you use our website, cloud services, and AI solutions (collectively, “Services”). By using our Services, you agree to this Privacy Policy.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <div className="pl-4">
              <h3 className="text-lg font-semibold text-white mt-2 mb-1">a) Personal Information:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Name, email address, phone number</li>
                <li>Billing or payment information</li>
                <li>Account credentials</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mt-2 mb-1">b) Business Information:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Company name, size, industry</li>
                <li>Cloud platform and service usage details</li>
                <li>Project requirements or preferences</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mt-2 mb-1">c) Usage Data:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, clicks, session duration</li>
                <li>Interaction with features and Services</li>
              </ul>
              <h3 className="text-lg font-semibold text-white mt-2 mb-1">d) Cookies and Tracking:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Cookies to enhance user experience, analytics, and marketing</li>
                <li>Third-party tracking tools (Google Analytics, etc.)</li>
              </ul>
            </div>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>Provide and improve our Services</li>
              <li>Manage user accounts and communications</li>
              <li>Process payments and invoices</li>
              <li>Ensure security and compliance</li>
              <li>Conduct analytics to enhance performance and customer experience</li>
              <li>Send newsletters, marketing, or service updates (only if you opt-in)</li>
            </ul>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">3. Sharing Your Information</h2>
            <p>We do not sell or trade your personal data. We may share your information with:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li><strong>Service Providers:</strong> Third-party vendors assisting with payment, hosting, analytics, or customer support</li>
              <li><strong>Legal Compliance:</strong> When required by law, regulations, or legal processes</li>
              <li><strong>Business Transfers:</strong> If we merge, acquire, or sell our company or assets</li>
            </ul>
            <p className="mt-2">All shared data is limited to what is necessary to provide the Services.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>We implement administrative, technical, and physical measures to protect your data.</li>
              <li>Access to sensitive data is restricted to authorized personnel only.</li>
              <li>Despite security measures, no system is completely secure; users are responsible for keeping account credentials safe.</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal and business data is retained only as long as necessary to provide Services, comply with legal obligations, or resolve disputes.</li>
              <li>Users may request deletion of their data, subject to legal or contractual obligations.</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">6. User Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion or restriction of processing</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent to data collection</li>
            </ul>
            <p className="mt-2">To exercise these rights, contact: info@valuemtcc.com</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">7. Cookies and Tracking</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Our website uses cookies to optimize performance and analyze user behavior.</li>
              <li>Users can manage cookies via their browser settings.</li>
              <li>Disabling certain cookies may affect functionality and user experience.</li>
            </ul>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">8. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices. We encourage users to review third-party privacy policies.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">9. Children’s Privacy</h2>
            <p>Our Services are not directed to individuals under 18. We do not knowingly collect data from children. If we learn that we have collected personal information from a child, we will delete it promptly.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">10. International Users</h2>
            <p>For users outside the U.S., your data may be transferred to and stored in the United States or other countries.</p>
            <p className="mt-2">We take steps to ensure your data is protected according to applicable international privacy laws.</p>
          </motion.section>
          
          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Updated versions will be posted on our website with a new “Effective Date.” Continued use of Services indicates acceptance of the updated Privacy Policy.</p>
          </motion.section>

          <motion.section variants={sectionVariants}>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact Information</h2>
            <p>For privacy-related inquiries or complaints:<br/>Email: info@valuemtcc.com</p>
          </motion.section>

        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;