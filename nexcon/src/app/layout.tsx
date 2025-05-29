// app/layout.tsx
import "./globals.css"; // This is crucial for importing your global styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export const metadata = {
  title: "Enihakkore International Ministry",
  description:
    "Official website for Enihakkore International Ministry. Learn about our mission, services, and how to support us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id="main-content">
          {" "}
          {/* This ID is styled in globals.css */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
