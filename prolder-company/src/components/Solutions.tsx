import { motion } from 'framer-motion';

const Solutions = () => {
  const solutions = [
    {
      icon: '🚀',
      title: 'Custom Software Development',
      description: 'Enterprise-grade applications built with Java Spring Boot and modern web technologies to meet your specific business requirements.',
      features: ['Java Spring Boot', 'React & TypeScript', 'Microservices Architecture', 'Cloud Integration']
    },
    {
      icon: '🔧',
      title: 'Digital Transformation',
      description: 'Modernize your business processes with innovative digital solutions and automation.',
      features: ['Spring Boot APIs', 'Legacy System Migration', 'Process Automation', 'Database Optimization']
    },
    {
      icon: '📊',
      title: 'Data Analytics & AI',
      description: 'Harness the power of your data with advanced analytics and artificial intelligence solutions.',
      features: ['Machine Learning', 'Data Visualization', 'Predictive Analytics', 'Business Intelligence']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable, secure, and efficient cloud infrastructure to support your growing business.',
      features: ['AWS/Azure Deployment', 'Microservices Architecture', 'DevOps Pipeline', 'Container Orchestration']
    }
  ];

  return (
    <section id="solutions" className="solutions-section">
      <div className="solutions-container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-description">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;