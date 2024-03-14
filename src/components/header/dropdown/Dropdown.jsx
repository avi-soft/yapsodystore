"use client";

import React, { useState, useEffect, useRef } from "react";
import { PiUserCircleFill } from "react-icons/pi";

import styles from "../Navbar.module.css";

import Language from "./Language";
import Account from "./Account";
import Arrows from "./Arrows";

const Dropdown = ({ type, languageData, langCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentType, setCurrentType] = useState(null);

  // const Drop = useRef(null);

  const changeState = (type) => {
    document.getElementById(`down-${type}`).classList.toggle("hidden");
    const up = document.getElementById(`up-${type}`);
    up.classList.contains("hidden")
      ? up.classList.replace("hidden", "block")
      : up.classList.replace("block", "hidden");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsOpen(false);
        setCurrentType(null);
        let upArrow = document.querySelectorAll(".up");
        upArrow.forEach((up) => {
          if (up.classList.contains("block")) {
            up.classList.replace("block", "hidden");
            let type = up.id.slice(3);
            document.getElementById(`down-${type}`).classList.toggle("hidden");
          }
        });
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = (clickedType) => {
    setIsOpen(!isOpen);
    setCurrentType(clickedType === currentType ? null : clickedType);
    changeState(clickedType);
  };

  // const handleButtonClick1 = () => {
  //   setIsOpen1(!isOpen1);
  //   setIsOpen2(false);
  //   changeState();
  // };
  // const handleButtonClick2 = () => {
  //   setIsOpen2(!isOpen2);
  //   setIsOpen1(false);
  //   changeState();
  // };
  // console.log(isOpen1);
  // console.log(isOpen2);

  // let handleClick;
  // type === "lang"
  //   ? (handleClick = handleButtonClick1)
  //   : (handleClick = handleButtonClick2);
  // Function to calculate the minimum width of the dropdown based on label lengths

  return (
    <div
      id={`Drop-${type}`}
      className={`${styles.pullLeft}   flex items-center flex-shrink-0 dropdown`}
      onClick={() => handleClick(type)}
    >
      <button className="flex flex-row h-12 items-center ">
        <div className="relative  ">
          <div className="flex items-center ">
            {type === "lang" ? (
              <p className="mr-1 font-bold">{langCode.toUpperCase()}</p>
            ) : (
              <>
                <span className="mr-2">
                  <PiUserCircleFill
                    alt="user-male-circle "
                    className="h-10 w-10"
                  />
                </span>
                <p className="myAccount hidden sm:inline-block overflow-hidden type-ellipsis whitespace-nowrap max-w-[120px] ">
                  {type}
                </p>
              </>
            )}
            <Arrows type={type} />
          </div>
          {/* Conditional rendering of the dropdown content if it's open */}
          {isOpen && currentType === type && (
            <div className="relative shadow-xl">
              {type === "lang" ? (
                <Language languageData={languageData} langCode={langCode} />
              ) : (
                <Account />
              )}
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
