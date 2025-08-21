import React from 'react';

/**
 * @param {{
 *   children: React.ReactNode;
 *   onClick?: () => void;
 *   type?: 'button' | 'submit' | 'reset';
 *   variant?: 'primary' | 'secondary';
 *   className?: string;
 * }} props
 */
const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-bold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-red-500 focus:ring-accent',
    secondary: 'bg-primary text-white hover:bg-gray-700 focus:ring-primary',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;