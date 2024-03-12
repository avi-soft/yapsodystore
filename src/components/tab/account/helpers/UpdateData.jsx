"use client";

import React from "react";

const UpdateData = ({ type }) => {
  function updateUserName() {}
  function updatePassword() {}
  let text, updateFn;
  if (type === "user") {
    text = "Change";
    updateFn = updateUserName;
  } else {
    text = "Change Password";
    updateFn = updatePassword;
  }
  function changeState() {
    const form = document.getElementById(type);
    const dots = document.getElementById(`hide-${type}`);
    const changeBtn = document.getElementById(`user_change_${type}`);
    const updateeBtn = document.getElementById(`user_update_${type}`);

    if (form.classList.contains("hidden")) {
      form.classList.replace("hidden", "inline-block");
      updateeBtn.classList.replace("hidden", "inline-block");
      dots.classList.replace("inline-block", "hidden");
      changeBtn.innerText = "Cancel";
    } else {
      dots.classList.replace("hidden", "inline-block");
      form.classList.replace("inline-block", "hidden");
      updateeBtn.classList.replace("inline-block", "hidden");
      changeBtn.innerText = text;
    }
  }
  return (
    <div className="text-center  text-sm text-[#9055a2] md:ml-52 sm:ml-16 mt-3 w-48">
      <div className="change-pwd-div">
        <span
          className="change-text cursor-pointer"
          id={`user_change_${type}`}
          onClick={changeState}
        >
          {text}
        </span>
      </div>
      <div className="update-pwd-div mt-6">
        <span>
          <button
            type="submit"
            id={`user_update_${type}`}
            onClick={updateFn}
            className="px-5 py-1.5 rounded-sm text-center border border-solid text-[#ffffff] bg-[#8f57a0] border-[#804e8f] hidden"
          >
            Update
          </button>
        </span>
      </div>
    </div>
  );
};

export default UpdateData;
