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
      <Link href={`/event/index/${eventId}/${eventName.replace(/[^\w\s]/g, "").replace(/\s+/g, "-").replace(/-+$/, "")}`} className="relative min-h-[1px] justify-center max-md:w-[100%]">
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

      <div className="relative ml-[45px]  min-h-[1px] w-[30%] px-[25px] text-right mt-auto mb-auto max-md:w-[100%] max-md:ml-auto max-md:mr-auto max-md:mt-[2px]">
        <div className="w-[50%] max-md:w-[100%] rounded py-[6px] float-right">
          <Button
            width={"100%"}
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