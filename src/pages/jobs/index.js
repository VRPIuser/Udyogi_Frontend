import LatestJobs from "@/components/HomeComponents/LatestJobs/LatestJobs";
import ManualNavbar from "@/components/ManualNavbar/ManualNavbar";
import RootLayout from "@/components/RootLayout/RootLayout";
import JobFilteredResults from "@/components/jobs/JobFiltereredResults/JobFiltereredResults";
import GeneralJobSearch from "@/components/jobs/JobSeacrch/GeneralJobSearch";
import { LatestJobsData } from "@/data/Jobs";
import { useRouter } from "next/router";
import { useState } from "react";

const JobsPage = () => {
  const [searchData, setSearchData] = useState();
  const router = useRouter();

  // useEffect(() => {
  //   console.log(searchData);
  // });

  const linkData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
  ];

  return (
    <RootLayout>
      <GeneralJobSearch onSearch={setSearchData} />
      {linkData && <ManualNavbar data={linkData} />}
      {searchData && (
        <JobFilteredResults searchData={searchData} jobs={LatestJobsData} />
      )}

      <LatestJobs />
    </RootLayout>
  );
};
export default JobsPage;
