import UserData from "@/data/user";
import React, { useEffect, useState } from "react";
import {
  ValueUndefinedValidations,
  fromDateValidation,
  fullNameValidation,
  toDateValidation,
} from "@/components/InputValidations/InputValidations";

import ExperienceSectionHead from "./ExperienceSectionHead";
import ExperienceForm from "./ExperienceForm";
import ExperienceActions from "./ExperienceActions";
import EducationDetails from "@/pages/sign-up/job-seeker/education-details";

const ExperienceOrInternship = () => {
  const Experiences = UserData?.WorkExperience.experiencesDetails.map(
    (experience, index) => {
      return {
        companyName: experience.companyName,
        jobTitle: experience.jobTitle,
        location: experience.location,
        salary: experience.salary,
        from: experience.startDate,
        to: experience.endDate,
        expanded: false,
        id: index,
      };
    }
  );
  const [experienceDetails, setExperienceDetails] = useState(Experiences);

  const handleAddExperience = () => {
    const newExperience = {
      companyName: "",
      jobTitle: "",
      location: "",
      salary: "",
      stillWorking: false,
      from: "",
      to: "",
      expanded: false,
    };
    setExperienceDetails([...experienceDetails, newExperience]);
    // HandleFormValidation();
  };

  useEffect(() => {
    HandleFormValidation();
    console.log(Experiences);
  }, [experienceDetails]);

  const handleInputChange = (index, value, name) => {
    const updatedExperienceDetails = experienceDetails.map((experience, i) =>
      i === index ? { ...experience, [name]: value } : experience
    );

    if (name === "stillWorking" && value) {
      updatedExperienceDetails[index].to = null;
    }

    setExperienceDetails(updatedExperienceDetails);
  };

  const handleToggleExpand = (index) => {
    const updatedExperienceDetails = experienceDetails.map((experience, i) =>
      i === index
        ? { ...experience, expanded: !experience.expanded }
        : experience
    );
    setExperienceDetails(updatedExperienceDetails);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperienceDetails = experienceDetails.filter(
      (experience) => experience.id !== id
    );
    setExperienceDetails(updatedExperienceDetails);
  };

  const handleSubmit = () => {
    console.log(experienceDetails);
    console.log(higherExperience);
  };

  const [FormIsValid, setFormIsValid] = useState(false);

  const HandleFormValidation = () => {
    const isMultiFormValid = experienceDetails.map((experience) => {
      console.log(
        fullNameValidation(experience.companyName),
        fullNameValidation(experience.jobTitle),
        ValueUndefinedValidations(experience.salary),
        fullNameValidation(experience.location),
        fromDateValidation(experience.from),
        experience.stillWorking
          ? true
          : toDateValidation(experience.from, experience.to)
      );

      return (
        fullNameValidation(experience.companyName) &&
        fullNameValidation(experience.jobTitle) &&
        ValueUndefinedValidations(experience.salary) &&
        fullNameValidation(experience.location) &&
        fromDateValidation(experience.from) &&
        (experience.stillWorking
          ? true
          : toDateValidation(experience.from, experience.to))
      );
    });
    console.log(isMultiFormValid);
    setFormIsValid(isMultiFormValid.every((isValid) => isValid));
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {experienceDetails.map((experience, index) => (
        <div key={experience.id} className="">
          <ExperienceSectionHead
            experience={experience}
            handleToggleExpand={handleToggleExpand}
            handleRemoveExperience={handleRemoveExperience}
            index={index}
          />
          {experience.expanded && (
            <ExperienceForm
              experience={experience}
              HandleFormValidation={HandleFormValidation}
              handleInputChange={handleInputChange}
              index={index}
            />
          )}
        </div>
      ))}
      <ExperienceActions
        handleAddExperience={handleAddExperience}
        handleSubmit={handleSubmit}
        FormIsValid={FormIsValid}
      />
    </div>
  );
};

export default ExperienceOrInternship;
