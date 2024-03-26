"use client";

import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn  bg-purple-700  text-white text-xl w-full rounded-none fixed bottom-0  left-0 right-0"
          onClick={() => document.getElementById("my_modal_ticket").showModal()}
        >
          REVIEW TICKETS
        </button>
        <dialog id="my_modal_ticket" className="modal justify-items-end ">
          <form method="dialog" className="modal-backdrop z-10">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle absolute right-4 top-2 bg-opacity-0 border-0">
              <IoIosCloseCircleOutline size={30} />
            </button>
          </form>
          <div className="modal-box min-h-screen w-[412px] rounded-none p-0 ">
            <CartContent
              tickets={tickets}
              selectedTickets={selectedTickets}
              handleRemoveTicket={handleRemoveTicket}
              seatsTickets={seatsTickets}
              handleRemoveSeat={handleRemoveSeat}
              type={type}
            />
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Cart;
