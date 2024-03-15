import React from 'react'

import Header from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import { getThemeData, getEventDetails } from "@/helpers/api-utils";
export default async function Layout({ children }) {

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
        companyName
    } = await getThemeData();

    const events = await getEventDetails();
    return (

        <>

            <Header langCode={langCode} venueName={venueName} brandImage={brandImage} iconColor={buttonLinkBoxBorderColor} />
            <div className="pt-16 pb-8 flex-1">{children}</div>
            <Footer
                supportUrl={supportUrl}
                termsUrl={termsUrl}
                privacyUrl={privacyUrl}
                portalUrl={portalUrl}
                sellTicketUrl={sellTicketUrl}
                companyName={companyName}
            />
        </>



    )
}