
"use client";
import { useState, useMemo } from "react";

import "./calendar.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const monthsMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const getNumberOfDays = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const generateDates = (month, year) => {
  const numOfDays = getNumberOfDays(month, year);

  const dates = new Array(numOfDays).fill(0).map((_, i) => {
    return new Date(year, month, i + 1);
  });

  if (dates[0].getDay() === 0) return dates;

  const buffer = new Array(dates[0].getDay()).fill(0);
  return [...buffer, ...dates];
};

const Calendar = ({
  children,
  performancesCount,
  highlighted,
  activeColorCode,
  dateClickHandler = (date) => {
    console.log("Date clicked", date);
  },
  isHome = false,
}) => {
  const initialSelectedDate = null;

  const [selectedDate, setSelectedDate] = useState(
    initialSelectedDate || new Date(1996, 3, 2)
  );
  const [currentMonthYear, setCurrentMonthYear] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  useMemo(
    () => dateClickHandler(initialSelectedDate || new Date()),
    [initialSelectedDate]
  );
  const isHighlighted = (date) =>
    highlighted.map((d) => d.toDateString()).includes(date.toDateString());

  const goToPrevMonth = () => {
    setCurrentMonthYear((prev) => ({
      ...prev,
      month: prev.month !== 0 ? prev.month - 1 : 11,
      year: prev.month === 0 ? prev.year - 1 : prev.year,
    }));
  };

  const goToNextMonth = () => {
    setCurrentMonthYear((prev) => ({
      ...prev,
      month: prev.month !== 11 ? prev.month + 1 : 0,
      year: prev.month === 11 ? prev.year + 1 : prev.year,
    }));
  };

  return (
    <span className={`bg-white cal-calendar-container shadow-xl relative `} >
      <div className="cal-calendar-header">
        <div className="cal-calendar-navs">
          <p className="cal-nav-arrows" onClick={goToPrevMonth}>
            <IoIosArrowBack size={14} color="gray" />
          </p>
          <p className="font-medium text-gray-700 select-none m-0">
            {`${monthsMap[currentMonthYear.month]} ${currentMonthYear.year}`}
          </p>
          <p className="cal-nav-arrows" onClick={goToNextMonth}>
            <IoIosArrowForward size={14} color="gray" />
          </p>
        </div>
      </div>
      <div className="cal-calendar-days">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d, index) => (
          <p key={index} className="cal-day">
            {d}
          </p>
        ))}
      </div>
      <div className="cal-calendar-body">
        {generateDates(currentMonthYear.month, currentMonthYear.year).map(
          (e, index) => {
            if (e === 0) {
              return (
                <p key={index} className="cal-filler">
                  {e}
                </p>
              );
            }

            return (
              <p
                key={index}
                className={`cal-date ${
                  selectedDate.toDateString() === e.toDateString() ||
                  isHighlighted(e)
                    ? "cal-active-date"
                    : "cal-no-cursor"
                }`}
                style={
                  (selectedDate.toDateString() === e.toDateString() ||
                    isHighlighted(e)) &&
                  !isHome
                    ? { backgroundColor: `${activeColorCode}`, color: "white" }
                    : (selectedDate.toDateString() === e.toDateString() ||
                        isHighlighted(e)) &&
                      isHome
                    ? { color: "black" }
                    : null
                }
                onClick={
                  isHighlighted(e)
                    ? () => {
                        setSelectedDate(e);
                        dateClickHandler(e);
                      }
                    : null
                }
              >
                {e.getDate()}
              </p>
            );
          }
        )}
      </div>
    </span>
  );
};

export default Calendar;
