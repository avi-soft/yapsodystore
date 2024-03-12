import React, { useState, useEffect } from 'react';
import './App.css'; 

const TimerCheckout = () => {
  const totalTime = 10 * 60;
  const [timeRemaining, setTimeRemaining] = useState(totalTime);

  useEffect(() => {
    let timerInterval;

    if (timeRemaining > 0) {
      timerInterval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }

  const calculateProgress = () => {
    return ((totalTime - timeRemaining) / totalTime) * 360; 
  }

  return (
    <div className="desktop-timer">
      <img
        className="progress-ring"
        src="https://images.yapsody.com/yapsody/assets/images/new_ci/styles/images/progress-circle.png"
        alt=""
        width="32"
        height="32"

      />
      <div className="time">{formatTime(timeRemaining)}</div>
    </div>
  );
};

export default TimerCheckout;