import React from "react";
import userImg from "@/../public/icons/user.png";
import emailImg from "@/../public/icons/letter.png";
import Image from "next/image";

const InfoBox = ({ info, user, email }) => {
  let text, imgSrc, altText;
  if (info === "user") {
    text = user;
    imgSrc = userImg;
    altText = "user image";
  } else {
    text = email;
    imgSrc = emailImg;
    altText = "email image";
  }

  return (
    <div className={info}>
      <Image src={imgSrc} alt={altText} className="h-5 w-5 inline-block" />
      <span className="text-base inline-block pl-3 mb-[30px]">{text}</span>
    </div>
  );
};

export default InfoBox;
