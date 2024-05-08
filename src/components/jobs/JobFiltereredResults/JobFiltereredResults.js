import { useEffect, useState, useMemo } from "react";
import JobFilter from "../JobFilter/JobFilter";
import { JobFiltersData } from "@/data/filtersData";
import JobCard from "../../HomeComponents/LatestJobs/JobCard/JobCard";
import CustomImage from "../../UI/Image/Image";

const JobFilteredResults = ({ jobs, searchData }) => {
  const [filters, setFilters] = useState(JobFiltersData);

  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 50 });

  const checkFilterMatches = (filters, job, title, field) => {
    const filter = filters.find((filter) => filter.title === title);
    if (!filter) return true; // No filter selected
    if (filter.buttons[0].checked) return true; // All selected

    return filter.buttons.some(
      (button) =>
        button.checked &&
        job[field].toString().trim().toLowerCase() ===
          button.value.toString().trim().toLowerCase()
    );
  };

  const matchSearchData = (jobField, searchDataField) => {
    if (!searchDataField) return true; // No search data provided
    if (!jobField) return false; // Job field is empty
    return jobField.toLowerCase().includes(searchDataField.toLowerCase());
  };

  const matchExpectedSkills = (expectedSkills, searchDataField) => {
    if (!searchDataField) return true; // No search data provided
    return expectedSkills.some((skill) =>
      skill.toLowerCase().includes(searchDataField.toLowerCase())
    );
  };

  const filteredJobs = useMemo(() => {
    if (!searchData) return jobs;

    return jobs.filter((job) => {
      const jobTypeMatches = checkFilterMatches(
        filters,
        job,
        "Job Type",
        "jobType"
      );
      const jobModeMatches = checkFilterMatches(
        filters,
        job,
        "Job Mode",
        "workType"
      );
      const jobShiftMatches = checkFilterMatches(
        filters,
        job,
        "Shift",
        "shift"
      );

      const isLocationMatch = matchSearchData(
        job.location,
        searchData.location
      );
      const isJobTitleMatch = matchSearchData(
        job.jobTitle,
        searchData.skillRoleCompany
      );
      const isSkillMatch = matchExpectedSkills(
        job.expectedSkills,
        searchData.skillRoleCompany
      );
      const isCompanyMatched = matchSearchData(
        job.companyDetails.name,
        searchData.skillRoleCompany
      );
      // Check if salary falls within the specified range
      const isSalaryInRange =
        job.salaryRange.lowerLimit >= salaryRange.min &&
        job.salaryRange.upperLimit <= salaryRange.max;

      return (
        isLocationMatch &&
        (isJobTitleMatch || isSkillMatch || isCompanyMatched) &&
        jobTypeMatches &&
        jobModeMatches &&
        jobShiftMatches &&
        isSalaryInRange
      );
    });
  }, [jobs, searchData, filters, salaryRange]);

  const [showFilter, setShowFilter] = useState(false);

  return (
    <div
      className={
        "max-w-full mx-auto px-4 py-8 flex gap-4 flex-wrap justify-center"
      }
    >
      <div className="max-w-5xl">
        <div className="flex items-center">
          <h1 className="text-2xl w-full p-4 text-start font-medium">
            Search results - {filteredJobs.length} Jobs
          </h1>
          <span
            onClick={() => setShowFilter(!showFilter)}
            className="cursor-pointer hover:bg-zinc-100 px-4 py-2 transition-all rounded-full flex gap-2 items-center"
          >
            Filter
            <CustomImage
              src="/assets/icons/filterIcon.png"
              width={25}
              height={25}
            />
          </span>
        </div>
        <JobFilter
          onFiltering={setFilters}
          filters={filters}
          filteredJobs={filteredJobs}
          onSettingSalaryRange={setSalaryRange}
          salaryRange={salaryRange}
          showFilter={showFilter}
        />
        {filteredJobs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFilteredResults;
