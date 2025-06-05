"use client";
import Image from "next/image";
import styles from "./HeadOfMinistry.module.css";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

export default function HeadOfMinistry() {
  return (
    <div className={styles.headMinistrySection}>
      <h2 className={styles.sectionTitle}>Meet the Head of Ministry</h2>
      <div className={styles.headMinistryCard}>
        <div className={styles.headMinistryAvatarWrapper}>
          <Image
            src="/assets/pastor-jose.png" // Replace with the actual path to the avatar image
            alt="Pastor . Joselyn Mutoni"
            width={120}
            height={120}
            className={styles.headMinistryAvatar}
            priority
          />
        </div>
        <div className={styles.headMinistryDetails}>
          <h3 className={styles.headMinistryName}>Pastor . Joselyn Mutoni</h3>
          <p className={styles.headMinistryTitle}>Head Pastor & Founder</p>
          <div className={styles.headMinistryContact}>
            <a
              href="mailto:pastmutoniministry@gmail.com"
              className={styles.headMinistryLink}
            >
              <MdEmail size={20} style={{ verticalAlign: "middle" }} />{" "}
              pastmutoniministry@gmail.com
            </a>
            <span className={styles.headMinistryContactDivider}>|</span>
            <a
              href="tel:+250 784372 611"
              className={styles.headMinistryLink}
            >
              <MdPhone size={20} style={{ verticalAlign: "middle" }} /> +250 784
              372 611
            </a>
          </div>
          <blockquote className={styles.headMinistryInsight}>
            <FaQuoteLeft size={18} className={styles.headMinistryQuoteIcon} />
            <span>
              “Faith, hope, and love are not just words, they are the pillars
              that transform lives and communities. Let's walk this journey
              together.”
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
