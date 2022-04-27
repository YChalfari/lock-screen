import React from "react";
import "./button.css";
const Button = ({ value, onClick }) => {
  const handleClick = () => {
    onClick(value);
  };
  if (value === "back") {
    return (
      <div onClick={handleClick} className="btn backspace">
        &#8592;
      </div>
    );
  }
  return (
    <div onClick={handleClick} className="btn">
      {value}
    </div>
  );
};

export default Button;
