import React from "react";
import { GiLaptop } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import moment from "moment";
import Link from "next/link";
import { goToEvent } from "@/helpers/common";
import Button from "@/ui/Button";
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
  buttonLinkBoxBorderColor,
  eventId,
}) => (
  <div className="min-h-[1px] w-[45%] pl-2 pt-[5px]  text-[#566270] max-md:w-[100%] max-md:px-[10px] text-xl float-left">
    <div className="mb-1">
      <div
        style={{
          color: headingColor,
        }}
        className="font-normal m-0 leading-[1.2] max-xs:mb-[13px]"
      >
        <Link href={goToEvent(eventId, eventName)}>
          <p className="overflow-wrap-break word-wrap-break break-word">
            {eventName}
          </p>
        </Link>
        <span className="text-[16px]">
          <h2>{eventNameTitle2}</h2>
          <h2>{eventNameTitle3}</h2>
        </span>
      </div>
      <Link href={goToEvent(eventId, eventName)}>
        <span className="flex gap-1 text-sm max-xs:mb-[12px]" style={{ color: textColor }}>
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
      </Link>
    </div>
    <div
      className=" text-sm font-bold leading-[1.7] max-xs:mb-[5px]"
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
    <div className="hidden max-md:w-[100%] rounded py-[6px] float-right font-lato text-[18px] max-md:block max-xs:hidden">
          <Button
            height={"43.7px"}
            width={"124px"}
            color={buttonLinkBoxBorderColor}
            to={goToEvent(eventId, eventName)}
          >
            More Info
          </Button>
        </div>
  </div>
);

export default EventDetails;
