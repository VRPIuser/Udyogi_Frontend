import {
  BooleanValidation,
  ValueUndefinedValidations,
  mobileNumberValidation,
  percentageValidation,
} from "@/components/InputValidations/InputValidations";
import Skills from "@/components/Signup/Preferences/skills";
import Button from "@/components/UI/Button/Button";
import UserData from "@/data/user";
import useInput from "@/hooks/use-Input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UpdateSkills = () => {
  const skillsInput = useInput({
    validateValue: ValueUndefinedValidations,
    initialValue: UserData?.preference.Skills,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(skillsInput.isValid);
    // console.log(skillsInput.value);
  }, [skillsInput.isValid]);

  const handleFormSubmit = () => {
    console.log(skillsInput.value);
  };

  const router = useRouter();

  // const [cancel, setCancel] = useState(false);

  const cancelInput = useInput({
    validateValue: percentageValidation,
  });

  const handleFormCancel = () => {
    skillsInput.reset();
    cancelInput.AssignValue(cancelInput.value + 1);
  };

  return (
    <>
      <Skills onSelectedSkillsInput={skillsInput} cancelInput={cancelInput} />
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
export default UpdateSkills;
