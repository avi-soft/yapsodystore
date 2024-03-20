import React from "react";

import Header from "@/components/header/Navbar";
import Footer from "@/components/footer/footer";
import { getThemeData, getEventDetails } from "@/helpers/api-utils";
import BookingHeader from "@/components/event-book-page/ticketselector/BookingHeader";
export default function Layout({ children}) {

  return (
    <>
      <BookingHeader />
      {children}
    </>
  );
}
