import React from "react";

import ApplicationCard from "./ApplicationCard";

const jobApplicationsComponent = ({ jobApplications }) => {
  return (
    <div className="bg-zinc-100">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
      <div
        className="gap-4"
        style={{
          display: "grid",

          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 400px))",
        }}
      >
        {jobApplications.map((application, index) => (
          <ApplicationCard
            key={index}
            application={application}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default jobApplicationsComponent;
