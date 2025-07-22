import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaFileContract, FaBriefcase, FaUniversity, FaHandshake, FaScroll, FaCertificate, FaShieldAlt, FaBookOpen } from 'react-icons/fa';

const LawIconAnimations: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const lawIcons = [
    { icon: FaBalanceScale, delay: 0 },
    { icon: FaGavel, delay: 0.5 },
    { icon: FaFileContract, delay: 1.0 },
    { icon: FaBriefcase, delay: 1.5 },
    { icon: FaUniversity, delay: 2.0 },
    { icon: FaHandshake, delay: 2.5 },
    { icon: FaScroll, delay: 3.0 },
    { icon: FaCertificate, delay: 3.5 },
    { icon: FaShieldAlt, delay: 4.0 },
    { icon: FaBookOpen, delay: 4.5 },
  ];

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: 0,
    },
    visible: (custom: any) => ({
      opacity: [0, 0.3, 0.1, 0.3, 0],
      scale: [0, 1.2, 1, 1.2, 0],
      rotate: [0, 180, 360, 540, 720],
      transition: {
        duration: 8,
        delay: custom.delay,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    }),
  };

  const getIconPosition = (index: number) => {
    const angle = (index * 36) * (Math.PI / 180); // 36 degrees apart for 10 icons
    const radius = isMobile ? 100 : 140;
    const centerX = 50;
    const centerY = 50;
    
    const x = centerX + (Math.cos(angle) * radius) / (isMobile ? 3.5 : 4.5);
    const y = centerY + (Math.sin(angle) * radius) / (isMobile ? 3.5 : 4.5);
    
    return { x, y };
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Central pulsing circle */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '220px' : '320px',
          height: isMobile ? '220px' : '320px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(26, 54, 93, 0.08), rgba(201, 130, 14, 0.06), transparent)',
          filter: 'blur(25px)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Law icons orbiting around center */}
      {lawIcons.map((iconData, index) => {
        const position = getIconPosition(index);
        const IconComponent = iconData.icon;
        return (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
              fontSize: isMobile ? '1.8rem' : '2.4rem',
              color: 'rgba(26, 54, 93, 0.4)',
              textShadow: '0 0 20px rgba(26, 54, 93, 0.3)',
            }}
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            custom={iconData}
          >
            <IconComponent />
          </motion.div>
        );
      })}

      {/* Rotating ring animation */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '280px' : '380px',
          height: isMobile ? '280px' : '380px',
          borderRadius: '50%',
          border: '1px solid rgba(26, 54, 93, 0.15)',
          background: 'transparent',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner ring */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '170px' : '220px',
          height: isMobile ? '170px' : '220px',
          borderRadius: '50%',
          border: '1px solid rgba(201, 130, 14, 0.15)',
          background: 'transparent',
        }}
        animate={{
          rotate: [360, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default LawIconAnimations;