import Calendar from "../calendar/Calendar";
import SocialMedia from "../social-media/SocialMedia";
import SocialShareWidget from "../social-share-widget/SocialShare";
import SingleEventPerformance from "./SingleEventPerformance";
import SupportContact from "../support-contact/SupportContact";
import CalendarWrapper from "../calendar/CalendarWrapper";
// import Map from "../google-map/Map";
import { MdLocationPin } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
const MainContent = ({
  color,
  performances,
  iconColor,
  textColor,
  boxBackgroundColor,
  boxBorderColor,
  socialMediaLinks,
  headingColor,
  eventData,
}) => {
  const event = {
    name: "MULTI Events",
    startdate: "2024-04-08",
    endDate: "2024-04-20",
    performances: 5,
    location: "Asia/Calcutta",
  };
  const {
    event_title1,
    event_title2,
    event_title3,
    images,
    location_type,
    location_info,
  } = eventData;
  const headingStyle = { color: headingColor };
  return (
    <div className="mb-[40px] xl:ml-[70px] mt-16 flex-1 px-[10px] pb-[30px] scrollbar-hide">
      <section className="mb-8 flex flex-col items-start justify-center gap-2">
        <h1 className="text-[3.375em] font-normal ">{event_title1}</h1>
        <h2 className=" text-[2em] font-normal">{event_title2}</h2>
        <h3 className=" text-[1.7em] font-normal">{event_title3}</h3>
        <SocialMedia
          position="start"
          {...socialMediaLinks}
          iconColor={iconColor}
        />
      </section>
      <SocialShareWidget />
      <div
        className="location text-base my-7 relative text-[#566270] flex items-center"
        style={{ color: textColor }}
      >
        <span className="mt-1 inline-block h-5 w-5 align-middle pt-[1px] mr-1">
          {location_type == "physical" ? (
            <MdLocationPin className="size-4" />
          ) : (
            <GiLaptop className="size-4" />
          )}
        </span>
        <span className="w-[100%] inline-block">
          {location_type == "physical"
            ? location_info.name + " - " + location_info.address
            : location_info.webevent_timezone}
        </span>
      </div>
      <div className="px-[10px] align-top">
        <CalendarWrapper performancesCount={performances.length}>
          <Calendar
            highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
            activeColorCode={color}
          />
        </CalendarWrapper>
        <SingleEventPerformance performances={performances} color={color} />
        {/* <Map address="jammu, jammu and kashmir" /> */}
        <SupportContact
          iconColor={iconColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={boxBorderColor}
        />
      </div>
    </div>
  );
};

export default MainContent;
