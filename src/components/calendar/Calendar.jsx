
"use client";
import { useState, useMemo, useCallback, use } from "react";
import { FaCalendarDays } from "react-icons/fa6";
import "./calendar.css";
import NextMonth from "../../../public/greater-than-symbol.png";
import PrevMonth from "../../../public/less-than-symbol.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

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

  const handleSelectDate = useCallback(
    (date) => {
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;

      const finalDate = year + "-" + month + "-" + day;
      router.push(`/?end_date=${finalDate}&limit=200&start_date=${finalDate}`);
      // console.log(finalDate);
    },
    [router]
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

  const handleMonthSearch = (month, year) => {
    let startDay = "01";
    let endDay = getNumberOfDays(month, year);

    month = month < 10 ? "0" + month : month;
    let startDate = year + "-" + month + "-" + startDay;
    let endDate = year + "-" + month + "-" + endDay;
    router.push(`/?end_date=${endDate}&limit=200&start_date=${startDate}`);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
  };

  return (
    <span className={`bg-white cal-calendar-container shadow-xl relative `} >
      <div className="cal-calendar-header">
        <div className="cal-calendar-navs">
          <p
            className="cal-nav-arrows"
            // onClick={() =>
            //   handleMonthSearch(
            //     currentMonthYear.month + 1,
            //     currentMonthYear.year
            //   )
            // }
          >
            <Image
              src={PrevMonth}
              className="h-[10px] w-[10px] "
              alt="Prev_month"
              onClick={goToPrevMonth}
            />
          </p>
          <p className="font-medium text-gray-700 select-none m-0">
            {`${monthsMap[currentMonthYear.month]} ${currentMonthYear.year}`}
          </p>
          <p
            className="cal-nav-arrows"
            // onClick={() =>
            //   handleMonthSearch(
            //     currentMonthYear.month + 1,
            //     currentMonthYear.year
            //   )
            // }
          >
            <Image
              src={NextMonth}
              className="h-[10px] w-[10px]"
              alt="Next_month"
              onClick={goToNextMonth}
            />
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

                        handleSelectDate(e);
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
