import { FiUpload } from "react-icons/fi";
import styles from "./ProfileHeader.module.css";

const ProfileHeader = ({ profile, planName }) => {
  const initials = (profile.name || "?")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatarGroup}>
          {profile.avatar_url ? (
            <img
              src={profile.avatar_url}
              alt={profile.name}
              className={styles.avatarImg}
            />
          ) : (
            <div className={styles.avatar}>{initials}</div>
          )}
          <div>
            <div className={styles.nameRow}>
              <h2 className={styles.name}>{profile.name}</h2>
              {planName && <span className={styles.badge}>{planName}</span>}
            </div>
            <p className={styles.email}>{profile.email}</p>
          </div>
        </div>
        <button className={styles.avatarBtn}>
          <FiUpload /> Change Avatar
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
