import useInput from "@/hooks/use-Input";
import DescriptionsBoxes from "./DescriptionsBoxes";
import JobPostFormLine1 from "./Line1";
import JobPostFormLine2 from "./Line2";
import JobPostFormLine3 from "./Line3";
import {
  NumberValidation,
  ValueUndefinedValidations,
  descriptionValidation,
  fullNameValidation,
} from "@/components/InputValidations/InputValidations";
import LoadingButton from "@/components/UI/LoadingButton/LoadingButton";
import { useEffect, useState } from "react";

const JobPostForm = () => {
  const jobTitleInput = useInput({ validateValue: descriptionValidation });
  const experienceInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const openingsInput = useInput({ validateValue: NumberValidation });

  const mustHaveSkillsInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const educationInput = useInput({ validateValue: ValueUndefinedValidations });
  const locationInput = useInput({ validateValue: ValueUndefinedValidations });

  const employmentTypeInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const employmentModeInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const salaryLowerRangeInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const salaryUpperRangeInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const salaryMetricInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const jobDescriptionInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const responsibilitiesInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const aboutCompanyInput = useInput({
    validateValue: ValueUndefinedValidations,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      jobTitleInput.isValid &&
        experienceInput.isValid &&
        openingsInput.isValid &&
        mustHaveSkillsInput.isValid &&
        educationInput.isValid &&
        locationInput.isValid &&
        employmentTypeInput.isValid &&
        employmentModeInput.isValid &&
        salaryLowerRangeInput.isValid &&
        salaryUpperRangeInput.isValid &&
        salaryMetricInput.isValid &&
        jobDescriptionInput.isValid &&
        responsibilitiesInput.isValid &&
        aboutCompanyInput.isValid
    );
  }, [
    jobTitleInput.isValid,
    experienceInput.isValid,
    openingsInput.isValid,
    mustHaveSkillsInput.isValid,
    educationInput.isValid,
    locationInput.isValid,
    employmentTypeInput.isValid,
    employmentModeInput.isValid,
    salaryLowerRangeInput.isValid,
    salaryUpperRangeInput.isValid,
    salaryMetricInput.isValid,
    jobDescriptionInput.isValid,
    responsibilitiesInput.isValid,
    aboutCompanyInput.isValid,
  ]);

  const SubmitHandler = () => {
    console.log(
      jobTitleInput.value,
      experienceInput.value,
      openingsInput.value,
      mustHaveSkillsInput.value,
      educationInput.value,
      locationInput.value,
      employmentTypeInput.value,
      employmentModeInput.value,
      salaryLowerRangeInput.value,
      salaryUpperRangeInput.value,
      salaryMetricInput.value,
      jobDescriptionInput.value,
      responsibilitiesInput.value,
      aboutCompanyInput.value
    );
  };

  return (
    <div className="flex flex-col gap-4 ">
      <JobPostFormLine1
        jobTitleInput={jobTitleInput}
        experienceInput={experienceInput}
        openingsInput={openingsInput}
      />
      <JobPostFormLine2
        mustHaveSkillsInput={mustHaveSkillsInput}
        educationInput={educationInput}
        locationInput={locationInput}
      />
      <JobPostFormLine3
        employmentTypeInput={employmentTypeInput}
        employmentModeInput={employmentModeInput}
        salaryLowerRangeInput={salaryLowerRangeInput}
        salaryUpperRangeInput={salaryUpperRangeInput}
        salaryMetricInput={salaryMetricInput}
      />
      <DescriptionsBoxes
        jobDescriptionInput={jobDescriptionInput}
        responsibilitiesInput={responsibilitiesInput}
        aboutCompanyInput={aboutCompanyInput}
      />
      <div className="flex items-center justify-center py-8">
        <LoadingButton
          onClick={SubmitHandler}
          disabled={!formIsValid}
          isLoading={false}
          text={"Submit"}
        />
      </div>
    </div>
  );
};

export default JobPostForm;
