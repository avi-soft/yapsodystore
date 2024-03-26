"use client";
import { useState } from "react";
import IconLabel from "@/ui/IconLabel";
import ContactPresent from "../Contact-form/ContactPresentor";

const ContactPresenter = ({ size, color }) => {
  const [showContpage, setShowContpage] = useState(false);
  const ShowContactPresenterPage = () => {
    setShowContpage(!showContpage);
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
      {showContpage && (
        <ContactPresent onClose={() => setShowContpage(!showContpage)} />

      )}
    </>
    
  );
};

export default ContactPresenter;
