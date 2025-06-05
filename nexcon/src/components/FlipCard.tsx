import React, { useState } from "react";
import styles from "./FlipCard.module.css";
import type { Service } from "../types";

type FlipCardProps = {
  service: Service;
  animationDelay?: string;
};

const FlipCard: React.FC<FlipCardProps> = ({ service, animationDelay }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`${styles.flipCard} ${flipped ? styles.flipped : ""}`}
      style={{ animationDelay }}
      onClick={() => setFlipped((v) => !v)}
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === "Enter" || e.key === " ") setFlipped((v) => !v);
      }}
      role="button"
      aria-pressed={flipped}
    >
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <div className={styles.cardIcon}>{service.icon}</div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardDesc}>{service.desc}</p>
          <div className={styles.flipHint}>Click to flip</div>
        </div>
        <div className={styles.flipCardBack}>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <ul className={styles.cardDetails}>
            {service.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <div className={styles.flipHint}>Click to return</div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
