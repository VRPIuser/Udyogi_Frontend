import { useEffect, useState } from "react";

const {
  default: JobCard,
} = require("../HomeComponents/LatestJobs/JobCard/JobCard");

const JobFilteredResults = ({ jobs, searchData }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    if (searchData) {
      const filteredJobs = jobs.filter((job) => {
        const locationFromJob = job.location
          ? job.location.toString().trim().toLowerCase()
          : "";
        const jobTitleFromJob = job.jobTitle
          ? job.jobTitle.toString().trim().toLowerCase()
          : "";
        const locationFromSearch = searchData.location
          ? searchData.location.trim().toLowerCase()
          : "";
        const skillRoleCompany = searchData.skillRoleCompany
          ? searchData.skillRoleCompany.toString().trim().toLowerCase()
          : "";

        const isLocationMatch =
          !locationFromSearch || locationFromJob.includes(locationFromSearch);

        const isJobTitleMatch =
          !skillRoleCompany || jobTitleFromJob.includes(skillRoleCompany);

        const isSkillMatch =
          !skillRoleCompany ||
          job.expectedSkills.some((skill) => {
            return skill
              .toString()
              .trim()
              .toLowerCase()
              .includes(skillRoleCompany);
          });

        return isLocationMatch && (isJobTitleMatch || isSkillMatch);
      });

      setFilteredJobs(filteredJobs);
    }
  }, [jobs, searchData]);

  return (
    <div className={"max-w-7xl mx-auto px-4 py-8"}>
      <h1 className="text-2xl w-full p-8 text-start font-medium">
        Search results - {filteredJobs.length} Jobs
      </h1>
      {filteredJobs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} job={job} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default JobFilteredResults;
