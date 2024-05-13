import Button from "@/components/UI/Button/Button";
import CustomImage from "@/components/UI/Image/Image";
import VRPILogo from "@/components/VRPILogo/VRPILogo";
import styles from "./SignWelcomeScreen.module.css";
import { useRouter } from "next/router";
import BackComponent from "../BackComponent/BackComponent";
const SignWelcomeScreen = ({ welcomeLinks }) => {
  const router = useRouter();
  // const SignIn = "sign-in";
  // const SignUp = "sign-up";
  // const main = signInOrSignOut === "sign-up" ? SignUp : SignIn;
  // const other = signInOrSignOut !== "sign-up" ? SignUp : SignIn;
  return (
    <div className={styles.mainContainer}>
      <BackComponent
        backFunction={() => {
          router.back();
        }}
      />
      <div className={styles.container}>
        <VRPILogo className={styles.logo} />

        <h1 className={styles.title}>{welcomeLinks.title} Page</h1>
        <div className={styles.buttons}>
          {welcomeLinks.buttonLinks.map((link, index) => {
            return (
              <Button
                key={index}
                onClick={() => {
                  router.push(link.link);
                }}
                className={styles.button}
              >
                {link.text}
              </Button>
            );
          })}

          {/* <Button
          onClick={() => {
            router.push(`/${main}/job-seeker`);
          }}
          className={styles.button}
        >
          Job Seeker
        </Button>
        <Button
          onClick={() => {
            router.push(`/${main}/job-provider`);
          }}
          className={styles.button}
        >
          Job Provider
        </Button> */}
          <div className={styles.line}>
            <div className={styles.lineOn}></div>
            <span className={styles.or}>Already have an Account?</span>
          </div>
          <Button
            onClick={() => {
              router.push(`/${welcomeLinks.switchLinks.link}`);
            }}
            className={styles.signInBtn}
          >
            {welcomeLinks.switchLinks.text}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignWelcomeScreen;
