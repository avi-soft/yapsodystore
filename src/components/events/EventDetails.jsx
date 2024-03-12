import React from "react";
import { GiLaptop } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";

const EventDetails = ({
  locationId,
  locationType,
  headingColor,
  textColor,
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
        <p style={{ color: headingColor }}>{eventName}</p>
      </span>
      <span className="flex gap-2 text-[13px]" style={{ color: textColor }}>
        <span>
          {locationType == "physical" ? (
            <MdLocationPin className="size-4" />
          ) : (
            <GiLaptop className="size-4" />
          )}
        </span>
        <span>
          <p>{locationType == "physical" ? location : locationId}</p>
        </span>
      </span>
    </div>
    <div className="text-[13px] font-bold" style={{ color: textColor }}>
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
