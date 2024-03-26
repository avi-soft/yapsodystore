"use client";

import React from "react";

import CartContent from "./CartContent";

const Cart = ({
  tickets,
  selectedTickets,
  handleRemoveTicket,
  seatsTickets,
  handleRemoveSeat,
  type,
}) => {
  return (
    <>
      <div className=" md:block hidden ">
        <CartContent
          tickets={tickets}
          selectedTickets={selectedTickets}
          handleRemoveTicket={handleRemoveTicket}
          seatsTickets={seatsTickets}
          handleRemoveSeat={handleRemoveSeat}
          type={type}
        />
      </div>

      {/* Mobile view */}
      <div className="drawer drawer-end md:hidden">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn  bg-purple-700  text-white text-xl w-full rounded-none fixed bottom-0  left-0 right-0 "
          >
            REVIEW TICKETS
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-[410px] min-h-full bg-base-200 text-base-content">
            <li>
              <CartContent
                tickets={tickets}
                selectedTickets={selectedTickets}
                handleRemoveTicket={handleRemoveTicket}
                seatsTickets={seatsTickets}
                handleRemoveSeat={handleRemoveSeat}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
