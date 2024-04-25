import CustomDatePicker from "@/UI/DatePIcker/DatePIcker";
import Dropdown from "@/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/UI/Input/InputWithInvalidText";
import styles from "./UserSignupFrom.module.css";
import useInput from "@/hooks/use-Input";
import {
  confirmPasswordValidation,
  emailValidation,
  mobileNumberValidation,
  nameValidation,
  passwordValidation,
} from "@/components/InputValidations/InputValidations";
import { useEffect, useState } from "react";
import LoadingButton from "@/UI/LoadingButton/LoadingButton";
import Button from "@/UI/Button/Button";
import { useRouter } from "next/router";

const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const UserSignupFrom = () => {
  const firstNameInput = useInput({ validateValue: nameValidation });
  const lastNameInput = useInput({ validateValue: nameValidation });

  const mobileNumberInput = useInput({ validateValue: mobileNumberValidation });
  // const DOBInput = useInput({ validateValue: nameValidation });
  const [gender, setGender] = useState();
  const emailInput = useInput({ validateValue: emailValidation });
  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, passwordInput.value),
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setFormIsValid(
      firstNameInput.isValid &&
        lastNameInput.isValid &&
        mobileNumberInput.isValid &&
        emailInput.isValid &&
        passwordInput.isValid &&
        confirmPasswordInput.isValid &&
        gender
    );
  }, [
    firstNameInput.isValid,
    lastNameInput.isValid,
    mobileNumberInput.isValid,
    emailInput.isValid,
    passwordInput.isValid,
    confirmPasswordInput.isValid,
    gender,
  ]);

  const submitHandler = () => {
    console.log(
      firstNameInput.value,
      lastNameInput.value,
      mobileNumberInput.value,
      emailInput.value,
      passwordInput.value,
      confirmPasswordInput.value,
      gender
    );

    router.push("/sign-up/job-seeker/email-OTP-verification");
  };

  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid First Name"}
        className={styles.Input}
        inputFields={{
          placeholder: "First Name",
          value: firstNameInput.value,
          isInvalid: firstNameInput.hasError,
          onBlurHandler: firstNameInput.validateValueHandler,
          onFocusHandler: firstNameInput.focusHandler,
          onChange: firstNameInput.valueChangeHandler,
          type: "text",
          isTouched: firstNameInput.isFocused,
        }}
        mandatory="true"
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={styles.Input}
        inputFields={{
          placeholder: "Last Name",
          value: lastNameInput.value,
          isInvalid: lastNameInput.hasError,
          onBlurHandler: lastNameInput.validateValueHandler,
          onFocusHandler: lastNameInput.focusHandler,
          onChange: lastNameInput.valueChangeHandler,
          type: "text",
          isTouched: lastNameInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  const Line2 = (
    <div className={styles.line2}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Mobile Number"}
        className={`${styles.Input} `}
        inputFields={{
          placeholder: "Mobile Number",
          value: mobileNumberInput.value,
          isInvalid: mobileNumberInput.hasError,
          onBlurHandler: mobileNumberInput.validateValueHandler,
          onFocusHandler: mobileNumberInput.focusHandler,
          onChange: mobileNumberInput.valueChangeHandler,
          type: "text",
          isTouched: mobileNumberInput.isFocused,
        }}
        mandatory="true"
      />
      <Dropdown
        options={Genders}
        onSelect={(gender) => setGender(gender)}
        placeholder="Gender"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
      />
    </div>
  );

  const Line3 = (
    <div className={styles.line3}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Email"}
        className={`${styles.Input} `}
        inputFields={{
          placeholder: "Mail-ID",
          value: emailInput.value,
          isInvalid: emailInput.hasError,
          onBlurHandler: emailInput.validateValueHandler,
          onFocusHandler: emailInput.focusHandler,
          onChange: emailInput.valueChangeHandler,
          type: "email",
          isTouched: emailInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  const Line4 = (
    <div className={styles.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${styles.Input} `}
        inputFields={{
          placeholder: "Password",
          value: passwordInput.value,
          isInvalid: passwordInput.hasError,
          onBlurHandler: passwordInput.validateValueHandler,
          onFocusHandler: passwordInput.focusHandler,
          onChange: passwordInput.valueChangeHandler,
          type: "password",
          isTouched: passwordInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  const Line5 = (
    <div className={styles.line5}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Confirm Password"}
        className={`${styles.Input} `}
        inputFields={{
          placeholder: "Confirm Password",
          value: confirmPasswordInput.value,
          isInvalid: confirmPasswordInput.hasError,
          onBlurHandler: confirmPasswordInput.validateValueHandler,
          onFocusHandler: confirmPasswordInput.focusHandler,
          onChange: confirmPasswordInput.valueChangeHandler,
          type: "password",
          isTouched: confirmPasswordInput.isFocused,
        }}
        mandatory="true"
      />
    </div>
  );

  return (
    <div className={styles.container}>
      {Line1}
      {Line2}
      {Line3}
      {Line4}
      {Line5}
      <div className={styles.btns}>
        <LoadingButton
          className={formIsValid ? styles.submitBtn : `${styles.disabled}`}
          disabled={!formIsValid}
          style={{ backgroundColor: !formIsValid && "#ccc" }}
          text={"Signup"}
          loaderColor="white"
          isLoading={false}
          onClick={submitHandler}
        />
        <div className={styles.line}>
          <div className={styles.lineOn}></div>
          <span className={styles.or}>Don’t have an Account?</span>
        </div>
        <Button
          onClick={() => {
            router.push("/sign-in");
          }}
          className={styles.signInBtn}
        >
          Sign-in
        </Button>
      </div>
    </div>
  );
};
export default UserSignupFrom;
