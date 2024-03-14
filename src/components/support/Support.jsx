"use client";

import { useState } from "react";

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
    <div className={`dropdown dropdown-hover dropdown-${position}`}>
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
