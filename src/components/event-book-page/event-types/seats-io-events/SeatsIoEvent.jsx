import { SeatsioSeatingChart } from "@seatsio/seatsio-react";

export default function SeatsIoEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
}) {
  return (
    <>
      <div>Seats Io Event</div>
      <div style={{ height: "500px" }}>
        <SeatsioSeatingChart
          workspaceKey="<yourPublicWorkspaceKey>"
          event="<yourEventKey>"
          region="eu"
        />
      </div>
    </>
  );
}
