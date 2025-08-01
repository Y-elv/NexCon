// src/app/layout.tsx
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enihakkore International Ministry",
  description:
    "Official website for Enihakkore International Ministry. Learn about our mission, services, and how to support us.",
  icons: {
    // This path is relative to the `public` directory.
    // It correctly points to `public/favicon.ico`
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7735440487927394"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
