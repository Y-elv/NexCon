"use client";
import styles from "./service.module.css";
import { FaBible, FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa";
import { useRef } from "react";
import { text } from "stream/consumers";

const services = [
  {
    icon: <FaBible size={34} color="#4f46e5" />,
    title: "Spiritual Growth",
    desc: "We help the community understand and dive deeper into spiritual matters through teachings, gatherings, and one-on-one mentorship.",
  },
  {
    icon: <FaHandHoldingHeart size={34} color="#f59e42" />,
    title: "Giving Back",
    desc: "We support the poor and vulnerable by providing necessities, donations, and ongoing care—because every life matters.",
  },
  {
    icon: <MdEmojiObjects size={34} color="#10b981" />,
    title: "Practical Skills",
    desc: "We teach various skills to empower our community, such as soap making and other practical workshops for self-sufficiency.",
  },
];

const testimonies = [
  {
    name: "Sarah M.",
    text: "Learning to make soap changed my life. Now I can support my family and even teach others!",
    img: "/assets/profileAvatar.jpg",
  },
  {
    name: "John D.",
    text: "The support I received when I was in need was truly a blessing. I found hope through this ministry.",
    img: "/assets/profileAvatar.jpg",
  },
  {
    name: "Aline K.",
    text: "Bible study sessions helped me grow spiritually and connect with amazing people in my community.",
    img: "/assets/profileAvatar.jpg",
  },
  {
    name: "Peter M.",
    text: "Bible study deepened my faith and connected me with wonderful people in my community.",
    img: "/assets/profileAvatar.jpg",
  },
];

export default function ServicesPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Carousel scroll for testimonies
  const scrollCarousel = (dir: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.7;
      carouselRef.current.scrollBy({
        left: dir === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.servicesSection}>
      <h1 className={styles.servicesHeader}>Our Services</h1>
      <p className={styles.servicesSubheading}>
        Enihakkore International Ministry is devoted to making a real impact
        through faith, compassion, and practical action.
      </p>

      {/* Service Cards */}
      <div className={styles.cardsGrid}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <FaBible size={34} color="#4f46e5" />
          </div>
          <h3 className={styles.cardTitle}>Spiritual Growth</h3>
          <p className={styles.cardDesc}>
            We help the community understand and dive deeper into spiritual
            matters through teachings, gatherings, and one-on-one mentorship.
            Our Bible study groups, prayer meetings, and discipleship classes
            have helped many discover their identity in Christ, overcome life’s
            challenges, and build lasting friendships. For example, members have
            shared how regular fellowship has brought healing to their families,
            restored hope in difficult times, and inspired them to serve others
            with compassion.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <FaHandHoldingHeart size={34} color="#f59e42" />
          </div>
          <h3 className={styles.cardTitle}>Giving Back</h3>
          <p className={styles.cardDesc}>
            We support the poor and vulnerable by providing necessities,
            donations, and ongoing care—because every life matters. Our outreach
            programs have delivered food parcels to families in crisis, provided
            school supplies to children, and offered emotional support to those
            facing hardship. One family recently shared how a simple food
            package from our ministry gave them hope and strength to keep going
            during a tough season.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <MdEmojiObjects size={34} color="#10b981" />
          </div>
          <h3 className={styles.cardTitle}>Practical Skills</h3>
          <p className={styles.cardDesc}>
            We teach various skills to empower our community, such as soap
            making and other practical workshops for self-sufficiency. Many
            participants have started small businesses, improved their family’s
            well-being, and even trained others in their neighborhoods. For
            instance, after attending our workshops, several women have launched
            home-based enterprises, creating a ripple effect of empowerment and
            hope.
          </p>
        </div>
      </div>

      {/* Testimonies Carousel */}
      <div className={styles.testimonySection}>
        <h2 className={styles.testimonyHeader}>Testimonials</h2>
        <div className={styles.testimonyCarouselWrapper}>
          <button
            className={styles.carouselBtn}
            aria-label="Scroll left"
            onClick={() => scrollCarousel("left")}
          >
            <FaArrowCircleLeft />
          </button>
          <div className={styles.testimonyCarousel} ref={carouselRef}>
            {testimonies.map((t, idx) => (
              <div className={styles.testimonyCard} key={t.name + idx}>
                <img src={t.img} alt={t.name} className={styles.testimonyImg} />
                <blockquote className={styles.testimonyText}>
                  "{t.text}"
                </blockquote>
                <span className={styles.testimonyName}>- {t.name}</span>
              </div>
            ))}
          </div>
          <button
            className={styles.carouselBtn}
            aria-label="Scroll right"
            onClick={() => scrollCarousel("right")}
          >
            <FaArrowCircleRight />
          </button>
        </div>
      </div>

      {/* What You Can Expect When You Visit */}
      <section className={styles.expectSection}>
        <h2>What You Can Expect When You Visit</h2>
        <p>
          Visiting Enihakkore International Ministry is more than attending a
          service—it’s joining a family. From the moment you arrive, you’ll be
          greeted by friendly faces and a welcoming atmosphere. Our gatherings
          are filled with heartfelt worship, practical teaching, and
          opportunities to connect with others who genuinely care. Whether
          you’re new to faith or have been on your journey for years, you’ll
          find encouragement, support, and a safe space to ask questions and
          grow. Children and youth are valued and included, with age-appropriate
          programs designed to help them flourish. We believe in celebrating
          life’s milestones together, praying for one another, and walking
          through both joys and challenges as a community. No matter your
          background, you are welcome here—just as you are.
        </p>
      </section>

      {/* More Content Ideas */}
      <div className={styles.moreContent}>
        <h2>Want to Get Involved?</h2>
        <p>
          Join us in making a difference! There are many ways to participate:
        </p>
        <ul className={styles.moreIdeasList}>
          <li>
            <strong>Volunteer</strong> in our outreach programs, events, or
            children’s ministry.
          </li>
          <li>
            <strong>Contact us</strong> to learn more about our mission and how
            you can serve.
          </li>
          <li>
            <strong>Donate</strong> to support our ongoing work and help us
            reach more people in need.
          </li>
          <li>
            Attend our <strong>workshops</strong> and invite friends or family
            to join.
          </li>
        </ul>
        <p>
          <a href="/support" className={styles.moreContentLink}>
            <FaRegHandPointRight
              style={{
                color: "#4f46e5",
                fontSize: "1.25em",
                verticalAlign: "middle",
                marginRight: "0.25em",
              }}
            />
            Support the Ministry
          </a>{" "}
          or reach out to us for more information. Together, we can bring hope
          and transformation to our community!
        </p>
      </div>
    </section>
  );
}
