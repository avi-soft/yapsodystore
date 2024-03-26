import React from "react";

import Header from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import { getThemeData, getSingleEventData } from "@/helpers/api-utils";
import BottomView from "@/components/social-share-widget/BottomView";

export default async function Layout({ children, params }) {
  const { eventId } = params;

  const {
    venueName,
    brandImage,
    langCode,
    buttonLinkBoxBorderColor,
    supportUrl,
    termsUrl,
    privacyUrl,
    portalUrl,
    sellTicketUrl,
    companyName,
  } = await getThemeData();

  const eventData = await getSingleEventData(eventId);

  const isEventTypePhysical =
    eventData.location_type == "physical" &&
    eventData.location_info.show_map != "no";

  return (
    <>
      <Header
        langCode={langCode}
        venueName={venueName}
        brandImage={brandImage}
        iconColor={buttonLinkBoxBorderColor}
      />
      <div className="pb-8 flex-1 md:pb-[50px]">{children}</div>
      <Footer
        supportUrl={supportUrl}
        termsUrl={termsUrl}
        privacyUrl={privacyUrl}
        portalUrl={portalUrl}
        sellTicketUrl={sellTicketUrl}
        companyName={companyName}
      />

      <BottomView
        buttonLinkBoxBorderColor={buttonLinkBoxBorderColor}
        isEventTypePhysical={isEventTypePhysical}
      />

    </>
  );
}
