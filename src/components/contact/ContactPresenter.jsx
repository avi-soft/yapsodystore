"use client";
import { useState } from "react";
import IconLabel from "@/ui/IconLabel";
import ContactPresent from "../Contact-form/ContactPresentor";

const ContactPresenter = ({ size, color,fontSize }) => {
  const [showSignIn, setShowSignIn] = useState(false);


  const ShowContactPresenterPage = () => {
    setShowSignIn(!showSignIn);
  };
  return (
   <div
      onClick={ShowContactPresenterPage}
      className="font-lato text-[14px] flex cursor-pointer items-center"
    >
      <IconLabel color={color} size={size} icon="contact" gap={3} />
      <span style={{ color: color, fontSize: fontSize || '14px' }}>Contact Presenter</span>
      {showSignIn && (
        <ContactPresent onClose={() => setShowSignIn(!showSignIn)} />
      )}
     </div>
  );
};

export default ContactPresenter;

