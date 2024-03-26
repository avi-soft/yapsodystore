import { FaLocationDot } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
export default function TicketSelectorHeading() {
  {
    /*Event Details */
  }
  return (
    <div className="getticket-main md:w-[70vw] xl:w-[80vw]  ">
      <div className="mainbox-event md:block hidden border-solid border-b-[1px] py-2 pb-6  ">
        <div className="divide-main ">
          <div className="box mr-[20px]">
            <div className="diagonal">MULTI Events</div>
          </div>
          <div className="event-name">MULTI Events</div>
        </div>
        <div className="get-time pt-4 ">
          <div className="mr-4 font-[400] text-base pb-2 ">
            <FaLocationDot className="inline-block align-middle" />
            <span className="ml-3">Asia/Calcutta</span>
          </div>
          <div className="font-[400] text-base">
            <BsClockFill className="inline-block align-middle" />
            <span className="ml-3">2024-04-19 17:00</span>
          </div>
          <div className="border-b-[1px] md:hidden z-50"></div>
        </div>
      </div>
    </div>
  );
}
