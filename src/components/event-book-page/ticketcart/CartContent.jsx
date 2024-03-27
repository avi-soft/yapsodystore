import React from 'react'
import Image from "next/image";
import ticket from "@/../public/assets/icons/ticket.png";
import styles from "./Card.module.css";
import Ticket from "./Ticket";
import { IoIosCloseCircleOutline } from "react-icons/io";



const CartContent = ({tickets,selectedTickets,handleRemoveTicket}) => {
    
  const tax = selectedTickets * 0.5;
  const tax3 = selectedTickets * 1.0;
  const ticketPrice = (selectedTickets * 50) + tax + tax3;
  return (
    <div >
       <div className={styles.head}>
      <div className={`flex flex-col rounded-md  overflow-hidden  ${styles.ticketContainer}`}>
        <div className="w-full flex items-centermb-0 border-b">
          <div className='ml-2 flex items-center  '>
            <Image
              width="32"
              height="32"
              src="https://img.icons8.com/material-rounded/48/000000/two-tickets.png"
              className="inline-block"
              alt="two-tickets"
            />
            <span className="text-[17px] m-3 ">Tickets Selected <span> {selectedTickets >= 1 && (
        <span> ({selectedTickets})</span>
      )} </span> </span>
            <span className='md:hidden block ml-[140px]'><IoIosCloseCircleOutline size={30}/></span>
          </div>
        </div>

        <div className={styles.div}>
          {selectedTickets === 0 && (
            <>
              <Image src={ticket} alt="ticket image" />
              <div>Please Select tickets</div>
            </>
          )}
        </div>

        <div className="flex flex-col gap-2  overflow-auto">
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.seat_key}
              ticket={ticket}
              onRemove={() => handleRemoveTicket(ticket.ticketNumber)}
            />))}
            <div >
          {selectedTickets >= 1 && (
            <div className={`p-2 text-sm ${styles.taxDetails}`}>
              <div className="flex justify-between mx-3">
                <span>Tax</span>
                {tax}$
              </div>
              <div className="flex justify-between mx-3">
                <span>Tax3</span>
                {tax3}$
              </div>
            </div>
          )}
        </div>
        </div>

        <div className={` ${styles.buttonContainer}`}>
          <div className="bg-white fixed bottom-[60px]  w-[400px]">
            {selectedTickets >= 1 && (
              <div className="flex justify-between p-2 border ">
                <span>Total Price </span>
                {ticketPrice}$
              </div>
            )}
          </div>
          <button
            type="button"
            className={`px-4 py-2 w-full flex  text-white text-2xl bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium ${styles.button}`}
          >
            <div className="flex justify-center items-center  w-full">
              <div className="w-10/12 items-center text-xl">SAVE TO CART</div>
              <div >
              <Image
                width="24"
                height="24"
                src="https://img.icons8.com/material-sharp/24/FFFFFF/long-arrow-right.png"
                alt="long-arrow-right"
              />
              </div>
            </div>
          </button>

        </div>
      </div>


    </div>
    </div>
  )
}

export default CartContent
