"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../Navbar.module.css";

import Language from "./Language";
import Account from "./Account";
import Arrows from "./Arrows";

const Dropdown = ({ type, user, languageData, langCode }) => {
  let color = "#000000";
  const [isOpenLang, setIsOpenLang] = useState(false);
  const [isOpenAccount, setIsOpenAccount] = useState(false);

  const changeState = (type) => {
    document.getElementById(`down-${type}`).classList.toggle("hidden");
    const up = document.getElementById(`up-${type}`);
    up.classList.contains("hidden")
      ? up.classList.replace("hidden", "block")
      : up.classList.replace("block", "hidden");
  };

  useEffect(() => {
    function closeArrow(type) {
      let upArrow = document.getElementById(`up-${type}`);
      if (upArrow && upArrow.classList.contains("block")) {
        upArrow.classList.replace("block", "hidden");
        document.getElementById(`down-${type}`).classList.toggle("hidden");
      }
    }
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpenLang(false);
        setIsOpenAccount(false);
        closeArrow("lang");
        closeArrow("account");
      }
      if (event.target.closest("#Drop-lang")) {
        setIsOpenAccount(false);
        closeArrow("account");
      }
      if (event.target.closest("#Drop-account")) {
        setIsOpenLang(false);
        closeArrow("lang");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLanguageClick = (clickedType) => {
    setIsOpenLang((isOpenLang) => !isOpenLang);
    changeState(clickedType);
  };

  const handleAccountClick = (clickedType) => {
    setIsOpenAccount((isOpenAccount) => !isOpenAccount);
    changeState(clickedType);
  };

  return (
    <div
      id={`Drop-${type}`}
      className={`${styles.pullLeft} h-[57px] flex items-center flex-shrink-0 dropdown`}
      onClick={() =>
        type === "lang" ? handleLanguageClick(type) : handleAccountClick(type)
      }
    >
      <button className="flex flex-row h-12 items-center lg:mr-[8px]">
        <div className="relative  ">
          {type === "lang" ? (
            <div className="flex items-center mb-2">
              <p className=" font-[550] font-roboto lg:mr-[8px]   text-[#333333]">
                {langCode.toUpperCase()}
              </p>
              <Arrows type={type} />
            </div>
          ) : (
            <div className="flex items-center mr-2">
              <span className="mr-2 pl-2">
                <Image
                  height={36}
                  width={36}
                  src={`https://img.icons8.com/ios-filled/50/${color.slice(
                    1,
                    7
                  )}/user-male-circle.png`}
                  alt="user-male-circle"
                  className="w-9 h-9"
                />
              </span>
              <p className="ml-1 myAccount text-base hidden sm:inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[110px] ">
                {user}
              </p>
              <Arrows type={type} />
            </div>
          )}
          {/* Conditional rendering of the dropdown content if it's open */}

          <div className="relative shadow-xl">
            {type === "lang" && isOpenLang && (
              <Language languageData={languageData} langCode={langCode} />
            )}

            {type === "account" && isOpenAccount && <Account />}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
