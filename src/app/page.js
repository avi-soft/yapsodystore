import Calendar from "@/components/calendar/Calendar";
import Search from "@/components/search/search.jsx";
import SocialMedia from "@/components/social-media/SocialMedia";
import MainContainer from "@/components/main-container/MainContainer";
import MainPageEventList from "@/components/events/MainPageEeventList";
import SupportContact from "@/components/support-contact/SupportContact";
import Title from "@/components/homepage-header/Title";
import CalendarWrapper from "@/components/calendar/CalendarWrapper";
import {
  getEventDetails,
  getSearchEvents,
  getThemeData,
} from "@/helpers/api-utils";
import { Suspense } from "react";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer";
import LoadingIcon from "@/ui/LoadingIcon";

export default async function Home({ searchParams }) {
  const search =
    typeof searchParams.search === "string" ? searchParams.search : undefined;
  const events = search
    ? await getSearchEvents(search)
    : await getEventDetails();
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
        <div className="w-full px-2.5 mb-[10px]">
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

        <div className="border-t-[1px] border-[#ececec] w-[93.5vw] md:border-hidden"> 

        <SupportContact
          position="center"
          iconColor={buttonLinkBoxBorderColor}
          textColor={textColor}
          boxBackgroundColor={boxBackgroundColor}
          boxBorderColor={buttonLinkBoxBorderColor}
          faqCount={faqCount}
        />
        </div>
        <div className="md:w-1/4 px-2.5 flex justify-center">
          <Search
            color={boxBackgroundColor}
            textColor={headingColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
            search={search}
            placeholderColor={textColor}
            // onSearchSelect={handleEventSelect}
          />
        </div>
        <div className="w-full px-2.5 flex flex-col items-center">
          <CalendarWrapper
            performancesCount={events.length}
            textColor={textColor}
            buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
          >
            <Calendar
              isHome={true}
              highlighted={[ new Date(2024, 2, 26)]}
              activeColorCode={buttonLinkBoxBorderColor}
            />
          </CalendarWrapper>
          <Suspense fallback={<LoadingIcon />}>
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
