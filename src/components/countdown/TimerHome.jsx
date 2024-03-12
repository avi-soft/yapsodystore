import React, { useState, useEffect } from 'react';
import { LuShieldAlert } from "react-icons/lu";
import './App.css';

const TimerHome  = ({ ticketsBooked }) => {
  const [timer, setTimer] = useState(60 * 10); 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="outer">
      <div className="time-counter">{formatTime(timer)}</div>
      <div className="message">
      <span className="booking-text">minute(s) left to complete booking</span> <br />
      <span className="ticket-text">{ticketsBooked} ticket(s) reserved</span>
      </div>
      <div className="icon">
      <LuShieldAlert size={30}/>
      </div>
    </div>
  );
};

export default TimerHome ;