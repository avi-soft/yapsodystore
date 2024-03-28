import { useEffect } from "react";
export default function OldSeatingEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
  setType,
}) {
  useEffect(() => {
    setType("old");
  }, [setType]);
  return <div>Old Seating Event </div>;
}
