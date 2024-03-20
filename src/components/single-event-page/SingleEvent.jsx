import SalesEnds from "./SalesEnds";
import EventDateTime from "./EventDateTime";
import TicketSection from "./TicketSection";
import { calculateRemainingTime } from "@/helpers/common";

const SingleEvent = ({
  eventid,
  dateid,
  performance,
  buttonLinkBoxBorderColor,
  textColor,
  boxBackgroundColor,
  symbol,
  headingColor,
}) => {
  return (
    <div
      style={{
        borderColor: buttonLinkBoxBorderColor,
        background: boxBackgroundColor,
      }}
      className="mb-[20px]  flex justify-between rounded border-[1px] bg-[#ffffff] px-[20px] py-[30px] max-md:block m-h-[330px]"
    >
      <EventDateTime
        date={new Date()}
        time={performance.show_start_datetime}
        headingColor={headingColor}
        textColor={textColor}
      />
      <SalesEnds
        endTime={calculateRemainingTime(performance.show_end_datetime)}
        color={textColor}
      >
        SALE ENDS
      </SalesEnds>
      <TicketSection
        eventid={eventid}
        dateid={dateid}
        symbol={symbol}
        access={performance.access_code}
        ticketPrice={performance.min_price}
        color={buttonLinkBoxBorderColor}
        textColor={textColor}
      />
    </div>
  );
};
export default SingleEvent;
