"use client";

import { useState } from "react";

import SupportOverlay from "./SupportOverlay";
import SupportCard from "./SupportCard";
import IconLabel from "@/ui/IconLabel";

const Support = ({ size, color }) => {
  const [open, setOpen] = useState(false);
  const actions = {
    onMouseOver: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
  };
  return (
    <div>
      <IconLabel
        color={color}
        size={size}
        icon="support"
        gap={4}
        actions={actions}
      >
        Support
        {open && (
          <SupportOverlay isOpen={open}>
            <SupportCard />
          </SupportOverlay>
        )}
      </IconLabel>
    </div>
  );
};

export default Support;
