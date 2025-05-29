// app/page.tsx
// This component is a Server Component by default, unless client-side interactions are added.
import Image from "next/image"; // Import Image component for optimized images
import Link from "next/link"; // Import Link for internal navigation
import styles from "./page.module.css"; // Import the CSS module

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Image
          src="/favicon.ico" // Path to your hero image
          alt="Enihakkore International Ministry"
          layout="fill" // Makes the image fill the parent container
          objectFit="cover" // Covers the section while maintaining aspect ratio
          quality={90} // Image quality
          priority // Prioritize loading for LCP (Largest Contentful Paint)
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            Empowering Lives, Spreading Hope
          </h1>
          <p className={styles.heroSubheading}>
            Enihakkore International Ministry is dedicated to transforming
            communities through faith, service, and love.
          </p>
          <div className={styles.heroCtaGroup}>
            <Link href="/about" className={styles.heroCtaPrimary}>
              Learn More About Us
            </Link>
            <Link href="/services" className={styles.heroCtaSecondary}>
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Mission & Vision</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h3>Our Mission</h3>
            <p>
              To lead individuals into a deeper relationship with God, fostering
              spiritual growth and personal development through the teachings of
              Christ.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h3>Our Vision</h3>
            <p>
              To see communities transformed by the power of the Gospel, where
              love, compassion, and justice prevail, creating a global impact.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>What We Do</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Worship & Fellowship</h3>
            <p className={styles.serviceCardDescription}>
              Join us for uplifting worship services and connect with a vibrant
              community of believers.
            </p>
            <Link href="/services#worship" className={styles.serviceCardLink}>
              Learn More
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Community Outreach</h3>
            <p className={styles.serviceCardDescription}>
              Actively engage in initiatives that serve and uplift the less
              fortunate in our local and international communities.
            </p>
            <Link href="/services#outreach" className={styles.serviceCardLink}>
              Learn More
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>
              Discipleship & Education
            </h3>
            <p className={styles.serviceCardDescription}>
              Grow in faith through our Bible studies, workshops, and
              educational programs for all ages.
            </p>
            <Link
              href="/services#discipleship"
              className={styles.serviceCardLink}
            >
              Learn More
            </Link>
          </div>
          <div className={styles.serviceCard}>
            <h3 className={styles.serviceCardTitle}>Youth Programs</h3>
            <p className={styles.serviceCardDescription}>
              Nurturing the next generation with values, leadership skills, and
              spiritual guidance.
            </p>
            <Link href="/services#youth" className={styles.serviceCardLink}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section (e.g., Support Us) */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaHeading}>Make a Difference Today</h2>
        <p className={styles.ctaDescription}>
          Your support helps us continue our mission and expand our reach.
        </p>
        <Link href="/support" className={styles.ctaButton}>
          Partner With Us
        </Link>
      </section>
    </>
  );
}
