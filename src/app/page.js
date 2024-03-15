"use client";
import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search.jsx";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import SupportContact from "@/components/support-contact/SupportContact";
import Title from "@/components/homepage-header/Title";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import { getEventDetails, getThemeData } from "@/helpers/api-utils";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

export default async function Home() {
  const [events, setEvents] = useState([]);
  const [themeData, setThemeData] = useState([]);
  const [eventId, setEventId] = useState();

  const handleEventSelect = (result) => {
    setEventId(result);
    console.log(eventId);
  };
  useEffect(() => {
    getEventDetails()
      .then((data) => setEvents(data))
      .catch((error) => {});

    getThemeData()
      .then((data) => setThemeData(data))
      .catch((error) => {});
  }, []);
  const {
    boxBackgroundColor,
    buttonLinkBoxBorderColor,
    backgroundImage,
    logoImage,
    storeBackground,
    headingColor,
    textColor,
    mainHeadingImage,
    mainHeadingText,
    venueName,
    headerAlignment,
    facebookUrl,
    twitterUrl,
    instagramUrl,
    websiteUrl,
    mainHeadingType,
  } = themeData;

  return (
    <div className="pt-24 pb-8">
      <MainContainer
        coverImage={backgroundImage}
        storeBackground={storeBackground}
      >
        <div className="w-full">
          <Title
            mainHeadingImage={mainHeadingImage}
            mainHeadingText={mainHeadingText}
            venueName={venueName}
            headerAlignment={headerAlignment}
            headingColor={headingColor}
            mainHeadingType={mainHeadingType}
          />
          <SocialMedia
            position="center"
            facebookUrl={facebookUrl}
            twitterUrl={twitterUrl}
            instagramUrl={instagramUrl}
            websiteUrl={websiteUrl}
            iconColor={buttonLinkBoxBorderColor}
          />
          <SupportContact
            position="center"
            iconColor={buttonLinkBoxBorderColor}
            textColor={textColor}
            boxBackgroundColor={boxBackgroundColor}
            boxBorderColor={buttonLinkBoxBorderColor}
          />
        </div>
        <div className="w-[95%] flex flex-col items-center">
          <Search
            color={boxBackgroundColor}
            textColor={headingColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            onSearchSelect={handleEventSelect}
          />
          <CalendarWrapper
            performancesCount={events.length}
            textColor={textColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          >
            <Calendar
              highlighted={[new Date(2024, 2, 10), new Date(2024, 2, 14)]}
              activeColorCode={buttonLinkBoxBorderColor}
            />
          </CalendarWrapper>
          <Suspense fallback={<Loading color="blue" />}>
            {eventId ? (
              <MainPageEventList
                events={events.filter((event) => event.id === eventId)}
                headingColor={headingColor}
                boxBackgroundColor={boxBackgroundColor}
                textColor={textColor}
                buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
              />
            ) : (
              <MainPageEventList
                events={events}
                headingColor={headingColor}
                boxBackgroundColor={boxBackgroundColor}
                textColor={textColor}
                buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
              />
            )}
          </Suspense>
        </div>
      </MainContainer>
    </div>
  );
}

// export default Home;
