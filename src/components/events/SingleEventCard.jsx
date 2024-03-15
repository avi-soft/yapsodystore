import EventGridLayout from "./EventGridLayout";
import EventListLayout from "./EventListLayout";

const SingleEventCard = ({
  event,
  buttonLinkBoxBorderColor,
  boxBackgroundColor,
  headingColor,
  textColor,
}) => {
  const view = "grid1";
  const commonProps = {
    eventId: event.id,
    showImage: event.show_image,
    locationId: event.location_id,
    locationType: event.location_type,
    boxBackgroundColor: boxBackgroundColor,
    buttonLinkBoxBorderColor: buttonLinkBoxBorderColor,
    eventName: event.event_title1,
    eventNameTitle2: event.event_title2,
    eventNameTitle3: event.event_title3,
    location: event.venue_location_name + "-" + event.venue_location_address,
    startDate: event.performance_start_time,
    endDate: event.last_performance_start_date,
    performances: event.performances_count,
    headingColor: headingColor,
    textColor: textColor,
  };

  return (
    <>
      {view === "grid" ? (
        <EventGridLayout {...commonProps} />
      ) : (
        <EventListLayout {...commonProps} />
      )}
    </>
  );
};

export default SingleEventCard;
