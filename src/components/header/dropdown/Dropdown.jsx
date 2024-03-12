"use client";

import React, { useState, useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";

import styles from "../Navbar.module.css";

import Language from "./Language";
import Account from "./Account";
import Arrows from "./Arrows";

const Dropdown = ({ text, languageData,langCode }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const changeState = () => {
    document.getElementById(`down-${text}`).classList.toggle("hidden");
    const up = document.getElementById(`up-${text}`);
    up.classList.contains("hidden")
      ? up.classList.replace("hidden", "block")
      : up.classList.replace("block", "hidden");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen1(false);
        setIsOpen2(false);
        let upArrow = document.querySelectorAll(".up");
        upArrow.forEach((up) => {
          if (up.classList.contains("block")) {
            up.classList.replace("block", "hidden");
            let text = up.id.slice(3);
            document.getElementById(`down-${text}`).classList.toggle("hidden");
          }
        });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleButtonClick1 = () => {
    setIsOpen1(!isOpen1);
    changeState();
  };
  const handleButtonClick2 = () => {
    setIsOpen2(!isOpen2);
    changeState();
  };

  let handleClick;
  text === "lang"
    ? (handleClick = handleButtonClick1)
    : (handleClick = handleButtonClick2);
  // Function to calculate the minimum width of the dropdown based on label lengths

  return (
    <div
      className={`${styles.pullLeft}   flex items-center flex-shrink-0 dropdown`}
      onClick={handleClick}
    >
      <button className="flex flex-row h-12 items-center ">
        <div className="relative  ">
          <div className="flex items-center ">
            {text === "lang" ? (
              <p className="mr-1 font-bold">{langCode.toUpperCase()}</p>
            ) : (
              <>
                <span className="mr-2">
                  <PiUserCircleFill
                    alt="user-male-circle "
                    className="h-10 w-10"
                  />
                </span>
                <p className="myAccount hidden sm:inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] ">
                  {text}
                </p>
              </>
            )}
            <Arrows text={text} />
          </div>
          {/* Conditional rendering of the dropdown content if it's open */}

          {text === "lang"
            ? isOpen1 && (
                <Language
                  handleClick={handleButtonClick1}
                  languageData={languageData}
                  langCode={langCode}
                />
              )
            : isOpen2 && <Account handleClick={handleButtonClick2} />}
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
