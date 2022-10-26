import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="bg-primary cursor-pointer py-2 px-6 font-semibold rounded-lg text-secondary">
      {children}
    </button>
  );
};

export default Button;
