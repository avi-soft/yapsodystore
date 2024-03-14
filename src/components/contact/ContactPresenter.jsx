'use client'
import { useState , useEffect} from "react";
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

      <>
      <IconLabel color={color} size={size} icon="contact" gap={4}>
        <div onClick={handleClick}>
          Contact Presenter
        </div>
      </IconLabel>
      {showSignIn && <ContactPresent onClose={()=>setShowSignIn(false)}/> }
      
    </>
     
  );
};

export default ContactPresenter;
