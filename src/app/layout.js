import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/componenets/shared/Navbar/Navbar";
import Footer from "@/componenets/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Kausar Ahmad",
  description: "protfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="https://i.ibb.co.com/cFWhLbk/h-img.jpg"
        />
      </head>
      <body
        className={`${geistSans.variable} bg-[#030712] ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
