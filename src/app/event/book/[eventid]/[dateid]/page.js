import EventPage from "@/components/event-book-page-left-part/page";
export default function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  return (
    <div>
      This is booking page
      <EventPage />
    </div>
  );
}
