import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import React, { useEffect, useState } from "react";
import styles from "./EducationalDetails.module.css";
import Button from "@/UI/Button/Button";
import SelectDegree from "./SelectDegree";
import DegreeDetails from "./DegreeDetails";
import useInput from "@/hooks/use-Input";
import {
  BooleanValidation,
  fileLastModifiedValidation,
  fromDateValidation,
  fullNameValidation,
  nameValidation,
  toDateValidation,
} from "@/components/InputValidations/InputValidations";
// Shared Tailwind CSS classes

const loginScreenData = {
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in.",
  image: "EnterDetailsScreen.svg",
};

const EducationalDetails = () => {
  const [educationDetailsFilled, setEducationDetailsFilled] = useState(null);

  const InstituteNameInput = useInput({ validateValue: fullNameValidation });
  const SpecializationInInput = useInput({ validateValue: fullNameValidation });

  const StillPursuingInput = useInput({ validateValue: BooleanValidation });

  const degreeStartedOnInput = useInput({ validateValue: fromDateValidation });
  const degreeCompletedOnInput = useInput({
    validateValue: (value) => toDateValidation(fromDateValidation.value, value),
  });

  const resumeInput = useInput({ validateValue: fileLastModifiedValidation });

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    if (educationDetailsFilled) {
      setFormIsValid(
        InstituteNameInput.isValid &&
          SpecializationInInput.isValid &&
          StillPursuingInput.isValid &&
          degreeStartedOnInput.isValid &&
          degreeCompletedOnInput.isValid &&
          resumeInput.isValid
      );
    }
  }, [
    InstituteNameInput.isValid,
    SpecializationInInput.isValid,
    StillPursuingInput.isValid,
    degreeStartedOnInput.isValid,
    degreeCompletedOnInput.isValid,
    resumeInput.isValid,
    educationDetailsFilled,
  ]);

  let CurrentComponent;
  if (educationDetailsFilled === null || !educationDetailsFilled) {
    CurrentComponent = (
      <SelectDegree setEducationDetailsFilled={setEducationDetailsFilled} />
    );
  } else {
    CurrentComponent = (
      <DegreeDetails
        InstituteNameInput={InstituteNameInput}
        SpecializationInInput={SpecializationInInput}
        StillPursuingInput={StillPursuingInput}
        degreeStartedOnInput={degreeStartedOnInput}
        degreeCompletedOnInput={degreeCompletedOnInput}
        resumeInput={resumeInput}
      />
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        smallFrame={false}
        classForMainContent={`${styles.mainContent} bg-gray-50 `}
        classForFrame={styles.frame}
      >
        {CurrentComponent}
      </SignUpOrLoginContainer>
    </div>
  );
};

export default EducationalDetails;
