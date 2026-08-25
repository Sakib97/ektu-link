import styles from "./StepsSection.module.css";

const steps = [
  {
    number: "1",
    color: "#d4a017",
    label: "INPUT",
    description:
      "Paste your lengthy URL into our secure generation engine.",
  },
  {
    number: "2",
    color: "#8b1a1a",
    label: "SHORTEN",
    description:
      "Click the button to generate your clean, compact link instantly.",
  },
  {
    number: "3",
    color: "#3498db",
    label: "MANAGE",
    description:
      "Distribute your new link accross socal media, emails or texts and manage from the dashboard.",
  },
];

const StepsSection = () => {
  return (
    <section className={styles.steps}>
      <h2 className={styles.heading}>How it works</h2>
      <p className={styles.description}>Three simple steps to transform your long URLs into short, manageable links.</p>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.step}>
            <div
              className={styles.circle}
              style={{ backgroundColor: step.color }}
            >
              {step.number}
            </div>
            <span className={styles.label} style={{ color: step.color }}>
              {step.label}
            </span>
            <p className={styles.desc}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
