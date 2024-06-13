import React from "react";
import UserProfileCard from "./UserProfileCard";
import UserEducationCard from "./UserEducationCard";
import UserExperienceCard from "./UserExperienceCard";
import UserData from "@/data/user";
import formatDate from "@/hooks/formatDate";

const UserProfileComponent = ({ userId }) => {
  const profileData = {
    name: UserData.firstName + " " + UserData.lastName,
    jobTitle: UserData.preference.jobRole,
    highestQualification:
      UserData.educationDetails[0].degree +
      " - " +
      formatDate(UserData.educationDetails[0].endDate).year,
    mobile: UserData.mobileNumber,
    email: UserData.email,
    totalExperience: UserData.WorkExperience.totalExperience.totalYears,
  };

  const EducationDetails = [...UserData.educationDetails];

  const ExperienceData = [...UserData.WorkExperience.experiencesDetails];

  return (
    <div className="flex flex-col md:items-start items-center md:flex-row justify-center mt-4 bg-gray-100 min-h-screen max-w-7xl mx-auto gap-4">
      {profileData && (
        <UserProfileCard profileData={profileData} userId={userId} />
      )}
      <div className="w-full md:w-2/3 flex flex-col gap-4">
        {ExperienceData && (
          <UserExperienceCard ExperienceData={ExperienceData} />
        )}
        {EducationDetails && (
          <UserEducationCard EducationDetails={EducationDetails} />
        )}
      </div>
    </div>
  );
};

export default UserProfileComponent;
