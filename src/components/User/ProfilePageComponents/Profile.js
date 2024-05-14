import { useState } from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import Education from "./Educations/Education";
import ExperienceOrInternship from "./ExpOrIntern/ExperienceOrInternship";
import UpdateSkills from "./UpdateSkills";
import PercentageDisplay from "./PercentageDisplay";

const Profile = () => {
  const profileNavData = [
    {
      label: "Basic Info",
      value: "Basic Information",
      component: <BasicInfo />,
    },
    {
      label: "Education",
      value: "Education",
      component: <Education />,
    },
    {
      label: "Experience/Internship",
      value: "Experience / Internship",
      component: <ExperienceOrInternship />,
    },
    {
      label: "Skills",
      value: "Skills",
      component: <UpdateSkills />,
    },
  ];
  const [currentProfileNavIndex, setCurrentProfileNavIndex] = useState(0);

  // const [prevPercentage, setPrevPercentage] = useState(80);

  const profileContainerClasses = "bg-white p-4 rounded-md shadow-sm w-full";
  const profileHeadingClasses = "text-xl font-medium";

  return (
    <div
      className="max-w-5xl mx-auto pb-8 px-4 "
      style={{ minHeight: "700px" }}
    >
      <div className="flex gap-8 py-2 items-end justify-center flex-wrap md:justify-between">
        <div className="flex gap-4 py-2 flex-wrap">
          {profileNavData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center cursor-pointer text-lg font-medium transition-all ${
                  index === currentProfileNavIndex
                    ? "text-orange-500 border-b-2 border-orange-500 text-lg font-medium"
                    : "text-gray-400 border-b-2 border-transparent hover:text-gray-600"
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
        <PercentageDisplay percentage={80} />
      </div>

      <div className="flex gap-8 w-full">
        <div className={`${profileContainerClasses}`}>
          <div className="flex justify-between">
            <h1 className={`${profileHeadingClasses}`}>
              {profileNavData[currentProfileNavIndex].value}
            </h1>
          </div>

          {profileNavData[currentProfileNavIndex].component}
        </div>
      </div>
    </div>
  );
};
export default Profile;
