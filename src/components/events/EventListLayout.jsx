"use client";
import Button from "@/ui/Button";
import EventDetails from "./EventDetails";
import EventImage from "./EventImage";
import Link from "next/link";

export default function EventListLayout({
  eventId,
  showImage,
  locationId,
  locationType,
  buttonLinkBoxBorderColor,
  boxBackgroundColor,
  headingColor,
  textColor,
  eventName,
  location,
  startDate,
  endDate,
  performances,
}) {
  return (
    <div
      style={{
        borderColor: buttonLinkBoxBorderColor,
        backgroundColor: boxBackgroundColor,
      }}
      className="mb-[20px] w-[100%] flex justify-between rounded border-[1px]    max-md:flex-col max-md:gap-3"
    >
      <div className="relative min-h-[1px] justify-center max-md:w-[100%]">
        <div className="h-[180px] flex-col  text-center">
          <EventImage src={showImage} />
          <p className="absolute mt-[-80px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[68px] text-[15px] text-[rgba(51,51,51,0.5)]">
            {!showImage && eventName}
          </p>
        </div>
      </Link>
      <EventDetails
        locationId={locationId}
        locationType={locationType}
        headingColor={headingColor}
        textColor={textColor}
        eventName={eventName}
        location={location}
        startDate={startDate}
        endDate={endDate}
        performances={performances}
      />

      <div className="relative mt-[72px] min-h-[1px] w-[30%] px-[25px] text-right max-md:w-[100%] max-md:mt-[60px]">
        <div className="w-[50%] rounded  py-[6px] text-center float-right">
          <Button
            width={"60%"}
            color={buttonLinkBoxBorderColor}
            to={`/event/index/${eventId}/${eventName
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-")
              .replace(/-+$/, "")}`}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
