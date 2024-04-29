import WorkExperienceForm from "@/components/Signup/OnBoarding/WorkExperienceForm/WorkExperienceForm";
import { useState } from "react";

const WorkExperience = () => {
  const [experienceData, setExperienceData] = useState(null);

  const HandleUserExperienceData = (experience) => {
    setExperienceData(experience);
    console.log(experienceData);
  };

  return <WorkExperienceForm onSubmitExperience={HandleUserExperienceData} />;
};

export default WorkExperience;
