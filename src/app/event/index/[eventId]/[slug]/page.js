import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";
import {
  getCalenderPerformances,
  getDatePerformances,
  getSingleEventData,
  getSingleEventPerformances,
  getThemeData,
} from "@/helpers/api-utils";
import { notFound } from "next/navigation";

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

export default async function SingleEventPage({ params, searchParams }) {
  const { eventId } = params;

  const start_date =
    typeof searchParams.start_date === "string"
      ? searchParams.start_date
      : undefined;
  const end_date =
    typeof searchParams.end_date === "string"
      ? searchParams.end_date
      : undefined;

  const eventData = await getSingleEventData(eventId);

  if (eventData.status == 404) return notFound();
  let performances;
  if (start_date && end_date && start_date === end_date) {
    const performanceObject = await getDatePerformances(
      eventId,
      start_date,
      end_date
    );
    performances = performanceObject.performances;
  } else if (start_date && end_date && start_date === end_date) {
    const dates = await getCalenderPerformances(eventId, start_date, end_date);
    const keys = Object.keys(dates);
    for (const key of keys) {
      const singlePerformanceDate = await getDatePerformances(
        eventId,
        key,
        key
      );
      for (const performance of singlePerformanceDate.performances) {
        performances.push(performance);
      }
    }
  } else {
    ({ performances } = await getSingleEventPerformances(eventId));
  }

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
    symbol,
  } = await getThemeData();
  const socialMediaLinks = {
    facebookUrl,
    twitterUrl,
    instagramUrl,
    websiteUrl,
  };
  const highlightedDates = [];
  {
    highlightedDates.push(
      new Date(eventData.performance_start_time),
      new Date(eventData.performance_end_time)
    );
  }
  const mainContentProps = {
    textColor,
    boxBackgroundColor,
    buttonLinkBoxBorderColor,
    socialMediaLinks,
    headingColor,
    eventData,
    performances,
    symbol,
    searchParams,
    monthsMap,
    highlightedDates,
    eventId,
  };

  return (
    <MainContainer
      coverImage={backgroundImage}
      storeBackground={storeBackground}
      isHome={false}
    >
      <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
        <div className="flex pb-10 pl-4 pr-2 max-xl:block">
          <SideBarEventPage
            buttonColor={buttonLinkBoxBorderColor}
            textColor={textColor}
            boxBackgroundColor={boxBackgroundColor}
            eventData={eventData}
          />
          <MainContent {...mainContentProps} />
        </div>
      </div>
    </MainContainer>
  );
}
