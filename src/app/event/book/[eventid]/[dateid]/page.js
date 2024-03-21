import EventBookPageContainer from "@/components/event-book-page/EventBookPageContainer";
import {
  getEventSeatData,
  getSectionData,
  getPricingInfoData,
} from "@/helpers/api-utils";

export default async function SeatBookingPage({ params }) {
  const { eventid, dateid } = params;
  const eventSeatData = await getEventSeatData(eventid);
  console.log(eventSeatData);
  const sectionData = await getSectionData(eventid, dateid);
  // console.log(sectionData);
  const pricingData = await getPricingInfoData(eventid, dateid);
  console.log(pricingData);
  return (
    <div>
      <EventBookPageContainer
        eventSeatData={eventSeatData}
        sectionData={sectionData}
        pricingData={pricingData}
      />
    </div>
  );
}
