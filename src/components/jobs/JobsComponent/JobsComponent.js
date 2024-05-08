import JobCard from "@/components/HomeComponents/LatestJobs/JobCard/JobCard";
import styles from "./JobsComponent.module.css";

const JobsComponent = ({ jobs, className, style }) => {
  return (
    <div className={`${styles.cardContainer} ${className}`} style={style}>
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
};

export default JobsComponent;
