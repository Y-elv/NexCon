"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-blue-900 to-purple-900 border-b border-white/20 shadow-2xl animate-border-glow">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center h-24">
        {/* Logo and Ministry Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 swing-on-hover no-underline"
        >
          <Image
            src="/images/ministry logo.png"
            alt="Enihakkore International Ministry"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-white font-bold text-xl no-underline">
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
              className="no-underline hover:text-yellow-300 transition duration-300 swing-on-hover"
            >
              {text}
            </Link>
          ))}

          {/* Support Button */}
          <Link
            href="/support"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg hover:bg-yellow-600 transition duration-300 font-bold swing-on-hover"
          >
            Support
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes border-glow {
          0% {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px #fff, 0 0 20px #ff00ff;
          }
          50% {
            border-color: rgba(255, 255, 255, 0.3);
            box-shadow: 0 0 15px #0ff, 0 0 25px #ff0;
          }
          100% {
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 0 10px #fff, 0 0 20px #00f;
          }
        }

        .animate-border-glow {
          animation: border-glow 5s ease-in-out infinite;
        }

        .no-underline {
          text-decoration: none !important;
        }

        @keyframes swing {
          20% {
            transform: rotate(10deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(5deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        .swing-on-hover:hover {
          animation: swing 1s ease;
          transform-origin: top center;
          display: inline-block;
        }
      `}</style>
    </nav>
  );
}
