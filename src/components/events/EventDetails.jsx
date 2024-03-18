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
  showStartDateOnly,
}) => (
  <div className="min-h-[1px] w-[45%] ml-[4px] pl-2 pt-2  text-[#566270] max-md:w-[100%] max-md:px-[15px] text-xl float-left">
    <div className="mb-2">
      <div
        style={{
          color: headingColor,
        }}
        className="font-normal m-0 leading-[1.2]"
      >
        <p className="overflow-wrap-break word-wrap-break break-word">
          {eventName}
        </p>
        <span className="text-[16px]">
          <h2>{eventNameTitle2}</h2>
          <h2>{eventNameTitle3}</h2>
        </span>
      </div>
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
    <div
      className=" text-sm font-bold leading-[1.7]"
      style={{ color: textColor }}
    >
      <span className="flex gap-1">
        <span>
          <p>{moment(startDate).format("MMM D, YYYY")}</p>
        </span>
        {showStartDateOnly == "no" && (
          <>
            {" "}
            <p>-</p>
            <span>
              <p>{moment(endDate).format("MMM D, YYYY")}</p>
            </span>
          </>
        )}
      </span>
      {performances > 1 && (
        <span>
          <p>({performances} Performances)</p>
        </span>
      )}
    </div>
  </div>
);

export default EventDetails;
