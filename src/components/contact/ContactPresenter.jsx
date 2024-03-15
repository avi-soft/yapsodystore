'use client'
import { useState} from "react";
import IconLabel from "@/ui/IconLabel";
import ContactPresent from "../Contact-form/ContactPresentor";

const ContactPresenter = ({ size, color }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleClick = () => {
    setShowSignIn(true); 
  };
  return (
      // <IconLabel color={color} size={size} icon="contact" gap={4}>
      //   <div>Contact Presenter</div>
      // </IconLabel>

      <div className="font-lato text-[14px] ">
      <IconLabel color={color} size={size} icon="contact" gap={4}>
        <div onClick={handleClick}>
          Contact Presenter
        </div>
      </IconLabel>
      {showSignIn && <ContactPresent onClose={()=>setShowSignIn(false)}/> }
      
    </div>
     
  );
};

export default ContactPresenter;
