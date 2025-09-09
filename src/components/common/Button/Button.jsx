import React from 'react';
import './Button.css'; 

const Button = ({ children, variant = 'primary', ...props }) => {
  const buttonClass = `btn btn-${variant}`;

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;