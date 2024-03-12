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
    <div
      className="mb-[20px] w-[100%] flex justify-between rounded border-[1px] bg-[#ffffff] max-md:flex-col max-md:gap-3"
      style={{ borderColor: color }}
    >
      <div className="relative w-[25%] min-h-[1px] justify-center max-md:w-[100%]">
        <article className="h-[180px] relative overflow-hidden">
          <EventImage
            src={
              "https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg"
            }
          />
          <p className=" text-center absolute top-0 bottom-0 left-0 right-0 h-fit m-auto rotate-[-30deg] whitespace-nowrap text-[15px] text-[rgba(51,51,51,0.5)]">
            {eventName}
          </p>
        </article>
      </div>
      <EventDetails
        eventName={eventName}
        location={location}
        startDate={startDate}
        endDate={endDate}
        performances={performances}
      />
      <div className="relative ml-[45px]  min-h-[1px] w-[30%] px-[25px] text-right mt-auto mb-auto max-md:w-[100%] max-md:ml-auto max-md:mr-auto max-md:mt-[2px]">
        <div className="w-[50%] max-md:w-[100%] rounded py-[6px] float-right ">
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
