import React from "react";
import Button from "@/ui/Button";
import SaleStart from "./SaleStart";

export default function TicketSection({
  eventid,
  dateid,
  access,
  ticketPrice,
  color,
  textColor,
  symbol,
}) {
  return !access ? (
    <div className="relative ml-[30px] min-h-[1px] w-fit pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px]">
      <div className="relative mt-[10px] inline-block w-[100%]">
        <div className="mt-[5px]  w-[100%]">
          <Button
            styles={{ padding: "10px 28px" }}
            color={color}
            to={`/event/book/${eventid}/${dateid}`}
          >
            Get Tickets
          </Button>
        </div>

        <SaleStart textColor={textColor} symbol={symbol} price={ticketPrice}>
          Starting From
        </SaleStart>
      </div>
    </div>
  ) : (
    <div className="relative ml-[30px] min-h-[1px] w-fit pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px]">
      <div className=" mt-[20px] inline-block w-[100%]">
        <div className="flex flex-col items-center">
          <div className="mt-[-40px] w-[100%]">
            <input
              type="text"
              placeholder="Enter a Code"
              className="text-[14px] h-[33px] w-[125px] rounded-[3px] border-[2px] border-solid bg-[#ffffff] text-center shadow-[0px_1px_1px_rgba(0,0,0,0,0.75)] max max-md:w-[95%]"
              required
            ></input>
          </div>
          <div
            style={{ borderColor: color }}
            className="border w-0 h-[8px]"
          ></div>
          <div className="text-center w-[100%]">
            <Button
              styles={{ padding: "10px 28px" }}
              color={color}
              to={`/event/book/${eventid}/${dateid}`}
            >
              Get Access
            </Button>
          </div>
        </div>

        <SaleStart textColor={textColor} symbol={symbol} price={ticketPrice}>
          Starting From
        </SaleStart>
      </div>
    </div>
  );
}
