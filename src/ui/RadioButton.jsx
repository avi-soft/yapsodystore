import React from "react";

const RadioButton = ({ color, checked }) => {
  return (
    <input
      type="radio"
      name="radio-10"
      className="radio"
      style={{ backgroundColor: color }}
      checked={checked}
    />
  );
};

export default RadioButton;
