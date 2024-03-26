import Image from "next/image";
import React from "react";

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
