// app/page.tsx
import styles from "./home.module.css"; // Import the CSS module

export default function HomePage() {
  return (
    <section className={styles.welcomeSection}>
      {" "}
      {/* Use module class */}
      <h1 className={styles.welcomeHeading}>Welcome to NexCon</h1>{" "}
      {/* Use module class */}
      <p className={styles.welcomeDescription}>
        {" "}
        {/* Use module class */}A modern landing page built with Next.js and
        custom CSS modules.
      </p>
    </section>
  );
}
