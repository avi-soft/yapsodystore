"use client";
import Image from "next/image";
import { useState } from "react";
import SupportCard from "./SupportCard";
import IconLabel from "@/ui/IconLabel";
import SupportWrapper from "./SupportWrapper";
import CommentWrapper from "./CommentWrapper";
const Support = ({
  size,
  position = "bottom",
  boxBackgroundColor,
  iconColor,
  textColor,
  boxBorderColor,
}) => {
  const [open, setOpen] = useState(false);
  const actions = {
    onMouseOver: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
  };
  const toggleOnClick=()=>{
    if (window.innerWidth < 1024) { 
           document.getElementById("esc_modal").showModal()
    }else{

    }
  }
  return (
    <div
      className={`dropdown dropdown-hover text-[16px]  dropdown-${position}`}
      onClick={toggleOnClick}
      // onClick={() => document.getElementById("esc_modal").showModal()}
    >
      <IconLabel
        color={iconColor}
        size={size}
        icon="support"
        gap={4}
        actions={actions}
      >
        <div tabIndex={0} role="button">
          Support
        </div>
      </IconLabel>
      <SupportWrapper>
        <SupportCard
          boxBorderColor={boxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          position={position}
        />
      </SupportWrapper>
      <CommentWrapper position={position}>
        <SupportCard
          boxBorderColor={boxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          position={position}
        />
      </CommentWrapper>
    </div>
  );
};

export default Support;
