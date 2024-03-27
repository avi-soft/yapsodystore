import TicketDropdown from "../../ticketcart/Ticketdropdown";
import styles from "@/components/event-book-page/ticketcart/Card.module.css";
export default function GeneralEventTicketSelector({
  ticket_type,
  quantity,
  handleTicketChange,
  selectedTickets,
}) {
  return (
    <div className={`${styles.event} rounded-[3px] `}>
      <div className="part">
        <div className="upper-part">{ticket_type.name}</div>
        <div className="text-[12px] overflow-wrap break-word text-[#232323] opacity-[.6] font-bold">
          {ticket_type.description}
        </div>
      </div>
      <div className="part">
        <div className="mid-part my-[4px]">
          <div className="dollar">
            {ticket_type.symbol}
            {`${ticket_type.price}.00`}
          </div>
        </div>
      </div>
      <div className=" flex ">
        <div className="lower-part flex flex-row items-center w-full md:w-auto">
          <label htmlFor="quantity" className="mr-2 ">
            Quantity
          </label>
          <TicketDropdown
            classId={ticket_type.class_id}
            onChange={handleTicketChange}
            quantity={quantity}
            selectedTickets={selectedTickets}
          />
        </div>
      </div>
    </div>
  );
}