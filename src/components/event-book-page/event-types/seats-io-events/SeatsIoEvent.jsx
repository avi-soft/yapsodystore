import { SeatsioSeatingChart } from "@seatsio/seatsio-react";

export default function SeatsIoEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  venueData,
  handleRemoveTicket,
  seats_io_chart_key,
}) {
  const {
    performance_info,
    price,
    regular,
    seats_io_categories,
    sets_to_ticket_qty,
    ticket_limit,
    supportsBestAvailable,
    seats_io_left_seats_after_book_hold,
    seats_io_left_seats_after_book,
    addOnsData,
    addOnsSettings,
    discount,
    tax_info,
    tix_surcharge_info,
    trans_surcharge_info,
  } = pricingData;

  const { seats_io_public_workspace_key } = venueData;
  return (
    <>
      <div>Seats Io Event</div>
      <div style={{ height: "500px" }}>
        <SeatsioSeatingChart
          workspaceKey={seats_io_public_workspace_key}
          event={performance_info.seats_io_event_key}
          price={seats_io_categories}
        />
      </div>
    </>
  );
}
