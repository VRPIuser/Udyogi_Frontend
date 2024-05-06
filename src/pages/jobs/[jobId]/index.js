import LatestJobs from "@/components/HomeComponents/LatestJobs/LatestJobs";
import MainScreen from "@/components/JobDetailsComponent/MainScreen";
import RootLayout from "@/components/RootLayout/RootLayout";
import { LatestJobsData } from "@/data/Jobs";
import GetTimePassedFromGiven from "@/hooks/GetTimePassedFromGiven";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const JobListing = () => {
  const router = useRouter();
  const query = router.query;
  const [job, setJob] = useState();
  useEffect(() => {
    // console.log(query.jobId);

    setJob(
      LatestJobsData.find((job) => job.jobId.toString().trim() === query?.jobId)
    );
    // console.log(job);
  }, [query]);

  return (
    <RootLayout>
      <div className="bg-zinc-100 py-8 w-full h-full">
        {job && <MainScreen job={job} />}
      </div>
    </RootLayout>
  );
};

export default JobListing;
