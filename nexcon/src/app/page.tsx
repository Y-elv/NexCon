// app/page.tsx
// This component is a Server Component by default, unless client-side interactions are added.
"use client";
import Image from "next/image"; // Import Image component for optimized images
import Link from "next/link"; // Import Link for internal navigation
import styles from "./page.module.css"; // Import the CSS module
import { useState, useEffect } from "react";
import { BsBank } from "react-icons/bs";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export default function HomePage() {
  const slides = [
    {
      image: "/assets/bg-ministry1.jpg",
      heading: "Centered on the Cross",
      subheading: "Our faith begins and ends at the finished work of Jesus.",
    },
    {
      image: "/assets/bg-ministry2.jpg",
      heading: "Alive in Praise and Worship",
      subheading:
        "Join a vibrant community celebrating God’s presence together.",
    },
    {
      image: "/assets/bg-ministry3.jpg",
      heading: "United in the Word",
      subheading: "We grow together as we hold fast to God’s Word.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Image slider */}
        {slides.map((slide, idx) => (
          <Image
            key={slide.image}
            src={slide.image}
            alt={slide.heading}
            layout="fill"
            objectFit="cover"
            quality={90}
            priority={idx === 0}
            className={`${styles.heroImage} ${
              idx === current ? styles.active : styles.inactive
            }`}
          />
        ))}
        {/* Content transitions with slide */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>{slides[current].heading}</h1>
          <p className={styles.heroSubheading}>{slides[current].subheading}</p>
          <div className={styles.heroCtaGroup}>
            <Link href="/about" className={styles.heroCtaPrimary}>
              Learn More About Us
            </Link>
            <Link href="/services" className={styles.heroCtaSecondary}>
              Explore Our Services
            </Link>
          </div>
          {/* Optional: Add slide indicators */}
          <div className={styles.heroIndicators}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={
                  idx === current
                    ? styles.heroIndicatorActive
                    : styles.heroIndicator
                }
                onClick={() => setCurrent(idx)}
                aria-label={`Show slide ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Previous Preachers Section */}
      <section className={styles.youtubeSection}>
        <h2 className={styles.youtubeTitle}>Previous Preachers</h2>
        <div className={styles.youtubeCardList}>
          {/* Card 1 */}
          <a
            href="https://www.youtube.com/watch?v=XKAr699zMg0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeCard}
          >
            <img
              src="/assets/youtube1.png" // Replace with actual thumbnail URL
              alt="REV EDOUARD NDORIMBANA NA PASTOR UMUTONI BATI NIGUTE URUBYIRUKO RWAKWIYEGURIRA IMANA? – Pastor . Joselyne Mutoni"
              className={styles.youtubeThumbnail}
            />
            <div className={styles.youtubeCardContent}>
              <span className={styles.youtubeCardTitle}>
                Bati nigute urubyiruko rwakwegera Imana? – Pastor . Joselyne
                Mutoni
              </span>
            </div>
          </a>
          {/* Card 2 */}
          <a
            href="https://www.youtube.com/watch?v=aMfrhGYhixg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeCard}
          >
            <img
              src="/assets/youtube2.png"
              alt="Walking in Love – Pastor . Joselyne Mutoni"
              className={styles.youtubeThumbnail}
            />
            <div className={styles.youtubeCardContent}>
              <span className={styles.youtubeCardTitle}>
                Amagambo akomeye ku bamenyera Imana – Pastor . Joselyne Mutoni
              </span>
            </div>
          </a>
          {/* Card 3 */}
          <a
            href="https://www.youtube.com/watch?v=vJEBtrb5kX0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeCard}
          >
            <img
              src="/assets/youtube3.png"
              alt="Hope for Tomorrow – Pastor . Joselyne Mutoni"
              className={styles.youtubeThumbnail}
            />
            <div className={styles.youtubeCardContent}>
              <span className={styles.youtubeCardTitle}>
                Amagambo akomeye ku bamenyera Imana Part 2 – Pastor . Joselyne
                Mutoni
              </span>
            </div>
          </a>
        </div>
        <a
          href="https://www.youtube.com/@PastorMutoniMinistries"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.youtubeButton}
        >
          Watch More on our YouTube Channel
        </a>
      </section>

      {/* Mission/Vision Section */}
      <section className={styles.missionSection}>
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
      </section>

      {/* Services Section */}

      {/* <section className={styles.servicesSection}>
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
              Youth Discipleship & Education
            </h3>
            <p className={styles.serviceCardDescription}>
              Grow in faith through our Bible studies, workshops, and
              educational programs for men, women, youth, and children of all
              ages.
            </p>
            <Link
              href="/services#discipleship"
              className={styles.serviceCardLink}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section> */}

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
            <div className={styles.cardCode}>*182*8*1*0794438069#</div>
            <div className={styles.cardName}>Joselyne Mutoni</div>{" "}
            {/* Add this line */}
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
            <div className={styles.cardCode}>4003100468160</div>
            <div className={styles.cardName}>Joselyne Mutoni</div>{" "}
            {/* Add this line */}
            <Image
              src="/assets/equity.png"
              alt="Bank of Kigali"
              width={64}
              height={64}
              className={styles.cardImage}
              priority
            />
            <span className={styles.cardNote}>Equity Bank</span>
          </div>
        </div>
        {/* Contact Section */}
        <div className={styles.contactBox}>
          <h2 className={styles.contactTitle}>Contact Us</h2>
          <div className={styles.contactLinks}>
            <a href="tel:+250784372611" className={styles.contactLinkPhone}>
              <FaPhoneVolume className={styles.contactIcon} />
              +250 784 372 611
            </a>
            <a
              href="mailto:pastmutoniministry@gmail.com"
              className={styles.contactLinkEmail}
            >
              <MdOutlineEmail className={styles.contactIcon} />
              pastmutoniministry@gmail.com
            </a>
          </div>
          <p className={styles.contactText}>
            For any enquiries, support, or partnership, feel free to call or
            email us anytime.
          </p>
        </div>
        <div className={styles.gratitudeNote}>
          <p>
            Your generosity makes a real difference. Thank you for supporting
            Enihakkore International Ministry. and being part of positive
            change!
          </p>
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
