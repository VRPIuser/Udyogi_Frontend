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
import { useRouter } from "next/router";

const loginScreenData = {
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in.",
  image: "EnterDetailsScreen.svg",
};

const EducationalDetails = ({ onSubmittingEducationalDetails }) => {
  const [educationDetailsFilled, setEducationDetailsFilled] = useState(null);
  const router = useRouter();

  const InstituteNameInput = useInput({ validateValue: fullNameValidation });
  const SpecializationInInput = useInput({ validateValue: fullNameValidation });

  const StillPursuingInput = useInput({
    validateValue: BooleanValidation,
    initialValue: false,
  });

  const degreeStartedOnInput = useInput({ validateValue: fromDateValidation });
  const degreeCompletedOnInput = useInput({
    validateValue: (value) =>
      toDateValidation(degreeStartedOnInput.value, value),
  });

  const resumeInput = useInput({ validateValue: fileLastModifiedValidation });

  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(() => {
    let datesValues =
      StillPursuingInput.value ||
      (degreeCompletedOnInput.isValid && degreeStartedOnInput.isValid);
    if (educationDetailsFilled) {
      setFormIsValid(
        InstituteNameInput.isValid &&
          SpecializationInInput.isValid &&
          datesValues &&
          resumeInput.isValid
      );
    }
  }, [
    InstituteNameInput,
    SpecializationInInput,
    StillPursuingInput,
    degreeStartedOnInput,
    degreeCompletedOnInput,
    resumeInput,
    educationDetailsFilled,
  ]);

  const SubmitHandler = () => {
    const EducationalDetailsData = {
      highestDegree: educationDetailsFilled,
      InstituteName: InstituteNameInput.value,
      SpecializationIn: SpecializationInInput.value,
      StillPursuing: StillPursuingInput.value,
      degreeStartedOn: degreeStartedOnInput.value,
      degreeCompletedOn: degreeCompletedOnInput.value,
      resume: resumeInput.value,
    };
    // console.log(EducationalDetailsData);
    onSubmittingEducationalDetails(EducationalDetailsData);

    router.push("/sign-up/job-seeker/preference");
  };

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
        formIsValid={formIsValid}
        SubmitHandler={SubmitHandler}
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
        <div className="my-auto max-w-2xl w-full ">{CurrentComponent}</div>
      </SignUpOrLoginContainer>
    </div>
  );
};

export default EducationalDetails;
