import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCodeDemo: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const highlightSyntax = (code: string): string => {
    return code
      .replace(/(@\w+)/g, '<span style="color: #ff7b72;">$1</span>') // Annotations
      .replace(/(public|private|class|void|var)/g, '<span style="color: #ff7b72;">$1</span>') // Keywords
      .replace(/(String|List|Service)/g, '<span style="color: #79c0ff;">$1</span>') // Types
      .replace(/(".*?")/g, '<span style="color: #a5d6ff;">$1</span>') // Strings
      .replace(/(\/\/.*)/g, '<span style="color: #8b949e;">$1</span>') // Comments
      .replace(/(\w+)(\()/g, '<span style="color: #d2a8ff;">$1</span>$2'); // Method calls
  };

  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const codeLines = [
    '@Service',
    'public class PatrikNasufi {',
    '',
    '    @Autowired',
    '    private PassionService passion;',
    '',
    '    public void buildSoftware() {',
    '        // 5+ years of enterprise experience',
    '        var technologies = List.of(',
    '            "Java 17+", "Spring Boot",',
    '            "Microservices", "AWS Cloud"',
    '        );',
    '',
    '        passion.solve(complexProblems());',
    '        deliver(scalableSolutions());',
    '    }',
    '',
    '    // ✨ Continuous learning & innovation',
    '}',
  ];

  useEffect(() => {
    if (!inView) return;
    
    const startTyping = () => {
      setIsTyping(true);
      setCurrentLine(0);
      setCurrentChar(0);
      setDisplayedCode([]);
    };

    const timer = setTimeout(startTyping, 1000);
    return () => clearTimeout(timer);
  }, [inView]);

  useEffect(() => {
    if (!isTyping || currentLine >= codeLines.length) return;

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
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar, codeLines, isTyping]);

  return (
    <motion.div
      ref={ref}
      className="about-code-demo"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="code-demo-window">
        <div className="code-demo-header">
          <div className="code-demo-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="code-demo-title">PatrikNasufi.java</span>
        </div>
        <div className="code-demo-content">
          {displayedCode.map((line, index) => (
            <motion.div
              key={index}
              className="code-demo-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <span className="line-number">{String(index + 1).padStart(2, ' ')}</span>
              <span className="code-demo-text" dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }}></span>
              {index === currentLine && currentChar <= codeLines[currentLine]?.length && isTyping && (
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

export default AboutCodeDemo;