"use client";
import React from "react";

const SupportCard = ({ boxColor = "black", textColor = "black" }) => {
  const borderColor = `1px solid ${boxColor}`;
  const boxStyle = { border: borderColor, color: textColor};
  return (
    <div
      className="dropdown-content left-[-75%] z-10 h-fit w-[300px] bg-white flex-col gap-2 rounded-[4px] border p-3 shadow-md relative"
      style={{ color: textColor }}
    >
      <div
        style={boxStyle}
        className={`rounded  p-2 hover:bg-[${boxColor}] hover:text-white`}
      >
        <h2 className="font-bold">Technical Support</h2>
        <ul className="ml-5 list-disc">
          <li>Trouble purchasing/receiving /reprinting tickets</li>
          <li>Online payment issues</li>
          <li>Report abuse / fraud</li>
        </ul>
      </div>
      <div
        style={boxStyle}
        className={`mt-[10px] rounded p-2 hover:bg-[${boxColor}] hover:text-white`}
      >
        <h2 className="font-bold">Non-technical Support</h2>
        <ul className="ml-5 list-disc">
          <li>Venue / Event information</li>
          <li>Refunds & exchanges</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportCard;
