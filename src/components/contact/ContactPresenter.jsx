"use client";
import { useState } from "react";
import IconLabel from "@/ui/IconLabel";
import ContactPresent from "../Contact-form/ContactPresentor";

const ContactPresenter = ({ size, color }) => {
  const [showSignIn, setShowSignIn] = useState(false);



  const ShowContactPresenterPage = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    // <IconLabel color={color} size={size} icon="contact" gap={4}>
    //   <div>Contact Presenter</div>
    // </IconLabel>
    <>
      <div
        onClick={ShowContactPresenterPage}
        className="font-lato text-[16px] flex items-center cursor-pointer"
      >
        <IconLabel color={color} size={size} icon="contact" gap={3} />
        <span style={{ color: color }}>Contact Presenter</span>


      </div>
      {showSignIn && (
        <ContactPresent onClose={() => setShowSignIn(!showSignIn)} />
      )}
    </>
  );
};

export default ContactPresenter;
