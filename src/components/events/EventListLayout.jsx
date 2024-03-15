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
  eventNameTitle2,
  eventNameTitle3,
}) {
  return (
    <div
      style={{
        borderColor: buttonLinkBoxBorderColor,
        backgroundColor: boxBackgroundColor,
      }}
      className="mb-[20px] min-h-[154px] w-[100%] flex justify-between rounded border-[1px] max-md:flex-col max-md:gap-3"
    >
      <Link
        href={`/event/index/${eventId}/${eventName
          .replace(/[^\w\s]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+$/, "")}`}
        className="relative min-h-[100%] w-[25%] justify-center max-md:w-[100%] max-md:h-[180px] px-[4px] py-[4px]"
      >
        <article className="max-h-[154px] w-[95%] relative overflow-hidden object-fill">
          <EventImage src={showImage} />
          <p className=" text-center w-[90%] absolute top-0 bottom-0 left-0 right-0 h-fit m-auto rotate-[-30deg] whitespace-nowrap text-[15px] text-[rgba(51,51,51,0.5)] px-[12px] overflow-hidden text-ellipsis max-md:rotate-[-10deg] max-sm:rotate-[-20deg]">
            {!showImage && eventName}
          </p>
        </article>
      </Link>
      <EventDetails
        locationId={locationId}
        locationType={locationType}
        headingColor={headingColor}
        textColor={textColor}
        eventName={eventName}
        eventNameTitle2={eventNameTitle2}
        eventNameTitle3={eventNameTitle3}
        location={location}
        startDate={startDate}
        endDate={endDate}
        performances={performances}
      />
      <div className="relative ml-[45px]  min-h-[1px] w-[30%] px-[25px] text-right mt-auto mb-auto max-md:w-[100%] max-md:ml-auto max-md:mr-auto max-md:mt-[2px]">
        <div className="w-[50%] max-md:w-[100%] rounded py-[6px] float-right font-lato text-[18px]">
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
