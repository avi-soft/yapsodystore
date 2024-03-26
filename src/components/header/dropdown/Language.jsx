import React from "react";
import Image from "next/image";
import check from "@/../public/assets/icons/check.png";

const Language = ({ languageData, langCode }) => {
  function calculateMinWidth() {
    const maxLength = languageData.reduce((max, option) => {
      const newLabel = `${option.name}-${option.short.toUpperCase()}`;
      return newLabel.length > max ? newLabel.length : max;
    }, 0);

    return `${maxLength * 20 + 49}px`;
  }
  return (
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
        className={`absolute top-full mt-7 bg-white border border-gray-300 shadow-md grid grid-cols-2 rounded-md md:right-0 -right-[135px]`}
        style={{ minWidth: calculateMinWidth(languageData) }}
      >
        {languageData.map((option, index) => (
          <li
            key={index}
            className={`p-3 text-left truncate border border-b-0 text-[#696a6c] ${
              option.short === langCode ? "text-black" : ""
            }`}
          >
            {/*Rendering all the languages and the check icon */}
            {option.short === langCode && (
              <span
                className={` flex items-center font-bold text-stone-800 text-[14px]`}
              >
                {option.name + "-" + option.short.toUpperCase()}
                <span className="ml-[30px]">
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
            <span className="text-[14px] tracking-[.4px]">
              {option.short !== langCode &&
                option.name + "-" + option.short.toUpperCase()}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Language;
