import React from "react";

const PasswordInput = ({ id, text }) => {
  return (
    <input
      type="password"
      name={id}
      id={id}
      className="form-control h-8 w-full mb-2.5 px-3 py-1.5 text-sm text-[#555] bg-[#fff] rounded border-solid border border-[#ccc] shadow-sm focus:border-[#66afe9] focus:outline-none focus:shadow"
      placeholder={text}
      required
    />
  );
};

export default PasswordInput;
