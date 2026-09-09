import { useState, useCallback, useEffect } from "react";
import { FiEdit3, FiCheck, FiX } from "react-icons/fi";
import styles from "./EditableField.module.css";

const EditableField = ({ label, value, multiline, readonlyForever, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value ?? "");

  useEffect(() => {
    setDraft(value ?? "");
  }, [value]);

  const accept = useCallback(() => {
    onSave(draft);
    setEditing(false);
  }, [draft, onSave]);

  const reject = useCallback(() => {
    setDraft(value ?? "");
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
            <button
              className={`${styles.actionBtn} ${styles.rejectBtn}`}
              onClick={reject}
              aria-label="Reject"
            >
              <FiX />
            </button>
          </>
        ) : (
          <>
            {multiline ? (
              <div className={styles.readonlyTextarea}>{value || "—"}</div>
            ) : (
              <div className={styles.readonly}>{value || "—"}</div>
            )}
            {!readonlyForever && (
              <button
                className={styles.editBtn}
                onClick={() => setEditing(true)}
                aria-label="Edit"
              >
                <FiEdit3 />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default EditableField;
