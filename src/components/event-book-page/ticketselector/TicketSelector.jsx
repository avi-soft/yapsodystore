"use client";

import React from "react";
import Script from "next/script";

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
}) => {
  const { event_seating_type, is_seats_io, seats_io_chart_key } = eventSeatData;
  console.log(eventSeatData);
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
        />
      )}
    </div>
  );
};

export default TicketSelector;
