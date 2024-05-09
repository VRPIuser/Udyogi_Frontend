import Dropdown from "@/components/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import styles from "./BasicInfo.module.css";

import CustomDatePicker from "@/components/UI/DatePIcker/DatePIcker";

const Genders = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "others", label: "Others" },
];

const ProfileDetailsUpdateForm2 = ({ profileInputs }) => {
  const Line1 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Education Degree"}
        className={styles.Input}
        placeholder="Eg. MBA"
        type="text"
        inputFields={profileInputs.higherEducationInput}
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />

      <InputWithInvalidText
        ErrorMessage={"Invalid Period"}
        className={`${styles.Input} `}
        placeholder="Notice Period"
        inputFields={profileInputs.noticePeriodInput}
        type="email"
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  //   const Line2 = (
  //     <div className={styles.line1}>
  //     </div>
  //   );

  const Line3 = (
    <div className={styles.line1}>
      <Dropdown
        options={Genders}
        onSelect={(gender) => profileInputs.jobTypeInput.AssignValue(gender)}
        placeholder="Job Type"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        // mandatory
        initialValue={profileInputs.jobTypeInput.value}
        inputStyles={{ borderColor: "#00000021" }}
      />
      <Dropdown
        options={Genders}
        onSelect={(gender) => profileInputs.workModeInput.AssignValue(gender)}
        placeholder="Work Mode"
        styles={{ marginBottom: "21.6px", width: "100%" }}
        // mandatory
        initialValue={profileInputs.workModeInput.value}
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  const Line4 = (
    <div className={styles.line1}>
      <InputWithInvalidText
        ErrorMessage={"Invalid Salary"}
        className={`${styles.Input} `}
        placeholder="Current Salary"
        inputFields={profileInputs.currentSalaryInput}
        type="email"
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
      <InputWithInvalidText
        ErrorMessage={"Invalid Salary"}
        className={`${styles.Input} `}
        placeholder="Expected Salary"
        inputFields={profileInputs.expectedSalaryInput}
        type="email"
        // mandatory="true"
        inputStyles={{ borderColor: "#00000021" }}
      />
    </div>
  );

  //   const Line5 = <div className={styles.line5}></div>;

  return (
    <div className={`${styles.container}`}>
      {Line1}
      {/* {Line2} */}
      {Line3}
      {Line4}
      {/* {Line5}  */}
    </div>
  );
};
export default ProfileDetailsUpdateForm2;
