"use client";
import React, { useState } from "react";
import ContactPresent from "../Contact-form/ContactPresentor";
const SupportCard = ({
  boxBorderColor = "black",
  textColor = "black",
  boxBackgroundColor = "white",
  position,
}) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [showNonTechSupp,setShowNonTechSupp] = useState(false);

  
  const handleclickonNonTechnical = ()=>{
    setShowNonTechSupp(!showNonTechSupp);
  }

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
    cursor:'pointer',
  };
  const boxStyle2 = {
    border: borderColor,
    color: isHovered2 ? "white" : textColor,
    backgroundColor: isHovered2 ? boxBorderColor : boxBackgroundColor,
    opacity: isHovered2 && "0.5",
    cursor:'pointer',
  };
  return (
      <div
        style={{ color: textColor, backgroundColor: boxBackgroundColor }}
        className="p-3 "
      >
        <div
          style={boxStyle1}
          className={`rounded  p-2 hover:bg-[${boxBorderColor}] hover:text-white`}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <h2 className="font-bold">Technical Support</h2>
          <ul className="ml-5 list-disc whitespace-normal">
            <li>Trouble purchasing/receiving /reprinting tickets</li>
            <li>Online payment issues</li>
            <li>Report abuse / fraud</li>
          </ul>
        </div>
        <div
          style={boxStyle2}
          className={`mt-[10px] rounded p-2 hover:bg-[${boxBorderColor}] hover:text-white`}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}

          onClick={handleclickonNonTechnical}
        >
          <h2 className="font-bold">Non-technical Support</h2>
          <ul className="ml-5 list-disc">
            <li>Venue / Event information</li>
            <li>Refunds & exchanges</li>
          </ul>
          
          {/* {showNonTechSupp && (<ContactPresent  />)} */}
        </div>

        {showNonTechSupp && (<ContactPresent onClose={()=>setShowNonTechSupp(!showNonTechSupp)} />)}
      </div>

  );
};

export default SupportCard;
