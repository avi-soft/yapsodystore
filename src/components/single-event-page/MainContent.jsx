import Calendar from "../calendar/Calendar";
import SocialMedia from "../social-media/SocialMedia";
import SocialShareWidget from "../social-share-widget/SocialShare";
import SingleEventPerformance from "./SingleEventPerformance";
import SupportContact from "../support-contact/SupportContact";
import CalendarWrapper from "../calendar/CalendarWrapper";
import Map from "../google-map/Map";
import { MdLocationPin } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
const MainContent = ({
  buttonLinkBoxBorderColor,
  performances,
  textColor,
  boxBackgroundColor,
  socialMediaLinks,
  headingColor,
  eventData,
}) => {
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

  const headingStyle = { color: headingColor };
  const {
    event_title1,
    event_title2,
    event_title3,
    images,
    location_type,
    location_info,
  } = eventData;

  return (
    <div className="mb-[40px] xl:ml-[70px] mt-16 flex-1 px-[10px] pb-[30px] scrollbar-hide">
      <section className="mb-8 flex flex-col items-start justify-center gap-2">
        <h1 style={headingStyle} className="text-[3.375em] font-normal ">
          {event_title1}
        </h1>
        <h2 style={headingStyle} className=" text-[2em] font-normal">
          {event_title2}
        </h2>
        <h3 style={headingStyle} className=" text-[1.7em] font-normal">
          {event_title3}
        </h3>
        <SocialMedia
          position="start"
          {...socialMediaLinks}
          iconColor={buttonLinkBoxBorderColor}
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
        <CalendarWrapper
          textColor={textColor}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          performancesCount={performances.length}
        >
          <Calendar
            highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
            activeColorCode={buttonLinkBoxBorderColor}
          />
        </CalendarWrapper>
        <SingleEventPerformance
          performances={performances}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          headingColor={headingColor}
        />
        {isEventTypePhysical && (
          <>
            <div className="flex justify-between h-[80px]">
              <h3 style={{ color: textColor }}>
                Sycuan Casino Resort - 5469 Casino Way, El Cajon, CA 92019, USA
              </h3>
              <a
                style={{ color: buttonLinkBoxBorderColor }}
                className="underline"
                target={"_blank"}
                href={getDirections()}
              >
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
          iconColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={buttonLinkBoxBorderColor}
        />
      </div>
    </div>
  );
};

export default MainContent;
