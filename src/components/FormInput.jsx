import React from 'react';

/**
 * @param {{
 *   label: string;
 *   name: string;
 *   type?: string;
 *   register: any;
 *   error?: any;
 *   placeholder?: string;
 *   isTextarea?: boolean;
 * }} props
 */
const FormInput = ({ label, name, type = 'text', register, error, placeholder, isTextarea = false }) => {
  const commonProps = {
    id: name,
    name: name,
    ...register(name),
    placeholder: placeholder,
    className: `w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 ${error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-accent/50'}`,
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-primary">
        {label}
      </label>
      {isTextarea ? (
        <textarea {...commonProps} rows="4"></textarea>
      ) : (
        <input type={type} {...commonProps} />
      )}
      {error && <span className="text-red-500 text-xs mt-1">{error.message}</span>}
    </div>
  );
};

export default FormInput;