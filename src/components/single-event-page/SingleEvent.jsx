import SalesEnds from "./SalesEnds";
import EventDateTime from "./EventDateTime";
import TicketSection from "./TicketSection";

const SingleEvent = ({ event, color }) => {
  return (
    <div
      style={{ borderColor: color }}
      className="mb-[20px] flex justify-between rounded border-[1px] bg-[#ffffff] px-[20px] py-[30px] max-md:block"
    >
      <EventDateTime date={event.date} time={event.time} />
      <SalesEnds endTime={event.timeRemaining}>SALE ENDS</SalesEnds>
      <TicketSection
        access={event.access}
        ticketPrice={event.ticketPrice}
        color={color}
      />
    </div>
  );
};
export default SingleEvent;
