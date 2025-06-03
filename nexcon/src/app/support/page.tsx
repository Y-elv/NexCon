"use client";
import Image from "next/image";
import styles from "./support.module.css";
import { BsBank } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function SupportPage() {
  return (
    <section className={styles.supportSection}>
      <h1 className={styles.supportHeading}>Support</h1>
      <p className={styles.supportSubheading}>
        There is <span className={styles.highlight}>no little support</span>.
        Everything you have can change someone's life.
        <br />
        Your contribution empowers hope, faith, and community.
      </p>
      <div className={styles.cardsGrid}>
        {/* MoMo Card */}
        <div className={styles.card}>
          <IoIosPhonePortrait size={36} className={styles.cardIconPhone} />
          <h3 className={styles.cardTitle}>Send via MoMo</h3>
          <p className={styles.cardLabel}>Dial this code:</p>
          <div className={styles.cardCode}>*182*8*1*232323#</div>
          <Image
            src="/assets/mtn-momo.jpg"
            alt="MoMo"
            width={64}
            height={64}
            className={styles.cardImage}
            priority
          />
          <span className={styles.cardNote}>Mobile Money | MTN Rwanda</span>
        </div>
        {/* Bank Card */}
        <div className={styles.card}>
          <BsBank size={36} className={styles.cardIconBank} />
          <h3 className={styles.cardTitle}>Bank Transfer</h3>
          <p className={styles.cardLabel}>Account Number:</p>
          <div className={styles.cardCode}>2225555533</div>
          <Image
            src="/assets/BK-1.png"
            alt="Bank of Kigali"
            width={64}
            height={64}
            className={styles.cardImage}
            priority
          />
          <span className={styles.cardNote}>Bank of Kigali</span>
        </div>
      </div>
      {/* Contact Section */}
      <div className={styles.contactBox}>
        <h2 className={styles.contactTitle}>Need Help? Contact Us</h2>
        <div className={styles.contactLinks}>
          <a href="tel:+250788123456" className={styles.contactLinkPhone}>
            <FaPhoneVolume className={styles.contactIcon} />
            +250 788 123 456
          </a>
          <a
            href="mailto:support@nexcon.org"
            className={styles.contactLinkEmail}
          >
            <MdOutlineEmail className={styles.contactIcon} />
            support@nexcon.org
          </a>
        </div>
        <p className={styles.contactText}>
          For any enquiries, support, or partnership, feel free to call or email
          us anytime.
        </p>
      </div>
      <div className={styles.gratitudeNote}>
        <p>
          Your generosity makes a real difference. Thank you for supporting
          Enihakkore International Ministry. and being part of positive change!
        </p>
      </div>
    </section>
  );
}
