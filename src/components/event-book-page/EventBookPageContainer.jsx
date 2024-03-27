"use client";
import Cart from "@/components/event-book-page/ticketcart/Cart";
import Selector from "@/components/event-book-page/ticketselector/TicketSelector";
import { use, useState } from "react";
export default function EventBookPageContainer({
  eventSeatData,
  sectionData,
  pricingData,
  venueData,
}) {
  const [selectedTickets, setSelectedTickets] = useState(0);
  const [tickets, setTickets] = useState([]);

  const [seatsTickets, setSeatsTickets] = useState([]);
  const [deselect, setDeselect] = useState({
    status: false,
    id: null,
    chart: null,
  });

  const [type, setType] = useState("");

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

  const handleRemoveSeat = (seatName, id) => {
    setDeselect((prev) => {
      return { status: true, id: id, chart: prev.chart };
    });
    setSeatsTickets((prev) => prev.filter((s) => s.seatName !== seatName));
  };

  function handleSeatChange(seatData) {
    let isSeat = true;
    seatsTickets.map((seat) => {
      if (seat.seatName === seatData.seatName) {
        isSeat = false;
      }
    });

    if (isSeat) {
      setSeatsTickets((prev) => [...prev, seatData]);
    }
  }

  return (
    <div className="pt-[60px] flex">
      <div className="w-screen overflow-hidden">
        <Selector
          selectedTickets={selectedTickets}
          handleTicketChange={handleTicketChange}
          eventSeatData={eventSeatData}
          sectionData={sectionData}
          pricingData={pricingData}
          venueData={venueData}
          handleRemoveTicket={handleRemoveTicket}
          handleSeatChange={handleSeatChange}
          handleRemoveSeat={handleRemoveSeat}
          deselect={deselect}
          setDeselect={setDeselect}
          setType={setType}
        />
      </div>
      <div className="">
        <Cart
          tickets={tickets}
          selectedTickets={selectedTickets}
          handleRemoveTicket={handleRemoveTicket}
          seatsTickets={seatsTickets}
          handleRemoveSeat={handleRemoveSeat}
          type={type}
        />
      </div>
    </div>
  );
}
