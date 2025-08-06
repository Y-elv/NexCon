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

      {/* Our Story Section */}
      <h2 className={styles.sectionTitle}>Our Story</h2>
      <section className={styles.ourStorySection}>
        <p>
          Enihakkore International Ministry began with a simple vision: to be a wellspring of hope and transformation for all who thirst for God’s presence. Inspired by the story of Samson in Judges 15:19, our name means “spring of the caller,” reminding us that God hears and answers every cry. What started as a small gathering of passionate believers has grown into a thriving, diverse community united by faith, compassion, and a desire to serve. Over the years, we have witnessed countless lives changed—broken hearts healed, families restored, and individuals empowered to walk in their God-given purpose. Our journey is marked by prayer, perseverance, and a deep commitment to sharing the love of Christ in practical ways. Today, we continue to reach out, build up, and send forth people who will impact their world for Jesus. Whether you are new to faith or seeking a place to belong, our story is still being written—and you are invited to be part of it.
        </p>
      </section>

      {/* Mission/Vision Section */}
      <div className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Vision & Mission</h2>
        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h3>Our Vision</h3>
            <p>
              Our vision is to see communities and nations transformed by the power of the Gospel. We dream of a world where love, compassion, and justice are not just ideals, but realities lived out daily. We envision families restored, the brokenhearted healed, and every person discovering their true identity and purpose in Christ. Through worship, teaching, and outreach, we seek to be a beacon of hope and a catalyst for positive change—locally and globally.
            </p>
          </div>
          <div className={styles.missionCard}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to lead individuals into a deeper, life-changing relationship with God. We are committed to fostering spiritual growth, equipping believers to serve, and meeting practical needs in our community. Through discipleship, prayer, and acts of kindness, we strive to reflect the heart of Jesus in all we do. We believe that every person has a unique calling, and we are here to encourage, support, and empower you to fulfill it.
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
              We believe the Bible is the inspired and living Word of God—our ultimate guide for faith, life, and purpose. Its timeless truths shape our beliefs, direct our actions, and offer hope for every season. We encourage everyone to read, study, and apply God’s Word daily, trusting that it brings wisdom, comfort, and transformation.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Salvation">
              <FaCross size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Salvation</h4>
            <p className={styles.beliefDesc}>
              We believe salvation is a gift from God, received by grace through faith in Jesus Christ alone. Through His death and resurrection, we are forgiven, restored, and given new life. No matter your past, God’s love and mercy are available to you today. We celebrate every story of redemption and invite you to experience the joy of knowing Christ personally.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Community">
              <RiCommunityFill size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Community</h4>
            <p className={styles.beliefDesc}>
              We believe in the power of authentic community. God created us to live in relationship—with Him and with one another. At Enihakkore, we value fellowship, unity, and serving each other in love. We strive to be a safe, welcoming place where everyone can grow, belong, and make a difference together.
            </p>
          </div>
          <div className={styles.beliefCard}>
            <span className={styles.beliefIcon} aria-label="Prayer">
              <GiPrayer size={44} color="#4f46e5" />
            </span>
            <h4 className={styles.beliefTitle}>Prayer</h4>
            <p className={styles.beliefDesc}>
              We believe prayer is powerful and essential. It is our lifeline to God—a place where we find strength, guidance, and peace. We are committed to praying for one another, our community, and the world. Through prayer, we have seen miracles, breakthroughs, and lives forever changed.
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
