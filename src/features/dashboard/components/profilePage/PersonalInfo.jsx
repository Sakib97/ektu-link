import EditableField from "./EditableField";
import styles from "./PersonalInfo.module.css";

const fields = [
  { key: "name", label: "Full Name", readonly: true  },
  { key: "email", label: "Email Address", readonly: true },
];

const PersonalInfo = ({ profile, onSave }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.sectionTitle}>Personal Information</h3>
      <div className={styles.grid}>
        {fields.map((f) => (
          <EditableField
            key={f.key}
            label={f.label}
            value={profile[f.key]}
            multiline={f.multiline}
            readonlyForever={f.readonly}
            onSave={(val) => onSave(f.key, val)}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
