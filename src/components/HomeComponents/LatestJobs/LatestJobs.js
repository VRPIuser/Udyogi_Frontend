import Section from "@/components/UI/Sections/Section";
import styles from "./LatestJobs.module.css";
import { LatestJobsData } from "@/data/Jobs";

import JobCard from "./JobCard/JobCard";

const LatestJobs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.JobsContainer}>
        <Section title={"Latest Jobs"} style={{ margin: "2rem 0" }}>
          <div className={styles.cardContainer}>
            {LatestJobsData.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default LatestJobs;
