import EventPage from '@/components/eventbookpage_leftpart/page'
export default function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  return (
    <div>This is booking page
      <EventPage/>
    </div>
  );
}
