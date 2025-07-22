import React from 'react';
import { motion } from 'framer-motion';
import { getProlderLink, getPatrikPortfolioLink } from '../config/links';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center' }}
        >
          <p>&copy; 2024 Reinalda Radomi. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
            Professional services by <a href={getProlderLink()} style={{ color: '#0366d6', textDecoration: 'none' }}>Prolder Solutions</a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;