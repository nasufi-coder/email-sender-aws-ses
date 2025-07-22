import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillItem {
  icon: string;
  name: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Legal Expertise',
      skills: [
        { icon: 'fas fa-balance-scale', name: 'Public Procurement Law' },
        { icon: 'fas fa-gavel', name: 'Civil Law' },
        { icon: 'fas fa-building', name: 'Commercial Law' },
        { icon: 'fas fa-shield-alt', name: 'Information Security Law' },
        { icon: 'fas fa-file-contract', name: 'Contract Management' },
        { icon: 'fas fa-handshake', name: 'Legal Representation' },
        { icon: 'fas fa-archive', name: 'Archive Management' },
        { icon: 'fas fa-clipboard-check', name: 'Compliance' },
      ],
    },
    {
      title: 'Procurement & Tendering',
      skills: [
        { icon: 'fas fa-shopping-cart', name: 'Tender Management' },
        { icon: 'fas fa-dollar-sign', name: 'Small Value Purchases' },
        { icon: 'fas fa-clipboard-list', name: 'Bid Evaluation' },
        { icon: 'fas fa-certificate', name: 'Technical Specifications' },
        { icon: 'fas fa-users', name: 'Procurement Commissions' },
        { icon: 'fas fa-chart-line', name: 'Contract Monitoring' },
        { icon: 'fas fa-check-circle', name: 'Quality Assurance' },
      ],
    },
    {
      title: 'Administrative Skills',
      skills: [
        { icon: 'fas fa-file-alt', name: 'Document Preparation' },
        { icon: 'fas fa-search', name: 'Verification Procedures' },
        { icon: 'fas fa-box', name: 'Inventory Management' },
        { icon: 'fas fa-trash', name: 'Asset Liquidation' },
        { icon: 'fas fa-users-cog', name: 'Working Groups' },
        { icon: 'fas fa-project-diagram', name: 'Process Management' },
      ],
    },
    {
      title: 'Computer Skills',
      skills: [
        { icon: 'fab fa-microsoft', name: 'Microsoft Office Suite' },
        { icon: 'fab fa-adobe', name: 'Adobe Programs' },
        { icon: 'fas fa-globe', name: 'Internet Research' },
        { icon: 'fas fa-keyboard', name: 'Typing (50 WPM)' },
        { icon: 'fas fa-laptop', name: 'Computer Literacy' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { icon: 'fas fa-flag', name: 'Albanian (Native)' },
        { icon: 'fas fa-flag', name: 'English (B2)' },
        { icon: 'fas fa-flag', name: 'Italian (B1)' },
        { icon: 'fas fa-flag', name: 'Spanish (B1)' },
        { icon: 'fas fa-flag', name: 'German (A1)' },
      ],
    },
    {
      title: 'Professional Certifications',
      skills: [
        { icon: 'fas fa-certificate', name: 'Public Procurement Certification' },
        { icon: 'fas fa-shield-alt', name: 'Cybersecurity Awareness' },
        { icon: 'fas fa-users', name: 'Project Management' },
        { icon: 'fas fa-euro-sign', name: 'IPA Funds Management' },
        { icon: 'fas fa-graduation-cap', name: 'Alternative Dispute Resolution' },
        { icon: 'fas fa-building', name: 'European Company Law' },
      ],
    },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Skills</h2>
          <div className="section-line"></div>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="skills-grid section-progress"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    variants={skillItemVariants}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;