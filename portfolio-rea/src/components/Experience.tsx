import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      period: 'Jan 2020 - Present',
      title: 'Legal Specialist',
      company: 'AEM sh.p.k (Albanian Development Fund)',
      responsibilities: [
        'Prepare legal documents, official acts, and legal/sub-legal acts',
        'Provide legal representation in court proceedings',
        'Participate in working groups for verifications, inventories, and liquidations',
        'Participate in tender and procurement commissions',
        'Adapt and implement unified work rules with document security aspects',
        'Manage contracts post-signature and ensure compliance',
        'Handle complex documentation practices related to archives and classified information',
        'Develop public procurement procedures',
        'Manage contract and agreement compliance for both parties',
      ],
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <div className="section-line"></div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <motion.div
                className="timeline-date"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {exp.period}
              </motion.div>
              <motion.div
                className="timeline-content"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <ul>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;