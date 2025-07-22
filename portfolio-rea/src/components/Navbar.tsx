import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="github-header" role="banner" ref={navRef}>
      <div className="github-header-wrapper">
        <div className="github-header-left">
          <div 
            className="pn-text-logo" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{ cursor: 'pointer' }}
          >
            RR
          </div>
        </div>
        
        <nav className={`github-header-nav ${isOpen ? 'github-nav-list--mobile-active' : ''}`} aria-label="Global">
          <ul className="github-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="github-nav-item">
                <a
                  href={`#${item.id}`}
                  className={`github-nav-link ${activeSection === item.id ? 'github-nav-link--current' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        
        <button
          className={`github-mobile-menu-btn ${isOpen ? 'github-mobile-menu-btn--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="github-mobile-menu-icon"></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;