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
<<<<<<< HEAD
        <SingleEventCard key={event.startDate} event={event} />
=======
        <SingleEventCard key={event.name} event={event} />
>>>>>>> 09bf2594a3bc6b139508495c1ebfdf002e933aeb
      ))}
    </div>
  );
};

export default EventList;
