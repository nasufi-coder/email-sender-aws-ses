import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BouncingIcon {
  icon: string;
  name: string;
  color: string;
  initialX: number;
  initialY: number;
  velocityX: number;
  velocityY: number;
  size: number;
}

const BouncingNavIcons: React.FC = () => {
  const [icons, setIcons] = useState<BouncingIcon[]>([]);
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });

  const navIcons: Omit<BouncingIcon, 'initialX' | 'initialY' | 'velocityX' | 'velocityY'>[] = [
    { icon: 'fas fa-home', name: 'Home', color: '#0366d6', size: 24 },
    { icon: 'fas fa-user', name: 'About', color: '#28a745', size: 22 },
    { icon: 'fas fa-briefcase', name: 'Experience', color: '#7c3aed', size: 20 },
    { icon: 'fas fa-cogs', name: 'Skills', color: '#f59e0b', size: 26 },
    { icon: 'fas fa-graduation-cap', name: 'Education', color: '#ef4444', size: 24 },
    { icon: 'fas fa-envelope', name: 'Contact', color: '#06b6d4', size: 22 },
  ];

  useEffect(() => {
    // Set container bounds based on hero image area
    const updateBounds = () => {
      setContainerBounds({ width: 600, height: 400 });
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);

    // Initialize icons with random positions and velocities
    const initialIcons = navIcons.map(iconData => ({
      ...iconData,
      initialX: Math.random() * (600 - 100) + 50, // Keep away from edges
      initialY: Math.random() * (400 - 100) + 50,
      velocityX: (Math.random() - 0.5) * 2, // Random velocity between -1 and 1
      velocityY: (Math.random() - 0.5) * 2,
    }));

    setIcons(initialIcons);

    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  useEffect(() => {
    if (icons.length === 0) return;

    const animateIcons = () => {
      setIcons(prevIcons => 
        prevIcons.map(icon => {
          let newX = icon.initialX + icon.velocityX;
          let newY = icon.initialY + icon.velocityY;
          let newVelocityX = icon.velocityX;
          let newVelocityY = icon.velocityY;

          // Bounce off walls
          if (newX <= 30 || newX >= containerBounds.width - 30) {
            newVelocityX = -newVelocityX;
            newX = Math.max(30, Math.min(containerBounds.width - 30, newX));
          }
          if (newY <= 30 || newY >= containerBounds.height - 30) {
            newVelocityY = -newVelocityY;
            newY = Math.max(30, Math.min(containerBounds.height - 30, newY));
          }

          return {
            ...icon,
            initialX: newX,
            initialY: newY,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          };
        })
      );
    };

    const interval = setInterval(animateIcons, 50); // 20 FPS
    return () => clearInterval(interval);
  }, [icons.length, containerBounds]);

  return (
    <div className="bouncing-nav-container">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="bouncing-nav-icon"
          style={{
            left: icon.initialX,
            top: icon.initialY,
            '--icon-color': icon.color,
          } as React.CSSProperties}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ 
            scale: 1.3, 
            opacity: 1,
            transition: { duration: 0.2 }
          }}
        >
          <div className="nav-icon-circle">
            <i 
              className={icon.icon} 
              style={{ 
                fontSize: icon.size,
                color: icon.color 
              }}
            ></i>
          </div>
          <span className="nav-icon-tooltip">{icon.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default BouncingNavIcons;