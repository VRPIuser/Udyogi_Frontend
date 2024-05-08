import React, { useEffect, useState } from "react";
import JobRoles from "./JobRoles";
import Skills from "./skills";
import PreferredLocation from "./PreferredLocation";
import Button from "@/components/UI/Button/Button";
import JobCategories from "./JobCategories";
import useInput from "@/hooks/use-Input";
import RightSlideAnimation from "@/components/animations/RightSlideAnimation";
import { useRouter } from "next/router";

const inputClasses = "w-full p-2 border rounded-md mb-2";
const tagClasses = "bg-zinc-200 rounded-full px-3 py-1 text-sm";

const JobPreferences = () => {
  // const [selectedJobType, setSelectedJobType] = useState([]);
  // const [selectedExperience, setSelectedExperience] = useState("");
  // const [selectedWorkOptions, setSelectedWorkOptions] = useState([]);

  const selectedJobTypeInput = useInput({
    validateValue: (value) => value.length > 0,
  });

  const selectedExperienceInput = useInput({
    validateValue: (value) => value !== "",
  });

  const selectedWorkOptionsInput = useInput({
    validateValue: (value) => value.length > 0,
  });
  const selectedJobRolesInput = useInput({
    validateValue: (value) => value.length > 0,
  });
  const selectedSkillsInput = useInput({
    validateValue: (value) => value.length >= 5,
  });
  const selectedLocationsInput = useInput({
    validateValue: (value) => value.length > 0,
  });

  const [showSkills, setShowSkills] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showPreference, setShowPreference] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (!selectedJobRolesInput.isValid) {
      setShowSkills(false);
    }
    if (!selectedSkillsInput.isValid) {
      setShowLocations(false);
    }
    if (!selectedLocationsInput.isValid) {
      setShowPreference(false);
    }
  }, [
    selectedJobRolesInput.isValid,
    selectedSkillsInput.isValid,
    selectedLocationsInput.isValid,
  ]);

  const router = useRouter();

  useEffect(() => {
    setFormIsValid(
      selectedJobRolesInput.isValid &&
        selectedSkillsInput.isValid &&
        selectedLocationsInput.isValid &&
        selectedJobTypeInput.isValid &&
        selectedExperienceInput.isValid &&
        selectedWorkOptionsInput.isValid
    );
  }, [
    selectedJobTypeInput.isValid,
    selectedExperienceInput.isValid,
    selectedWorkOptionsInput.isValid,
    selectedJobRolesInput.isValid,
    selectedSkillsInput.isValid,
    selectedLocationsInput.isValid,
  ]);

  const SubmitHandler = () => {
    console.log(
      selectedJobTypeInput.value,
      selectedExperienceInput.value,
      selectedWorkOptionsInput.value,
      selectedJobRolesInput.value,
      selectedSkillsInput.value,
      selectedLocationsInput.value
    );
    router.push("/jobs");
  };

  return (
    <div className="sm:p-8 p-2 font-sans flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6">
        List out your Job preferences
      </h2>
      <JobRoles
        onSelectedJobRolesInput={selectedJobRolesInput}
        setShowSkills={setShowSkills}
      />
      <RightSlideAnimation className="w-full" show={showSkills}>
        <Skills
          onSelectedSkillsInput={selectedSkillsInput}
          setShowLocations={setShowLocations}
        />
      </RightSlideAnimation>
      <RightSlideAnimation className="w-full" show={showLocations}>
        <PreferredLocation
          onSelectedLocationsInput={selectedLocationsInput}
          setShowPreference={setShowPreference}
        />
      </RightSlideAnimation>
      <RightSlideAnimation className="w-full" show={showPreference}>
        <JobCategories
          onSelectedJobType={selectedJobTypeInput}
          onSelectedExperience={selectedExperienceInput}
          onSelectedWorkOptions={selectedWorkOptionsInput}
        />
      </RightSlideAnimation>

      <RightSlideAnimation
        className="w-full flex justify-center"
        show={showPreference}
      >
        <Button onClick={SubmitHandler} disabled={!formIsValid}>
          Submit
        </Button>
      </RightSlideAnimation>
    </div>
  );
};

export default JobPreferences;
