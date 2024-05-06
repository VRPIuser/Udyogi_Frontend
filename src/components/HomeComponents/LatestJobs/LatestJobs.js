import Section from "@/components/UI/Sections/Section";
import styles from "./LatestJobs.module.css";
import { LatestJobsData } from "@/data/Jobs";

import JobCard from "./JobCard/JobCard";
import JobFiltereredResults from "@/components/JobFiltereredResults/JobFiltereredResults";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LatestJobs = ({ searchData }) => {
  const router = useRouter();
  useEffect(() => {
    console.log(searchData);
  });
  return (
    <>
      {!searchData ? (
        <div className={"max-w-7xl mx-auto"}>
          <h1 className="text-2xl w-full p-8 text-start font-medium">
            Latest Jobs
          </h1>
          <div className={styles.cardContainer}>
            {LatestJobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="max-w-5xl mx-auto w-full flex justify-end mt-8">
            <span
              className="text-orange-500 text-end px-4 py-2 hover:bg-zinc-200 transition-all cursor-pointer rounded-full font-semibold"
              onClick={() => {
                router.push("/jobs");
              }}
            >
              View all jobs
            </span>
          </div>
          <JobFiltereredResults searchData={searchData} jobs={LatestJobsData} />
        </>
      )}
    </>
  );
};

export default LatestJobs;
