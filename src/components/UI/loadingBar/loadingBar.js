import { useState, useEffect } from "react";
import styles from "./loadingBar.module.css";

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1; // Increment progress by 10% every 200ms (total of 10 increments)
        } else {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          return prevProgress;
        }
      });
    }, 20);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loadingBar}>
      <div className={styles.progress}>
        {progress}
        {" %"}
      </div>
      <div
        className={styles.progressBar}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default LoadingBar;
