import React from "react";
import Dots from "./dots";
import PasswordInput from "./PasswordInput";

const PasswordForm = () => {
  return (
    <div className="xl:w-1/2 lg:w-1/4 md:w-1/3">
      <Dots />
      <form id="password_information" className="hide_div p-2 ">
        <PasswordInput id="old_password" text="Current Password" />
        <PasswordInput id="new_password" text="New Password" />
        <PasswordInput id="confirm_password" text="Confirm Password" />
      </form>
    </div>
  );
};

export default PasswordForm;
