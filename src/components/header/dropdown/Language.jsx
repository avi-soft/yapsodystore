import React from "react";
import Image from "next/image";
import check from "@/../public/assets/icons/check.png";

const options = [
  { label: "Arabic-AR", code: "AR" },
  { label: "Bulgarian-BG", code: "BG" },
  { label: "Dutch-NL", code: "NL" },
  { label: "English-EN", code: "EN" },
  { label: "French-FR", code: "FR" },
  { label: "German-DE", code: "DE" },
  { label: "Hindi-HI", code: "HI" },
  { label: "Hungarian-HU", code: "HU" },
  { label: "Italian-IT", code: "IT" },
  { label: "Japenese-JA", code: "JA" },
  { label: "Malay-MS", code: "MS" },
  { label: "Marathi-MR", code: "MR" },
  { label: "Romanion-RO", code: "RO" },
  { label: "Solvak-SK", code: "SK" },
  { label: "Spanish-ES", code: "ES" },
  { label: "Swedish-SV", code: "SV" },
  { label: "Turkish-TR", code: "TR" },
];

const Language = ({ handleClick,language }) => {
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
              option.code === language ? "text-black" : ""
            }`}
          >
            {/*Rendering all the languages and the check icon */}
            {option.code === language && (
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
              {option.code !== language && option.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
