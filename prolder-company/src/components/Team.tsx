import { motion } from 'framer-motion';

const Team = () => {
  const teamMembers = [
    {
      name: 'Patrik Nasufi',
      role: 'Lead Software Developer & Founder',
      description: 'Full-stack developer and technology entrepreneur specializing in Java Spring Boot, React, TypeScript, and cloud technologies. Expert in building scalable enterprise applications and modern web solutions that drive business growth.',
      portfolio: '/patrik-nasufi/',
      skills: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Node.js', 'AWS', 'DevOps', 'Microservices']
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="team-container">
        <motion.div 
          className="section-header"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Meet the Founder</h2>
          <p className="section-description">
            Dedicated to delivering innovative software solutions with expertise and passion
          </p>
        </motion.div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="team-avatar">
                <div className="avatar-placeholder">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-description">{member.description}</p>
                
                <div className="team-skills">
                  {member.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
                
                <a 
                  href={member.portfolio}
                  className="portfolio-button"
                >
                  View Portfolio
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;