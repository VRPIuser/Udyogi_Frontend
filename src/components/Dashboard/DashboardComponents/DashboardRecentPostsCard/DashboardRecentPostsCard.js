import { JobPostsData } from "@/data/admin/PostsData";
import sharedClasses from "../DashboardClasses";
import JobTable from "./JobTable";
import { useEffect, useState } from "react";
import ConvertToValueUsedForCondition from "@/hooks/ConvertToValueUsedForCondition";
import { LatestJobsData } from "@/data/Jobs";

const DashboardRecentPostsCard = () => {
  const [jobPostsData, setJobPostsData] = useState([]);

  useEffect(() => {
    let companyId = "1";

    setJobPostsData(
      LatestJobsData.filter(
        (job) =>
          ConvertToValueUsedForCondition(job.companyDetails.id) ===
          ConvertToValueUsedForCondition(companyId)
      )
    );
    console.log(jobPostsData);
  }, [LatestJobsData]);

  return (
    <div className={`${sharedClasses.cardContainer}`}>
      <div className={`${sharedClasses.flexCenter} mb-4`}>
        <h2 className="text-lg font-semibold">Recent Job Posts</h2>
        <button className={`${sharedClasses.button}`}>Create Post</button>
      </div>
      {/* <div className="text-center py-12">
    
        <span>No data is previewed</span>
      </div> */}
      <JobTable tableData={jobPostsData} />
    </div>
  );
};

export default DashboardRecentPostsCard;
