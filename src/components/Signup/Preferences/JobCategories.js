const JobTypes = [
  "Full-Time",
  "Part-Time",
  "Internship",
  "Contractual",
  "Permanent",
];

const experienceOptions = [
  "Fresher",
  "1-3 years",
  "3-7 years",
  "7-12 years",
  "12-20 years",
];

const workOptions = ["Onsite", "Work from Home", "Hybrid", "Remote"];
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";
import { useState } from "react";

const JobCategories = ({
  onSelectedJobType,
  onSelectedExperience,
  onSelectedWorkOptions,
}) => {
  const handleJobTypeChange = (event) => {
    const { value } = event.target;
    if (onSelectedJobType.value.includes(value)) {
      onSelectedJobType.AssignValue(
        onSelectedJobType.value.filter((type) => type !== value)
      );
    } else {
      onSelectedJobType.AssignValue([...onSelectedJobType.value, value]);
    }
  };

  const handleExperienceChange = (event) => {
    onSelectedExperience.AssignValue(event.target.value);
  };

  const handleWorkOptionsChange = (event) => {
    const { value } = event.target;
    if (onSelectedWorkOptions.value.includes(value)) {
      onSelectedWorkOptions.AssignValue(
        onSelectedWorkOptions.value.filter((option) => option !== value)
      );
    } else {
      onSelectedWorkOptions.AssignValue([
        ...onSelectedWorkOptions.value,
        value,
      ]);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 max-w-4xl mx-auto w-full mb-6 ${BorderContainerClasses}`}
    >
      <label className="block mb-2 font-medium">Select Job Type</label>
      <div className="flex flex-wrap gap-6">
        {JobTypes.map((jobType, index) => (
          <div key={index} className="mb-2">
            <input
              type="checkbox"
              value={jobType}
              checked={onSelectedJobType.value.includes(jobType)}
              onChange={handleJobTypeChange}
              className="mr-2"
              id={jobType.toLowerCase()}
            />
            <label htmlFor={jobType.toLowerCase()}>{jobType}</label>
          </div>
        ))}
      </div>
      <div>
        <label className="block mb-2 font-medium">Select Experience</label>
        <div className="flex flex-wrap gap-6">
          {experienceOptions.map((experience, index) => (
            <div key={index} className="mb-2">
              <input
                type="radio"
                value={experience}
                checked={onSelectedExperience.value === experience}
                onChange={handleExperienceChange}
                className="mr-2"
                id={experience.toLowerCase()}
              />
              <label htmlFor={experience.toLowerCase()}>{experience}</label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <label className="block mb-2 font-medium">Select Work Mode</label>
        <div className="flex flex-wrap gap-6">
          {workOptions.map((workOption, index) => (
            <div key={index} className="mb-2">
              <input
                type="checkbox"
                value={workOption}
                checked={onSelectedWorkOptions.value.includes(workOption)}
                onChange={handleWorkOptionsChange}
                className="mr-2"
                id={workOption.toLowerCase()}
              />
              <label htmlFor={workOption.toLowerCase()}>{workOption}</label>
            </div>
          ))}
        </div>
      </div>
      {/* <span
        onClick={() => {
          console.log(selectedJobType, selectedExperience, selectedWorkOptions);
        }}
      >
        Done
      </span> */}
    </div>
  );
};

export default JobCategories;
