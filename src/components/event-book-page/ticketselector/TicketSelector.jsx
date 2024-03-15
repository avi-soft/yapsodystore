"use client"

import React from "react";
import Script from "next/script";

import "./style.css";
import styles from "@/components/event-book-page/ticketcart/Card.module.css";
import TicketDropdown from "../ticketcart/Ticketdropdown";


const TicketSelector = ({ selectedTickets, handleTicketChange }) => {


  return (
    <div className="page-divide pl-2">
      <Script
        src="https://kit.fontawesome.com/8d4b434c6d.js"
        crossorigin="anonymous"
      />
      <div >
        <div className="getticket-main  ">
          <div className="mainbox-event md:block hidden border-solid border-b-[1px] py-2 pb-6  ">


            <div className="divide-main ">

              <div className="box mr-[20px]">
                <div className="diagonal">MULTI Events</div>
              </div>
              <div className="event-name">MULTI Events</div>
            </div>
            <div className="get-time pt-4 ">
              <div className="mr-4 font-[400] text-base pb-2 ">
                <i className="fa-solid fa-laptop"></i>
                <span className="ml-3">Asia/Calcutta</span>
              </div>
              <div className="font-[400] text-base">
                <i className="fa-solid fa-clock" ></i>
                <span className="ml-3">2024-04-19 17:00</span>
              </div>
<div className="border-b-[1px] md:hidden z-50"></div>
            </div>
          </div>
        </div>
        <div className={`select-ticket ${styles.event} `}>
          <div className="part">
            <div className="upper-part">Adult </div>
          </div>
          <div className="part">
            <div className="mid-part">
              <div className="dollar">$50.00</div>
            </div>
          </div>
          <div className=" flex lg:w-[50vw] md:w-[38vw]  max-lg:w-[50vw] xl:w-[61vw] max-sm:w-[85vw] md:pr-[100px]">
            <div className="lower-part flex flex-row items-center w-full md:w-auto">
              <label htmlFor="quantity" className="mr-2">Quantity</label>
              <TicketDropdown value={selectedTickets} onChange={handleTicketChange} />
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default TicketSelector;
