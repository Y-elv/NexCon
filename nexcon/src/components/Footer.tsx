// components/Footer.tsx
import styles from "./Footer.module.css"; // Import the CSS module

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} Enihakkore International Ministry. All rights reserved.
      </p>
    </footer>
  );
}
