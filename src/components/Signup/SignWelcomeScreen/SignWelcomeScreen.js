import Button from "@/components/UI/Button/Button";
import CustomImage from "@/components/UI/Image/Image";
import VRPILogo from "@/components/VRPILogo/VRPILogo";
import styles from "./SignWelcomeScreen.module.css";
import { useRouter } from "next/router";
const SignWelcomeScreen = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <VRPILogo className={styles.logo} />

      <h1 className={styles.title}>Sign-up Page</h1>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            router.push("/sign-up/job-seeker");
          }}
          className={styles.button}
        >
          Job Seeker
        </Button>
        <Button
          onClick={() => {
            router.push("/sign-up/job-provider");
          }}
          className={styles.button}
        >
          Job Provider
        </Button>
      </div>
    </div>
  );
};

export default SignWelcomeScreen;
