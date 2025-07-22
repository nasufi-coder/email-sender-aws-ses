import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="hero-title">
            Build the future with
            <span className="gradient-text"> innovative software solutions</span>
          </h1>
          
          <p className="hero-description">
            We empower businesses with cutting-edge technology, custom software development, 
            and comprehensive digital transformation strategies that drive growth and efficiency.
          </p>
          
          <div className="hero-actions">
            <button 
              className="btn-primary-large"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </button>
            <button 
              className="btn-secondary-large"
              onClick={() => scrollToSection('solutions')}
            >
              Learn More
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <span className="control red"></span>
                <span className="control yellow"></span>
                <span className="control green"></span>
              </div>
              <span className="window-title">prolder-solutions.ts</span>
            </div>
            <div className="code-content">
              <div className="code-line">
                <span className="keyword">class</span>{' '}
                <span className="class-name">ProlderSolutions</span>{' '}
                <span className="operator">{'{'}</span>
              </div>
              <div className="code-line">
                {'  '}<span className="method">innovate</span>(): <span className="type">Success</span> {'{'}
              </div>
              <div className="code-line">
                {'    '}<span className="keyword">return</span> <span className="string">"Future Built"</span>;
              </div>
              <div className="code-line">
                {'  }'}
              </div>
              <div className="code-line">
                <span className="operator">{'}'}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;