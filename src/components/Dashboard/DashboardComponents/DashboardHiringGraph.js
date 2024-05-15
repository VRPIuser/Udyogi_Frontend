import React from "react";

const DashboardHiringGraph = ({ weeklyActivity }) => {
  const totalDays = weeklyActivity.length;

  return (
    <div
      className="w-full min-w-60 h-60 p-3 bg-white shadow-lg rounded-lg flex flex-col justify-between"
      // style={{ maxWidth: "calc(100% - (384px + 1rem))" }}
    >
      <div className="flex justify-between items-center gap-4">
        <div className="text-lg font-semibold mb-2">Weekly Activity</div>
        <div className="flex justify-start items-center">
          <ActivityLegend color="zinc" text="Shortlisted" />
          <ActivityLegend color="orange" text="Total Hirings" />
        </div>
      </div>
      <div className="flex justify-evenly h-4/5 ">
        {weeklyActivity.map((activity, index) => (
          <DayActivity
            key={index}
            day={activity.day}
            zincHeight={`${(activity.shortlisted / activity.total) * 100}%`}
            orangeHeight={`${(activity.hirings / activity.total) * 100}%`}
          />
        ))}
      </div>
    </div>
  );
};

const DayActivity = ({ day, zincHeight, orangeHeight }) => {
  return (
    <div className="text-center h-full">
      <div
        className="flex gap-2 items-end"
        style={{
          height: `calc(100% - 20px)`,
        }}
      >
        <div
          style={{ height: `${zincHeight}` }}
          className="w-2 bg-zinc-300"
        ></div>
        <div
          style={{ height: `${orangeHeight}` }}
          className="w-2 mt-1 bg-orange-500"
        ></div>
      </div>
      <p className="mt-2 text-sm">{day}</p>
    </div>
  );
};

const ActivityLegend = ({ color, text }) => {
  const bgColor = color === "zinc" ? "bg-zinc-300" : "bg-orange-500";

  return (
    <div className="flex items-center mr-4">
      <span className={`inline-block w-3 h-3 ${bgColor} rounded mr-2`}></span>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default DashboardHiringGraph;
