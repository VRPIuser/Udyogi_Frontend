import CustomDatePicker from "@/components/UI/DatePIcker/DatePIcker";
import Dropdown from "@/components/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import styles from "./AdminSignUpForm.module.css";
import useInput from "@/hooks/use-Input";
import {
  ValueUndefinedValidations,
  addressValidation,
  confirmPasswordValidation,
  emailValidation,
  mobileNumberValidation,
  nameValidation,
  passwordValidation,
  yearValidation,
} from "@/components/InputValidations/InputValidations";
import { useEffect, useState } from "react";
import LoadingButton from "@/components/UI/LoadingButton/LoadingButton";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/router";
import { colorTheme } from "../../../../constants";

const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const AdminSignUpForm = ({ onSubmit }) => {
  const companyNameInput = useInput({ validateValue: nameValidation });
  const industryTypeInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const emailInput = useInput({ validateValue: emailValidation });
  const mobileNumberInput = useInput({ validateValue: mobileNumberValidation });

  const addressInput = useInput({ validateValue: addressValidation });

  const CompanyURLInput = useInput({ validateValue: nameValidation });

  const employeesInput = useInput({ validateValue: ValueUndefinedValidations });

  const establishedYearInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const incorporateIdInput = useInput({ validateValue: nameValidation });

  const passwordInput = useInput({ validateValue: passwordValidation });
  const confirmPasswordInput = useInput({
    validateValue: (value) =>
      confirmPasswordValidation(value, passwordInput.value),
  });

  const [formIsValid, setFormIsValid] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setFormIsValid(
      companyNameInput.isValid &&
        industryTypeInput.isValid &&
        mobileNumberInput.isValid &&
        emailInput.isValid &&
        addressInput.isValid &&
        employeesInput.isValid &&
        establishedYearInput.isValid &&
        incorporateIdInput.isValid &&
        passwordInput.isValid &&
        confirmPasswordInput.isValid
    );

    console.log(
      industryTypeInput.isValid,
      establishedYearInput.isValid,
      employeesInput.isValid
    );
  }, [
    companyNameInput.isValid,
    industryTypeInput.isValid,
    mobileNumberInput.isValid,
    emailInput.isValid,
    passwordInput.isValid,
    confirmPasswordInput.isValid,
    addressInput.isValid,
    employeesInput.isValid,
    establishedYearInput.isValid,
    incorporateIdInput.isValid,
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
      firstName: companyNameInput.value,
      lastName: industryTypeInput.value,
      mobileNumber: mobileNumberInput.value,
      email: emailInput.value,
      address: addressInput.value,
      CompanyURL: CompanyURLInput.value,
      employees: employeesInput.value,
      establishedYear: establishedYearInput.value,
      incorporateId: incorporateIdInput.value,
      password: passwordInput.value,
    });

    // router.push("/sign-up/job-seeker/email-OTP-verification");
  };

  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Company Name"}
        className={styles.Input}
        placeholder="Company Name"
        type="text"
        inputFields={companyNameInput}
        mandatory="true"
        colorTheme={colorTheme.input}
      />

      <Dropdown
        options={Genders}
        onSelect={(industryType) => industryTypeInput.AssignValue(industryType)}
        placeholder="Industry Type"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
        colorTheme={colorTheme.input}
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
        colorTheme={colorTheme.input}
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
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const Line4 = (
    <div className={styles.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Address"}
        className={styles.Input}
        placeholder="Address"
        type="text"
        inputFields={addressInput}
        mandatory="true"
        colorTheme={colorTheme.input}
      />
    </div>
  );
  const Line5 = (
    <div className={styles.line5}>
      <InputWithInvalidText
        ErrorMessage={"Invalid URL"}
        className={styles.Input}
        placeholder="Company URL(Optional)"
        type="text"
        inputFields={CompanyURLInput}
        mandatory="true"
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const Line6 = (
    <div className={styles.line6}>
      <Dropdown
        options={Genders}
        onSelect={(industryType) => employeesInput.AssignValue(industryType)}
        placeholder="No Of Employees"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
        colorTheme={colorTheme.input}
      />

      <Dropdown
        options={Genders}
        onSelect={(industryType) =>
          establishedYearInput.AssignValue(industryType)
        }
        placeholder="Established in Year"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        mandatory
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const Line7 = (
    <div className={styles.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid ID"}
        className={styles.Input}
        placeholder="Incorporate-ID"
        type="text"
        inputFields={incorporateIdInput}
        mandatory="true"
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const Line8 = (
    <div className={styles.line4}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Password"}
        className={`${styles.Input} `}
        placeholder="Password"
        inputFields={passwordInput}
        type="password"
        mandatory="true"
        colorTheme={colorTheme.input}
      />
    </div>
  );

  const Line9 = (
    <div className={styles.line5}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Confirm Password"}
        className={`${styles.Input} `}
        placeholder="Confirm Password"
        inputFields={confirmPasswordInput}
        type="password"
        mandatory="true"
        colorTheme={colorTheme.input}
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
      {Line6}
      {Line7}
      {Line8}
      {Line9}
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
export default AdminSignUpForm;
