import { useState } from "react";
import styles from "./index.module.css";
import Experience from "@/components/Signup/OnBoarding/Experience/Experience";
import WorkExperienceForm from "@/components/Signup/OnBoarding/WorkExperienceForm/WorkExperienceForm";
import EducationalDetails from "@/components/Signup/OnBoarding/EducationalDetails/EducationalDetails";

const OnBoardingPage = () => {
  // let onBoardingComponent;
  // if (experience === null || !experience) {
  //   onBoardingComponent = (
  //     <Experience onDisclosingExperience={HandleUserExperience} />
  //   );
  // } else {
  //   if (experience === "experienced") {
  //     onBoardingComponent = (
  //       <WorkExperienceForm
  //         onDisclosingExperience={HandleUserExperience}
  //         onSubmitExperience={HandleUserExperienceData}
  //       />
  //     );
  //   } else if (experience === "fresher" || experience === "completed") {
  //     onBoardingComponent = <EducationalDetails />;
  //   }
  // }
  return (
    <div styles={{ display: "flex" }}>
      <Experience />
    </div>
  );
};
export default OnBoardingPage;
