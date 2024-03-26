import React from "react";
import { GiLaptop } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import moment from "moment";
import Link from "next/link";
import { goToEvent } from "@/helpers/common";

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
  eventId,
}) => {

  const calculateEventDuration = () => {

    const startMoment = moment(startDate).date();
    const endMoment = moment(endDate).date();

    const duration = endMoment-startMoment;

    return duration;
  }

  const eventDuration = Math.abs(calculateEventDuration());


  return (
    <div className="min-h-[1px] w-[45%]  pt-1  text-[#566270] max-md:w-[100%] max-md:px-[10px] text-xl float-left">
      <div className="mb-1">
        <div
          style={{
            color: headingColor,
          }}
          className="font-normal m-0 leading-[1.2]"
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
          <span className="flex gap-1 text-sm items-center " style={{ color: textColor }}>
            <span className="mt-1">
              {locationType == "physical" ? (
                <MdLocationPin className="size-4" />
              ) : (
                <GiLaptop className="size-4" />
              )}
            </span>
            <span>
              <p>{locationType == "physical" ?location : locationId}</p>
            </span>
          </span>
        </Link>
      </div>
      <div
        className=" text-sm font-bold leading-[1.7] "
        style={{ color: textColor }}
      >

        <span>
      
          {performances === 1 && eventDuration === 0 && (
            <span className="flex">
              <p>{moment(startDate).format("MMM D, YYYY")}</p>
              <p className="pr-[2px]">,</p>
              <p>{moment(startDate).format("HH:mm A")}</p>
            </span>
          )}
          {performances > 1 && eventDuration === 0 && (
            <span>
              <span className="flex ">
                <p >{moment(startDate).format("MMM D, YYYY")}</p>
                <p className="mx-1">{moment(startDate).format("HH:mm A")}</p>
              </span>
              <span><p>({performances} Performances)</p></span>
            </span>
          )}

          {eventDuration > 0 && performances === 1 && (
            <span className="flex">
              <p>{moment(startDate).format("MMM D, YYYY")}</p>
              <p className="mx-1">to</p>
              <p>{moment(endDate).format("MMM D, YYYY")}</p>
            </span>
          )}
          {eventDuration > 0 && performances > 1 && (
            <span>
            <span className="flex ">
              <p>{moment(startDate).format("MMM D, YYYY")}</p>
              <p className="mx-1">-</p>
              <p>{moment(endDate).format("MMM D, YYYY")}</p>
            </span>
            <span><p>({performances} Performances)</p></span>
            </span>
          )}
        </span>

      </div>
    </div>
  )

};

export default EventDetails