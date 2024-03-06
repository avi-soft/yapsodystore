import React from "react";
import Link from "next/link";

import { GiLaptop } from "react-icons/gi";

const SingleEventCard = ({ event }) => {
  const view = "list";

  return (
    <>
      {view === "grid" ? (
        <div className="mb-[20px] flex flex-col justify-between gap-3 rounded border-[1px] border-[#a593e0] bg-[#ffffff] px-[10px] py-[10px] w-[100%]">
          <div className="relative min-h-[1px] justify-center">
            <div className="h-[180px] flex-col pl-[5px] pr-[15px] text-center">
              <img
                src="https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg"
                className="h-[100%] min-w-[100%] rounded border-4 border-[#ffffff] bg-[#cccccc] object-cover shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]"
              ></img>
              <p className="absolute mt-[-80px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[75px] text-[15px] text-[rgba(51,51,51,0.5)]">
                {event.name}
              </p>
            </div>
          </div>
          <div className="relative min-h-[1px] px-[10px] text-[#566270]">
            <div className="mb-2">
              <span className="text-black">
                <p>{event.name}</p>
              </span>
              <span className="flex gap-2 text-[13px]">
                <span>
                  <GiLaptop className="size-5" />
                </span>
                <span>
                  <p>{event.location}</p>
                </span>
              </span>
            </div>
            <div className="text-[13px]">
              <span className="flex gap-1">
                <span>
                  <p>{event.startDate}</p>
                </span>
                <p>-</p>
                <span>
                  <p>{event.endDate}</p>
                </span>
              </span>
              <span>
                <p>({event.performances} Performances)</p>
              </span>
            </div>
          </div>
          <div className="relative mt-[42px] min-h-[1px] px-[20px] text-right w-[100%]">
            <div className="rounded border-[#a593e0] bg-[#a593e0] py-[6px] text-center">
              <Link href={"/"} className="cursor-pointer text-white">
                More Info
              </Link>
            </div>
          </div>
        </div>
      ) : (
<<<<<<< HEAD
        <div className="mb-[20px] flex justify-between rounded border-[1px] border-[#a593e0] bg-[#ffffff] px-[10px] py-[10px] max-md:flex-col max-md:gap-3">
=======
        <div className="mb-[20px] w-[100%] flex justify-between rounded border-[1px] border-[#a593e0] bg-[#ffffff] px-[10px] py-[10px]  max-md:flex-col max-md:gap-3">
>>>>>>> 09bf2594a3bc6b139508495c1ebfdf002e933aeb
          <div className="relative min-h-[1px] w-[33.33%] justify-center max-md:w-[100%]">
            <div className="h-[180px] flex-col pl-[5px] pr-[15px] text-center">
              <img
                src="https://yaptestaddon4.staging.yapsody.com/images/new_ci/styles/images/default-img.jpg"
                className="h-[100%] min-w-[100%] rounded border-4 border-[#ffffff] bg-[#cccccc] object-cover shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]"
              ></img>
              <p className="absolute mt-[-80px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[95px] text-[15px] text-[rgba(51,51,51,0.5)]">
                {event.name}
              </p>
            </div>
          </div>
          <div className="relative min-h-[1px] w-[33.33%] px-[10px] text-[#566270] max-md:w-[100%]">
            <div className="mb-2">
              <span className="text-black">
                <p>{event.name}</p>
              </span>
              <span className="flex gap-2 text-[13px]">
                <span>
                  <GiLaptop className="size-5" />
                </span>
                <span>
                  <p>{event.location}</p>
                </span>
              </span>
            </div>
            <div className="text-[13px]">
              <span className="flex gap-1">
                <span>
                  <p>{event.startDate}</p>
                </span>
                <p>-</p>
                <span>
                  <p>{event.endDate}</p>
                </span>
              </span>
              <span>
                <p>({event.performances} Performances)</p>
              </span>
            </div>
          </div>
          <div className="relative ml-[45px] mr-[-40px] mt-[72px] min-h-[1px] w-[33.33%] px-[25px] text-right max-md:w-[100%] max-md:mt-[60px]">
            <div className="w-[70%] rounded border-[#a593e0] bg-[#a593e0] py-[6px] text-center">
              <Link href={"/"} className="cursor-pointer text-white">
                More Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleEventCard;
