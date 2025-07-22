import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const EnhancedScrollAnimations: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Transform values based on scroll progress
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0.8, 0.3, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax elements that move based on scroll
  const createScrollElements = () => {
    return Array.from({ length: 12 }, (_, i) => (
      <motion.div
        key={`scroll-element-${i}`}
        className="scroll-element"
        style={{
          position: 'fixed',
          left: `${10 + i * 8}%`,
          top: `${20 + (i % 3) * 30}%`,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: `hsl(${i * 30}, 70%, 60%)`,
          pointerEvents: 'none',
          zIndex: 1,
          transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * 0.1}deg)`,
          opacity: Math.max(0.3, 1 - scrollY * 0.001),
          filter: `blur(${Math.max(0, scrollY * 0.01)}px)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2 + i * 0.3,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ));
  };

  // Scroll progress indicator
  const progressWidth = Math.max(0, Math.min(100, (scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) * 100)) || 0;

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${progressWidth}%`,
          height: '3px',
          background: 'linear-gradient(90deg, #0366d6, #28a745, #ffd700, #dc2626)',
          zIndex: 1000,
          transformOrigin: 'left',
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progressWidth / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Floating scroll elements */}
      {createScrollElements()}

      {/* Parallax background layers */}
      <motion.div
        className="parallax-layer-1"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          background: `
            radial-gradient(circle at 20% 20%, rgba(3, 102, 214, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(40, 167, 69, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(255, 215, 0, 0.03) 0%, transparent 50%)
          `,
          transform: `translateY(${scrollY * 0.1}px)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <motion.div
        className="parallax-layer-2"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '120%',
          background: `
            radial-gradient(circle at 60% 30%, rgba(220, 38, 127, 0.03) 0%, transparent 60%),
            radial-gradient(circle at 30% 70%, rgba(99, 102, 241, 0.03) 0%, transparent 60%)
          `,
          transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * 0.01}deg)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Scroll-triggered text effects */}
      <motion.div
        className="scroll-text-overlay"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          fontSize: '8rem',
          fontWeight: 'bold',
          color: 'rgba(3, 102, 214, 0.05)',
          pointerEvents: 'none',
          zIndex: 1,
          textTransform: 'uppercase',
          letterSpacing: '2rem',
          transform: `translate(-50%, -50%) rotate(${scrollY * 0.05}deg) scale(${1 + scrollY * 0.001})`,
          opacity: Math.max(0, 0.8 - scrollY * 0.002),
        }}
      >
        SCROLL
      </motion.div>

      {/* Interactive scroll particles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="interactive-scroll-particle"
          style={{
            position: 'fixed',
            right: `${5 + i * 2}%`,
            top: `${10 + i * 10}%`,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: `hsl(${180 + i * 20}, 70%, 60%)`,
            pointerEvents: 'none',
            zIndex: 2,
            transform: `translateY(${scrollY * (0.2 + i * 0.1)}px) translateX(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
            opacity: Math.max(0.2, 1 - scrollY * 0.0015),
            filter: `blur(${scrollY * 0.005}px)`,
            boxShadow: `0 0 20px hsl(${180 + i * 20}, 70%, 60%)`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Scroll velocity indicators */}
      <motion.div
        className="scroll-velocity-indicator"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '2px solid rgba(3, 102, 214, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          color: 'white',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 100,
          transform: `rotate(${scrollY * 0.5}deg) scale(${1 + Math.sin(scrollY * 0.01) * 0.2})`,
        }}
      >
        {Math.round(progressWidth)}%
      </motion.div>

      {/* Morphing scroll shapes */}
      <motion.div
        className="morphing-scroll-shape"
        style={{
          position: 'fixed',
          top: '20%',
          left: '5%',
          width: '100px',
          height: '100px',
          background: 'linear-gradient(45deg, rgba(3, 102, 214, 0.1), rgba(40, 167, 69, 0.1))',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 1,
          transform: `
            translateY(${scrollY * 0.3}px) 
            rotate(${scrollY * 0.2}deg) 
            scale(${1 + Math.sin(scrollY * 0.005) * 0.5})
          `,
          clipPath: `polygon(
            ${20 + Math.sin(scrollY * 0.01) * 20}% ${10 + Math.cos(scrollY * 0.01) * 10}%,
            ${80 + Math.sin(scrollY * 0.015) * 15}% ${15 + Math.cos(scrollY * 0.015) * 15}%,
            ${90 + Math.sin(scrollY * 0.02) * 10}% ${70 + Math.cos(scrollY * 0.02) * 20}%,
            ${30 + Math.sin(scrollY * 0.025) * 25}% ${85 + Math.cos(scrollY * 0.025) * 10}%
          )`,
        }}
      />

      {/* Section transition effects */}
      <motion.div
        className="section-transition-effect"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(
              ${scrollY * 0.1}deg,
              transparent 0%,
              rgba(3, 102, 214, ${Math.max(0, 0.02 - scrollY * 0.00005)}) 25%,
              rgba(40, 167, 69, ${Math.max(0, 0.02 - scrollY * 0.00005)}) 50%,
              rgba(255, 215, 0, ${Math.max(0, 0.02 - scrollY * 0.00005)}) 75%,
              transparent 100%
            )
          `,
          pointerEvents: 'none',
          zIndex: 1,
          mixBlendMode: 'multiply',
        }}
      />
    </>
  );
};

export default EnhancedScrollAnimations;