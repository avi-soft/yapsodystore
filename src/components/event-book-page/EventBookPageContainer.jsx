"use client";
import Cart from "@/components/event-book-page/ticketcart/Cart";
import Selector from "@/components/event-book-page/ticketselector/TicketSelector";
import { getBookingCartInfo } from "@/helpers/api-utils";

import { useState, useEffect, createContext } from "react";
export const TicketContext = createContext();
export default function EventBookPageContainer({
  eventSeatData,
  sectionData,
  pricingData,
  symbol
}) {
  const [selectedTickets, setSelectedTickets] = useState(0);
  const [tickets, setTickets] = useState([]);

  const { performance_info } = pricingData;
  const { event_seating_type, is_seats_io } = eventSeatData;
 
  useEffect(() => {
    if (
      event_seating_type === "general" &&
      is_seats_io === 0 &&
      selectedTickets
    ) {
      async function fetchGeneralEventData() {
        const payLoad = {
          event_id: performance_info.event_id.toString(),
          is_seats_io: is_seats_io ? true : false,
          performance_id: performance_info.id.toString(),
          secret_link_code: null, //not  known
          section_id: sectionData[0].section_id, //for general event single section will always come in response
          seats: [],
        };
        let counter = 0;
        const seatsData = Object.entries(selectedTickets).flatMap(
          ([classId, count]) =>
            Array.from({ length: count }, () => ({
              color_id: sectionData[0].section_id,
              id: ++counter,
              orig_class_id: parseInt(classId),
              seat_key: counter,
              type_id: parseInt(classId),
            }))
        );
        const requestData = { ...payLoad, seats: seatsData };
        const response = await getBookingCartInfo(requestData);
        const seats = response.order_details.seat_info;
        setTickets(seats);
      }
      fetchGeneralEventData();
    }
  }, [
    selectedTickets,
    sectionData,
    event_seating_type,
    is_seats_io,
    performance_info,
  ]);

  const handleTicketChange = (newSelection, classId) => {
    const ticketData = { [classId]: newSelection };
    setSelectedTickets((prev) => ({
      ...prev,
      ...ticketData,
    }));
  };
  const handleRemoveTicket = (ticketNumber) => {
    const updatedTickets = tickets.filter(
      (ticket) => ticket.ticketNumber !== ticketNumber
    );

    setTickets(updatedTickets);
    setSelectedTickets((prevSelected) => Math.max(0, prevSelected - 1));
  };

  return (
    <TicketContext.Provider value={{symbol}}>
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
          {
            <Cart
              tickets={tickets}
              selectedTickets={selectedTickets}
              handleRemoveTicket={handleRemoveTicket}
            />
          }
        </div>
      </div>
    </TicketContext.Provider>
  );
}
