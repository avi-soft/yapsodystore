import React from "react";
import SingleEventCard from "./SingleEventCard";

const MainPageEventList = ({
  events,
  buttonLinkBoxBorderColor,
  boxBackgroundColor,
  headingColor,
  textColor,
}) => {
  // const events = [
  //   {
  //     name: "MULTI Events",
  //     location: "Asia/Calcutta",
  //     startDate: "2024-04-8",
  //     endDate: "2024-04-12",
  //     time: "16:00",
  //     performances: 5,
  //   },
  //   {
  //     name: "MULTI Events",
  //     location: "Asia/Calcutta",
  //     startDate: "2024-04-9",
  //     endDate: "2024-04-12",
  //     time: "16:00",
  //     performances: 5,
  //   },
  //   {
  //     name: "MULTI Events",
  //     location: "Asia/Calcutta",
  //     startDate: "2024-04-10",
  //     endDate: "2024-04-12",
  //     time: "16:00",
  //     performances: 5,
  //   },
  //   {
  //     name: "MULTI Events",
  //     location: "Asia/Calcutta",
  //     startDate: "2024-05-8",
  //     endDate: "2024-04-12",
  //     time: "16:00",
  //     performances: 5,
  //   },
  //   {
  //     name: "MULTI Events",
  //     location: "Asia/Calcutta",
  //     startDate: "2024-08-8",
  //     endDate: "2024-04-12",
  //     time: "16:00",
  //     performances: 5,
  //   },
  // ];
  const view = "grid1";

  return (
    <div className={`w-full ${view === "grid" ? "grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1" : ""}`}>
      {events.map((event) => (
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
