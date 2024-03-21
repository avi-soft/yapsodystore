import Button from "@/ui/Button";
import EventDetails from "./EventDetails";
import EventImage from "./EventImage";
import Link from "next/link";
import { goToEvent } from "@/helpers/common";

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
  showStartDateOnly,
}) {
  return (
    <div
      style={{
        borderColor: buttonLinkBoxBorderColor,
        backgroundColor: boxBackgroundColor,
      }}
      className="mb-[20px] min-h-[154px] w-[100%] flex justify-between rounded border-[1px] max-xs:flex-col"
    >
      <Link
        href={goToEvent(eventId, eventName)}
        className="relative min-h-[100%] justify-center max-md:w-[100%] max-md:h-[100%] px-[4px] py-[4px]"
      >
        <div className="lg:w-[190px] lg:h-[142.5px] md:w-[170px] md:h-[127.5px]  w-[95%] relative overflow-hidden object-fill max-md:h-[100%] max-xs:w-[100%]">
          <EventImage src={showImage} />
          <p className=" text-center w-[90%] absolute top-0 bottom-0 left-0 right-0 h-fit m-auto rotate-[-30deg] whitespace-nowrap text-[15px] text-[rgba(51,51,51,0.5)] px-[12px] overflow-hidden text-ellipsis max-md:rotate-[-10deg] max-sm:rotate-[-20deg]">
            {!showImage && eventName}
          </p>
        </div>
      </Link>
      <EventDetails
        eventId={eventId}
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
        showStartDateOnly={showStartDateOnly}
        buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
      />
      <div className="relative ml-[45px]  min-h-[1px] w-[30%] px-[24px] text-right mt-auto mb-auto max-md:w-[100%] max-md:hidden max-xs:block max-xs:ml-auto max-xs:mr-auto max-xs:px-2 max-xs:mb-[6px]">
        <div className=" max-xs:w-[100%] rounded py-[6px] float-right font-lato text-[18px]">
          <Button
            height={"100%"}
            width={"100%"}
            color={buttonLinkBoxBorderColor}
            to={goToEvent(eventId, eventName)}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
