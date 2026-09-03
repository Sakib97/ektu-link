import { useState, useCallback } from "react";
import { FiEdit3, FiCheck, FiX, FiUpload } from "react-icons/fi";
import styles from "./ProfilePage.module.css";

const initialProfile = {
  fullName: "Alex Morgan",
  email: "alex.morgan@ektulink.com",
  username: "alexmorgan",
  company: "Ektu Global",
  bio: "Product Manager & Growth Lead at Ektu Global. Building great web experiences.",
};

const fields = [
  { key: "fullName", label: "Full Name" },
  { key: "email", label: "Email Address" },
  { key: "username", label: "Username / Handle" },
  { key: "company", label: "Company / Organization" },
  { key: "bio", label: "Bio", multiline: true, full: true },
];

const EditableField = ({ label, value, multiline, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);

  const accept = useCallback(() => {
    onSave(draft);
    setEditing(false);
  }, [draft, onSave]);

  const reject = useCallback(() => {
    setDraft(value);
    setEditing(false);
  }, [value]);

  return (
    <div className={`${styles.field} ${multiline ? styles.fieldFull : ""}`}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputRow}>
        {editing ? (
          <>
            {multiline ? (
              <textarea
                className={styles.textarea}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={3}
                autoFocus
              />
            ) : (
              <input
                className={styles.input}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                autoFocus
              />
            )}
            <button className={styles.actionBtn} onClick={accept} aria-label="Accept">
              <FiCheck />
            </button>
            <button className={`${styles.actionBtn} ${styles.rejectBtn}`} onClick={reject} aria-label="Reject">
              <FiX />
            </button>
          </>
        ) : (
          <>
            {multiline ? (
              <div className={styles.readonlyTextarea}>{value}</div>
            ) : (
              <div className={styles.readonly}>{value}</div>
            )}
            <button className={styles.editBtn} onClick={() => setEditing(true)} aria-label="Edit">
              <FiEdit3 />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);

  const handleSave = useCallback(
    (key, newValue) => setProfile((prev) => ({ ...prev, [key]: newValue })),
    [],
  );

  const initials = profile.fullName
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatarGroup}>
            <div className={styles.avatar}>{initials}</div>
            <div>
              <div className={styles.nameRow}>
                <h2 className={styles.name}>{profile.fullName}</h2>
                <span className={styles.badge}>Pro Member</span>
              </div>
              <p className={styles.email}>{profile.email}</p>
            </div>
          </div>
          <button className={styles.avatarBtn}>
            <FiUpload /> Change Avatar
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <h3 className={styles.sectionTitle}>Personal Information</h3>
        <div className={styles.grid}>
          {fields.map((f) => (
            <EditableField
              key={f.key}
              label={f.label}
              value={profile[f.key]}
              multiline={f.multiline}
              onSave={(val) => handleSave(f.key, val)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
