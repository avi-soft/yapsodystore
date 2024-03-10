import React from "react";
import Image from "next/image";
import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import Button from "@/ui/Button";

const SideBarEventPage = ({ color }) => {
  const event = {
    name: "MULTI Events",
    startdate: "2024-04-08",
    endDate: "2024-04-20",
    performances: 5,
  };
  return (
    <div className="pl-0 ml-0  mt-20 block w-[30%] px-[10px] pb-[30px] pr-[20px] max-xl:w-[100%] xl:sticky xl:top-0">
      <div className="mb-15px h-[180px]  z-[10]">
        <Image
          src="/default-img.jpg"
          alt="image"
          width={300}
          height={100}
          className="mb-[30px] h-[180px] min-w-[100%] rounded border-4 border-[#ffffff] bg-[#cccccc] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.3)]"
        ></Image>
        <p className="absolute mt-[-85px] max-w-[100%] rotate-[-30deg] whitespace-nowrap pl-[95px] text-[rgba(51,51,51,0.5)] max-xl:ml-[100px] max-xl:mt-[-130px] max-xl:rotate-[]">
          {event.name}
        </p>
      </div>
      <div className="block ">
        <div className="block">
          <ul className=" m-0 mt-[20px] block max-w-[100%] list-none p-0 text-[var(--text-primary)]">
            <li className="m-0 list-item w-[100%] py-[12px]">
              <div className="block overflow-hidden tracking-wider text-[#2e2294e]">
                <div className="flex gap-2">
                  <span>From</span>
                  <span>{event.startdate}</span>
                </div>
                <div className="flex gap-2">
                  <span>to</span>
                  <span>{event.endDate}</span>
                </div>
                <span>({event.performances} Performances)</span>
              </div>
            </li>
            <li className="m-0 list-item w-[100%] border-b border-[#c0c0c0] py-[12px]">
              <Button width={"100%"} color={color} to={"/"}>
                Get Ticket
              </Button>
            </li>
            <li className="m-0 list-item w-[100%] border-b border-[#c0c0c0] py-[12px]">
              <Button width={"100%"} color={color} to={"/"}>
                Get Direction
              </Button>
            </li>
            <li className="m-0 w-[100%] border-b border-[#c0c0c0] py-[12px]">
              <Support
                size="size-6 "
                color="var(--text-primary)"
                position="top"
              />
            </li>
            <li className="m-0 w-[100%] py-[12px]">
              <ContactPresenter size="size-6 " color="var(--text-primary)" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarEventPage;
