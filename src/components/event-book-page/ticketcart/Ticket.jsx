"use client"
import Image from "next/image";
import styles from "./Card.module.css";
import { useContext } from "react";
import { TicketContext } from "../EventBookPageContainer";
const Ticket = ({ ticket, onRemove }) => {
  let { symbol} = useContext(TicketContext);
  console.log(symbol);
  const handleRemoveClick = () => {
    onRemove(ticketNumber);
  };
  return (
    <div className={styles.ticket}>
      <div className="flex flex-row justify-between font-semibold text-sm ">
        <span>
          <span>{ticket.seat_key}</span> {ticket.section}{" "}
        </span>

        <Image
          width="16"
          height="12"
          src="https://img.icons8.com/material-sharp/24/828282/multiply.png"
          alt="multiply"
          onClick={handleRemoveClick}
          className="cursor-pointer"
        />
      </div>
      <div className="m-1 text-sm">
        <div className="flex justify-between mb-2">
          <span>{ticket.class}</span>
          {symbol}
          {ticket.price}
        </div>
        <div className="flex justify-between">
          <span>Total</span> $50.00
        </div>
      </div>
    </div>
  );
};

export default Ticket;
