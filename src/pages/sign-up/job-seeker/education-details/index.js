import EducationalDetails from "@/components/Signup/OnBoarding/EducationalDetails/EducationalDetails";
import { useState } from "react";

const EducationDetails = () => {
  const [educationalDetailsData, setEducationalDetailsData] = useState();

  const HandleUserEducationalDetailsData = (educationalDetailsData) => {
    setEducationalDetailsData(educationalDetailsData);
    console.log(educationalDetailsData);
  };

  return (
    <EducationalDetails
      onSubmittingEducationalDetails={HandleUserEducationalDetailsData}
    />
  );
};

export default EducationDetails;
