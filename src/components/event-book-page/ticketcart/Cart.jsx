"use client";

import React, { useEffect } from "react";
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
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".seats-content")) {
        document.getElementById("my_modal_ticket").close();
      }
    };

    const closeOnEscape = (e) => {
      if (e.key === "Escape") {
        document.getElementById("my_modal_ticket").close();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
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
          className="btn  bg-purple-700  text-white text-xl focus-visible:outline-none rounded-none fixed bottom-0  left-0 right-0 mt-[10px] mx-[15px]"
          onClick={() => document.getElementById("my_modal_ticket").showModal()}
        >
          REVIEW TICKETS
        </button>
        <dialog id="my_modal_ticket" className="modal justify-items-end ">
          <form
            method="dialog"
            className="modal-backdrop z-10 self-auto justify-self-auto"
          >
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle absolute right-4 top-2 focus-visible:outline-none bg-opacity-0 border-0 hover:bg-transparent hover:border-transparent">
              <IoIosCloseCircleOutline
                size={30}
                className="text-[#232323] font-light"
              />
            </button>
          </form>
          <div className="modal-box seats-content min-h-screen w-[400px] rounded-none p-0 overflow-hidden ">
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
