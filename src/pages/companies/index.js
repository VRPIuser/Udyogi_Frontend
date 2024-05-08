import CompaniesList from "@/components/CompaniesComponent/CompaniesList";
import ManualNavbar from "@/components/ManualNavbar/ManualNavbar";
import RootLayout from "@/components/RootLayout/RootLayout";
import GeneralJobSearch from "@/components/jobs/JobSeacrch/GeneralJobSearch";
import { AllCompaniesData } from "@/data/CompaniesData";
import { useState } from "react";

const AllCompanies = () => {
  const [searchData, setSearchData] = useState();

  // useEffect(() => {
  //   console.log(searchData);
  // }, [searchData]);

  const linkData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Companies",
      link: "/companies",
    },
  ];

  return (
    <RootLayout>
      <GeneralJobSearch onSearch={setSearchData} onlyCompany />
      {linkData && <ManualNavbar data={linkData} />}
      <h1 className="max-w-7xl mx-auto font-medium text-xl text-zinc-700 p-8">
        {AllCompaniesData.length + " "} Companies
      </h1>
      <CompaniesList searchData={searchData} />
    </RootLayout>
  );
};

export default AllCompanies;
