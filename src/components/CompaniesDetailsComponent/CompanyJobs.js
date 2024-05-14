import { LatestJobsData } from "@/data/Jobs";
import { useEffect, useState } from "react";
import JobsComponent from "../jobs/JobsComponent/JobsComponent";

const CompanyJobs = ({ company }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Filter jobs based on the id
    console.log(company);
    const filteredJobs = LatestJobsData.filter(
      (job) =>
        job.companyDetails.id.toString().trim().toLowerCase() ===
        company?.id.toString().trim().toLowerCase()
    );

    setJobs(filteredJobs);

    console.log(filteredJobs);
  }, [company?.id]);

  return (
    <div>
      {company && (
        <h1 className="text-2xl font-medium p-4">
          Jobs at {" " + company.name}
        </h1>
      )}
      {jobs?.length > 0 && <JobsComponent jobs={jobs} style={{ margin: 0 }} />}
    </div>
  );
};

export default CompanyJobs;
