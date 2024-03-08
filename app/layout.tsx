import React from "react";
import "../styles/globals.css";
// import Footer from "./Footer";
import Navbar from "./navbar";
import Script from "next/script";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Loc Lien - Home",
  description: "Project Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html className={`bg-zinc-900 ${oswald.className}`} lang="en">
        <body className="overflow-x-hidden scrollbar-thin scrollbar-thumb-zinc-500 scrollbar-track-zinc-900">
          <Navbar />

          {children}

          {/* <footer><Footer /></footer> */}
        </body>
        <Script
          async
          defer
          src="https://analytics.tierify.app/overseer.js"
          data-website-id="9655b910-9c86-411d-8919-fccddb3ab42d"
        />
      </html>
    </>
  );
}
