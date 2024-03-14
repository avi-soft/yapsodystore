import React from "react";
import Support from "../support/Support";
import ContactPresenter from "../contact/ContactPresenter";
import Button from "@/ui/Button";
import EventImage from "./EventImage";
import EventInfo from "./EventInfo";

const SideBarEventPage = ({
  buttonColor,
  textColor,
  boxBackgroundColor,
  eventData,
}) => {
  const { location_type } = eventData;
  const event = {
    name: "MULTI Events",
    startdate: "2024-04-08",
    endDate: "2024-04-20",
    performances: 5,
  };

  return (
    <div className="pl-0 ml-0  mt-20 block w-[30%] px-[10px] pb-[30px] pr-[20px] max-xl:w-[100%] xl:sticky xl:top-0">
      <EventImage eventData={eventData} />

      <div className="block">
        <ul className=" m-0 mt-[20px] block max-w-[100%] list-none p-0 text-[var(--text-primary)]">
          <li className="m-0 list-item w-[100%] py-[12px]">
            <EventInfo
              performanceCount={eventData.performances_count}
              startDate={eventData.performance_start_time}
              endDate={eventData.performance_end_time}
            />
          </li>
          <li className="m-0 list-item w-[100%] border-b border-[#c0c0c0] py-[12px]">
            <Button
              width={"100%"}
              color={buttonColor}
              to={"#upcoming-event"}
              className="p-[6px]"
              padding_y={"6px"}
              padding_x={"6px"}
                        >
              Get Ticket
            </Button>
          </li>
          <li className="m-0 list-item w-[100%] border-b border-[#c0c0c0] py-[12px] ">
            {location_type == "physical" && (
              <Button
                className="p-[6px]"
                width={"100%"}
                color={buttonColor}
                to="#megha"
                padding_y={"6px"}
                padding_x={"6px"}
              >
                Get Direction
              </Button>
            )}
          </li>
          <li className="m-0 w-[100%] border-b border-[#c0c0c0] py-[12px]">
            <Support
              size="size-6 "
              position="top"
              iconColor={textColor}
              textColor={textColor}
              boxBackgroundColor={boxBackgroundColor}
              boxBorderColor={buttonColor}
              iconColor={textColor}
              textColor={textColor}
              boxBackgroundColor={boxBackgroundColor}
              boxBorderColor={buttonColor}
            />
          </li>
          <li className="m-0 w-[100%] py-[12px]">
            <ContactPresenter size="size-6 " color={textColor} />
            <ContactPresenter size="size-6 " color={textColor} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarEventPage;
