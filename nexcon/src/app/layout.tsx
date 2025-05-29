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
        {" "}
        {/* className="flex flex-col min-h-screen" has been removed */}
        <Navbar />
        {/* The 'container mx-auto p-4' Tailwind classes remain on the main tag for content sizing */}
        <main id="main-content" className="container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
