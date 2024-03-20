"use client";
import { useState } from "react";
import IconLabel from "@/ui/IconLabel";
import ContactPresent from "../Contact-form/ContactPresentor";

const ContactPresenter = ({ size, color }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleClick = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    // <IconLabel color={color} size={size} icon="contact" gap={4}>
    //   <div>Contact Presenter</div>
    // </IconLabel>

    <div
      onClick={handleClick}
      className="font-lato text-[16px] flex items-center cursor-pointer"
    >
      <IconLabel color={color} size={size} icon="contact" gap={3} />
      <span style={{ color: color }}><span className="md:inline-block hidden">Contact</span> Presenter</span>
      {showSignIn && (
        <ContactPresent onClose={() => setShowSignIn(!showSignIn)} />
      )}
    </div>
  );
};

export default ContactPresenter;
