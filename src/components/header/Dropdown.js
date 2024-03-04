"use client";

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

import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  // Function to calculate the minimum width of the dropdown based on label lengths
  const calculateMinWidth = () => {
    const maxLength = options.reduce(
      (max, option) => (option.label.length > max ? option.label.length : max),
      0
    );
    return `${maxLength * 20 + 20}px`;
  };

  return (
    <div className="relative">
      <div className="flex items-center" onClick={handleButtonClick}>
        <p className="mr-2">EN</p>
      </div>
      {/* Conditional rendering of the dropdown content if it's open */}
      {isOpen && (
        <div className="relative">
          <div className="absolute right-11 mt-6">
            <div className="w-0 h-0 border-b-4 border-r-8 border-l-8 border-r-transparent border-l-transparent border-gray-400"></div>
          </div>

          <ul
            className={`absolute top-full right-0 mt-7 bg-white border border-gray-300 shadow-md grid grid-cols-2`}
            style={{ minWidth: calculateMinWidth() }}
          >
            {options.map((option, index) => (
              <li
                key={index}
                className={`p-2 truncate border ${
                  option.label === "English-EN" ? "text-black" : ""
                }`}
              >
                {/*Rendering all the languages and the check icon */}
                {option.label === "English-EN" && (
                  <span className={`ml-3 flex items-center`}>
                    {option.label}
                    <span className="ml-1">
                      <img
                        width="14"
                        height="14"
                        className=""
                        src="https://img.icons8.com/ios/50/2DBC2C/checked--v1.png"
                        alt="checked--v1"
                      />
                    </span>
                  </span>
                )}
                {option.label !== "English-EN" && option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
