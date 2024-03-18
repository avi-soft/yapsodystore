'use client'
import IconLabel from "@/ui/IconLabel";
import { useState } from "react";
import MainFaq from "./MainFaq";
const PresenterFaq = ({ size, color }) => {
  const [showFaq, setshowFaq] = useState(false)
  const showFaqfunct = () => {
    setshowFaq(true);
  }
  return (
    <>
      <IconLabel color={color} size={size} icon="presenterFaq" gap={4}>
        <div onClick={showFaqfunct}>
          Presenter FAQ
        </div>
      </IconLabel>
      {showFaq && <MainFaq onClose={()=>{setshowFaq(false)}}/>}
    </>
  );
};

export default PresenterFaq;
