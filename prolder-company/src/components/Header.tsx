import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

const Header = () => {
  return (
    <motion.header 
      className="github-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="header-container">
        <div className="header-left">
          <AnimatedLogo />
        </div>
        
        <nav className="header-nav">
          <a href="#solutions" className="nav-link">Solutions</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#team" className="nav-link">Team</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="header-right">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;