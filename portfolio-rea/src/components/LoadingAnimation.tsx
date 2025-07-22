import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingAnimation: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading experience data...",
    "Compiling skills...",
    "Preparing animations...",
    "Almost ready..."
  ];

  const currentText = loadingTexts[Math.floor((progress / 100) * loadingTexts.length)] || loadingTexts[0];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-content">
            <motion.div
              className="loading-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="loading-logo-text">RR</span>
              <motion.div
                className="loading-logo-dot"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <motion.div
              className="loading-progress"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="progress-bar">
                <motion.div
                  className="progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <motion.p
                className="loading-text"
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentText}
              </motion.p>
            </motion.div>

            <motion.div
              className="loading-dots"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="loading-dot"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;