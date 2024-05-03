import Section from "@/components/UI/Sections/Section";
import styles from "./LatestJobs.module.css";
import { LatestJobsData } from "@/data/Jobs";

import JobCard from "./JobCard/JobCard";
import JobFiltereredResults from "@/components/JobFiltereredResults/JobFiltereredResults";

const LatestJobs = ({ searchData }) => {
  return (
    <>
      {searchData !== null && !searchData ? (
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
        <JobFiltereredResults searchData={searchData} jobs={LatestJobsData} />
      )}
    </>
  );
};

export default LatestJobs;
