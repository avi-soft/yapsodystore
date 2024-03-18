"use client";

import React, { useState, useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";

import styles from "../Navbar.module.css";

import Language from "./Language";
import Account from "./Account";
import Arrows from "./Arrows";

const Dropdown = ({ type, user, languageData, langCode }) => {
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
      if (upArrow.classList.contains("block")) {
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
      className={`${styles.pullLeft}   flex items-center flex-shrink-0 dropdown`}
      onClick={() =>
        type === "lang" ? handleLanguageClick(type) : handleAccountClick(type)
      }
    >
      <button className="flex flex-row h-12 items-center ">
        <div className="relative  ">
          <div className="flex items-center ">
            {type === "lang" ? (
              <p className="mr-1 font-semibold  font-roboto">{langCode.toUpperCase()}</p>
            ) : (
              <>
                <span className="mr-2">
                  <PiUserCircleFill
                    alt="user-male-circle "
                    className="h-10 w-10"
                  />
                </span>
                <p className="myAccount hidden sm:inline-block font-onlyLato overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] ">
                  {user}
                </p>
              </>
            )}
            <Arrows type={type} />
          </div>
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
