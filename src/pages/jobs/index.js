import LatestJobs from "@/components/HomeComponents/LatestJobs/LatestJobs";
import JobFilteredResults from "@/components/JobFiltereredResults/JobFiltereredResults";
import GeneralJobSearch from "@/components/JobSeacrch/GeneralJobSearch";
import RootLayout from "@/components/RootLayout/RootLayout";
import { LatestJobsData } from "@/data/Jobs";
import { useEffect, useState } from "react";

const JobsPage = () => {
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    console.log(searchData);
  });
  return (
    <RootLayout>
      <GeneralJobSearch onSearch={setSearchData} />
      {searchData && (
        <JobFilteredResults searchData={searchData} jobs={LatestJobsData} />
      )}
      <LatestJobs />
    </RootLayout>
  );
};
export default JobsPage;
