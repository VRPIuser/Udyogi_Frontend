import React from "react";
import DashboardCard from "../DashboardComponents/DashboardCard";
import DashboardStatsCard from "../DashboardComponents/DashboardStatsCard";
import DashboardRecentPostsCard from "../DashboardComponents/DashboardRecentPostsCard/DashboardRecentPostsCard";
import DashboardPaymentCard from "../DashboardComponents/DashboardPaymentCard";
import DashboardHiringGraph from "../DashboardComponents/DashboardHiringGraph";
import RecruitersComponent from "../DashboardComponents/AllRecruitersComponent/RecruitersComponent";

const AdminDashboardComponents = () => {
  const DashboardCardData = [
    {
      title: "Job Posts",
      count: "00",
    },
    {
      title: "Total Application",
      count: "00",
    },
    {
      title: "Shortlisted Profiles",
      count: "00",
    },
    {
      title: "Total Hirings",
      count: "00",
    },
  ];

  const weeklyActivity = [
    { day: "Mon", shortlisted: 10, hirings: 5, total: 20 },
    { day: "Tue", shortlisted: 8, hirings: 4, total: 15 },
    { day: "Wed", shortlisted: 12, hirings: 6, total: 18 },
    { day: "Thu", shortlisted: 15, hirings: 7, total: 22 },
    { day: "Fri", shortlisted: 9, hirings: 3, total: 17 },
    { day: "Sat", shortlisted: 6, hirings: 2, total: 12 },
    { day: "Sun", shortlisted: 4, hirings: 1, total: 10 },
  ];

  return (
    <div className="max-w-5xl w-full mx-auto">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 mb-4 gap-4 h-fit"
        // className="flex gap-4 mb-4 min-h-60 flex-wrap"
      >
        <DashboardPaymentCard />
        <DashboardHiringGraph weeklyActivity={weeklyActivity} />
      </div>
      <div
        // className="flex gap-4 mb-4 flex-wrap "
        className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
      >
        {DashboardCardData.map((card, index) => (
          <DashboardCard title={card.title} count={card.count} key={index} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 mb-4">
        <DashboardStatsCard />
        <DashboardRecentPostsCard />
      </div>
      <RecruitersComponent />
    </div>
  );
};

export default AdminDashboardComponents;
