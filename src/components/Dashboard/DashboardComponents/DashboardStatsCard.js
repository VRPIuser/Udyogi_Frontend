import PieChartComponent from "@/components/UI/PieChart/PieChart";
import sharedClasses from "./DashboardClasses";

import { PieChart } from "react-minimal-pie-chart";

const DashboardStatsCard = () => {
  const DashboardStatsCardData = [
    {
      title: "Shortlisted",
      key: "Shortlisted",
      value: 79,
      color: "#F1965A",
    },
    {
      title: "Rejected",
      key: "Rejected",
      value: 152,
      color: "#FFE0CC",
    },
    {
      title: "Hired",
      key: "Hired",
      value: 25,
      color: "#FF6501",
    },
  ];

  // const sharedClasses =
  return (
    <div
      className={`${sharedClasses.cardContainer} flex flex-col justify-between`}
    >
      <div className={`${sharedClasses.flexCenter} mb-4`}>
        <h2 className="text-lg font-semibold">Application Response</h2>
        <button
          className={`text-zinc-500 cursor-pointer ${sharedClasses.textSm} hover:underline`}
        >
          Download Report
        </button>
      </div>
      {/* <PieChartComponent data={DashboardStatsCardData} /> */}
      <PieChart
        data={DashboardStatsCardData}
        style={{ width: "200px" }}
        className="mx-auto py-4"
      />
      <div className={`flex gap-4 justify-evenly`}>
        {DashboardStatsCardData.map((data, index) => (
          <div key={index} className={`${sharedClasses.textCenter} mb-4`}>
            <div className="flex gap-2 items-center">
              <span
                style={{
                  backgroundColor: data.color,
                }}
                className="w-3 h-3 rounded-sm"
              ></span>
              <span
                className={`${sharedClasses.textSm} ${sharedClasses.titleColor}`}
              >
                {data.title}
              </span>
            </div>
            <div
              className={`${sharedClasses.textXl} ${sharedClasses.fontBold}`}
            >
              {data.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStatsCard;
