import { useState } from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import Education from "./Education";
import ExperienceOrInternship from "./ExperienceOrInternship";
import Skills from "./Skills";

const Profile = () => {
  const profileNavData = [
    {
      label: "Basic Info",
      value: "basicInfo",
      component: <BasicInfo />,
    },
    {
      label: "Education",
      value: "education",
      component: <Education />,
    },
    {
      label: "Experience/Internship",
      value: "experience-internship",
      component: <ExperienceOrInternship />,
    },
    {
      label: "Skills",
      value: "skills",
      component: <Skills />,
    },
  ];
  const [currentProfileNavIndex, setCurrentProfileNavIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto pb-8">
      <div className="flex gap-8 py-8">
        {profileNavData.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex justify-center items-center cursor-pointer text-lg font-medium transition-all ${
                index === currentProfileNavIndex
                  ? "text-orange-500 border-b-2 border-orange-500 text-lg font-medium"
                  : "text-gray-400 border-b-2 border-transparent"
              }`}
              onClick={() => {
                setCurrentProfileNavIndex(index);
              }}
            >
              {item.label}
            </div>
          );
        })}
      </div>
      <div>{profileNavData[currentProfileNavIndex].component}</div>
    </div>
  );
};
export default Profile;
