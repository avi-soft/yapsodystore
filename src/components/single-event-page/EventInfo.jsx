import React from "react";
import moment from "moment";
const EventInfo = ({ performanceCount, startDate, endDate, color }) => {
  return (
    <div
      className="block overflow-hidden font-lato tracking-wider text-[#2e2294e]"
      style={{ color }}
    >
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
          <span>({performanceCount} Performances)</span>
        </>
      ) : (
        <div className="flex">
          <span>{moment(startDate).format("MMM D,YYYY,LT")}</span>
        </div>
      )}
    </div>
  );
};

export default EventInfo;
