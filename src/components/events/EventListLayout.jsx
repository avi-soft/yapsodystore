import Button from "@/ui/Button";
import EventDetails from "./EventDetails";
import EventImage from "./EventImage";

export default function EventListLayout({
  color,
  eventName,
  location,
  startDate,
  endDate,
  performances,
}) {
  return (
    <div className="mb-[20px] w-[100%] flex justify-between rounded border-[1px] border-[#a593e0] bg-[#ffffff]   max-md:flex-col max-md:gap-3">
      <div className="relative min-h-[1px] justify-center max-md:w-[100%]">
        <div className="h-[180px] flex-col  text-center">
          <EventImage
            src={
              "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg"
            }
          />
          <p className="absolute mt-[-80px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[68px] text-[15px] text-[rgba(51,51,51,0.5)]">
            {eventName}
          </p>
        </div>
      </div>
      <EventDetails
        eventName={eventName}
        location={location}
        startDate={startDate}
        endDate={endDate}
        performances={performances}
      />

      <div className="relative mt-[72px] min-h-[1px] w-[33.33%] px-[25px] text-right max-md:w-[100%] max-md:mt-[60px]">
        <div className="w-[70%] rounded  py-[6px] text-center">
          <Button
            width={"100%"}
            color={color}
            to={"/event/index/26809/new-event"}
          >
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}
