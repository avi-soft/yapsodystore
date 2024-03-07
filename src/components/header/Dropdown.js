"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiUserCircleFill } from "react-icons/pi";

import Image from "next/image";
import arrowDown from "@/../public/angle-down-solid.svg";
import arrowUp from "@/../public/angle-up-solid.svg";
import boxOffice from "@/../public/two-tickets.png";
import profile from "@/../public/user.png";
import history from "@/../public/clock.png";
import support from "@/../public/help.png";
import logout from "@/../public/logout.png";
import check from "@/../public/check.png";

const options = [
  { label: "Arabic-AR", value: "Arabic-AR" },
  { label: "Dutch-NL", value: "Dutch-NL" },
  { label: "French-FR", value: "French-FR" },
  { label: "Hindi-HI", value: "Hindi-HI" },
  { label: "Italian-IT", value: "Italian-IT" },
  { label: "Malay-MS", value: "Malay-MS" },
  { label: "Romanion-RO", value: "Romanion-RO" },
  { label: "Spanish-ES", value: "Spanish-ES" },
  { label: "Turkish-TR", value: "Turkish-TR" },
  { label: "Bulgarian-BG", value: "Bulgarian-BG" },
  { label: "English-EN", value: "English-EN" },
  { label: "German-DE", value: "German-DE" },
  { label: "Hungarian-HU", value: "Hungarian-HU" },
  { label: "Japenese-JA", value: "Japenese-JA" },
  { label: "Marathi-MR", value: "Marathi-MR" },
  { label: "Solvak-SK", value: "Solvak-SK" },
  { label: "Swedish-SV", value: "Swedish-SV" },
];

const accountOptions = [
  { label: "Box Office", img: boxOffice, link: "/presenter" },
  { label: "Profile Settings", img: profile, link: "/account" },
  { label: "Booking History", img: history, link: "/history" },
  { label: "Support", img: support, link: "/support" },
  { label: "Logout", img: logout, link: "/logout" },
];

const Dropdown = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    document.getElementById(`down-${text}`).classList.toggle("hidden");
    const up = document.getElementById(`up-${text}`);
    up.classList.contains("hidden")
      ? up.classList.replace("hidden", "block")
      : up.classList.replace("block", "hidden");
  };
  // Function to calculate the minimum width of the dropdown based on label lengths
  const calculateMinWidth = (arr) => {
    const maxLength = arr.reduce(
      (max, option) => (option.label.length > max ? option.label.length : max),
      0
    );
    return `${maxLength * 20 + 40}px`;
  };

  return (
    <div className="relative">
      <div className="flex items-center" onClick={handleButtonClick}>
        {text === "EN" ? (
          <p className="mr-1 font-bold">{text}</p>
        ) : (
          <>
            <p className="myAccount hidden sm:inline-block"> My Account</p>
            <span className="sm:hidden">
              <PiUserCircleFill alt="user-male-circle " className="h-10 w-10" />
            </span>
          </>
        )}
        <Image
          className="pt-1 h-5 w-6"
          src={arrowDown}
          height="auto"
          width="auto"
          id={`down-${text}`}
          alt="dropdown arrow"
        />
        <Image
          className="hidden pt-1 h-5 w-6"
          id={`up-${text}`}
          src={arrowUp}
          height="auto"
          width="auto"
          alt="dropdown arrow"
        />
      </div>
      {/* Conditional rendering of the dropdown content if it's open */}
      {isOpen && (
        <div className="relative shadow-xl">
          {text === "EN" ? (
            <>
              <div className="absolute right-11 mt-5">
                <div
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                  className="w-0 h-0 border-b-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent border-b-gray-300"
                ></div>{" "}
              </div>
              <ul
                className={`absolute top-full right-0 mt-7 bg-white border border-gray-300 shadow-md grid grid-cols-2 rounded-md`}
                style={{ minWidth: calculateMinWidth(options) }}
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className={`p-3 truncate border ${
                      option.label === "English-EN" ? "text-black" : ""
                    }`}
                  >
                    {/*Rendering all the languages and the check icon */}
                    {option.label === "English-EN" && (
                      <span className={`ml-3 flex items-center`}>
                        {option.label}
                        <span className="ml-1">
                          <Image
                            width="14"
                            height="14"
                            className="h-auto w-auto"
                            src={check}
                            alt="checked--v1"
                          />
                        </span>
                      </span>
                    )}
                    {option.label !== "English-EN" && option.label}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <div className="absolute right-11 mt-[10px]">
                <div
                  style={{
                    filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                  }}
                  className="w-0 h-0 border-b-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent border-b-gray-300"
                ></div>
              </div>
              <ul
                className="absolute top-full right-0 -mr-4 mt-[19px] bg-white border border-gray-300 shadow-md grid grid-cols-1 rounded-md"
                style={{ minWidth: "230px" }}
              >
                {accountOptions.map((option, index) => (
                  <li
                    key={index + 100}
                    className="p-2 py-4 truncate border text-black"
                  >
                    <Link href={option.link}>
                      <span className={`ml-3 flex items-center`}>
                        <Image
                          src={option.img}
                          alt={option.label}
                          height="auto"
                          width="auto"
                          className="h-6 w-6 "
                        />
                        <span className="mx-4">{option.label}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
