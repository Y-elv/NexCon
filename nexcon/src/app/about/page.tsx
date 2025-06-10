"use client";
import Link from "next/link";
import styles from "./about.module.css";
import { RiCommunityFill } from "react-icons/ri";
import { GiPrayer } from "react-icons/gi";
import { BiSolidBible } from "react-icons/bi";
import { FaCross } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import HeadOfMinistry from "@/components/HeadOfMinistry"; // Import the Head of Ministry component

export default function AboutPage() {
  return (
    <section className={styles.aboutSection}>
      {/* About Heading */}
      <h1 className={styles.aboutHeading}>About Us</h1>
      <p className={styles.aboutSubheading}>
        Enihakkore International Ministry is committed to empowering lives and
        spreading hope globally through faith, service, and love.
      </p>
      {/* Mission/Vision Section */}
      <div className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h3>Our Vision</h3>
            <p>
              To see communities transformed by the power of the Gospel, where
              love, compassion, and justice prevail, creating a global impact.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h3>Our Mission</h3>
            <p>
              To lead individuals into a deeper relationship with God, fostering
              spiritual growth and personal development through the teachings of
              Christ.
            </p>
          </div>
        </div>
      </div>

      {/* What We Believe Section */}
      <div className={styles.beliefSection}>
        <h2 className={styles.sectionTitle}>What We Believe</h2>
        <div className={styles.beliefCardGrid}>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="The Bible">
              <BiSolidBible size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>The Bible</h4>
            <p className={styles.beliefDesc}>
              We believe the scriptures are the inspired Word of God and the
              foundation for our faith and practice.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Salvation">
              <FaCross size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Salvation</h4>
            <p className={styles.beliefDesc}>
              We believe salvation is found in Jesus Christ alone, received by
              grace through faith.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Community">
              <RiCommunityFill size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Community</h4>
            <p className={styles.beliefDesc}>
              We believe in the importance of fellowship, unity, and serving one
              another in love.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Prayer">
              <GiPrayer size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Prayer</h4>
            <p className={styles.beliefDesc}>
              We believe in the power of prayer to transform lives and
              circumstances.
            </p>
          </div>
        </div>
      </div>

      {/* Head of Ministry Section */}
      <HeadOfMinistry />

      {/* YouTube Channel CTA */}
      <div className={styles.youtubeCard}>
        <h2 className={styles.youtubeTitle}>Watch Our YouTube Channel</h2>
        <p className={styles.youtubeDescription}>
          Stay inspired with messages, worship sessions, and ministry updates.
        </p>
        <Link
          href="https://www.youtube.com/@PastorMutoniMinistries"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeButton}
        >
          Visit Our YouTube Channel
        </Link>
      </div>

      {/* Address Section */}
      <div className={styles.addressSection}>
        <h2 className={styles.sectionTitle}>Our Location</h2>
        <div className={styles.singleAddressCardWrapper}>
          <div className={styles.singleAddressCard}>
            <span className={styles.addressIcon}>
              <MdLocationOn size={38} color="#4f46e5" />
            </span>
            <div>
              <h4 className={styles.addressCardTitle}>Headquarters</h4>
              <address className={styles.addressCardAddress}>
                Nyabugogo
                <br />
                City of Kigali
                <br />
                Rwanda
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <iframe
          title="Enihakkore Ministry Map"
          src="https://www.google.com/maps?q=Nyabugogo,+Kigali,+Rwanda&output=embed"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "1rem" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
