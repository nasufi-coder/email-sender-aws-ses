import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BouncingIcon {
  icon: string;
  name: string;
  color: string;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  size: number;
}

const BouncingBackgroundIcons: React.FC = () => {
  const [icons, setIcons] = useState<BouncingIcon[]>([]);
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });

  const techIcons: Omit<BouncingIcon, 'x' | 'y' | 'velocityX' | 'velocityY'>[] = [
    { icon: 'fab fa-java', name: 'Java', color: '#f89820', size: 28 },
    { icon: 'fas fa-leaf', name: 'Spring', color: '#6db33f', size: 24 },
    { icon: 'fab fa-react', name: 'React', color: '#61dafb', size: 26 },
    { icon: 'fab fa-js-square', name: 'JavaScript', color: '#f7df1e', size: 24 },
    { icon: 'fab fa-docker', name: 'Docker', color: '#2496ed', size: 25 },
    { icon: 'fas fa-database', name: 'Database', color: '#336791', size: 22 },
    { icon: 'fab fa-git-alt', name: 'Git', color: '#f05032', size: 24 },
    { icon: 'fas fa-cloud', name: 'AWS', color: '#ff9900', size: 23 },
  ];

  useEffect(() => {
    const updateBounds = () => {
      // Set bounds to match hero section dimensions
      setContainerBounds({ width: 1200, height: 600 });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);

    // Initialize icons with random positions and velocities
    const initialIcons = techIcons.map(iconData => ({
      ...iconData,
      x: Math.random() * (1200 - 100) + 50,
      y: Math.random() * (600 - 100) + 50,
      velocityX: (Math.random() - 0.5) * 1.5,
      velocityY: (Math.random() - 0.5) * 1.5,
    }));

    setIcons(initialIcons);

    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useEffect(() => {
    if (icons.length === 0) return;

    const animateIcons = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => {
          let newX = icon.x + icon.velocityX;
          let newY = icon.y + icon.velocityY;
          let newVelocityX = icon.velocityX;
          let newVelocityY = icon.velocityY;

          // Bounce off walls
          if (newX <= 40 || newX >= containerBounds.width - 40) {
            newVelocityX = -newVelocityX;
            newX = Math.max(40, Math.min(containerBounds.width - 40, newX));
          }
          if (newY <= 40 || newY >= containerBounds.height - 40) {
            newVelocityY = -newVelocityY;
            newY = Math.max(40, Math.min(containerBounds.height - 40, newY));
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          };
        })
      );
    };

    const interval = setInterval(animateIcons, 50);
    return () => clearInterval(interval);
  }, [icons.length, containerBounds]);

  return (
    <div className="bouncing-background-icons">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="bouncing-bg-icon"
          style={{
            left: icon.x,
            top: icon.y,
            color: icon.color,
            fontSize: icon.size,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <i className={icon.icon}></i>
        </motion.div>
      ))}
    </div>
  );
};

export default BouncingBackgroundIcons;