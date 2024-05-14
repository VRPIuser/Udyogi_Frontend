import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import styles from "./BasicInfo.module.css";

const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const ProfileDetailsUpdateForm2 = ({ profileInputs }) => {
  const Line2 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Period"}
        className={`${styles.Input} `}
        placeholder="Notice Period"
        inputFields={profileInputs.noticePeriodInput}
        type="email"
        colorTheme="#00000021"
      />
    </div>
  );

  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Salary"}
        className={`${styles.Input} `}
        placeholder="Current Salary"
        inputFields={profileInputs.currentSalaryInput}
        type="email"
        colorTheme="#00000021"
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Salary"}
        className={`${styles.Input} `}
        placeholder="Expected Salary"
        inputFields={profileInputs.expectedSalaryInput}
        type="email"
        colorTheme="#00000021"
      />
    </div>
  );

  return (
    <div className={`${styles.container}`}>
      {Line1}
      {Line2}
    </div>
  );
};
export default ProfileDetailsUpdateForm2;
