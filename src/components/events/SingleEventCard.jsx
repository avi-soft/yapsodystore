import EventGridLayout from "./EventGridLayout";
import EventListLayout from "./EventListLayout";

const SingleEventCard = ({ event, color, view }) => {
  

  return (
    <>
      {view === "grid" ? (
        <EventGridLayout
          color={color}
          eventName={event.name}
          location={event.location}
          startDate={event.startDate}
          endDate={event.endDate}
          performances={event.performances}
        />
      ) : (
        <EventListLayout
          color={color}
          eventName={event.name}
          location={event.location}
          startDate={event.startDate}
          endDate={event.endDate}
          performances={event.performances}
        />
      )}
    </>
  );
};

export default SingleEventCard;
