import React from "react";

const CheckBox = ({ id, color, checked }) => {
  return (
    <input
      type="checkbox"
      id={id}
      className={`checkbox`}
      style={{
        borderColor: color,
        "--chkbg": color,
        "--chkfg": "white",
        checked: { borderColor: color },
      }}
      defaultChecked={checked}
    />
  );
};

export default CheckBox;
