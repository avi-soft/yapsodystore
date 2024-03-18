import ShowEventLeft from "@/components/event-book-leftpart/ShowEventLeft";
export default function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  return (
    <div className="pt-24 pb-8">
      This is booking page
      <ShowEventLeft />
    </div>
  );
}
