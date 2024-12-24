import React from 'react';

const Button = ({ text, bgColor, textColor, padding, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full ${bgColor} ${textColor} ${padding}`}
    >
      {text}
    </button>
  );
};

export default Button;