import React, { useState } from "react";
import JobRoles from "./JobRoles";
import Skills from "./skills";
import PreferredLocation from "./PreferredLocation";
import Button from "@/UI/Button/Button";
import JobCategories from "./JobCategories";
import useInput from "@/hooks/use-Input";

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
    validateValue: (value) => value.length > 0,
  });
  const selectedLocationsInput = useInput({
    validateValue: (value) => value.length > 0,
  });

  const SubmitHandler = () => {
    console.log(
      selectedJobTypeInput.value,
      selectedExperienceInput.value,
      selectedWorkOptionsInput.value,
      selectedJobRolesInput.value
    );
  };

  return (
    <div className=" p-8 font-sans flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-6">
        List out your Job preferences
      </h2>
      <JobRoles onSelectedJobRolesInput={selectedJobRolesInput} />
      <Skills onSelectedSkillsInput={selectedSkillsInput} />
      <PreferredLocation onSelectedLocationsInput={selectedLocationsInput} />
      <JobCategories
        onSelectedJobType={selectedJobTypeInput}
        onSelectedExperience={selectedExperienceInput}
        onSelectedWorkOptions={selectedWorkOptionsInput}
      />
      <Button className=" hover:bg-blue-600" onClick={SubmitHandler}>
        Submit
      </Button>
    </div>
  );
};

export default JobPreferences;
