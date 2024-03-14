import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";
import {
  getSingleEventData,
  getSingleEventPerformances,
  getThemeData,
} from "@/helpers/api-utils";

export default async function SingleEventPage({ params }) {
  const { eventId } = params;
  const { performances } = await getSingleEventPerformances(eventId);
  const eventData = await getSingleEventData(eventId);
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
  };
  return (
    <MainContainer
      coverImage={backgroundImage}
      storeBackground={storeBackground}
    >
      <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
        <div className="flex pb-10 pl-4 pr-2 pt-12 max-xl:block">
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
