import styles from "./MenuIcon.module.css";

const MenuIcon = ({ action, show }) => {
  return (
    <div
      className={`${styles.menuIcon} ${show && styles.menuIconChange} `}
      onClick={action}
    >
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
};

export default MenuIcon;
