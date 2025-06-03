"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import { RiCommunityFill } from "react-icons/ri";
import { GiPrayer } from "react-icons/gi";
import { BiSolidBible } from "react-icons/bi";
import { FaCross } from "react-icons/fa";

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
              {/* You can use another icon here if you like, for now use Bible icon as placeholder */}
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
      {/* Our Team Section */}
      <div className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamCard}>
            <Image
              src="/images/ministry-head.jpg"
              alt="Rev. Grace Emmanuel"
              width={90}
              height={90}
              className={styles.teamImage}
            />
            <h4>Rev. Grace Emmanuel</h4>
            <p>Head Pastor & Founder</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/images/assistant-pastor.jpg"
              alt="Pastor John Faith"
              width={90}
              height={90}
              className={styles.teamImage}
            />
            <h4>Pastor John Faith</h4>
            <p>Assistant Pastor</p>
          </div>
          <div className={styles.teamCard}>
            <Image
              src="/images/music-director.jpg"
              alt="Sister Hope Light"
              width={90}
              height={90}
              className={styles.teamImage}
            />
            <h4>Sister Hope Light</h4>
            <p>Music & Worship Director</p>
          </div>
        </div>
      </div>
      {/* YouTube Channel CTA */}
      <div className={styles.youtubeCard}>
        <h2 className={styles.youtubeTitle}>Watch Our YouTube Channel</h2>
        <p className={styles.youtubeDescription}>
          Stay inspired with messages, worship sessions, and ministry updates.
        </p>
        <Link
          href="https://youtube.com/@YOUR_CHANNEL" // <-- Replace with your channel URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeButton}
        >
          Visit Our YouTube Channel
        </Link>
      </div>
      {/* Ministry Head Profile */}
      <div
        className={styles.profileCard}
        tabIndex={0}
        role="button"
        onClick={() => window.open("mailto:head@ministry.org")}
      >
        <div className={styles.profileImageWrapper}>
          <Image
            src="/images/ministry-head.jpg" // <-- Place your image in public/images
            alt="Ministry Head"
            width={120}
            height={120}
            className={styles.profileImage}
          />
        </div>
        <div>
          <h3 className={styles.profileName}>Rev. Grace Emmanuel</h3>
          <p className={styles.profileTitle}>Head Pastor & Founder</p>
          <p className={styles.profileContact}>
            <a href="tel:+1234567890" className={styles.profileLink}>
              +1 234 567 890
            </a>
            <span> · </span>
            <a href="mailto:head@ministry.org" className={styles.profileLink}>
              head@ministry.org
            </a>
          </p>
        </div>
      </div>
      {/* Address Section */}
      <div className={styles.addressSection}>
        <h2 className={styles.sectionTitle}>Our Location</h2>
        <div className={styles.addressGrid}>
          <div className={styles.addressCard}>
            <h4>Headquarters</h4>
            <address>
              123 Faith Avenue,
              <br />
              City of Hope, State 45678
              <br />
              Country
            </address>
          </div>
          <div className={styles.addressCard}>
            <h4>Branch Office</h4>
            <address>
              456 Hope Street,
              <br />
              Grace Town, State 12345
              <br />
              Country
            </address>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className={styles.mapSection}>
        <iframe
          title="Enihakkore Ministry Map"
          src="https://www.google.com/maps?q=123+Faith+Avenue+City+of+Hope+45678&output=embed"
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
