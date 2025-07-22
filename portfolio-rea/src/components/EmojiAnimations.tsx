import React from 'react';
import { motion } from 'framer-motion';

const EmojiAnimations: React.FC = () => {
  const emojis = [
    { emoji: '⚖️', delay: 0, x: '10%', y: '20%' },
    { emoji: '🏛️', delay: 1, x: '80%', y: '30%' },
    { emoji: '📜', delay: 2, x: '15%', y: '70%' },
    { emoji: '🤝', delay: 0.5, x: '85%', y: '65%' },
    { emoji: '📋', delay: 1.5, x: '90%', y: '15%' },
    { emoji: '🏆', delay: 2.5, x: '5%', y: '45%' },
  ];

  const floatVariants = {
    initial: { y: 0, rotate: 0, scale: 0 },
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      scale: [1, 1.1, 1]
    }
  };

  const appearVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 }
  };

  return (
    <div className="emoji-animations">
      {emojis.map((item, index) => (
        <motion.div
          key={index}
          className="floating-emoji"
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            zIndex: 1,
          }}
          initial="initial"
          animate="animate"
          variants={appearVariants}
          transition={{ delay: item.delay, duration: 0.5, ease: "backOut" }}
        >
          <motion.span
            animate={{
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              fontSize: '2rem',
              display: 'block',
              filter: 'drop-shadow(0 0 10px rgba(218, 165, 32, 0.3))',
            }}
          >
            {item.emoji}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default EmojiAnimations;