import React from "react";
import SingleEventCard from "./SingleEventCard";

const MainPageEventList = ({ color }) => {
  const events = [
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
    <div className="w-full">
      {events.map((event) => (
        <SingleEventCard key={event.name} event={event} color={color} />
      ))}
    </div>
  );
};

export default MainPageEventList;