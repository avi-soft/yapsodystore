import React from "react";
import { GiLaptop } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import moment from "moment";
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
  eventNameTitle2,
  eventNameTitle3,
}) => (
  <div className="min-h-[1px] w-[45%] ml-[4px] pl-2 pt-2 text-[#566270] max-md:w-[100%] max-md:px-[15px] text-xl float-left">
    <div className="mb-2">
      <span
        style={{
          color: headingColor,
        }}
        className="text-black"
      >
        <p
          style={{
            overflowWrap: "break-word",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          {eventName}
        </p>
        <span className="text-[16px]">
          <p>{eventNameTitle2}</p>
          <p>{eventNameTitle3}</p>
        </span>
      </span>
      <span></span>
      <span className="flex gap-2 text-sm" style={{ color: textColor }}>
        <span className="mt-1">
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
    <div className=" text-sm font-bold" style={{ color: textColor }}>
      <span className="flex gap-1">
        <span>
          <p>{moment(startDate).format("MMM D, YYYY")}</p>
        </span>
        <p>-</p>
        <span>
          <p>{moment(endDate).format("MMM D, YYYY")}</p>
        </span>
      </span>
      <span>
        <p>({performances} Performances)</p>
      </span>
    </div>
  </div>
);

export default EventDetails;
