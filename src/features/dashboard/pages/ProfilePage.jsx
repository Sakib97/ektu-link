import { useCallback } from "react";
import { useProfileOverview } from "../components/profilePage/hooks";
import ProfileHeader from "../components/profilePage/ProfileHeader";
import PersonalInfo from "../components/profilePage/PersonalInfo";
import SubscriptionCard from "../components/profilePage/SubscriptionCard";
import styles from "./ProfilePage.module.css";

const ProfilePage = () => {
  const { data: overview, isLoading, isError, error } = useProfileOverview();

  const profile = overview?.profile;
  const subscription = overview?.subscription;
  const planName = subscription?.plan?.name;

  const handleSave = useCallback((key, newValue) => {
    // TODO: wire up a mutation to update users_meta
    console.log("Save", key, newValue);
  }, []);

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.statusCard}>
          <p className={styles.loadingText}>Loading profile...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.page}>
        <div className={styles.statusCard}>
          <p className={styles.errorText}>
            Failed to load profile{error?.message ? `: ${error.message}` : "."}
          </p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className={styles.page}>
        <div className={styles.statusCard}>
          <p className={styles.errorText}>No profile found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <ProfileHeader profile={profile} planName={planName} />
      <PersonalInfo profile={profile} onSave={handleSave} />
      <SubscriptionCard subscription={subscription} />
    </div>
  );
};

export default ProfilePage;
