import "./globals.css";
import Header from  "../components/header/Navbar";


export const metadata = {
  title: "Yapsody Online Store",
  description: "Yapsody Online Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        </body>
    </html>
  );
}
