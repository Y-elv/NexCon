// components/Footer.tsx
import styles from "./Footer.module.css"; // Import the CSS module
import Link from "next/link"; // If using Next.js, use Link for routing

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Enihakkore International Ministry. All
        rights reserved.{" "}
        <Link href="/privacy-policy" className={styles.footerLink}>
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
}
