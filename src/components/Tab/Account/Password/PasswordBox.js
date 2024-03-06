import React from "react";
import Image from "next/image";
import PasswordForm from "./PasswordForm";
import lockImg from "../../../../../public/lock.png";
import UpdatePassword from "./UpdatePassword";

const PasswordBox = () => {
  return (
    <div className="password flex flex-row ">
      <Image
        src={lockImg}
        alt="password image"
        className="h-5 w-5  float-start mt-3"
      />
      <PasswordForm />
      <UpdatePassword />
    </div>
  );
};

export default PasswordBox;
