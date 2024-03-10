import React from "react";

const EventInfo = ({event}) => {
  return (
    <div className="block overflow-hidden tracking-wider text-[#2e2294e]">
      <div className="flex gap-2">
        <span>From</span>
        <span>{event.startdate}</span>
      </div>
      <div className="flex gap-2">
        <span>to</span>
        <span>{event.endDate}</span>
      </div>
      <span>({event.performances} Performances)</span>
    </div>
  );
};

export default EventInfo;
