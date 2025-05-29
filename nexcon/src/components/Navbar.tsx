// components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css"; // Import the CSS module

export default function Navbar() {
  return (
    <nav className={styles.mainNavbar}>
      <div className={styles.innerContainer}>
        {/* Logo and Ministry Name */}
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/favicon.ico" // <-- CORRECT PATH: It refers to public/favicon.ico
            alt="Enihakkore International Ministry"
            width={60} // Explicit width
            height={60} // Explicit height
            // Remove 'layout' and 'objectFit' as they are deprecated
            // If you need object-fit behavior, apply it via CSS:
            // style={{ objectFit: 'cover' }}
            className={styles.logoImage} // Use module class
          />
          <span className={styles.ministryName}>
            Enihakkore International Ministry
          </span>
        </Link>
        {/* Navigation Links */}
        <div className={styles.linksContainer}>
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
          <Link href="/support" className={styles.supportButton}>
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
}
