import Dropdown from "@/components/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import styles from "./BasicInfo.module.css";

import CustomDatePicker from "@/components/UI/DatePIcker/DatePIcker";

const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const ProfileDetailsUpdateForm1 = ({ profileInputs }) => {
  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid First Name"}
        className={styles.Input}
        placeholder="First Name"
        type="text"
        inputFields={profileInputs.firstNameInput}
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={styles.Input}
        placeholder="Last Name"
        type="text"
        inputFields={profileInputs.lastNameInput}
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  const Line2 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Email"}
        className={`${styles.Input} `}
        placeholder="Mail-ID"
        inputFields={profileInputs.emailInput}
        type="email"
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Mobile Number"}
        className={`${styles.Input} `}
        placeholder="Mobile Number"
        type="text"
        inputFields={profileInputs.mobileNumberInput}
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  const Line3 = (
    <div className={styles.line1}>
      <CustomDatePicker
        onChange={(value) => profileInputs.dateOfBirthInput.AssignValue(value)}
        placeholderText={"Date of Birth"}
        selectedDate={profileInputs.dateOfBirthInput.value}
        divStyles={{ borderColor: "#00000021" }}
        formatSpanStyles={{
          backgroundColor: "#00000021",
          borderColor: "#00000021",
        }}
      />
      <Dropdown
        options={Genders}
        onSelect={(gender) => profileInputs.genderInput.AssignValue(gender)}
        placeholder="Gender"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        // mandatory
        initialValue={profileInputs.genderInput.value}
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  const Line4 = <div className={styles.line1}></div>;

  const Line5 = <div className={styles.line5}></div>;

  return (
    <div className={`${styles.container} pt-8`}>
      {Line1}
      {Line2}
      {Line3}
      {Line4}
      {Line5}
    </div>
  );
};
export default ProfileDetailsUpdateForm1;
