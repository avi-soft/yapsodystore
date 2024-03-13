import MainContent from "@/components/single-event-page/MainContent";
import SideBarEventPage from "@/components/single-event-page/SideBarEventPage";
import MainContainer from "@/components/main-container/MainContainer";
import { getThemeData } from "@/helpers/api-utils";
import { getSingleEventData } from "@/helpers/api-utils";
export default async function SingleEventPage({params}) {
  
  const { eventId } = params;
  // const themeColor = "red";
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
  const eventData = await getSingleEventData(eventId);
 
  const socialMediaLinks = {
    facebookUrl,
    twitterUrl,
    instagramUrl,
    websiteUrl,
  };
  const props = {
    buttonColor: buttonLinkBoxBorderColor,
    iconColor: buttonLinkBoxBorderColor,
    textColor: textColor,
    boxBackgroundColor: boxBackgroundColor,
    boxBorderColor: buttonLinkBoxBorderColor,
    socialMediaLinks: socialMediaLinks,
    headingColor: headingColor,
    eventData,
  };
  return (
    <MainContainer
      coverImage={backgroundImage}
      storeBackground={storeBackground}
    >
      <div className={`ml-auto mr-auto w-[100%] rounded-[8px]`}>
        <div className="flex pb-10 pl-4 pr-4 pt-12 max-xl:block">
          <SideBarEventPage
            buttonColor={buttonLinkBoxBorderColor}
            textColor={textColor}
            boxBackgroundColor={boxBackgroundColor}
            eventData={eventData}
          />
          <MainContent {...props} />
        </div>
      </div>
    </MainContainer>
  );
}
