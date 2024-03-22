"use client";

import { useEffect, useState } from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";


export default function CalendarWrapper({
  children,
  performancesCount,
  textColor,
  buttonLinkBoxBorderColor,
}) {


  useEffect(()=>{
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".calendar")) {
       document.querySelector(".calendarContent").classList.add("hidden");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  },[])

function reOpen(){
 const content= document.querySelector(".calendarContent");
 if(content.classList.contains("hidden")){
  content.classList.remove("hidden");
 }
}
  return (
    <>
      <div className="sm:hidden flex border-b mb-6  gap-2 w-[100%] !font-latofont-lato">
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
      </div>

      <dialog
        id="my_modal_5"
        className="modal modal-center sm:modal-center bg-[#2b313d] bg-opacity-90 z-[1050px]"
      >
        <div className="">
          <div className="dropdown left-10">{children}</div>
          <div className="flex justify-center mt-6 ">
            <form method="dialog">
              <button className="flex flex-row">
                <RxCrossCircled
                  size={24}
                  className="cursor-pointer  text-white"  
                />
                <span className=" ml-2 w-10 h-[50px] bg-transparent text-white  ">
                  CLOSE
                </span>
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <div className="w-[100%]">
        <div className="border-b mb-[25px] sm:block hidden mt-[20px] ">
          <div className="flex pb-[6px] ml-[10px] mb-[5px]">
            <div className="flex gap-2 pr-2 border-r slate-300 items-center pb-1 ">
              <span style={{ color: textColor }}>
                Upcoming Events ({performancesCount})
              </span>
            </div>
            <div className="ml-2" onClick={reOpen}>
              <div className="w-full">
                <details className="dropdown calendar">
                  <summary className="list-none ml-[10px] ">
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
          </div>
        </div>
      </div>
    </>
  );
}
