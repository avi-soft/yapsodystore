"use client"

import React from "react";
import Script from "next/script";

import "./style.css";
import TicketSelectorHeading from "./TicketSelectorHeading";
import GeneralEvent from "../eventTypes/GeneralEvent";
import SeatsIoEvent from "../eventTypes/SeatsIOEvent";
import OldSeatingEvent from "../eventTypes/OldSeatingEvent";


const TicketSelector = ({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket
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
