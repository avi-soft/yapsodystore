import "./globals.css";

export const metadata = {
  title: "Yapsody Online Store",
  description: "Yapsody Online Store",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className=" flex-1">{children}</div>
      </body>
    </html>
  );
}
