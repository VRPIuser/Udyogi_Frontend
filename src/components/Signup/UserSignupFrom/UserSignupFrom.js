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

const UserSignupFrom = ({ onSubmit }) => {
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
    // console.log(
    //   firstNameInput.value,
    //   lastNameInput.value,
    //   mobileNumberInput.value,
    //   emailInput.value,
    //   passwordInput.value,
    //   confirmPasswordInput.value,
    //   gender
    // );
    onSubmit({
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      mobileNumber: mobileNumberInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      gender: gender.value,
    });

    // router.push("/sign-up/job-seeker/email-OTP-verification");
  };

  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid First Name"}
        className={styles.Input}
        placeholder="First Name"
        type="text"
        inputFields={firstNameInput}
        mandatory="true"
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={styles.Input}
        placeholder="Last Name"
        type="text"
        inputFields={lastNameInput}
        mandatory="true"
      />
    </div>
  );

  const Line2 = (
    <div className={styles.line2}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Mobile Number"}
        className={`${styles.Input} `}
        placeholder="Mobile Number"
        type="text"
        inputFields={mobileNumberInput}
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
        placeholder="Mail-ID"
        inputFields={emailInput}
        type="email"
        mandatory="true"
      />
    </div>
  );

  const Line4 = (
    <div className={styles.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${styles.Input} `}
        placeholder="Password"
        inputFields={passwordInput}
        type="password"
        mandatory="true"
      />
    </div>
  );

  const Line5 = (
    <div className={styles.line5}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Confirm Password"}
        className={`${styles.Input} `}
        placeholder="Confirm Password"
        inputFields={confirmPasswordInput}
        type="password"
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
