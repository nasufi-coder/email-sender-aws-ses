import React from 'react';
import { motion } from 'framer-motion';

interface TechIcon {
  icon: string;
  name: string;
  color: string;
  radius: number;
  speed: number;
}

const OrbitingTechIcons: React.FC = () => {
  const techIcons: TechIcon[] = [
    { icon: 'fab fa-java', name: 'Java', color: '#f89820', radius: 120, speed: 20 },
    { icon: 'fas fa-leaf', name: 'Spring', color: '#6db33f', radius: 140, speed: 25 },
    { icon: 'fab fa-react', name: 'React', color: '#61dafb', radius: 100, speed: 18 },
    { icon: 'fab fa-docker', name: 'Docker', color: '#2496ed', radius: 160, speed: 30 },
    { icon: 'fab fa-aws', name: 'AWS', color: '#ff9900', radius: 110, speed: 22 },
    { icon: 'fas fa-database', name: 'Database', color: '#336791', radius: 150, speed: 28 },
    { icon: 'fab fa-git-alt', name: 'Git', color: '#f05032', radius: 130, speed: 24 },
    { icon: 'fas fa-cubes', name: 'Microservices', color: '#7c3aed', radius: 170, speed: 32 },
  ];

  return (
    <div className="orbiting-tech-container">
      {techIcons.map((tech, index) => (
        <motion.div
          key={index}
          className="orbiting-tech-icon"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: tech.radius * 2,
            height: tech.radius * 2,
            margin: `-${tech.radius}px 0 0 -${tech.radius}px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: tech.speed,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <motion.div
            className="tech-icon-wrapper"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(50%, -50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.3rem',
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: tech.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div 
              className="tech-icon-circle"
              style={{
                backgroundColor: '#21262d',
                border: `2px solid ${tech.color}`,
                color: tech.color,
                boxShadow: `0 4px 16px rgba(0, 0, 0, 0.3), 0 0 20px ${tech.color}33`,
              }}
            >
              <i className={tech.icon}></i>
            </div>
            <span 
              className="tech-icon-label"
              style={{ color: tech.color, opacity: 0.8 }}
            >
              {tech.name}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default OrbitingTechIcons;