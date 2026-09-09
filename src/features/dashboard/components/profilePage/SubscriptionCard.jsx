import styles from "./SubscriptionCard.module.css";

const SubscriptionCard = ({ subscription }) => {
  if (!subscription) return null;

  const planName = subscription.plan?.name;

  return (
    <div className={styles.card}>
      <h3 className={styles.sectionTitle}>Subscription</h3>
      <div className={styles.grid}>
        <div className={styles.field}>
          <label className={styles.label}>Plan</label>
          <div className={styles.value}>{planName || "Free"}</div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Status</label>
          <div className={styles.value}>
            {subscription.is_expired ? "Expired" : subscription.status}
          </div>
        </div>
        {subscription.started_at && (
          <div className={styles.field}>
            <label className={styles.label}>Started</label>
            <div className={styles.value}>
              {new Date(subscription.started_at).toLocaleDateString()}
            </div>
          </div>
        )}
        {subscription.expires_at && (
          <div className={styles.field}>
            <label className={styles.label}>Expires</label>
            <div className={styles.value}>
              {new Date(subscription.expires_at).toLocaleDateString()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
