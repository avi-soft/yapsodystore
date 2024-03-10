import React from "react";
import Dots from "../dots";
import PasswordInput from "./Input";

const Form = ({ type, user }) => {
  return (
    <div className="xl:w-1/2 lg:w-1/4 md:w-1/3">
      {type === "user" ? (
        <span
          id="hide-user"
          className="text-base inline-block pl-3 mb-[30px] mt-2"
        >
          {user}
        </span>
      ) : (
        <Dots />
      )}
      <form id={type} className="hidden p-2 ">
        {type === "user" ? (
          <>
            <PasswordInput id="first_name" text="First Name" />
            <PasswordInput id="last_name" text="Last Name" />
          </>
        ) : (
          <>
            <PasswordInput id="old_password" text="Current Password" />
            <PasswordInput id="new_password" text="New Password" />
            <PasswordInput id="confirm_password" text="Confirm Password" />
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
