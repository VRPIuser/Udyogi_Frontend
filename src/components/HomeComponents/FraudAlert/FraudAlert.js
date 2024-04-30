import CustomImage from "@/components/UI/Image/Image";
import styles from "./FraudAlert.module.css";
import Section from "@/components/UI/Sections/Section";
import HideExtraText from "@/components/UI/HideExtraText/HideExtraText";

const FraudAlertData = {
  DescriptionTitle:
    "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
  descriptionPoints: [
    "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
    "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
    "Lorem ipsum dolor sit amet consectetur. Sodales eget convallis sem iaculis.",
  ],
};

const FraudAlert = () => {
  return (
    <div className={styles.container}>
      <Section
        title={"Fraud Alert"}
        contentClass={styles.section}
        style={{ margin: "2rem 0" }}
      >
        <CustomImage
          src="/assets/home/fraudImage.png"
          className={styles.image}
          classForDiv={styles.imageContainer}
          alt="Fraud Alert"
        />
        <div className={styles.content}>
          <HideExtraText lines={2} className={styles.descriptionTitle}>
            {FraudAlertData.DescriptionTitle}
          </HideExtraText>
          <ul className={styles.descriptionPoints}>
            {FraudAlertData.descriptionPoints.map((descriptionPoint, idx) => (
              <li lines={1} key={idx} className={styles.descriptionPoint}>
                {descriptionPoint}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default FraudAlert;
