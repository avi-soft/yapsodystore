import React from "react";
import SingleEventCard from "./SingleEventCard";

const EventList = () => {
  const Events = [
    {
      name: "MULTI Events",
      location: "Asia/Calcutta",
      startDate: "2024-04-8",
      endDate: "2024-04-12",
      time: "16:00",
      performances: 5,
    },
    {
      name: "MULTI Events",
      location: "Asia/Calcutta",
      startDate: "2024-04-9",
      endDate: "2024-04-12",
      time: "16:00",
      performances: 5,
    },
    {
      name: "MULTI Events",
      location: "Asia/Calcutta",
      startDate: "2024-04-10",
      endDate: "2024-04-12",
      time: "16:00",
      performances: 5,
    },
    {
      name: "MULTI Events",
      location: "Asia/Calcutta",
      startDate: "2024-05-8",
      endDate: "2024-04-12",
      time: "16:00",
      performances: 5,
    },
    {
      name: "MULTI Events",
      location: "Asia/Calcutta",
      startDate: "2024-08-8",
      endDate: "2024-04-12",
      time: "16:00",
      performances: 5,
    },
  ];

  return (
    <div>
      {Events.map((event) => (
        <SingleEventCard key={event.startDate} event={event} />
      ))}
    </div>
  );
};

export default EventList;
