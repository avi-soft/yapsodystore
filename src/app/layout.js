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
      <body>{children}</body>
    </html>
  );
}
