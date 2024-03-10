import React from "react";
import Image from "next/image";
import check from "@/../public/assets/icons/check.png";

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

const Language = ({ handleClick }) => {
  function calculateMinWidth() {
    const maxLength = options.reduce(
      (max, option) => (option.label.length > max ? option.label.length : max),
      0
    );
    return `${maxLength * 20 + 40}px`;
  }
  return (
    <div className="relative shadow-xl">
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
            onClick={handleClick}
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
    </div>
  );
};

export default Language;
