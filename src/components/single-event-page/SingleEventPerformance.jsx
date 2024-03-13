import LoadingIcon from "@/app/loadingg";
import SingleEvent from "./SingleEvent";
import { Suspense } from "react";

const SingleEventPerformance = ({ color }) => {
  const events = [
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
      ticketPrice: 150.0,
      access: "yes",
    },
    {
      date: "2022-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 250.0,
      access: "No",
    },
    {
      date: "2024-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 520.0,
      access: "yes",
    },
    {
      date: "2024-04-8",
      time: "16:00",
      timeRemaining: "40 Days 1 hours",
      ticketPrice: 540.0,
      access: "No",
    },
  ];

  return (
    <Suspense fallback={<LoadingIcon />}>
      <div className="mt-[18px]">
        {events.map((event) => (
          <SingleEvent key={event.date} event={event} color={color} />
        ))}
      </div>
    </Suspense>
  );
};

export default SingleEventPerformance;
