import EventBookPageContainer from "@/components/event-book-page/EventBookPageContainer";
import {
  getEventSeatData,
  getSectionData,
  getPricingInfoData,
  getVenueData,
} from "@/helpers/api-utils";

export default async function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  const eventSeatData = await getEventSeatData(eventid);
  const sectionData = await getSectionData(eventid, dateid);
  const pricingData = await getPricingInfoData(eventid, dateid);
  const venueData = await getVenueData(eventid);

  return (
    <div>
      <EventBookPageContainer
        eventSeatData={eventSeatData}
        sectionData={sectionData}
        pricingData={pricingData}
        venueData={venueData}
      />
    </div>
  );
}
