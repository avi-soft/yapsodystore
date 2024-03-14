import SalesEnds from "./SalesEnds";
import EventDateTime from "./EventDateTime";
import TicketSection from "./TicketSection";
import { getTimeDifferenceFormatted } from "@/helpers/format-date";

const SingleEvent = ({
  performance,
  buttonLinkBoxBorderColor,
  textColor,
  boxBackgroundColor,
  headingColor,
}) => {
  return (
    <div
      style={{
        borderColor: buttonLinkBoxBorderColor,
        background: boxBackgroundColor,
      }}
      className="mb-[20px] flex justify-between rounded border-[1px] bg-[#ffffff] px-[20px] py-[30px] max-md:block m-h-[330px]"
    >
      <EventDateTime
        date={performance.show_start_datetime}
        time={performance.show_start_datetime}
        headingColor={headingColor}
        textColor={textColor}
      />
      <SalesEnds
        endTime={getTimeDifferenceFormatted(
          performance.show_start_datetime,
          performance.show_start_datetime
        )}
        color={textColor}
      >
        SALE ENDS
      </SalesEnds>
      <TicketSection
        access={performance.access_code}
        ticketPrice={performance.min_price}
        color={buttonLinkBoxBorderColor}
        textColor={textColor}
      />
    </div>
  );
};
export default SingleEvent;
