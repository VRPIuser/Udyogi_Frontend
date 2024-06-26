import SignUpOrLoginContainer from "@/components/SignUpOrLoginContainer/SignUpOrLoginConatainer";
import styles from "./WorkExperienceForm.module.css";
import CustomImage from "@/components/UI/Image/Image";
import BackComponent from "../../BackComponent/BackComponent";
import HowManyWE from "./HowManyWE";
import MentionYourNP from "./MentionYourNP";
import CompanyDetails from "./CompanyDetails";
import Button from "@/components/UI/Button/Button";
import { useEffect, useState } from "react";
import useInput from "@/hooks/use-Input";
import {
  BooleanValidation,
  NoOfYearsValidation,
  ValueUndefinedValidations,
  addressValidation,
  fromDateValidation,
  fullNameValidation,
  nameValidation,
  percentageValidation,
  toDateValidation,
  yearValidation,
} from "@/components/InputValidations/InputValidations";
import { useRouter } from "next/router";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";
const loginScreenData = {
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in.",
  image: "EnterDetailsScreen.svg",
};

// const Container_Class = "bg-white border border-orange-500 p-6 rounded-2xl";

const WorkExperienceForm = ({ onSubmitExperience }) => {
  // Data Manager
  // const [Months, setMonths] = useState();

  // const HandlerMonths = (Months) => {
  //   setMonths(Months);
  // };

  const FreelancerOrNotInput = useInput({
    validateValue: BooleanValidation,
    initialValue: false,
  });

  const monthsInput = useInput({ validateValue: ValueUndefinedValidations });

  const yearsInput = useInput({ validateValue: NoOfYearsValidation });

  // const [SNPValue, setSNPValue] = useState();
  const SNPInput = useInput({ validateValue: fullNameValidation });

  const companyNameInput = useInput({ validateValue: fullNameValidation });
  const companyAddressInput = useInput({ validateValue: addressValidation });
  const jobTitleInput = useInput({ validateValue: fullNameValidation });
  const ctcInput = useInput({ validateValue: percentageValidation });

  const fromDateInput = useInput({ validateValue: fromDateValidation });

  const toDateInput = useInput({
    validateValue: (value) => toDateValidation(fromDateInput.value, value),
  });

  const stillWorkingInput = useInput({
    validateValue: BooleanValidation,
    initialValue: false,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    let topSectionIsValid =
      SNPInput.isValid && yearsInput.isValid && monthsInput.isValid;

    let companyMainDetailsAreValid = false;

    let companyDateDetailsAreValid = false;

    if (FreelancerOrNotInput.value) {
      companyDateDetailsAreValid = true;
      companyMainDetailsAreValid = true;
    } else {
      companyMainDetailsAreValid =
        companyNameInput.isValid &&
        companyAddressInput.isValid &&
        jobTitleInput.isValid &&
        ctcInput.isValid;

      companyDateDetailsAreValid =
        fromDateInput.isValid &&
        (stillWorkingInput.value || toDateInput.isValid);
    }

    setFormIsValid(
      topSectionIsValid &&
        companyDateDetailsAreValid &&
        companyMainDetailsAreValid
    );
  }, [
    SNPInput.isValid,
    yearsInput.isValid,
    monthsInput.isValid,
    companyNameInput.isValid,
    companyAddressInput.isValid,
    jobTitleInput.isValid,
    ctcInput.isValid,
    fromDateInput.isValid,
    toDateInput.isValid,
    stillWorkingInput.value,
    FreelancerOrNotInput.value,
  ]);

  const router = useRouter();

  const SubmitHandler = () => {
    onSubmitExperience({
      years: yearsInput.value,
      months: monthsInput.value,
      SNP: SNPInput.value,
      FreelancerOrNot: FreelancerOrNotInput.value,
      CompanyName: companyNameInput.value,
      CompanyAddress: companyAddressInput.value,
      JobTitle: jobTitleInput.value,
      CTC: ctcInput.value,
      FromDate: fromDateInput.value,
      ToDate: toDateInput.value,
      StillWorking: stillWorkingInput.value,
    });

    router.push("/sign-up/job-seeker/education-details");
  };

  return (
    <div style={{ display: "flex" }}>
      <SignUpOrLoginContainer
        screenData={loginScreenData}
        smallFrame={false}
        classForMainContent={`${styles.mainContent} bg-gray-50 `}
        classForFrame={styles.frame}
      >
        <div className="max-w-xl flex flex-col gap-6 mb-8">
          <BackComponent
            backFunction={() => {
              router.push("/sign-up/job-seeker/on-boarding");
            }}
          />
          <div className={`${BorderContainerClasses} bg-white`}>
            <HowManyWE monthsInput={monthsInput} yearsInput={yearsInput} />
            <MentionYourNP SNPInput={SNPInput} />
          </div>
          <div className={`${BorderContainerClasses} bg-white`}>
            <CompanyDetails
              FreelancerOrNotInput={FreelancerOrNotInput}
              companyNameInput={companyNameInput}
              companyAddressInput={companyAddressInput}
              jobTitleInput={jobTitleInput}
              ctcInput={ctcInput}
              fromDateInput={fromDateInput}
              toDateInput={toDateInput}
              stillWorkingInput={stillWorkingInput}
            />
          </div>

          <div className="flex justify-center w-full">
            <Button
              style={{
                backgroundColor: +formIsValid ? "#ff6501" : "#ccc",
              }}
              className={"w-40 bg-blue-500 text-white p-3 rounded-lg"}
              onClick={SubmitHandler}
              disabled={!formIsValid}
            >
              Continue
            </Button>
          </div>
        </div>
      </SignUpOrLoginContainer>
    </div>
  );
};

export default WorkExperienceForm;
