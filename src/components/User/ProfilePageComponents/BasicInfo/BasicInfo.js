import {
  DOBValidation,
  ValueUndefinedValidations,
  emailValidation,
  fullNameValidation,
  mobileNumberValidation,
} from "@/components/InputValidations/InputValidations";

import useInput from "@/hooks/use-Input";
import ProfileDocs from "./ProfileDocs";
import UserData from "@/data/user";
import ProfileDetailsUpdateForm1 from "./ProfileDetailsUpdateForm";
import ProfileDetailsUpdateForm2 from "./ProfileDetailsUpdateForm2";
import JobRoles from "@/components/Signup/Preferences/JobRoles";

import PreferredLocation from "@/components/Signup/Preferences/PreferredLocation";
import JobCategories from "@/components/Signup/Preferences/JobCategories";
import { useEffect, useState } from "react";
import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/router";

const BasicInfo = () => {
  const resumeInput = useInput({ validateValue: ValueUndefinedValidations });
  const profilePhotoInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  // form-1

  const firstNameInput = useInput({
    validateValue: fullNameValidation,
    initialValue: UserData?.firstName,
  });
  const lastNameInput = useInput({
    validateValue: fullNameValidation,

    initialValue: UserData?.lastName,
  });

  const mobileNumberInput = useInput({
    validateValue: mobileNumberValidation,
    initialValue: UserData?.mobileNumber,
  });
  const genderInput = useInput({
    validateValue: ValueUndefinedValidations,

    initialValue: UserData?.gender,
  });

  // form-2

  const latestExperience = UserData?.WorkExperience.experiencesDetails.find(
    (experience) => experience.latestExperience
  );

  const noticePeriodInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.WorkExperience.noticePeriod,
  });
  const currentSalaryInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: latestExperience.salary,
  });
  const expectedSalaryInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  // Job Categories

  const totalExperience =
    UserData?.preference.experience.lowerLimit +
    "-" +
    UserData?.preference.experience.upperLimit +
    " " +
    UserData?.preference.experience.experienceMetrics;

  const totalExperienceInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: totalExperience,
  });

  const jobTypeInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.preference.jobType,
  });

  const workModeInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.preference.workMode,
  });

  // Job Roles
  const jobRolesInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.preference.jobRole,
  });

  //Job Locations
  const jobLocationsInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.preference.location,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      firstNameInput.isValid &&
        lastNameInput.isValid &&
        mobileNumberInput.isValid &&
        genderInput.isValid &&
        noticePeriodInput.isValid &&
        currentSalaryInput.isValid &&
        expectedSalaryInput.isValid &&
        totalExperienceInput.isValid &&
        jobTypeInput.isValid &&
        workModeInput.isValid &&
        jobRolesInput.isValid &&
        jobLocationsInput.isValid
    );
  }, [
    firstNameInput.isValid,
    lastNameInput.isValid,
    mobileNumberInput.isValid,
    genderInput.isValid,

    noticePeriodInput.isValid,
    currentSalaryInput.isValid,
    expectedSalaryInput.isValid,
    totalExperienceInput.isValid,
    jobTypeInput.isValid,
    workModeInput.isValid,
    jobRolesInput.isValid,
    jobLocationsInput.isValid,
  ]);

  const handleFormSubmit = () => {
    // Validation logic

    // Log all values
    console.log("Form values:", {
      firstName: firstNameInput.value,
      lastName: lastNameInput.value,
      mobileNumber: mobileNumberInput.value,
      gender: genderInput.value,
      noticePeriod: noticePeriodInput.value,
      currentSalary: currentSalaryInput.value,
      expectedSalary: expectedSalaryInput.value,
      totalExperience: totalExperienceInput.value,
      jobType: jobTypeInput.value,
      workMode: workModeInput.value,
      jobRoles: jobRolesInput.value,
      jobLocations: jobLocationsInput.value,
    });
  };

  const router = useRouter();

  const handleFormCancel = () => {
    firstNameInput.reset();
    lastNameInput.reset();
    mobileNumberInput.reset();
    genderInput.reset();

    noticePeriodInput.reset();
    currentSalaryInput.reset();
    expectedSalaryInput.reset();
    totalExperienceInput.reset();
    jobTypeInput.reset();
    workModeInput.reset();
    jobRolesInput.reset();
    jobLocationsInput.reset();

    router.reload();
  };

  return (
    <>
      <ProfileDocs
        resumeInput={resumeInput}
        profilePhotoInput={profilePhotoInput}
      />
      <ProfileDetailsUpdateForm1
        profileInputs={{
          firstNameInput,
          lastNameInput,
          mobileNumberInput,
          genderInput,
        }}
      />
      <ProfileDetailsUpdateForm2
        profileInputs={{
          noticePeriodInput,

          currentSalaryInput,
          expectedSalaryInput,
        }}
      />

      <JobRoles onSelectedJobRolesInput={jobRolesInput} />

      <PreferredLocation onSelectedLocationsInput={jobLocationsInput} />
      <JobCategories
        onSelectedJobType={jobTypeInput}
        onSelectedExperience={totalExperienceInput}
        onSelectedWorkOptions={workModeInput}
      />

      <div className="mt-4 flex justify-end gap-4">
        <Button onClick={handleFormCancel} style={{ borderRadius: "30px" }}>
          Cancel
        </Button>
        <Button
          onClick={handleFormSubmit}
          disabled={!formIsValid}
          style={{ borderRadius: "30px" }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
export default BasicInfo;
