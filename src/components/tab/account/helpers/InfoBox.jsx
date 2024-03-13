import React from "react";
import Image from "next/image";
import Form from "./Form";
import lockImg from "@/../public/assets/icons/lock.png";
import userImg from "@/../public/assets/icons/user.png";
import UpdateData from "./UpdateData";

const InfoBox = ({ type, user }) => {
  let imgSrc, altText;
  if (type === "user") {
    imgSrc = userImg;
    altText = "user image";
  } else {
    imgSrc = lockImg;
    altText = "password image";
  }
  return (
    <div className="password flex flex-row ">
      <Image
        src={imgSrc}
        height="auto"
        width="auto"
        alt={altText}
        className="h-5 w-5  float-start mt-3"
      />
      <Form type={type} user={user} />
      <UpdateData type={type} />
    </div>
  );
};

export default InfoBox;
