"use client";

import React, { useState, useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";

import Language from "./Language";
import Account from "./Account";
import Arrows from "./Arrows";

const Dropdown = ({ text }) => {
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
  text === "EN"
    ? (handleClick = handleButtonClick1)
    : (handleClick = handleButtonClick2);
  // Function to calculate the minimum width of the dropdown based on label lengths

  return (
    <div className="relative dropdown">
      <div className="flex items-center " onClick={handleClick}>
        {text === "EN" ? (
          <p className="mr-1 font-bold">{text}</p>
        ) : (
          <>
            <p className="myAccount hidden sm:inline-block overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px] ">
              {text}
            </p>
            <span className="sm:hidden">
              <PiUserCircleFill alt="user-male-circle " className="h-10 w-10" />
            </span>
          </>
        )}
        <Arrows text={text} />
      </div>
      {/* Conditional rendering of the dropdown content if it's open */}

      {text === "EN"
        ? isOpen1 && <Language handleClick={handleButtonClick1} />
        : isOpen2 && <Account handleClick={handleButtonClick2} />}
    </div>
  );
};

export default Dropdown;
