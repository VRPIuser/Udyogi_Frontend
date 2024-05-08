import HideExtraText from "@/components/UI/HideExtraText/HideExtraText";
import CustomImage from "@/components/UI/Image/Image";
import { LatestJobsData } from "@/data/Jobs";
import React, { useEffect, useState } from "react";
import StatusComponent from "./StatusComponent";
import { useRouter } from "next/router";
import ApplicationCard from "./ApplicationCard";

const jobApplicationsComponent = ({ jobApplications }) => {
  return (
    <div className="bg-zinc-100 sm:p-8 p-2">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> */}
      <div className="flex flex-wrap gap-4 justify-center mx-auto">
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
