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
    return jobField
      .toString()
      .trim()
      .toLowerCase()
      .includes(searchDataField.toString().trim().toLowerCase());
  };

  const checkTheExperience = (expected, given) => {
    if (!given) return true;
    if (!expected) return false;

    return (
      expected.lowerLimit >= given.lowerLimit &&
      expected.upperLimit <= given.upperLimit
    );
  };

  const matchExpectedSkills = (expectedSkills, searchDataField) => {
    if (!searchDataField) return true; // No search data provided
    return expectedSkills.some((skill) =>
      skill
        .toString()
        .trim()
        .toLowerCase()
        .includes(searchDataField.toString().trim().toLowerCase())
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

      const isExperienceMatch = checkTheExperience(
        job.expectedExperience,
        searchData.experience?.value
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
        isExperienceMatch &&
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
    <div className={"max-w-full mx-auto px-4 py-8 flex gap-4 justify-center"}>
      <div className="max-w-screen-2xl w-full">
        <div className="flex items-center bg-white shadow rounded-lg mb-4">
          <h1 className=" w-full p-4 text-start font-medium ">
            Search results - {filteredJobs.length} Jobs
          </h1>
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="cursor-pointer hover:bg-zinc-100 px-4 py-2 transition-all rounded-full flex gap-2 items-center mr-2 justify-end"
          >
            <span className="sm:block hidden">Filter</span>
            <CustomImage
              src="/assets/icons/filterIcon.png"
              width={100}
              height={60}
              className="min-w-6 min-h-6 w-6 h-6 object-contain"
            />
          </div>
        </div>
        <div className="flex gap-4 md:flex-row flex-col-reverse items-center md:items-start">
          {filteredJobs.length > 0 && (
            // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <div
              // className="flex flex-wrap gap-4"
              style={{
                display: "grid",
                gap: "1rem",
                width: "100%",
                justifyContent: "center",
                gridTemplateColumns: "repeat(auto-fill, minmax(250px, 350px))",
              }}
            >
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
          <JobFilter
            onFiltering={setFilters}
            filters={filters}
            filteredJobs={filteredJobs}
            onSettingSalaryRange={setSalaryRange}
            salaryRange={salaryRange}
            showFilter={showFilter}
          />
        </div>
      </div>
    </div>
  );
};

export default JobFilteredResults;
