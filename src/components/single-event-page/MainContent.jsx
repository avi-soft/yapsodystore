"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import Events from "./Events";
import Calendar from "../calendar/calendar";
import { GiLaptop } from "react-icons/gi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const MainContent = () => {
  const event = {
    name: "MULTI Events",
    startdate: "2024-04-08",
    endDate: "2024-04-20",
    performances: 5,
  };
  const [openCalender, setOpenCalender] = useState(false);
  return (
    <div className="mb-[40px] ml-[70px] mt-16 h-screen flex-1 overflow-auto px-[10px] pb-[30px] scrollbar-hide">
      <section className="mb-8">
        <h1 className="mb-[20px] text-[3.375em] font-normal ">{event.name}</h1>
        <h2 className="m-[15px] mt-[5px] text-[2em] font-normal"></h2>
        <h3 className="m-[15px] mt-[5px] text-[1.7em] font-normal"></h3>

        <p className="relative flex gap-4 text-[1em] font-[500] tracking-wider text-[var(--text-primary)]">
          <span>
            <GiLaptop className="mt-1.5 size-6 align-middle" />
          </span>
          <span className="inline-block w-[80%] align-middle">
            (GMT+0530) India Time
          </span>
        </p>
      </section>

      <section className="fixed bottom-[64%] right-0 block rounded bg-[#ffffff] p-[12px] text-[30px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.335)]">
        <ul>
          <li className="pb-2">
            <Link href={"/"}>
              <FaFacebookSquare className="text-[#3b5998]" />
            </Link>
          </li>
          <li className="pb-2">
            <Link href={"/"}>
              <FaTwitter className="text-[#4099ff]" />
            </Link>
          </li>
          <li className="pb-2">
            <Link href={"/"}>
              <FaPinterest className="text-[#C8232C]" />
            </Link>
          </li>
          <li className="pb-2">
            <Link href={"/"}>
              <IoShareSocial className="text-[#c0c0c0]" />
            </Link>
          </li>
        </ul>
      </section>
      <div className="px-[10px] align-top">
        <div className="border-b">
          <div className="flex">
            <div className="flex gap-2 border-slate-300">
              <span>Upcoming Events</span>
              <span className="h-8 border-r border-slate-300 pr-4">
                ({event.performances})
              </span>
            </div>
            <div className="ml-2">
              <span>
                <FaCalendarAlt
                  className="size-6 text-[var(--highlightColor)] cursor-pointer"
                  onClick={() => setOpenCalender(!openCalender)}
                />
                {openCalender && (
                  <Calendar
                    highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
                    activeColorCode={"blue"}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[18px]">
          <Events />
        </div>
        <div className="flex gap-4 max-sm:block">
          <span className="max-sm:mt-[10px]">
            <Support size="size-6" color="var(--highlightColor)" />
          </span>
          <span className="max-sm:mt-[10px]">
            <ContactPresenter size="size-6" color="var(--highlightColor)" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
