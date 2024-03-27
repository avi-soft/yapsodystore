import Image from "next/image";
import styles from "./Card.module.css";
import { useContext } from "react";
import { TicketContext } from "../EventBookPageContainer";
import { TiTimes } from "react-icons/ti";
const Ticket = ({ ticket, onRemove, venueData }) => {
  console.log(ticket);
  const { symbol } = venueData;
  const handleRemoveClick = (seat_key,class_id) => {
    onRemove(seat_key,class_id);
  };
  return (
    <div className={styles.ticket}>
      <div className="flex flex-row justify-between font-semibold text-sm mb-[5px] pt-[5px]">
        <span>
          <span>{ticket.seat_key}</span> {ticket.section}{" "}
        </span>
        <TiTimes
          color={"rgb(195, 201, 210)"}
          className="size-5"
          onClick={()=>handleRemoveClick(ticket.seat_key,ticket.class_id)}
        />
      </div>
      <div className="">
        <div className="flex justify-between mb-[8px]">
          <span className="text-[12px] font-normal tracking-wider text-left text-gray-500">
            {ticket.class}
          </span>
          <span className="text-[12px] font-normal tracking-wider text-left text-gray-500">
            {symbol}
            {ticket.price}
            {".00"}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {ticket.surcharge > 0 && (
            <div className="flex justify-between text-[13px] font-normal tracking-[.4px] text-[#717171]">
              <span>Surcharges</span>
              <span className="tracking-[.5px]">
                + {symbol}
                {ticket.surcharge}
              </span>
            </div>
          )}
          <div className="flex justify-between text-[13px] tracking-[.7px] text-[#717171]">
            <span>Total</span>{" "}
            <span className="tracking-[.5px]">
              {symbol}
              {ticket.tix_total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
