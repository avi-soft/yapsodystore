import SalesEnds from "./SalesEnds";
import EventDateTime from "./EventDateTime";
import TicketSection from "./TicketSection";
import { getTimeDifferenceFormatted } from "@/helpers/format-date";

const SingleEvent = ({ performance, color }) => {
  return (
    <div
      style={{ borderColor: color }}
      className="mb-[20px] flex justify-between rounded border-[1px] bg-[#ffffff] px-[20px] py-[30px] max-md:block m-h-[330px]"
    >
      <EventDateTime
        date={performance.show_start_datetime}
        time={performance.show_start_datetime}
      />
      <SalesEnds
        endTime={getTimeDifferenceFormatted(
          performance.show_start_datetime,
          performance.show_start_datetime
        )}
      >
        SALE ENDS
      </SalesEnds>
      <TicketSection
        access={performance.access_code}
        ticketPrice={performance.min_price}
        color={color}
      />
    </div>
  );
};
export default SingleEvent;
