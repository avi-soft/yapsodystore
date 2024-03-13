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
  <div className="min-h-[1px] w-[33.33%] pt-2 text-[#566270] max-md:w-[100%] text-sm">
    <div className="mb-2">
      <span className="text-black">
        <p style={{ color: headingColor }}>{eventName}</p>
      </span>
      <span className="flex gap-2 text-[13px]">
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
