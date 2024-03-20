import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search.jsx";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import SupportContact from "@/components/support-contact/SupportContact";
import Title from "@/components/homepage-header/Title";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import {
  getDateEvents,
  getCalenderEvents,
  getEventDetails,
  getSearchEvents,
  getThemeData,
} from "@/helpers/api-utils";
import { Suspense } from "react";
import Loading from "./loading";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer";

const monthsMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export default async function Home({ searchParams }) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;

  const start_date =
    typeof searchParams.start_date === "string"
      ? searchParams.start_date
      : undefined;
  const end_date =
    typeof searchParams.end_date === "string"
      ? searchParams.end_date
      : undefined;
  let events = [];
  if (search) {
    events = await getSearchEvents(search);
  } else if (start_date && end_date && start_date === end_date) {
    events = await getDateEvents(start_date, end_date);
    // console.log(events);
  } else if (start_date && end_date && start_date !== end_date) {
    const dates = await getCalenderEvents(start_date, end_date);
    const keys = Object.keys(dates);
    for (const key of keys) {
      const singleDateEvents = await getDateEvents(key, key);
      for (const event of singleDateEvents) {
        events.push(event);
      }
    }
  } else {
    events = await getEventDetails();
  }
  const eventList = await getEventDetails();

  // const abc = await getCalenderEvents("2024-03-01", "2024-03-31");
  // const keys = Object.keys(abc);
  // for (const key of keys) {
  //   console.log(key);
  //   // events.push(await getDateEvents(key, key));
  // }
  // console.log("abc", abc);

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
    brandImage,
    langCode,
    supportUrl,
    termsUrl,
    privacyUrl,
    portalUrl,
    sellTicketUrl,
    companyName,
    faqCount,
  } = await getThemeData();
  const highlightedDates = [];
  {
    eventList.map((e) =>
      highlightedDates.push(
        new Date(e.performance_start_time),
        new Date(e.performance_end_time)
      )
    );
  }

  return (
    <div>
      <Header
        langCode={langCode}
        venueName={venueName}
        brandImage={brandImage}
        iconColor={buttonLinkBoxBorderColor}
      />

      <MainContainer
        coverImage={backgroundImage}
        storeBackground={storeBackground}
      >
        <div className="w-full px-2.5">
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
        </div>
        <SupportContact
          position="center"
          iconColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={buttonLinkBoxBorderColor}
          faqCount={faqCount}
        />
        <div className="md:w-1/4 px-2.5 flex justify-center">
          <Search
            color={boxBackgroundColor}
            textColor={headingColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            search={search}
            // onSearchSelect={handleEventSelect}
          />
        </div>
        <div className="w-full px-2.5 flex flex-col items-center">
          <CalendarWrapper
            performancesCount={events.length}
            textColor={textColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            searchParams={searchParams}
            monthsMap={monthsMap}
          >
            <Calendar
              isHome={true}
              highlighted={highlightedDates}
              activeColorCode={buttonLinkBoxBorderColor}
              monthsMap={monthsMap}
            />
          </CalendarWrapper>
          <Suspense fallback={<Loading />}>
            <MainPageEventList
              events={events}
              headingColor={headingColor}
              boxBackgroundColor={boxBackgroundColor}
              textColor={textColor}
              buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            />
          </Suspense>
        </div>
      </MainContainer>
      <Footer
        supportUrl={supportUrl}
        termsUrl={termsUrl}
        privacyUrl={privacyUrl}
        portalUrl={portalUrl}
        sellTicketUrl={sellTicketUrl}
        companyName={companyName}
      />
    </div>
  );
}
