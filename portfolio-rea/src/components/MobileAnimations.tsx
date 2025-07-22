import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MobileAnimations: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setTouchPosition({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }
    };

    document.addEventListener('touchmove', handleTouch);
    return () => document.removeEventListener('touchmove', handleTouch);
  }, [isMobile]);

  if (!isMobile) return null;

  const createParticles = () => {
    return Array.from({ length: 8 }, (_, i) => (
      <motion.div
        key={i}
        className="mobile-particle"
        initial={{
          x: Math.random() * window.innerWidth,
          y: window.innerHeight + 50,
          scale: Math.random() * 0.5 + 0.5,
          opacity: 0.7,
        }}
        animate={{
          y: -50,
          rotate: 360,
          opacity: [0.7, 1, 0],
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          delay: Math.random() * 8,
          ease: "linear",
        }}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: `hsl(${Math.random() * 360}, 70%, 60%)`,
          pointerEvents: 'none',
          zIndex: 1,
          filter: 'blur(1px)',
          boxShadow: `0 0 10px hsl(${Math.random() * 360}, 70%, 60%)`,
        }}
      />
    ));
  };

  return (
    <>
      {/* Central floating animation */}
      <motion.div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(3, 102, 214, 0.1), rgba(40, 167, 69, 0.1), transparent)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>

      {/* Subtle center pulse */}
      <motion.div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
        animate={{
          scale: [0.5, 1, 0.5],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 215, 0, 0.08), transparent)',
            filter: 'blur(30px)',
          }}
        />
      </motion.div>
    </>
  );
};

export default MobileAnimations;