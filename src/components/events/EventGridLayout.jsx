import Button from "@/ui/Button";
import EventDetails from "./EventDetails";
import EventImage from "./EventImage";

export default function EventGridLayout({
  color,
  eventName,
  location,
  startDate,
  endDate,
  performances,
}) {
  return (
    <div
      style={{ borderColor: color }}
      className="mb-[20px] flex flex-col justify-between gap-3 rounded border-[1px] bg-[#ffffff] px-[10px] py-[10px] w-[100%]"
    >
      <div className="relative min-h-[1px] justify-center">
        <div className="h-[180px] flex-col pl-[5px] pr-[15px] text-center">
          <EventImage
            src={
              "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg"
            }
          />
          <p className="absolute mt-[-80px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[75px] text-[15px] text-[rgba(51,51,51,0.5)]">
            {eventName}
          </p>
        </div>
      </div>
      <div className="relative min-h-[1px] px-[10px] text-[#566270]">
        <EventDetails
          location={location}
          startDate={startDate}
          endDate={endDate}
          performances={performances}
        />
      </div>
      <Button width={"100%"} color={color} to={"/event/index/26809/new-event"}>
        More Info
      </Button>
    </div>
  );
}
