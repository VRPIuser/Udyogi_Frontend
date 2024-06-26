import React, { useState } from "react";
import styles from "./Checkbox.module.css"; // Import CSS for styling
const CustomCheckbox = ({ label, onChange, id }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    // console.log("Check");
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div className={styles["custom-checkbox-container"]} onClick={handleChange}>
      <input
        type="checkbox"
        className={styles["hidden-checkbox"]}
        checked={checked}
        readOnly
        id={id}
      />
      <div
        className={
          checked ? `${styles.checkMark} ${styles.checked}` : styles.checkMark
        }
      />
      <label className={styles["checkbox-label"]}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
