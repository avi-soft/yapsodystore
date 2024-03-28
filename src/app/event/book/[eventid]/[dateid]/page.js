import EventBookPageContainer from "@/components/event-book-page/EventBookPageContainer";
import {
  getEventSeatData,
  getSectionData,
  getPricingInfoData,
  getVenueData,
  getSingleEventData,
  getSingleEventPerformances,
} from "@/helpers/api-utils";

export default async function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  const eventData = await getSingleEventData(eventid);
  const eventSeatData = await getEventSeatData(eventid);
  const sectionData = await getSectionData(eventid, dateid);
  const pricingData = await getPricingInfoData(eventid, dateid);
  const venueData = await getVenueData(eventid);
  const { performances } = await getSingleEventPerformances(eventid);

  return (
    <div>
      <EventBookPageContainer
        eventSeatData={eventSeatData}
        sectionData={sectionData}
        pricingData={pricingData}
        venueData={venueData}
        eventData={eventData}
        performances={performances}
      />
    </div>
  );
}
