import React from "react";
import moment from "moment";
const EventInfo = ({ performanceCount, startDate, endDate }) => {
  return (
    <div className="block overflow-hidden tracking-wider text-[#2e2294e]">
      {performanceCount > 1 ? (
        <>
          <div className="flex gap-2">
            <span>From</span>
            <span>{moment(startDate).format("MMM D, YYYY")}</span>
          </div>
          <div className="flex gap-2">
            <span>to</span>
            <span>{moment(endDate).format("MMM D, YYYY")}</span>
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <span>{moment(startDate).format("MMM D,YYYY,LT")}</span>
        </div>
      )}
      <span>({performanceCount} Performances)</span>
    </div>
  );
};

export default EventInfo;
