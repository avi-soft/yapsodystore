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
  const allPerformances = await getSingleEventPerformances(eventId);
  let performances = [];

  if (start_date && end_date) {
    if (start_date === end_date) {
      const performanceObject = await getDatePerformances(
        eventId,
        start_date,
        end_date
      );
      performances = performanceObject.performances;
    } else {
      const dates = await getCalenderPerformances(
        eventId,
        start_date,
        end_date
      );
      for (const date of Object.keys(dates)) {
        const singlePerformanceDate = await getDatePerformances(
          eventId,
          date,
          date
        );
        performances.push(...singlePerformanceDate.performances);
      }
    }
  } else {
    performances = allPerformances.performances;
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

  for (const performance of allPerformances.performances) {
    highlightedDates.push(new Date(performance.show_start_datetime));
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
    searchParams,
  };

  return (
    <MainContainer
      coverImage={backgroundImage}
      storeBackground={storeBackground}
      isHome={false}
    >
      <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
        <div className=" pb-10 pl-4 pr-2 max-xl:block">
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
