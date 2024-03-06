import React from "react";
import SingleEvent from "./SingleEvent";

const Events = () => {
  const Events = [
    {
      date: "2024-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 50.015,
      access: "yes",
    },
    {
      date: "2023-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 150.00,
      access: "yes",
    },
    {
      date: "2022-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 250.00,
      access: "No",
    },
    {
      date: "2024-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 520.00,
      access: "yes",
    },
    {
      date: "2024-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 540.00,
      access: "No",
    },
  ];

  return (
    <div>
      {Events.map((event) => (
        <SingleEvent key={event.date} Event={event} />
      ))}
    </div>
  );
};

export default Events;
