import { useEffect } from "react";
import GeneralEventTicketSelector from "./GeneralEventTicketSelector";
import { getBookingCartInfo } from "@/helpers/api-utils";
export default function GeneralEvent({
  selectedTickets,
  handleTicketChange,
  eventSeatData,
  sectionData,
  pricingData,
  handleRemoveTicket,
  setType,
  setTickets,
}) {
  const { price, ticket_limit, performance_info } = pricingData;
  const { classes } = price.regular[0];
  const { event_seating_type, is_seats_io } = eventSeatData;

  useEffect(() => {
    setType("general");
  }, [setType]);

  useEffect(() => {
    async function fetchGeneralEventData() {
      const payLoad = {
        event_id: performance_info.event_id.toString(),
        is_seats_io: is_seats_io ? true : false,
        performance_id: performance_info.id.toString(),
        secret_link_code: null, //not  known
        section_id: sectionData[0].section_id, //for general event single section will always come in response
        seats: [],
      };
      let counter = 0;
      const seatsData = Object.entries(selectedTickets).flatMap(
        ([classId, count]) =>
          Array.from({ length: count }, () => ({
            color_id: sectionData[0].section_id,
            id: ++counter,
            orig_class_id: parseInt(classId),
            seat_key: counter,
            type_id: parseInt(classId),
          }))
      );
      const requestData = { ...payLoad, seats: seatsData };
      const response = await getBookingCartInfo(requestData);
      const seats = response.order_details.seat_info;
      setTickets(seats);
    }
    selectedTickets && fetchGeneralEventData();
  }, [
    selectedTickets,
    sectionData,
    event_seating_type,
    is_seats_io,
    performance_info,
    setTickets
  ]);

  return (
    <div className=" m-[30px] mr-[20px] flex flex-col gap-4 pt-[0.5rem]">
      {classes.map((ticket_type) => {
        const quantity =
          ticket_type.qty < ticket_limit.max
            ? ticket_type.qty
            : ticket_limit.max;
        return (
          <GeneralEventTicketSelector
            key={ticket_type.class_id}
            ticket_type={ticket_type}
            quantity={quantity}
            handleTicketChange={handleTicketChange}
            selectedTickets={selectedTickets}
          />
        );
      })}
    </div>
  );
}
