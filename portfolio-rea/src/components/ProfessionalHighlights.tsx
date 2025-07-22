import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Highlight {
  icon: string;
  title: string;
  description: string;
  year: string;
  color: string;
}

const ProfessionalHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights: Highlight[] = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Law Degree Completed',
      description: 'Bachelor in Law from University of Tirana',
      year: '2017',
      color: '#28a745'
    },
    {
      icon: 'fas fa-gavel',
      title: 'Master\'s in Civil Law',
      description: 'Advanced specialization in Civil Law completed',
      year: '2019',
      color: '#7c3aed'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Legal Specialist Role',
      description: 'Started position at AEM sh.p.k (Albanian Development Fund)',
      year: '2020',
      color: '#0366d6'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Public Procurement Certified',
      description: 'Earned certification in Public Procurement procedures',
      year: '2024',
      color: '#ef4444'
    },
    {
      icon: 'fas fa-award',
      title: '5+ Years Legal Experience',
      description: 'Milestone in professional legal practice and expertise',
      year: '2025',
      color: '#f59e0b'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      ref={ref}
      className="professional-highlights"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.h3 
        className="highlights-title"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        Professional Journey
      </motion.h3>
      
      <div className="highlights-grid">
        {highlights.map((highlight, index) => (
          <motion.div
            key={index}
            className="highlight-card"
            variants={cardVariants}
            animate={inView ? floatingAnimation : {}}
            style={{ animationDelay: `${index * 0.5}s` }}
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              z: 50,
              transition: { duration: 0.3 }
            }}
          >
            <div className="highlight-year" style={{ color: highlight.color }}>
              {highlight.year}
            </div>
            <div 
              className="highlight-icon"
              style={{ backgroundColor: highlight.color }}
            >
              <i className={highlight.icon}></i>
            </div>
            <div className="highlight-content">
              <h4>{highlight.title}</h4>
              <p>{highlight.description}</p>
            </div>
            <div 
              className="highlight-accent"
              style={{ backgroundColor: highlight.color }}
            ></div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="journey-line"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      ></motion.div>
    </motion.div>
  );
};

export default ProfessionalHighlights;