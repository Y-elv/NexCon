"use client";
import styles from "./PrivacyPolicy.module.css";
import { FaRegHandPointRight } from "react-icons/fa";

export default function PrivacyPolicy() {
  return (
    <section className={styles.privacySection}>
      <h1 className={styles.privacyHeader}>Privacy Policy</h1>
      <p className={styles.privacySubheading}>
        Your privacy is important to us at Enihakkore International Ministry.
        This policy explains how we handle data and use third-party services
        like Google AdSense.
      </p>

      <div className={styles.policyCard}>
        <h3 className={styles.policyTitle}>Google AdSense</h3>
        <p className={styles.policyText}>
          We use Google AdSense to display ads on our website. Google and its
          partners may use cookies to personalize the ads you see based on your
          visits to this and other websites.
        </p>
        <p className={styles.policyText}>
          You can manage your ad personalization settings by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.policyLink}
          >
            Google Ads Settings
          </a>
          .
        </p>
      </div>

      <div className={styles.policyCard}>
        <h3 className={styles.policyTitle}>Personal Information</h3>
        <p className={styles.policyText}>
          We do not collect personal information such as names, emails, or phone
          numbers on this website. The purpose of this website is to provide
          information about our ministry and activities.
        </p>
      </div>

      <div className={styles.policyCard}>
        <h3 className={styles.policyTitle}>External Links</h3>
        <p className={styles.policyText}>
          Some pages may contain links to external websites. We are not
          responsible for the content or privacy practices of those sites.
          Please review their policies if you visit them.
        </p>
      </div>

      <div className={styles.moreContent}>
        <h2>Questions or Concerns?</h2>
        <p>
          If you have any questions about our Privacy Policy, please{" "}
          <a href="/support" className={styles.policyLink}>
            <FaRegHandPointRight
              style={{
                color: "#4f46e5",
                fontSize: "1.25em",
                verticalAlign: "middle",
                marginRight: "0.25em",
              }}
            />
            contact us
          </a>
          . We’re here to help and clarify any of your concerns.
        </p>
      </div>
    </section>
  );
}
