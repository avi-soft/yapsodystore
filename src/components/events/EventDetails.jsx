import React from "react";
import { GiLaptop } from "react-icons/gi";

const EventDetails = ({
  eventName,
  name,
  location,
  startDate,
  endDate,
  performances,
}) => (
  <div className="min-h-[1px] w-[45%] ml-[4px] pt-2 text-[#566270] max-md:w-[100%] max-md:px-[15px] float-left">
    <div className="mb-2">
      <span className="text-black">
        <p>{eventName}</p>
      </span>
      <span className="flex gap-2 text-[13px]">
        <span>
          <GiLaptop className="size-5" />
        </span>
        <span>
          <p>{location}</p>
        </span>
      </span>
    </div>
    <div className="text-[13px]">
      <span className="flex gap-1">
        <span>
          <p>{startDate}</p>
        </span>
        <p>-</p>
        <span>
          <p>{endDate}</p>
        </span>
      </span>
      <span>
        <p>({performances} Performances)</p>
      </span>
    </div>
  </div>
);

export default EventDetails;
