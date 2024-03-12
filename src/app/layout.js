import "./globals.css";
import Header from "../components/header/Navbar";
import Footer from "@/components/footer/footer";

export const metadata = {
  title: "Yapsody Online Store",
  description: "Yapsody Online Store",
};

export default function RootLayout({ children }) {
  const coverImage =
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg";
  return (
    <html lang="en">
      <body className=" h-[100%] m-0">
        <div
          className="flex flex-col  justify-between items-center overflow-x-hidden"
          style={{
            background: coverImage ? `url(${coverImage})` : "#ffffff",
            height: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
