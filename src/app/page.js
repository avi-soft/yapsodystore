import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import SupportContact from "@/components/support-contact/SupportContact";
import Title from "@/components/homepage-header/Title";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import { getEventDetails, getThemeData } from "@/helpers/api-utils";
import { Suspense } from "react";
import Loading from "./loadingg";

export default async function Home() {
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

  const events = await getEventDetails();
  return (
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
        />
      </div>
      <div className="mt-[20px] w-full flex flex-col items-center">
        <Search
          color={boxBackgroundColor}
          textColor={headingColor}
          buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
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
        <Suspense fallback={<Loading color={buttonLinkBoxBorderColor} />}>
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

    
  );
}