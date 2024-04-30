const { default: CustomImage } = require("@/components/UI/Image/Image");
import styles from "./BackComponent.module.css";
const BackComponent = ({ backFunction }) => {
  return (
    <>
      <div className={styles.BackBtn} onClick={backFunction}>
        {/* <span className={styles.arrowIcon}>&#8592;</span> */}
        <CustomImage
          src="/assets/icons/previous_p.png"
          alt="previous icon"
          width={30}
          height={30}
          classForDiv={styles.arrowIcon}
        />
        <span className={styles.backText}>Back</span>
      </div>
    </>
  );
};

export default BackComponent;
