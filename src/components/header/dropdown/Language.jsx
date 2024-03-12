import React from "react";
import Image from "next/image";
import check from "@/../public/assets/icons/check.png";

const options = [
  { label: "Arabic-AR", value: "Arabic-AR" },
  { label: "Bulgarian-BG", value: "Bulgarian-BG" },
  { label: "Dutch-NL", value: "Dutch-NL" },
  { label: "English-EN", value: "English-EN" },
  { label: "French-FR", value: "French-FR" },
  { label: "German-DE", value: "German-DE" },
  { label: "Hindi-HI", value: "Hindi-HI" },
  { label: "Hungarian-HU", value: "Hungarian-HU" },
  { label: "Italian-IT", value: "Italian-IT" },
  { label: "Japenese-JA", value: "Japenese-JA" },
  { label: "Malay-MS", value: "Malay-MS" },
  { label: "Marathi-MR", value: "Marathi-MR" },
  { label: "Romanion-RO", value: "Romanion-RO" },
  { label: "Solvak-SK", value: "Solvak-SK" },
  { label: "Spanish-ES", value: "Spanish-ES" },
  { label: "Swedish-SV", value: "Swedish-SV" },
  { label: "Turkish-TR", value: "Turkish-TR" },
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
            className={`p-3 truncate border text-[#696a6c] ${
              option.label === "English-EN" ? "text-black" : ""
            }`}
          >
            {/*Rendering all the languages and the check icon */}
            {option.label === "English-EN" && (
              <span
                className={`ml-2 flex items-center font-bold text-stone-800`}
                onClick={handleClick}
              >
                {option.label}
                <span className="ml-3">
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
            <span onClick={handleClick}>
              {option.label !== "English-EN" && option.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
