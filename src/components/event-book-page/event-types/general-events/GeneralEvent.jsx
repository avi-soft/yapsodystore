import styles from "@/components/event-book-page/ticketcart/Card.module.css";
import TicketDropdown from "../../ticketcart/Ticketdropdown";
import { useEffect } from "react";
export default function GeneralEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
  setType,
}) {
  useEffect(() => {
    setType("general");
  }, [setType]);
  return (
    <div className={`${styles.event} select-ticket  md:pr-[100px]`}>
      <div className="part">
        <div className="upper-part">Adult </div>
      </div>
      <div className="part">
        <div className="mid-part">
          <div className="dollar">$50.00</div>
        </div>
      </div>
      <div className=" flex ">
        <div className="lower-part flex flex-row items-center w-full md:w-auto">
          <label htmlFor="quantity" className="mr-2">
            Quantity
          </label>
          <TicketDropdown
            value={selectedTickets}
            onChange={handleTicketChange}
          />
        </div>
      </div>
    </div>
  );
}
