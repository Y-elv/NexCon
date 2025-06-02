"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { SlClose } from "react-icons/sl";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  return (
    <div className={styles.innerContainer}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/favicon.ico"
            alt="NexCon Logo"
            width={50}
            height={50}
            className={styles.logoImage}
          />
          <span className={styles.ministryName}>
            Enihakkore International Ministry
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className={styles.navLink}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/support">Support</Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <button
        className={styles.menuButton}
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <SlClose size={28} /> : <CiMenuBurger size={28} />}
      </button>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
        <Link href="/" onClick={handleMenuToggle}>
          Home
        </Link>
        <Link href="/about" onClick={handleMenuToggle}>
          About
        </Link>
        <Link href="/services" onClick={handleMenuToggle}>
          Services
        </Link>
        <Link href="/support" onClick={handleMenuToggle}>
          Support
        </Link>
      </div>
    </div>
  );
}
