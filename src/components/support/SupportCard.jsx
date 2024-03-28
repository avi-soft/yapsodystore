"use client";
import React, { useState } from "react";

const SupportCard = ({
  boxBorderColor = "black",
  textColor = "black",
  boxBackgroundColor = "white",
  position,
}) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const borderColor = `1px solid ${boxBorderColor}`;
  const boxStyle1 = {
    border: borderColor,
    color: isHovered1 ? "white" : textColor,
    backgroundColor: isHovered1 ? boxBorderColor : boxBackgroundColor,
    opacity: isHovered1 && "0.5",
    lineHeight: "1.42857143",
  };
  const boxStyle2 = {
    border: borderColor,
    color: isHovered2 ? "white" : textColor,
    backgroundColor: isHovered2 ? boxBorderColor : boxBackgroundColor,
    opacity: isHovered2 && "0.5",
    lineHeight: "1.42857143",
  };
  return (
    <div
      style={{
        color: textColor,
        backgroundColor: boxBackgroundColor,
        fontFamily: "'Roboto', 'Arial'",
      }}
      className="p-[10px] cursor-pointer shadow-sm text-[16px] lg:text-[14px]"
    >
      <div
        style={boxStyle1}
        className={`rounded  mb-[10px] p-[10px] pl-[20px] hover:bg-[${boxBorderColor}] hover:text-white text-[16px] lg:text-[14px]`}
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave1}
      >
        <h2 className="font-bold">Technical Support</h2>
        <ul className=" list-disc whitespace-normal">
          <li>Trouble purchasing / receiving / reprinting tickets</li>
          <li>Online payment issues</li>
          <li>Report abuse / fraud</li>
        </ul>
      </div>
      <div
        style={boxStyle2}
        className={`p-[10px] rounded pl-[20px] hover:bg-[${boxBorderColor}] hover:text-white text-[16px] lg:text-[14px]`}
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
      >
        <h2 className="font-bold">Non-technical Support</h2>
        <ul className=" list-disc">
          <li>Venue / Event information</li>
          <li>Refunds & exchanges</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportCard;
