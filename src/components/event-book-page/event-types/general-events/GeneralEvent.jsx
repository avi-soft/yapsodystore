import styles from "@/components/event-book-page/ticketcart/Card.module.css";
import TicketDropdown from "../../ticketcart/Ticketdropdown";
export default function GeneralEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
}) {
  const { price, ticket_limit } = pricingData;
  const { classes } = price.regular[0];
  return (
    <div className=" m-[30px] mr-[20px] flex flex-col gap-4 pt-[0.5rem]">
      {classes.map((ticket_type) => {
        const quantity =
          ticket_type.qty < ticket_limit.max
            ? ticket_type.qty
            : ticket_limit.max;
        return (
          <div
            className={`${styles.event} rounded-[3px] `}
            key={ticket_type.class_id}
          >
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
                  {ticket_type.price}
                </div>
              </div>
            </div>
            <div className=" flex ">
              <div className="lower-part flex flex-row items-center w-full md:w-auto">
                <label htmlFor="quantity" className="mr-2 ">
                  Quantity
                </label>
                <TicketDropdown
                  value={selectedTickets}
                  onChange={handleTicketChange}
                  quantity={quantity}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
