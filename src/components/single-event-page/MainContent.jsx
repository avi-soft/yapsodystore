import Calendar from "../calendar/Calendar";
import SocialMedia from "../social-media/SocialMedia";
import SocialShareWidget from "../social-share-widget/SocialShare";
import SingleEventPerformance from "./SingleEventPerformance";
import SupportContact from "../support-contact/SupportContact";
import CalendarWrapper from "../calendar/CalendarWrapper";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../google-map/Map";
// import Map from "../google-map/Map";

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
  const isEventTypePhysical =
    eventData.location_type == "physical" &&
    eventData.location_info.show_map != "no";
  function getDirections() {
    var locationInfo = eventData.location_info;
    var geoPosition = locationInfo.geo_lat + "," + locationInfo.geo_lng;

    var gMapUrl =
      "https://maps.google.com/?saddr=" +
      "" +
      "&center=" +
      geoPosition +
      "&daddr=" +
      encodeURIComponent(locationInfo.address) +
      "&directionsmode=driving&mapmode=streetview&zoom=10";

    if (locationInfo.geo_lat != 0 && locationInfo.geo_lng != 0) {
      gMapUrl = gMapUrl + "&saddr=" + geoPosition;
    }
    return gMapUrl;
  }
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
        {isEventTypePhysical && (
          <>
            <div className="flex justify-between h-[80px]">
              <h3 style={{ color: color }}>
                Sycuan Casino Resort - 5469 Casino Way, El Cajon, CA 92019, USA
              </h3>
              <a className="underline" target={"_blank"} href={getDirections()}>
                Get Directions
              </a>
            </div>
            <Map
              geo_lat={eventData.location_info.geo_lat}
              geo_lng={eventData.location_info.geo_lng}
              key={"AIzaSyBYUaj85xdIZhLl64x4GcqmYEEk3v1hxOs"}
            />
          </>
        )}
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
