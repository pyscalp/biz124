import React from 'react';
import { motion } from 'framer-motion';

/**
 * @param {{
 *   icon?: React.ReactNode;
 *   title: string;
 *   description: string;
 *   className?: string;
 * }} props
 */
const Card = ({ icon, title, description, className = '' }) => {
  return (
    <motion.div
      className={`bg-white p-8 rounded-lg shadow-lg text-center ${className}`}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {icon && <div className="flex justify-center mb-4 text-accent">{icon}</div>}
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </motion.div>
  );
};

export default Card;