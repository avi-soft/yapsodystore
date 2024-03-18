"use client";
import Image from "next/image";
import { useState } from "react";
import arrowUp from "@/../public/assets/icons/angle-up-solid.svg";
import SupportCard from "./SupportCard";
import IconLabel from "@/ui/IconLabel";

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
  return (
    <div
      className={`dropdown dropdown-hover text-[16px]  dropdown-${position}`}
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
        <div
          style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.1) 0px 4px 6px)" }}
          className={`${
            !open ? "invisible" : null
          } w-0 h-0 border-b-[10px] border-r-[10px] border-l-[10px] border-r-transparent border-l-transparent border-b-gray-300`}
        ></div>
        <SupportCard
          boxBorderColor={boxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
        />
      </IconLabel>
    </div>
  );
};

export default Support;
