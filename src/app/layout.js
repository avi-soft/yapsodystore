import "./globals.css";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer.jsx";
import { getThemeData } from "@/helpers/api-utils";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Yapsody Online Store",
  description: "Yapsody Online Store",
};

export default async function RootLayout({ children }) {
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
    backgroundImage,
  } = await getThemeData();
  return (
    <html lang="en">
      <body className="flex flex-col">
       
        <Suspense fallback={<Loading />}>
          <div className=" flex-1">{children}</div>
        </Suspense>
        
      </body>
    </html>
  );
}
