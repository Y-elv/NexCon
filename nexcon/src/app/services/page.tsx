"use client";
import styles from "./service.module.css";
import { FaBible, FaHandHoldingHeart } from "react-icons/fa";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";
import { FaRegHandPointRight } from "react-icons/fa"; 
import { useRef } from "react";

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
    name: "Aline K.",
    text: "Bible study sessions helped me grow spiritually and connect with amazing people in my community.",
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
        {services.map((service, idx) => (
          <div
            className={styles.card}
            key={service.title}
            style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
          >
            <div className={styles.cardIcon}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Testimonies Carousel */}
      <div className={styles.testimonySection}>
        <h2 className={styles.testimonyHeader}>What People Are Saying</h2>
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

      {/* More Content Ideas */}
      <div className={styles.moreContent}>
        <h2>Want to Get Involved?</h2>
        <p>
          Join us in making a difference! Whether you want to volunteer, learn
          new skills, or support our mission, there's a place for you at
          Enihakkore. <br />
          <a href="/support" className={styles.moreContentLink}>
            <FaRegHandPointRight
              style={{
                color: "#4f46e5",
                fontSize: "1.25em",
                verticalAlign: "middle",
                marginRight: "0.25em",
              }}
            />
            Contact us
          </a>{" "}
          to find out how you can participate.
        </p>
        <ul className={styles.moreIdeasList}>
          <li>Upcoming Events & Workshops</li>
          <li>Photo Gallery from Recent Activities</li>
          <li>Volunteer Opportunities</li>
          <li>FAQ about Our Services</li>
        </ul>
      </div>
    </section>
  );
}
