import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import UserSignupFrom from "@/components/Signup/UserSignupFrom/UserSignupFrom";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import CustomImage from "@/UI/Image/Image";
import EmailVerified from "@/components/Signup/EmailVerified/EmailVerified";
import EmailVerification from "@/components/Signup/EmailVerification/EmailVerification";
import { useState } from "react";
import BackComponent from "@/components/Signup/BackComponent/BackComponent";
const loginScreenData = {
  description:
    "You’re one step away to unlock all the possible features of Udhyogi ",
  image: "signUpScreen.svg",
};

const UserSignUpPage = () => {
  const [signUpData, setSignUpData] = useState(null);

  const [otpVerified, setOtpVerified] = useState(false);
  const GetOTP = (otp) => {
    console.log("OTP:", otp);

    if (otp !== undefined && otp !== null && otp !== "") {
      setOtpVerified(true);
    }
  };

  const UserDataHandler = (userData) => {
    console.log(userData);
    if (userData) {
      setSignUpData(userData);
    }
  };

  const MainComponent = (
    <SignUpOrLoginContainer
      screenData={loginScreenData}
      smallFrame={false}
      classForMainContent={styles.screenContainer}
    >
      <div className={styles.formFrame}>
        <div className={styles.head}>
          <BackComponent
            backFunction={() => {
              router.back();
            }}
          />
          <h1 className={styles.heading}>Sign-up</h1>
          <h3 className="mb-8 text-start w-full text-xl">
            <span className="text-orange-500">Note:</span> All fields are
            mandatory
          </h3>
        </div>
        <UserSignupFrom onSubmit={UserDataHandler} />
      </div>
    </SignUpOrLoginContainer>
  );

  const EmailVerificationComponent = (
    <>
      {otpVerified ? (
        <EmailVerified />
      ) : (
        <EmailVerification onOTPVerify={GetOTP} />
      )}
    </>
  );

  let SignUpStructure = <></>;

  if (signUpData === null || !signUpData) {
    SignUpStructure = MainComponent;
  } else {
    SignUpStructure = EmailVerificationComponent;
  }

  const router = useRouter();
  return <div styles={{ display: "flex" }}>{SignUpStructure}</div>;
};
export default UserSignUpPage;
