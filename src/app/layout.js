import "./globals.css";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer";
import { getThemeData } from "@/helpers/api-utils";

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
    companyName
  } = await getThemeData();
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header langCode={langCode}/>
        <div className="pt-24 pb-8 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
