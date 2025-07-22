import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BigBangAnimationProps {
  onComplete: () => void;
}

const BigBangAnimation = ({ onComplete }: BigBangAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 600);
    const timer2 = setTimeout(() => setStage(2), 1600);
    const timer3 = setTimeout(() => setStage(3), 2600);
    const timer4 = setTimeout(() => onComplete(), 3800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="big-bang-container">
      <AnimatePresence>
        {stage >= 0 && (
          <motion.div
            className="singularity"
            initial={{ scale: 0, opacity: 1 }}
            animate={stage >= 1 ? { 
              scale: [0.1, 0.3, 0.1, 80], 
              opacity: [1, 1, 1, 0] 
            } : { 
              scale: [0, 0.1, 0.05, 0.1], 
              opacity: 1 
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: stage >= 1 ? 1.4 : 1.6,
              ease: [0.22, 1, 0.36, 1],
              times: stage >= 1 ? [0, 0.25, 0.5, 1] : [0, 0.4, 0.7, 1]
            }}
          />
        )}
        
        {stage >= 1 && (
          <>
            <motion.div
              className="energy-wave wave-1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 120, opacity: [0, 0.4, 0.2, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.8, 
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.25, 0.6, 1]
              }}
            />
            <motion.div
              className="energy-wave wave-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 100, opacity: [0, 0.3, 0.1, 0] }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.6, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.15,
                times: [0, 0.3, 0.7, 1]
              }}
            />
          </>
        )}

        {stage >= 2 && (
          <motion.div
            className="particles-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {Array.from({ length: 40 }).map((_, i) => {
              const angle = (i / 40) * Math.PI * 2;
              const radius = 300 + Math.random() * 400;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{
                    x: x + (Math.random() - 0.5) * 200,
                    y: y + (Math.random() - 0.5) * 200,
                    scale: [0, Math.random() * 2 + 0.5, 0],
                    opacity: [1, 0.8, 0.4, 0]
                  }}
                  transition={{
                    duration: 2.0,
                    delay: Math.random() * 0.5,
                    ease: [0.22, 1, 0.36, 1],
                    times: [0, 0.25, 0.6, 1]
                  }}
                />
              );
            })}
          </motion.div>
        )}

        {stage >= 3 && (
          <>
            {/* Elegant background attention effect */}
            <motion.div
              className="attention-backdrop"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 2, 1.5], opacity: [0, 0.6, 0.2] }}
              transition={{ 
                duration: 3, 
                ease: [0.25, 0.46, 0.45, 0.94],
                times: [0, 0.4, 1]
              }}
            />
            
            {/* Sophisticated logo reveal */}
            <motion.div
              className="logo-reveal"
              initial={{ scale: 0, opacity: 0, rotateY: 90, rotateX: 45 }}
              animate={{ 
                scale: [0, 1.15, 1.05, 1], 
                opacity: [0, 0.8, 0.95, 1], 
                rotateY: [90, 10, -5, 0],
                rotateX: [45, -8, 3, 0]
              }}
              transition={{ 
                duration: 2.0, 
                ease: [0.22, 1, 0.36, 1],
                times: [0, 0.3, 0.6, 1]
              }}
            >
              <img src="/logo.png" alt="Prolder Solutions" className="logo-image" />
            </motion.div>

            {/* Elegant orbital rings */}
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="orbital-ring"
                initial={{ scale: 0, opacity: 0, rotate: i * 120 }}
                animate={{ 
                  scale: 1 + i * 0.2, 
                  opacity: [0, 0.8, 0.3], 
                  rotate: [i * 120, 360 + i * 120] 
                }}
                transition={{ 
                  duration: 8 + i * 2, 
                  ease: "linear",
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BigBangAnimation;