import RootLayout from "@/components/RootLayout/RootLayout";
import AppliedJobs from "@/components/User/MyJobs/AppliedJobs";
import WishlistComponent from "@/components/User/MyJobs/Wishlist";
import UserData from "@/data/user";
import { Component, useState } from "react";

const MyJobs = () => {
  const myJobsNavData = [
    {
      label: "Applied" + " (" + UserData?.jobApplications.length + ")",
      value: "Basic Information",
      component: <AppliedJobs />,
    },
    {
      label: "Wishlist",
      value: "Education",
      component: <WishlistComponent />,
    },
  ];
  const [currentMyJobsNavIndex, setCurrentMyJobsNavIndex] = useState(0);

  // const [prevPercentage, setPrevPercentage] = useState(80);

  // const profileContainerClasses = "bg-white p-4 rounded-md shadow-sm w-full";
  // const profileHeadingClasses = "text-xl font-medium";

  return (
    <RootLayout>
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-semibold">My Jobs</h1>
        <div className="flex gap-8 py-4">
          {myJobsNavData.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center cursor-pointer text-lg font-medium transition-all text-center ${
                  index === currentMyJobsNavIndex
                    ? "text-orange-500 border-b-2 pb-1 px-2 border-orange-500 text-lg font-medium"
                    : "text-gray-400 border-b-2 pb-1 px-2 border-transparent hover:text-gray-600"
                }`}
                onClick={() => {
                  setCurrentMyJobsNavIndex(index);
                }}
              >
                {item.label}
              </div>
            );
          })}
        </div>
        <div className="max-w-7xl mt-2">
          {myJobsNavData[currentMyJobsNavIndex].component}
        </div>
      </div>
    </RootLayout>
  );
};

export default MyJobs;
