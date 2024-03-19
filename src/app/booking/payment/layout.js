import React from 'react'

import Header from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import {  getThemeData , getEventDetails } from "@/helpers/api-utils";
import BookingHeader from "@/components/event-book-page/ticketselector/BookingHeader"
export default async function Layout({children})  {

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
            <BookingHeader/>
            {children}
            </>
           
        

    )
}


