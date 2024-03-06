"use client";

import React, { useState } from "react";
import SupportOverlay from "./SupportOverlay";
import SupportCard from "./SupportCard";
import { LuMessagesSquare } from "react-icons/lu";

const Support = ({ size, color }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex cursor-pointer gap-4" style={{ color: color }}
    onMouseOver={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}>
      <span>
        <LuMessagesSquare className={`${size}`} />
      </span>
      <span>Support</span>
      {open && <SupportOverlay isOpen={open} children={<SupportCard />} />}
    </div>
  );
};

export default Support;
