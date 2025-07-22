import React from 'react';
import { motion } from 'framer-motion';
import TextReveal from './TextReveal';
import LiquidGlassButton from './LiquidGlassButton';
import { FaEnvelope, FaBriefcase, FaDownload, FaChevronDown, FaBalanceScale, FaGavel, FaUniversity, FaFileContract, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="floating-shapes">
          <div className="legal-icons-container">
            <div className="legal-icon">
              <FaBalanceScale />
            </div>
            <div className="legal-icon">
              <FaGavel />
            </div>
            <div className="legal-icon">
              <FaUniversity />
            </div>
            <div className="legal-icon">
              <FaFileContract />
            </div>
            <div className="legal-icon">
              <FaHandshake />
            </div>
            <div className="legal-icon">
              <FaShieldAlt />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="typing-text">Hi, I'm Reinalda Radomi</span>
          </motion.h1>
          <TextReveal
            className="hero-subtitle"
            delay={0.8}
            duration={0.8}
            stagger={0.1}
          >
            Legal Specialist & Procurement Expert
          </TextReveal>
          <TextReveal
            className="hero-description"
            delay={1.2}
            duration={0.6}
            stagger={0.05}
          >
            Legal Specialist with 5+ years of experience in public procurement and legal affairs
          </TextReveal>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              flexWrap: 'wrap' as const,
              justifyContent: 'center'
            }}
          >
            <LiquidGlassButton
              variant="primary"
              onClick={() => scrollToSection('contact')}
              icon={<FaEnvelope />}
            >
              Get In Touch
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="secondary"
              onClick={() => scrollToSection('experience')}
              icon={<FaBriefcase />}
            >
              View Work
            </LiquidGlassButton>
            <LiquidGlassButton
              variant="accent"
              href="/ReinaldaRadomiCV.pdf"
              icon={<FaDownload />}
            >
              Download CV
            </LiquidGlassButton>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="profile-container">
            <motion.div
              className="profile-card"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="profile-avatar">
                <img 
                  src="/images/profile.jpg" 
                  alt="Reinalda Radomi" 
                  className="profile-image"
                />
              </div>
              <div className="profile-info">
                <h3>Reinalda Radomi</h3>
                <p>Legal Specialist</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;