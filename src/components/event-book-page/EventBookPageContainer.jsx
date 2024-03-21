"use client";
import Cart from "@/components/event-book-page/ticketcart/Cart";
import Selector from "@/components/event-book-page/ticketselector/TicketSelector";
import { useState } from "react";
export default function EventBookPageContainer({ eventSeatData,sectionData, pricingData }) {
  const [selectedTickets, setSelectedTickets] = useState(0);
  const [tickets, setTickets] = useState([]);

  const handleTicketChange = (newSelection) => {
    setSelectedTickets(newSelection);

    const newTickets = Array.from({ length: newSelection }, (_, index) => ({
      ticketNumber: index + 1,
    }));

    setTickets(newTickets);
  };

  const handleRemoveTicket = (ticketNumber) => {
    const updatedTickets = tickets.filter(
      (ticket) => ticket.ticketNumber !== ticketNumber
    );

    setTickets(updatedTickets);
    setSelectedTickets((prevSelected) => Math.max(0, prevSelected - 1));
  };

  return (
    <div className="pt-[60px] overflow-auto">
      <div className="mr-[400px]">
        <Selector
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          eventSeatData={eventSeatData}
          sectionData={sectionData}
          pricingData={pricingData}
          handleRemoveTicket={handleRemoveTicket}
        />
      </div>
      <div className="float-right">
        <Cart
          tickets={tickets}
          selectedTickets={selectedTickets}
          handleRemoveTicket={handleRemoveTicket}
        />
      </div>
    </div>
  );
}
