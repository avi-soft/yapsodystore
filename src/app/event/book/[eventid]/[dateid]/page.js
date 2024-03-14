import EventPage from "@/components/event-book-page-left-part/page";
export default function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  return (
    <div className="pt-24 pb-8">
      This is booking page
      <EventPage />
    </div>
  );
}
