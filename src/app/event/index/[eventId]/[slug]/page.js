import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";
import {
  getSingleEventData,
  getSingleEventPerformances,
  getThemeData,
} from "@/helpers/api-utils";
import { notFound } from "next/navigation";

export default async function SingleEventPage({ params }) {
  const { eventId } = params;
  const eventData = await getSingleEventData(eventId);
  if (eventData.status == 404) return notFound();
  const { performances } = await getSingleEventPerformances(eventId);
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
  const mainContentProps = {
    textColor,
    boxBackgroundColor,
    buttonLinkBoxBorderColor,
    socialMediaLinks,
    headingColor,
    eventData,
    performances,
    symbol,
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
