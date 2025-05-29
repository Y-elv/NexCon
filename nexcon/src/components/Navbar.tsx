// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css"; // Import the CSS module

export default function Navbar() {
  return (
    <nav className={styles.mainNavbar}> {/* Use module class */}
      <div className={styles.innerContainer}> {/* Use module class */}
        {/* Logo and Ministry Name */}
        <Link
          href="/"
          className={styles.logoLink} 
        >
          <Image
            src="/images/ministry logo.png"
            alt="Enihakkore International Ministry"
            width={60}
            height={60}
            className={styles.logoImage} // Use module class
          />
          <span className={styles.ministryName}> {/* Use module class */}
            Enihakkore International Ministry
          </span>
        </Link>

        {/* Navigation Links */}
        <div className={styles.linksContainer}> {/* Use module class */}
          {["Home", "About", "Services"].map((text) => (
            <Link
              key={text}
              href={`/${
                text.toLowerCase() === "home" ? "" : text.toLowerCase()
              }`}
              className={styles.navLink} 
            >
              {text}
            </Link>
          ))}

          {/* Support Button */}
          <Link
            href="/support"
            className={styles.supportButton} 
          >
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}