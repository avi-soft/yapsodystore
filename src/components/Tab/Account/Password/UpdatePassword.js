"use client";

import React from "react";

const UpdatePassword = () => {
  function updatePassword() {
    const form = document.getElementById("password_information");
    const dots = document.getElementById("dots");
    const changeBtn = document.getElementById("user_change_password");
    const updateeBtn = document.getElementById("user_update_password");

    if (form.classList.contains("hidden")) {
      form.classList.replace("hidden", "inline-block");
      updateeBtn.classList.replace("hidden", "inline-block");
      dots.classList.replace("inline-block", "hidden");
      changeBtn.innerText = "Cancel";
    } else {
      dots.classList.replace("hidden", "inline-block");
      form.classList.replace("inline-block", "hidden");
      updateeBtn.classList.replace("inline-block", "hidden");
      changeBtn.innerText = "Change Password";
    }
  }
  return (
    <div className="text-center  text-sm text-[#9055a2] md:ml-52 sm:ml-16 mt-3 w-56">
      <div className="change-pwd-div">
        <span
          className="change-text cursor-pointer"
          id="user_change_password"
          onClick={updatePassword}
        >
          Change Password
        </span>
      </div>
      <div className="update-pwd-div mt-6">
        <span>
          <button
            type="submit"
            id="user_update_password"
            className="px-5 py-1.5 rounded-sm text-center border border-solid text-[#ffffff] bg-[#8f57a0] border-[#804e8f] hidden"
          >
            Update
          </button>
        </span>
      </div>
    </div>
  );
};

export default UpdatePassword;