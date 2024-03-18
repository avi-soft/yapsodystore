import React from "react";
import SingleEventCard from "./SingleEventCard";

const MainPageEventList = ({
  events,
  buttonLinkBoxBorderColor,
  boxBackgroundColor,
  headingColor,
  textColor,
}) => {
  const view = "grid1";

  return (
    <div
      className={`w-full ${
        view === "grid"
          ? "grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1"
          : ""
      }`}
    >
      {events
        .sort(
          (a, b) =>
            new Date(a.performance_start_time) -
            new Date(b.performance_start_time)
        )
        .map((event) => (
          <SingleEventCard
            key={event.id}
            event={event}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            headingColor={headingColor}
            textColor={textColor}
            boxBackgroundColor={boxBackgroundColor}
          />
        ))}
    </div>
  );
};

export default MainPageEventList;
