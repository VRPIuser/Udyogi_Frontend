import {
  emailValidation,
  passwordValidation,
} from "@/components/InputValidations/InputValidations";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PasswordValidationBox from "../PasswordValidationBox/PasswordValidationBox";
import LoadingButton from "@/components/UI/LoadingButton/LoadingButton";
import Button from "@/components/UI/Button/Button";
import CustomCheckbox from "@/components/UI/Checkbox/Checkbox";
import Link from "next/link";
import useInput from "@/hooks/use-Input";
import style from "./SignInForm.module.css";
import { colorTheme, url } from "../../../../constants";

const SignInForm = ({ onSubmitCredentials, role }) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleErrorClose = () => setErrorMessage("");

  const router = useRouter();

  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });

  useEffect(() => {
    setFormIsValid(
      emailInput.isValid && passwordInput.isValid && termsAccepted && rememberMe
    );
    if (role === "recruiter") {
      setFormIsValid(emailInput.isValid && passwordInput.isValid);
    }
  }, [
    emailInput.isValid,
    passwordInput.isValid,
    termsAccepted,
    rememberMe,
    role,
  ]);

  // const dispatch = useDispatch();

  const submitHandler = () => {
    // {
    //   email: emailInput.value.toLowerCase(),
    //   createPassword: passwordInput.value,
    // },
    onSubmitCredentials({
      email: emailInput.value.toLowerCase(),
      createPassword: passwordInput.value,
    });
  };

  const PasswordComponent = (
    <div className={style.Club} style={{ position: "relative" }}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${style.Input} `}
        placeholder="Enter your Password"
        inputFields={passwordInput}
        type="password"
        colorTheme={colorTheme.input}

        // mandatory="true"
      />
      {/* {passwordInput.isFocused && passwordInput.hasError && (
        <PasswordValidationBox enteredPassword={passwordInput.value} />
      )} */}
    </div>
  );

  const EmailComponent = (
    <InputWithInvalidText
      ErrorMessage={"Invalid Email"}
      placeholder="Enter your Email"
      className={`${style.Input} `}
      inputFields={emailInput}
      type="email"
      colorTheme={colorTheme.input}

      // mandatory="true"
    />
  );

  return (
    <div className={`${style.card} ${style.signIn}`}>
      <div style={{ width: "100%" }}>
        {EmailComponent}
        {PasswordComponent}
      </div>

      {role === "recruiter" ? (
        <div className={`${style.forgotPasswordLink} w-full flex justify-end`}>
          <Link href={`/forget-password/${role}`}>Forgot password?</Link>
        </div>
      ) : (
        <CheckboxSection
          setRememberMe={setRememberMe}
          setTermsAccepted={setTermsAccepted}
          role={role}
        />
      )}

      <LoadingButton
        className={formIsValid ? style.submitBtn : `${style.disabled}`}
        disabled={!formIsValid}
        style={{ backgroundColor: !formIsValid && "#ccc" }}
        text={"Login"}
        loaderColor="white"
        isLoading={false}
        onClick={submitHandler}
      />
      {role !== "recruiter" && (
        <>
          <div className={style.line}>
            <div className={style.lineOn}></div>
            <span className={style.or}>Don’t have an Account?</span>
          </div>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            className={style.signUpBtn}
          >
            Sign-up
          </Button>
        </>
      )}
    </div>
  );
};

const CheckboxSection = ({ setRememberMe, setTermsAccepted, role }) => (
  <div className={style.checkBoxes}>
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <div className={style.checkboxContainer}>
        <CustomCheckbox
          id="rememberMe"
          onChange={() => setRememberMe((prevState) => !prevState)}
        />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div className={style.forgotPasswordLink}>
        <Link href={`/forget-password/${role}`}>Forgot password?</Link>
      </div>
    </div>
    <div className={style.checkboxContainer} style={{ width: "100%" }}>
      <CustomCheckbox
        id="termsAccepted"
        onChange={() => setTermsAccepted((prevState) => !prevState)}
      />
      <label htmlFor="termsAccepted">
        I, agree to all the{" "}
        <a
          href={url.termsAndConditions}
          className={style.policyLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms and Conditions
        </a>
        ,{" "}
        <Link
          href={url.privacyPolicyLink}
          className={style.policyLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </Link>{" "}
        ,{" "}
        <a
          href={url.refundPolicyLink}
          className={style.policyLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Refund Policy
        </a>{" "}
        and{" "}
        <a
          href={url.shippingLink}
          className={style.policyLinks}
          target="_blank"
          rel="noopener noreferrer"
        >
          Shipping Policy
        </a>
      </label>
    </div>
  </div>
);

export default SignInForm;
