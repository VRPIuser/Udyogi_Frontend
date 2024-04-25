import Image from "next/image";
import styles from "./MainScreen.module.css";

const MainScreenData = {
  descriptionTitle:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit.",
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in. Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla.",
  image: "",
};

const MainScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.title}>{MainScreenData.descriptionTitle}</h1>
        <p className={styles.description}>{MainScreenData.description}</p>
      </div>
      <div className={styles.MainScreenImage}>
        {MainScreenData.image !== "" ? (
          <Image src={MainScreenData.image} alt="Main Screen Image" />
        ) : (
          <div className={styles.emptyImage}></div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
