import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EducationItem {
  degree: string;
  period: string;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationItems: EducationItem[] = [
    {
      degree: 'Master of Science in Civil Law',
      period: '2017 - 2019',
    },
    {
      degree: 'Bachelor in Law',
      period: '2014 - 2017',
    },
    {
      degree: 'Law School License',
      period: '2019 - Present',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              className="education-item"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="education-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <i className="fas fa-graduation-cap"></i>
              </motion.div>
              <div className="education-details">
                <h3>{item.degree}</h3>
                <p className="education-period">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;