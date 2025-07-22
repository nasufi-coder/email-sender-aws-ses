import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeAnimation: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);

  const codeLines = [
    'class SoftwareEngineer {',
    '  constructor() {',
    '    this.name = "Patrik Nasufi";',
    '    this.skills = ["Java", "Spring", "Go"];',
    '    this.experience = "5+ years";',
    '  }',
    '',
    '  buildAmazingSoftware() {',
    '    return this.skills.map(skill => {',
    '      return new Innovation(skill);',
    '    });',
    '  }',
    '}',
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) return;

    const currentLineText = codeLines[currentLine];
    
    if (currentChar <= currentLineText.length) {
      const timer = setTimeout(() => {
        setDisplayedCode(prev => {
          const newCode = [...prev];
          newCode[currentLine] = currentLineText.slice(0, currentChar);
          return newCode;
        });
        setCurrentChar(prev => prev + 1);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Move to next line
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, codeLines]);

  // Reset animation every 15 seconds
  useEffect(() => {
    const resetTimer = setInterval(() => {
      setCurrentLine(0);
      setCurrentChar(0);
      setDisplayedCode([]);
    }, 15000);

    return () => clearInterval(resetTimer);
  }, []);

  return (
    <motion.div
      className="code-animation"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <div className="code-window">
        <div className="code-header">
          <div className="code-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="code-title">SoftwareEngineer.js</span>
        </div>
        <div className="code-content">
          {displayedCode.map((line, index) => (
            <motion.div
              key={index}
              className="code-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <span className="line-number">{index + 1}</span>
              <span className="code-text">{line}</span>
              {index === currentLine && currentChar <= codeLines[currentLine]?.length && (
                <motion.span
                  className="cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  |
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CodeAnimation;