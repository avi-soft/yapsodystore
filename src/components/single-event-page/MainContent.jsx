import Calendar from "../calendar/Calendar";
import SocialMedia from "../social-media/SocialMedia";
import SocialShareWidget from "../social-share-widget/SocialShare";
import SingleEventPerformance from "./SingleEventPerformance";
import SupportContact from "../support-contact/SupportContact";
import CalendarWrapper from "../calendar/CalendarWrapper";
import Map from "../google-map/Map";
import BottomView from "../social-share-widget/BottomView";
import EventDescription from "./EventDescription";
import DescriptionHyperLinks from "./DescriptionHyperlinks";
import DescriptionImages from "./DescriptionImages";
import { MdLocationPin } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { getDirections } from "@/helpers/common";
import DescriptionVideos from "./DescriptionVideos";

const MainContent = ({
  buttonLinkBoxBorderColor,
  performances,
  textColor,
  boxBackgroundColor,
  socialMediaLinks,
  headingColor,
  eventData,
  symbol,
}) => {
  const isEventTypePhysical =
    eventData.location_type == "physical" &&
    eventData.location_info.show_map != "no";
  const headingStyle = { color: headingColor };
  const {
    id,
    performance_id,
    event_title1,
    event_title2,
    event_title3,
    images,
    location_type,
    location_info,
    hyperlinks,
    event_description,
    videos,
  } = eventData;
  const descriptionImages =
    images.length > 0
      ? images.filter((image) => image.cover_photo === "no")
      : "";
  return (
    <div className=" xl:ml-[70px] mt-16 flex-1 px-[10px] pb-[30px] scrollbar-hide">
      <section className="mb-8 flex flex-col items-start justify-center gap-2">
        <h1
          style={headingStyle}
          className="text-[3.375em] font-normal font-lato "
        >
          {event_title1}
        </h1>
        <h2 style={headingStyle} className=" text-[18px] font-normal  ">
          {event_title2}
        </h2>
        <h3 style={headingStyle} className=" text-[18px] font-normal">
          {event_title3}
        </h3>
        <SocialMedia
          position="start"
          {...socialMediaLinks}
          iconColor={buttonLinkBoxBorderColor}
        />
      </section>
      <SocialShareWidget />
      <div className="md:hidden block">
        <BottomView
          isEventTypePhysical={isEventTypePhysical}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
        />
      </div>
      <div
        className="location text-base my-7 relative text-[#566270] flex items-center"
        style={{ color: textColor }}
      >
        <span className="mt-1 inline-block h-5 w-5 align-middle pt-[1px] mr-1 ">
          {location_type === "physical" ? (
            <MdLocationPin className="size-4" />
          ) : (
            <GiLaptop className="size-4" />
          )}
        </span>
        <span className="w-[100%] inline-block font-lato">
          {location_type === "physical"
            ? location_info.name + " - " + location_info.address
            : location_info.webevent_timezone}
        </span>
      </div>
      {event_description && (
        <EventDescription
          event_description={event_description}
          textColor={textColor}
        />
      )}
      {hyperlinks.length > 1 && (
        <DescriptionHyperLinks
          hyperlinks={hyperlinks}
          color={buttonLinkBoxBorderColor}
        />
      )}
      {descriptionImages.length > 1 && (
        <DescriptionImages images={descriptionImages} />
      )}
      <div className="px-[10px] align-top">
        {videos.length > 1 && <DescriptionVideos videos={videos} />}
        <CalendarWrapper
          textColor={textColor}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          performancesCount={performances.length}
        >
          <Calendar
            highlighted={[new Date(2024, 2, 10)]}
            activeColorCode={buttonLinkBoxBorderColor}
          />
        </CalendarWrapper>
        <SingleEventPerformance
          eventid={id}
          dateid={performance_id}
          symbol={symbol}
          performances={performances}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          headingColor={headingColor}
        />
        {isEventTypePhysical && (
          <>
            <div className="flex justify-between h-[80px] text-[16px] font-lato tracking-[0.7px]">
              <h3 style={{ color: textColor }}>
                {location_info.name} - {location_info.address}
              </h3>
              <a
                style={{ color: buttonLinkBoxBorderColor }}
                className="underline"
                target={"_blank"}
                href={getDirections(eventData.location_info)}
              >
                Get Directions
              </a>
            </div>
            <Map
              geo_lat={eventData.location_info.geo_lat}
              geo_lng={eventData.location_info.geo_lng}
            />
          </>
        )}
        <div>
          <SupportContact
            iconColor={buttonLinkBoxBorderColor}
            textColor={textColor}
            boxBackgroundColor={boxBackgroundColor}
            boxBorderColor={buttonLinkBoxBorderColor}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
