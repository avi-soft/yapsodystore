import React from "react";

import "./style.css";
import TicketSelectorHeading from "./TicketSelectorHeading";
import GeneralEvent from "../event-types/general-events/GeneralEvent";
import SeatsIoEvent from "../event-types/seats-io-events/SeatsIoEvent";
import OldSeatingEvent from "../event-types/old-seating-events/OldSeatingEvent";

const TicketSelector = ({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  venueData,
  handleRemoveTicket,
  handleSeatChange,
  handleRemoveSeat,
  deselect,
  setDeselect,
  setType,
}) => {
  const { event_seating_type, is_seats_io, seats_io_chart_key } = eventSeatData;

  return (
    <div>
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
        />
      )}
      {event_seating_type === "reserved" && is_seats_io === 1 && (
        <SeatsIoEvent
          eventSeatData={eventSeatData}
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          sectionData={sectionData}
          pricingData={pricingData}
          venueData={venueData}
          handleRemoveTicket={handleRemoveTicket}
          seats_io_chart_key={seats_io_chart_key}
          handleSeatChange={handleSeatChange}
          handleRemoveSeat={handleRemoveSeat}
          deselect={deselect}
          setDeselect={setDeselect}
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

export default TicketSelector;
