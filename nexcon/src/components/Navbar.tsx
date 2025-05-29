// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-900 to-purple-900 border-b border-white/20 shadow-2xl">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center h-24">
        {/* Logo and Ministry Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 text-white no-underline"
        >
          <Image
            src="/images/ministry logo.png"
            alt="Enihakkore International Ministry"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="font-bold text-xl">
            Enihakkore International Ministry
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-10 text-white font-semibold text-lg">
          {["Home", "About", "Services"].map((text) => (
            <Link
              key={text}
              href={`/${
                text.toLowerCase() === "home" ? "" : text.toLowerCase()
              }`}
              className="no-underline hover:text-yellow-300 transition duration-300"
            >
              {text}
            </Link>
          ))}

          {/* Support Button */}
          <Link
            href="/support"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-bold"
          >
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}
