"use client";

import { useEffect, useState } from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { goToEvent } from "@/helpers/common";

export default function CalendarWrapper({
  children,
  performancesCount,
  textColor,
  buttonLinkBoxBorderColor,
  searchParams,
  monthsMap,
  isHome,
  eventData,
  eventId,
}) {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".calendar")) {
        document.querySelector(".calendarContent").classList.add("hidden");
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function reOpen() {
    const content = document.querySelector(".calendarContent");
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
    }
  }
  const router = useRouter();
  const start_date =
    typeof searchParams.start_date === "string"
      ? searchParams.start_date
      : undefined;

  const end_date =
    typeof searchParams.end_date === "string"
      ? searchParams.end_date
      : undefined;

  const clearSearch = useCallback(() => {
    isHome
      ? router.push(`/`)
      : router.push(goToEvent(eventId, eventData.event_title1));
  }, [router]);

  return (
    <>
      <div className="sm:hidden flex border-b mb-6 gap-2 w-[100%] !font-latofont-lato">
        <div className="flex !font-lato ">
          <div className="flex gap-2 pr-2 border-r  !font-lato slate-300  ">
            <span style={{ color: textColor }}>
              Upcoming Events ({performancesCount})
            </span>
          </div>
        </div>
        <div>
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <div tabIndex={0} role="button">
              <FaCalendarAlt
                color={buttonLinkBoxBorderColor}
                className="size-6 cursor-pointer"
              />
            </div>
          </button>
        </div>
        {isHome
          ? start_date &&
            end_date &&
            start_date !== end_date && (
              <div
                className="pl-1 mt-1 flex cursor-pointer"
                onClick={clearSearch}
                style={{ color: textColor }}
              >
                {monthsMap[parseInt(start_date.substring(5, 7)) - 1]}{" "}
                {start_date.substring(0, 4)}
                {<RxCrossCircled size={20} />}
              </div>
            )
          : start_date &&
            end_date && (
              <div
                className="pl-1 mt-1 flex cursor-pointer"
                onClick={clearSearch}
                style={{ color: textColor }}
              >
                {monthsMap[parseInt(start_date.substring(5, 7)) - 1]}{" "}
                {start_date.substring(0, 4)}
                {<RxCrossCircled size={20} />}
              </div>
            )}
      </div>

      <dialog
        id="my_modal_5"
        className="modal modal-center sm:modal-center bg-[#2b313d] bg-opacity-90 z-[1050px]"
      >
        <div className="">
          <div className="dropdown">{children}</div>
          <div className="flex justify-center mt-6 ">
            <form method="dialog">
              <div className="flex flex-row items-center ">
                <RxCrossCircled
                  size={24}
                  className="cursor-pointer  text-white"
                />
                <button className=" ml-2 w-10 h-[50px] bg-transparent text-white items-center ">
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>

      <div className="w-[100%]">
        <div className="border-b mb-6 sm:block hidden  ">
          <div className="flex pb-[8px]">
            <div className="flex gap-2 pr-2 border-r slate-300 ">
              <span style={{ color: textColor }}>
                Upcoming Events ({performancesCount})
              </span>
            </div>
            <div className="ml-2" onClick={reOpen}>
              <div className="w-full">
                <details className="dropdown calendar">
                  <summary className="list-none ">
                    {" "}
                    <FaCalendarAlt
                      color={buttonLinkBoxBorderColor}
                      className="size-6 cursor-pointer"
                    />
                  </summary>
                  <ul className="p-2 calendarContent shadow menu dropdown-content z-[1]  rounded-box w-52">
                    {children}
                  </ul>
                </details>
              </div>
            </div>
            {isHome
              ? start_date &&
                end_date &&
                start_date !== end_date && (
                  <div
                    className="pl-1 mt-1 flex cursor-pointer"
                    onClick={clearSearch}
                    style={{ color: textColor }}
                  >
                    {monthsMap[parseInt(start_date.substring(5, 7)) - 1]}{" "}
                    {start_date.substring(0, 4)}
                    {<RxCrossCircled size={20} />}
                  </div>
                )
              : start_date &&
                end_date && (
                  <div
                    className="pl-1 mt-1 flex cursor-pointer"
                    onClick={clearSearch}
                    style={{ color: textColor }}
                  >
                    {monthsMap[parseInt(start_date.substring(5, 7)) - 1]}{" "}
                    {start_date.substring(0, 4)}
                    {<RxCrossCircled size={20} />}
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
}
