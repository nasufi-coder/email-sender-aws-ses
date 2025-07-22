import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollAnimations: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  
  // Parallax transforms
  const y1 = useTransform(smoothProgress, [0, 1], [0, -200]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -400]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.2]);

  return (
    <>
      {/* Floating geometric shapes */}
      <motion.div
        className="scroll-shape scroll-shape-1"
        style={{
          y: y1,
          rotate,
          opacity,
        }}
      />
      
      <motion.div
        className="scroll-shape scroll-shape-2"
        style={{
          y: y2,
          scale,
          opacity,
        }}
      />

      {/* Progress indicator */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleY: smoothProgress,
        }}
      />

      {/* Floating code snippets */}
      <motion.div
        className="floating-code floating-code-1"
        style={{ y: y1 }}
      >
        <code>{"{ innovation: true }"}</code>
      </motion.div>

      <motion.div
        className="floating-code floating-code-2"
        style={{ y: y2 }}
      >
        <code>{"// Building the future"}</code>
      </motion.div>
    </>
  );
};

export default ScrollAnimations;