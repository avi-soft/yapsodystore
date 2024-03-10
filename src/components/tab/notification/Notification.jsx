import React from "react";

const Notification = ({ text }) => {
  return (
    <div className={`form-control mb-10 `}>
      <label className="cursor-pointer label">
        <span className="label-text text-base md:w-80 md:pl-5  w-[58vw] ">
          {text}
        </span>
        <input
          type="checkbox"
          className="toggle [--tglbg:#F1F1F1] bg-[#fff]  ml-5 border-[#ccc] checked:[--tglbg:#4DD865] checked:border-[#4DD865]  top-[50%] box-border  hover:bg-[#fff] rounded-[36px] toggle-md  md:ml-20 mr-10"
        />
      </label>
    </div>
  );
};

export default Notification;
