import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactItems = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'rearadomi@yahoo.com',
      link: 'mailto:rearadomi@yahoo.com',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
          <p className="section-description">
            Feel free to reach out for legal consultation or professional collaboration
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          className="contact-content-centered"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {contactItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              item.link === '#' ? (
                <motion.div
                  key={index}
                  className="contact-item-link"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: 'default' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #c9820e 0%, #d4af37 100%)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(201, 130, 14, 0.3)',
                    }}
                  >
                    <IconComponent />
                  </motion.div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(135deg, #c9820e 0%, #d4af37 100%)',
                      color: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(201, 130, 14, 0.3)',
                    }}
                  >
                    <IconComponent />
                  </motion.div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              )
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;