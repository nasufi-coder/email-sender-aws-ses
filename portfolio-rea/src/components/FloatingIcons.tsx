import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FloatingIcons: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const icons = [
    { icon: 'fas fa-balance-scale', delay: 0, x: -100, y: -50 },
    { icon: 'fas fa-gavel', delay: 0.2, x: 100, y: -80 },
    { icon: 'fas fa-file-contract', delay: 0.4, x: -80, y: 50 },
    { icon: 'fas fa-briefcase', delay: 0.6, x: 120, y: 60 },
    { icon: 'fas fa-university', delay: 0.8, x: -120, y: -100 },
    { icon: 'fas fa-handshake', delay: 1.0, x: 80, y: -30 },
  ];

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: 0,
    },
    visible: (custom: any) => ({
      opacity: [0, 0.6, 0.3],
      scale: [0, 1.2, 1],
      rotate: [0, 180, 360],
      y: [0, -20, 0],
      transition: {
        duration: 2,
        delay: custom.delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="floating-icons-container" ref={ref}>
      {icons.map((iconData, index) => (
        <motion.div
          key={index}
          className="floating-icon"
          style={{
            left: `${50 + (iconData.x / window.innerWidth) * 100}%`,
            top: `${50 + (iconData.y / window.innerHeight) * 100}%`,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
          variants={iconVariants}
          initial="hidden"
          animate={controls}
          custom={iconData}
        >
          <i className={iconData.icon}></i>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;