import UserData from "@/data/user";
import React, { useEffect, useState } from "react";
import {
  fromDateValidation,
  fullNameValidation,
  toDateValidation,
} from "@/components/InputValidations/InputValidations";

import EducationSectionHead from "./EducationSectionHead";
import EducationForm from "./EducationForm";
import EducationActions from "./EducationActions";

const Education = () => {
  const Educations = UserData?.educationDetails.map((degree) => {
    return {
      id: degree.id,
      degree: degree.degree,
      collegeName: degree.collegeName,
      specializedIn: degree.specializedIn,
      stillPursing: degree.stillPursing,
      from: degree.from,
      to: degree.to,
      expanded: false,
    };
  });
  const [educationDetails, setEducationDetails] = useState(Educations);

  const handleAddEducation = () => {
    const newEducation = {
      id: educationDetails.length + 1,
      degree: "",
      collegeName: "",
      specializedIn: "",
      stillPursing: false,
      from: "",
      to: "",
      expanded: false, // Initialize as collapsed
    };
    setEducationDetails([...educationDetails, newEducation]);
    // HandleFormValidation();
  };

  useEffect(() => {
    HandleFormValidation();
  }, [educationDetails]);

  const handleInputChange = (index, value, name) => {
    const updatedEducationDetails = educationDetails.map((education, i) =>
      i === index ? { ...education, [name]: value } : education
    );

    if (name === "stillPursing" && value) {
      updatedEducationDetails[index].to = null;
    }

    setEducationDetails(updatedEducationDetails);
  };

  const handleToggleExpand = (index) => {
    const updatedEducationDetails = educationDetails.map((education, i) =>
      i === index ? { ...education, expanded: !education.expanded } : education
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleRemoveEducation = (id) => {
    const updatedEducationDetails = educationDetails.filter(
      (education) => education.id !== id
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleSubmit = () => {
    console.log(educationDetails);
  };

  const [FormIsValid, setFormIsValid] = useState(false);

  const HandleFormValidation = () => {
    const isMultiFormValid = educationDetails.map((education) => {
      return (
        fullNameValidation(education.collegeName) &&
        fullNameValidation(education.specializedIn) &&
        fullNameValidation(education.degree) &&
        fromDateValidation(education.from) &&
        (education.stillPursing
          ? true
          : toDateValidation(education.from, education.to))
      );
    });

    setFormIsValid(isMultiFormValid.every((isValid) => isValid));
  };

  return (
    <div className="w-full flex flex-col gap-4 mt-4">
      {educationDetails.map((education, index) => (
        <div key={education.id} className="">
          <EducationSectionHead
            education={education}
            handleToggleExpand={handleToggleExpand}
            handleRemoveEducation={handleRemoveEducation}
            index={index}
          />
          {education.expanded && (
            <EducationForm
              education={education}
              HandleFormValidation={HandleFormValidation}
              handleInputChange={handleInputChange}
              index={index}
            />
          )}
        </div>
      ))}
      <EducationActions
        handleAddEducation={handleAddEducation}
        handleSubmit={handleSubmit}
        FormIsValid={FormIsValid}
      />
    </div>
  );
};

export default Education;
