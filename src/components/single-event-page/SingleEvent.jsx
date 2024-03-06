import React from "react";
import { GiLaptop } from "react-icons/gi";
import Link from "next/link";

const SingleEvent = ({ Event }) => {

  return (
    <div className="mb-[20px] flex justify-between rounded border-[1px] border-[#a593e0] bg-[#ffffff] px-[20px] py-[30px] max-md:block">
      <div className="relative min-h-[1px] w-[33.33%] border-r pl-[10px] pr-[10px] max-md:w-[100%] max-md:border-r-0 ">
        <h4 className="mb-[8px] mt-[17px] text-center text-[22px] font-[500] text-[#21262]">
          {Event.date}
        </h4>
        <p className="mb-[15px] text-center text-[16px] font-[500] text-[var(--text-primary)]">
          {Event.time}
        </p>
      </div>
      <div className="w-[33.33%] pl-[35px] text-center max-md:w-[100%] max-md:ml-[-20px]">
        <div>
          <p className="mb-[3px] mt-[20px] text-[12px] font-normal text-[var(--text-primary)]">
            SALE ENDS
          </p>
          <strong className="text-center text-[18px] font-[500] text-[var(--text-primary)]">
            {Event.timeRemaining}
          </strong>
        </div>
      </div>
      {Event.access === "yes" ? (
        <div className="relative ml-[30px] min-h-[1px] w-[33.33%] pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px] ">
          <div className="relative mt-[10px] inline-block w-[100%]">
            <div className="mt-[5px] text-center">
              <Link
                href={"/"}
                className="mb-0 inline-block rounded-[3px] border-[var(--highlightColor)] bg-[var(--highlightColor)] px-[28px] py-[10px] text-center text-[1em] text-[#ffffff]"
              >
                <span>Get Tickets</span>
              </Link>
            </div>
            <div className="text-[var(--text-primary] text-center text-[14px]">
              <span>
                <p>Starting From</p>
              </span>
              <span>
                <p>$ {Event.ticketPrice}</p>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative ml-[30px] min-h-[1px] w-[33.33%] pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px] max-md:mt-10">
          <div className="relative mt-[20px] inline-block w-[100%]">
            <div className="mt-[-40px] w-[100%]">
              {/* <div className="mb-0"> */}
              <input
                type="text"
                placeholder="Enter a Code"
                className="relative h-[33px] w-[125px] rounded-[3px] border-[2px] border-solid bg-[#ffffff] text-center shadow-[0px_1px_1px_rgba(0,0,0,0,0.75)] max max-md:w-[95%]"
                required
              ></input>
              {/* </div> */}
            </div>
            <div className="mt-[18px] text-center">
              <Link
                href={"/"}
                className="mb-0 inline-block rounded-[3px] border-[var(--highlightColor)] bg-[var(--highlightColor)] px-[28px] py-[10px] text-center text-[1em] text-[#ffffff]"
              >
                <span>Get Access</span>
              </Link>
            </div>
            <div className="text-[var(--text-primary] text-center text-[14px]">
              <span>
                <p>Starting From</p>
              </span>
              <span>
                <p>$ {Event.ticketPrice}</p>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleEvent;
