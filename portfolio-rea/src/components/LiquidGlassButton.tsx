import React from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
  icon?: React.ReactNode;
}

const LiquidGlassButton: React.FC<LiquidGlassButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
  icon,
}) => {
  const baseStyles = {
    padding: '1rem 2.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    textDecoration: 'none',
    fontSize: '1rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    position: 'relative' as const,
    overflow: 'hidden',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, rgba(201, 130, 14, 0.8), rgba(212, 175, 55, 0.8))',
      color: 'white',
      borderColor: 'rgba(212, 175, 55, 0.3)',
      boxShadow: '0 8px 32px rgba(201, 130, 14, 0.3)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: 'white',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
    },
    accent: {
      background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.8), rgba(45, 55, 72, 0.8))',
      color: 'white',
      borderColor: 'rgba(26, 54, 93, 0.3)',
      boxShadow: '0 8px 32px rgba(26, 54, 93, 0.3)',
    },
  };

  const hoverStyles = {
    primary: {
      background: 'linear-gradient(135deg, rgba(201, 130, 14, 0.9), rgba(212, 175, 55, 0.9))',
      boxShadow: '0 12px 40px rgba(201, 130, 14, 0.4)',
      borderColor: 'rgba(212, 175, 55, 0.6)',
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.15)',
      boxShadow: '0 12px 40px rgba(212, 175, 55, 0.2)',
      borderColor: 'rgba(212, 175, 55, 0.6)',
    },
    accent: {
      background: 'linear-gradient(135deg, rgba(26, 54, 93, 0.9), rgba(45, 55, 72, 0.9))',
      boxShadow: '0 12px 40px rgba(26, 54, 93, 0.4)',
      borderColor: 'rgba(26, 54, 93, 0.6)',
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...variantStyles[variant],
  };

  const liquidEffect = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      style={combinedStyles}
      className={`liquid-glass-button ${className}`}
      whileHover={{
        ...hoverStyles[variant],
        transform: 'translateY(-4px)',
      }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Liquid ripple effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '0',
          height: '0',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
        whileHover={{
          width: '300px',
          height: '300px',
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        style={{
          position: 'absolute',
          top: '0',
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          pointerEvents: 'none',
        }}
        whileHover={{
          left: '100%',
          transition: { duration: 0.6, ease: 'easeOut' },
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        {icon && <span>{icon}</span>}
        <span>{children}</span>
      </div>
    </Component>
  );
};

export default LiquidGlassButton;