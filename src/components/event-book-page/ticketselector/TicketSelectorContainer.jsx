import "./style.css";
import Script from "next/script";
import TicketSelectorHeading from "./TicketSelectorHeading";
import GeneralEvent from "../event-types/general-events/GeneralEvent";
import SeatsIoEvent from "../event-types/seats-io-events/SeatsIoEvent";
import OldSeatingEvent from "../event-types/old-seating-events/OldSeatingEvent";

const TicketSelectorContainer = ({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
  venueData,
  setType,
  setTickets,
}) => {
  const { event_seating_type, is_seats_io } = eventSeatData;
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/8d4b434c6d.js"
        crossorigin="anonymous"
      />
      <TicketSelectorHeading eventSeatData={eventSeatData} />

      {/* Select Tickets*/}
      {event_seating_type === "general" && is_seats_io === 0 && (
        <GeneralEvent
          eventSeatData={eventSeatData}
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          sectionData={sectionData}
          pricingData={pricingData}
          handleRemoveTicket={handleRemoveTicket}
          setType={setType}
          setTickets={setTickets}
        />
      )}
      {event_seating_type === "reserved" && is_seats_io === 1 && (
        <SeatsIoEvent
          eventSeatData={eventSeatData}
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          sectionData={sectionData}
          pricingData={pricingData}
          handleRemoveTicket={handleRemoveTicket}
          setType={setType}
        />
      )}
      {event_seating_type === "reserved" && is_seats_io === 0 && (
        <OldSeatingEvent
          eventSeatData={eventSeatData}
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          sectionData={sectionData}
          pricingData={pricingData}
          handleRemoveTicket={handleRemoveTicket}
          setType={setType}
        />
      )}
    </div>
  );
};

export default TicketSelectorContainer;
