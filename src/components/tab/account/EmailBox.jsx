import React from "react";
import emailImg from "@/../public/assets/icons/letter.png";
import Image from "next/image";

const InfoBox = ({ email }) => {
  let altText = "email image";

  return (
    <div className="mt-2">
      <Image
        src={emailImg}
        height="auto"
        width="auto"
        alt={altText}
        className="h-5 w-5 inline-block"
      />
      <span className="text-base inline-block pl-3 mb-[30px]">{email}</span>
    </div>
  );
};

export default InfoBox;
