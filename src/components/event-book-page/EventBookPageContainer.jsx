"use client";
import Cart from "@/components/event-book-page/ticketcart/Cart";
import TicketSelectorContainer from "@/components/event-book-page/ticketselector/TicketSelectorContainer";
import { useState } from "react";

export default function EventBookPageContainer({ eventSeatData,sectionData, pricingData ,venueData}) {
  const [selectedTickets, setSelectedTickets] = useState(0);
  const [tickets, setTickets] = useState([]);
  const [type, setType] = useState("");

const handleTicketChange = (newSelection, classId) => {
  const ticketData = { [classId]: newSelection };
  setSelectedTickets((prev) => ({
    ...prev,
    ...ticketData,
  }));
};
 const handleRemoveTicket = (seat_key,class_id) => {
   const updatedTickets = tickets.filter(
     (ticket) => ticket.seat_key !== seat_key
   );
   setTickets(updatedTickets);
   const selectedTicketCount = updatedTickets.filter(
     (ticket) => ticket.class_id === class_id
   );
  const ticketData = { [class_id]: selectedTicketCount.length };
  setSelectedTickets((prevSelected) => ({...prevSelected,...ticketData}));
 };

  return (
    <div className="pt-[60px] overflow-auto">
      <div className="mr-[400px]">
        <TicketSelectorContainer
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          eventSeatData={eventSeatData}
          sectionData={sectionData}
          pricingData={pricingData}
          handleRemoveTicket={handleRemoveTicket}
          venueData={venueData}
          setType={setType}
          setTickets={setTickets}
        />
      </div>
      <div className="float-right">
        <Cart
          tickets={tickets}
          selectedTickets={selectedTickets}
          handleRemoveTicket={handleRemoveTicket}
          type={type}
          venueData={venueData}
        />
      </div>
    </div>
  );
}
