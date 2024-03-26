"use client";

import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState } from "react";
import SignIn from "../signin-form/SigninMain";

//account definition that changes to logo
const Account = ({ color }) => {
  const [show, setshow] = useState(false); // apply this is function to show or close this component when click
  function showSignIn() {
    setshow(!show);
  }
  return (
    <div

      className={`mb-1 ${styles.pullLeft}  flex items-center flex-shrink-0 !border-none`}

      onClick={showSignIn}
    >
      <p className="myAccount px-[10px] ml-2 tracking-[0.5px] hidden font-onlyLato text-base text-[#2E294E] max-w-[130px] sm:inline-block">
        My Account
      </p>
      <span className="sm:hidden ">
        <Image
          height={36}
          width={36}

          src={`https://img.icons8.com/ios-filled/50/user-male-circle.png`}

          alt="user-male-circle"
          className="w-8 h-8 xs:mx-2.5"
        />
      </span>

      {show && (
        <SignIn
          color={color}
          onClose={() => {
            setshow(!show);
          }}
        />
      )}
    </div>
  );
};

export default Account;