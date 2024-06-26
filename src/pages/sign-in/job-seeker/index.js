const {
  default: SignInForm,
} = require("@/components/SignIn/SignInForm/SignInForm");
const {
  default: SignUpOrLoginContainer,
} = require("@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer");
const {
  default: BackComponent,
} = require("@/components/Signup/BackComponent/BackComponent");
const { default: Head } = require("next/head");

import { useRouter } from "next/router";
import styles from "./index.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginWithid } from "@/store/LoginState/LoginStateActions";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig/firebaseConfig";

const UserSignIn = () => {
  const router = useRouter();
  const loginScreenData = {
    description:
      "You’re one step away to unlock all the possible features of Udhyogi ",
    image: "LoginPageScreen.svg",
  };

  const [signUpData, setSignUpData] = useState(null);

  const dispatch = useDispatch();

  const SignUpDataHandler = (data) => {
    setSignUpData(data);
    console.log(data);
    const email = data.email;
    const password = data.password;

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    dispatch(loginWithid(1, "user"));
    router.push("/");
  };

  return (
    <SignUpOrLoginContainer
      screenData={loginScreenData}
      smallFrame={false}
      classForMainContent={styles.screenContainer}
    >
      <Head>
        <title>Job Seeker Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.formFrame}>
        <div className={styles.head}>
          <BackComponent
            backFunction={() => {
              router.back();
            }}
          />
          <h1 className={styles.heading}>Sign-in</h1>
        </div>
        <SignInForm onSubmitCredentials={SignUpDataHandler} role={"user"} />
      </div>
    </SignUpOrLoginContainer>
  );
};
export default UserSignIn;
