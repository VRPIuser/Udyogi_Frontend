import { useState } from "react";
import styles from "./index.module.css";
import Experience from "@/components/Signup/OnBoarding/Experience/Experience";
import WorkExperienceForm from "@/components/Signup/OnBoarding/WorkExperienceForm/WorkExperienceForm";

const OnBoardingPage = () => {
  const [experience, setExperience] = useState(null);
  const HandleUserExperience = (experience) => {
    setExperience(experience);
    console.log(experience);
  };
  return (
    <div styles={{ display: "flex" }}>
      {experience === null || !experience ? (
        <Experience onDisclosingExperience={HandleUserExperience} />
      ) : experience === "experienced" ? (
        <WorkExperienceForm onDisclosingExperience={HandleUserExperience} />
      ) : (
        <></>
        // <Experience onDisclosingExperience={HandleUserExperience} />
      )}
    </div>
  );
};
export default OnBoardingPage;
