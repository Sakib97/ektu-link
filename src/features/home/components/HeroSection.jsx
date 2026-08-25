import { FiLink, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        <span className={styles.dark}>SHORTEN.</span>
        <span className={styles.red}>LINK.</span>
        <span className={styles.dark}>TRACK.</span>
      </h1>
      <p className={styles.subtitle}>
        The professional URL management platform built for speed, reliability,
        and unparalleled data insights.
      </p>
      <div className={styles.inputWrapper}>
        <FiLink className={styles.inputIcon} />
        <input
          type="url"
          placeholder="Paste your long URL here..."
          className={styles.urlInput}
        />
        <button className={styles.shortenBtn}>
          SHORTEN <FiArrowRight />
        </button>
      </div>
      <div className={styles.badges}>
        <span className={styles.badge}>
          <FiCheckCircle /> No credit card required
        </span>
        <span className={styles.badge}>
          <FiCheckCircle /> Free up to 20 links
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
