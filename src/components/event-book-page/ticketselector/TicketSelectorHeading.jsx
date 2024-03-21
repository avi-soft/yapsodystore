import { MdLocationPin } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import moment from "moment";
import Image from "next/image";
export default function TicketSelectorHeading({ eventSeatData }) {
  const {
    event_title1,
    event_title2,
    location_type,
    location_info,
    performance_start_time,
    images,
  } = eventSeatData;
  const [coverImage] =
    images.length > 0
      ? images.filter((image) => image.cover_photo === "yes")
      : "";
  return (
    <div className="getticket-main ">
      <div className="mainbox-event  hidden border-solid border-b-[1px] py-2 pb-6  md:grid md:grid-cols-2">
        <div className="divide-main ">
          <div className="box mr-[20px]">
            {coverImage ? (
              <Image
                src={coverImage.url}
                alt="image"
                width={85}
                height={63}
              ></Image>
            ) : (
              <div className="diagonal">{event_title1}</div>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <div className="event-name text-[22px]">{event_title1}</div>
            {event_title2 && (
              <h2 className="font-onlyLato text-[14px] tracking-[.8px]">
                <i>{event_title2}</i>
              </h2>
            )}
          </div>
        </div>
        <div className="get-time">
          <div className="mr-4 font-[400] text-base pb-2 ">
            <span className="inline-block h-5 w-5 align-middle mr-3">
              {location_type === "physical" ? (
                <MdLocationPin className="size-5 text-black" />
              ) : (
                <GiLaptop className="size-5  text-black" />
              )}
            </span>
            <span className="text-[14px] font-medium font-onlyLato tracking-[.4px]">
              {location_type === "physical"
                ? location_info.name
                : location_info.webevent_address}
            </span>
          </div>

          <div className="font-[400] text-base ">
            <i className="fa-solid fa-clock text-black inline-block"></i>
            <span className="ml-3 text-[14px] font-medium font-onlyLato tracking-[.4px] mb-1">
              {moment(performance_start_time).format("MMM D,YYYY,LT")}
            </span>
          </div>
          <div className="border-b-[1px] md:hidden z-50"></div>
        </div>
      </div>
    </div>
  );
}
