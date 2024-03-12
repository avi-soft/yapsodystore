import "./globals.css";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Yapsody Online Store",
  description: "Yapsody Online Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <div className="pt-24 pb-8 flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}