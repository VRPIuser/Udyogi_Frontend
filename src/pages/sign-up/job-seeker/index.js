import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import UserSignupFrom from "@/components/Signup/UserSignupFrom/UserSignupFrom";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import CustomImage from "@/UI/Image/Image";
const loginScreenData = {
  description:
    "You’re one step away to unlock all the possible features of Udhyogi ",
  image: "signUpScreen.svg",
};

const UserSignUpForm = () => {
  const router = useRouter();
  return (
    <div styles={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        smallFrame={false}
        classForMainContent={styles.screenContainer}
      >
        <div className={styles.container}>
          <div className={styles.formFrame}>
            <div className={styles.head}>
              <div
                className={styles.BackBtn}
                onClick={() => {
                  router.back();
                }}
              >
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
              <h1 className={styles.heading}>Sign-up</h1>
            </div>
            <UserSignupFrom />
          </div>
        </div>
      </SignUpOrLoginContainer>
    </div>
  );
};
export default UserSignUpForm;
