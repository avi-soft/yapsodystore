import Calendar from "../calendar/Calendar";
import SocialMedia from "../social-media/SocialMedia";
import SocialShareWidget from "../social-share-widget/SocialShare";
import SingleEventPerformance from "./SingleEventPerformance";
import SupportContact from "../support-contact/SupportContact";
import CalendarWrapper from "../calendar/CalendarWrapper";
import { FaLocationDot } from "react-icons/fa6";
// import Map from "../google-map/Map";

const MainContent = ({ color, performances }) => {
  const event = {
    name: "MULTI Events",
    startdate: "2024-04-08",
    endDate: "2024-04-20",
    performances: 5,
    location: "Asia/Calcutta",
  };
  return (
    <div className="mb-[40px] xl:ml-[70px] mt-16 flex-1 px-[10px] pb-[30px] scrollbar-hide">
      <section className="mb-8">
        <h1 className="mb-[20px] text-[3.375em] font-normal ">{event.name}</h1>
        <h2 className="m-[15px] mt-[5px] text-[2em] font-normal"></h2>
        <h3 className="m-[15px] mt-[5px] text-[1.7em] font-normal"></h3>
        <SocialMedia position="start" />
      </section>
      <SocialShareWidget />
      <div className="location text-base my-7 relative text-[#566270] flex items-center">
        <span className="inline-block h-5 w-5 align-middle pt-[1px] mr-1 ">
          <FaLocationDot />
        </span>
        <span className="w-[80%] inline-block">{event.location}</span>
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
        <SupportContact color={color} />
      </div>
    </div>
  );
};

export default MainContent;
