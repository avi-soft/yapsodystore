"use client";

import { FaCalendarAlt } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function CalendarWrapper({
  children,
  performancesCount,
  textColor,
  buttonLinkBoxBorderColor,
  searchParams,
}) {
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
    router.push(`/`);
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
            <div className="ml-2">
              <div className="w-full">
                <div className="dropdown">
                  <div tabIndex={0} role="button">
                    <FaCalendarAlt
                      color={buttonLinkBoxBorderColor}
                      className="size-6 cursor-pointer"
                    />
                  </div>

                  <div tabIndex={0} className="dropdown-content z-[100]">
                    {children}
                  </div>
                </div>
              </div>
            </div>
            {start_date && end_date && (
              <div>
                <button
                  onClick={clearSearch}
                  className="cursor-pointer text-white"
                >
                  <p>clear Search</p>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
