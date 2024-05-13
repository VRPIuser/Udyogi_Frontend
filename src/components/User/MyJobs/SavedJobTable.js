import React from "react";
import JobRow from "./JobRow";
import { LatestJobsData } from "@/data/Jobs";

const TABLE_HEADER_CLASS =
  "text-xs text-zinc-700 uppercase bg-zinc-50 border-b";
const TABLE_CELL_CLASS = "relative py-2 px-3 bg-white";

const SavedJobsTable = ({ savedJobs, searchInput }) => {
  // Function to filter saved jobs based on search input and company name
  const filteredSavedJobs = savedJobs.filter((savedJob) => {
    const job = LatestJobsData.find(
      (job) =>
        savedJob.jobId.toLowerCase().trim() === job.jobId.toLowerCase().trim()
    );

    if (!job) return false; // If job not found, exclude from the filter

    // Check if the company name includes the search input value
    return job.companyDetails.name
      .toLowerCase()
      .includes(searchInput.toLowerCase().trim());
  });

  return (
    <table className="w-full text-sm text-left text-zinc-500">
      <thead className={TABLE_HEADER_CLASS}>
        <tr>
          <th scope="col" className={`${TABLE_CELL_CLASS} pl-16 py-4`}>
            Job Title
          </th>
          <th scope="col" className={`${TABLE_CELL_CLASS} py-4`}>
            Saved on
          </th>
          <th scope="col" className={`${TABLE_CELL_CLASS} py-4`}></th>
        </tr>
      </thead>
      <tbody>
        {filteredSavedJobs.map((savedJob, index) => {
          // Retrieve the job details from LatestJobsData based on jobId
          const job = LatestJobsData.find(
            (job) =>
              savedJob.jobId.toLowerCase().trim() ===
              job.jobId.toLowerCase().trim()
          );

          // Render the JobRow component for each filtered saved job
          return <JobRow key={index} job={job} savedJob={savedJob} />;
        })}
      </tbody>
    </table>
  );
};

export default SavedJobsTable;
