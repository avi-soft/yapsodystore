import { MdLocationPin } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { BsClockFill } from "react-icons/bs";
import EventImage from "@/components/single-event-page/EventImage";
import moment from "moment";
export default function TicketSelectorHeading({
  eventSeatData,
  eventData,
  performances,
  pricingData,
}) {
  const {
    id,
    performance_id,
    event_title1,
    event_title2,
    event_title3,
    images,
    location_type,
    location_info,
    hyperlinks,
    event_description,
    videos,
  } = eventData;

  let performance = performances.filter(
    (p) => p.id === pricingData.performance_info.id
  )[0];
  let date = performance.show_start_datetime;
  return (
    <div className="getticket-main  ">
      <div className="mainbox-event md:block hidden border-solid border-b-[1px] py-2 pb-6  ">
        <div className="divide-main px-[11px]">
          <div className="box mr-[20px]">
            {/* <div className="diagonal">MULTI Events</div> */}
            <EventImage eventData={eventData} height={64.11} width={85.4} />
          </div>
          <div className="event-name text-[22px] font-lato">
            {event_title1}
            <div className="mt-2.5 italic font-[400] text-sm font-lato">
              {event_title2}
            </div>
          </div>
        </div>

        <div className="get-time pt-4 font-lato">
          <div className="mr-4 font-[400] text-sm  pb-2 ">
            {location_type === "physical" ? (
              <MdLocationPin className="size-4 inline-block align-middle" />
            ) : (
              <GiLaptop className="size-4 inline-block align-middle" />
            )}
            <span className="ml-3">
              {location_type === "physical"
                ? location_info.name
                : location_info.webevent_address}
            </span>
          </div>
          <div className="font-[400] text-sm">
            <BsClockFill className="inline-block align-middle" />
            <span className="ml-3">
              {moment(date).format("MMM D, YYYY")}, {moment(date).format("LT")}
            </span>
          </div>
          <div className="border-b-[1px] md:hidden z-50"></div>
        </div>
      </div>
    </div>
  );
}
