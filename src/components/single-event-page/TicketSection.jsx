import React from "react";
import Button from "@/ui/Button";
import SaleStart from "./SaleStart";

export default function TicketSection({
  access,
  ticketPrice,
  color,
  textColor,
}) {
  return !access ? (
    <div className="relative ml-[30px] min-h-[1px] w-[33.33%] pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px] ">
      <div className="relative mt-[10px] inline-block w-[100%]">
        <div className="mt-[5px] text-center w-[100%]">
          <Button color={color} to="/booking/payment">
            Get Tickets
          </Button>
        </div>
        <SaleStart textColor={textColor} price={ticketPrice}>
          Starting From
        </SaleStart>
      </div>
    </div>
  ) : (
    <div className="relative flex felx-col ml-[30px] min-h-[1px] w-[33.33%] pl-[10px] pr-[10px] text-center max-md:w-[100%] max-md:ml-[0px] max-md:mt-10">
      <div className=" mt-[20px] inline-block w-[100%]">
        <div className="mt-[-40px] w-[100%]">
          <input
            type="text"
            placeholder="Enter a Code"
            className="h-[33px] w-[100%] rounded-[3px] border-[2px] border-solid bg-[#ffffff] text-center shadow-[0px_1px_1px_rgba(0,0,0,0,0.75)] max max-md:w-[95%]"
            required
          ></input>
        </div>
        <div className="mt-[18px] text-center w-[100%]">
        <Button color={color} to="/booking/payment">
            Get Access
          </Button>
        </div>

        <SaleStart textColor={textColor} price={ticketPrice}>
          Starting From
        </SaleStart>
      </div>
    </div>
  );
}
