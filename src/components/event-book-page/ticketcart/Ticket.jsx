import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./Card.module.css";

const Ticket = ({ ticketNumber, seat, id, onRemove }) => {
  const handleRemoveClick = () => {
    onRemove(ticketNumber, id);
  };

  return (
    <div className={styles.ticket}>
      <div className="flex flex-row justify-between font-semibold text-sm ">
        <span>
          <span>{ticketNumber}</span> {seat === null && "General Admission"}
        </span>

        <FaTimes
          size={16}
          onClick={handleRemoveClick}
          className="cursor-pointer text-[#d0d8e5] hover:text-[#afbdd3] "
        />
      </div>
      <div className="m-1 text-sm">
        {typeof seat === "undefined" ? (
          <>
            <div className="flex justify-between mb-2">
              <span>Adult</span> $50.00
            </div>
            <div className="flex justify-between">
              <span>Total</span> $50.00
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between mb-2">
              <span>{seat.seatParent}</span>{" "}
              {seat.seatCurrency + seat.seatPrice}
            </div>
            <div className="flex justify-between">
              <span>Total</span> {seat.seatCurrency + seat.seatPrice}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Ticket;
