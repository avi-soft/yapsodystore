import React from "react";

const EventInfo = ({ event }) => {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return (
    <div className="block overflow-hidden tracking-wider text-[#2e2294e]">
      {event.performances_count > 1 ? (
        <>
          <div className="flex gap-2">
            <span>From</span>
            <span>
              {new Date(event.performance_start_time).toLocalString("en-")}
            </span>
          </div>
          <div className="flex gap-2">
            <span>to</span>
            <span>{event.performance_end_time}</span>
          </div>
        </>
      ) : (
        <div className="flex gap-2">
          <span>{event.performance_end_time}</span>
        </div>
      )}
      <span>({event.performances_count} Performances)</span>
    </div>
  );
};

export default EventInfo;
