import Dropdown from "@/components/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import styles from "./BasicInfo.module.css";

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
        colorTheme="#00000021"
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Last Name"}
        className={styles.Input}
        placeholder="Last Name"
        type="text"
        inputFields={profileInputs.lastNameInput}
        colorTheme="#00000021"
      />
    </div>
  );

  const Line2 = (
    <div className={styles.line1}>
      <Dropdown
        options={Genders}
        onSelect={(gender) => profileInputs.genderInput.AssignValue(gender)}
        placeholder="Gender"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        // mandatory
        initialValue={profileInputs.genderInput.value}
        colorTheme="#00000021"
      />

      <InputWithInvalidText
        ErrorMessage={"Invalid Mobile Number"}
        className={`${styles.Input} `}
        placeholder="Mobile Number"
        type="text"
        inputFields={profileInputs.mobileNumberInput}
        colorTheme="#00000021"
      />
    </div>
  );

  return (
    <div className={`${styles.container} pt-8`}>
      {Line1}
      {Line2}
    </div>
  );
};
export default ProfileDetailsUpdateForm1;
