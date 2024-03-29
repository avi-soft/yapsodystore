"use client";
import IconLabel from "@/ui/IconLabel";
import { useState } from "react";
import MainFaq from "./MainFaq";
const PresenterFaq = ({ size, color }) => {
  const [showFaq, setshowFaq] = useState(false);
  const showFaqfunct = () => {
    setshowFaq(true);
  };
  return (
    <div className="font-lato text-[14px] flex">
      <div
        className="flex cursor-pointer"
        onClick={showFaqfunct}
      >
        <IconLabel
          color={color}
          size={size}
          icon="presenterFaq"
          gap={3}
        ></IconLabel>
        <div className="mt-[2px]" style={{ color: color }}>
          Presenter FAQ
        </div>
      </div>

      {showFaq && (
        <MainFaq
          onClose={() => {
            setshowFaq(false);
          }}
        />
      )}
    </div>
  );
};

export default PresenterFaq;
