import { FaBolt, FaLock } from "react-icons/fa";
import { BsGrid1X2Fill } from "react-icons/bs";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: <FaBolt />,
    color: "#e74c3c",
    title: "Blazing Fast",
    description:
      "Global edge network ensures your links redirect in milliseconds, anywhere in the world.",
  },
  {
    icon: <FaLock />,
    color: "#3498db",
    title: "Ironclad Security",
    description:
      "End-to-end encryption, malicious link blocking, and detailed access controls built in.",
  },
  {
    icon: <BsGrid1X2Fill />,
    color: "#1a1a2e",
    title: "Minimalist Design",
    description:
      "A clutter-free interface focused purely on managing your links efficiently without distractions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.heading}>
        Enterprise-grade utility, minimalist execution.
      </h2>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <div
              className={styles.iconBox}
              style={{ backgroundColor: `${feature.color}15`, color: feature.color }}
            >
              {feature.icon}
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
