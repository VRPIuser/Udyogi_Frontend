import { useEffect, useState } from "react";
import { AllCompaniesData } from "@/data/CompaniesData";
import { useRouter } from "next/router";
import CustomImage from "../UI/Image/Image";
import FollowCompany from "./FollowCompany/FollowCompany";
import HideExtraText from "../UI/HideExtraText/HideExtraText";

const cardClasses =
  "max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-white dark:bg-zinc-800";
const buttonClasses =
  "h-fit ml-auto border-red-500 border bg-white text-orange-500 px-3 py-1 rounded-full text-sm flex items-center";
const textClasses = "text-zinc-700 dark:text-zinc-400 text-sm";
const iconClasses = "w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2";

const CompaniesList = ({ searchData }) => {
  const [filteredCompanies, setFilteredCompanies] = useState(AllCompaniesData);

  // const router = useRouter();

  // useEffect(() => {
  //   console.log(searchData);
  //   // console.log(filteredCompanies);
  // }, [searchData, filteredCompanies]);

  // Filter the companies based on the search data
  useEffect(() => {
    if (searchData) {
      const filtered = AllCompaniesData.filter((company) => {
        return company.name
          .trim()
          .replace(/\s+/g, "")
          .toString()
          .toLowerCase()
          .includes(
            searchData.trim().replace(/\s+/g, "").toString().toLowerCase()
          );
      });
      setFilteredCompanies(filtered);
      console.log(filteredCompanies);
    } else {
      setFilteredCompanies(AllCompaniesData);
    }
  }, [searchData]);

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center pb-8">
      {filteredCompanies.map((company) => (
        <MainCompanyCard key={company.companyId} company={company} />
      ))}
    </div>
  );
};

export default CompaniesList;

const MainCompanyCard = ({ company }) => {
  const router = useRouter();

  return (
    <div className={cardClasses}>
      <div className="mb-2">
        <div className="flex justify-between items-center">
          {/* <VRPILogo /> */}
          <CustomImage
            src={`/assets/logos/${company.image}`}
            alt=""
            width={250}
            height={250}
            className="w-16 h-16 object-cover cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push(`/companies/${company.companyId}`);
            }}
          />

          <FollowCompany companyId={company.companyId} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-0 mb-0">
            {company.name}
          </h2>
          <div className=" flex gap-2">
            <span className=" text-zinc-500 text-sm font-medium px-0 py-1 rounded-full flex w-fit gap-2 items-center">
              <CustomImage
                src={`/assets/icons/location_b.png`}
                alt=""
                width={20}
                height={20}
                className="w-4 h-4"
                classForDiv="inline"
              />
              {company.location}
            </span>
            <span className=" text-zinc-500 text-sm font-medium px-0 py-1 rounded-full flex w-fit gap-2 items-center">
              <CustomImage
                src={`/assets/icons/quantity_bl.png`}
                alt=""
                width={20}
                height={20}
                className="w-4 h-4"
                classForDiv="inline"
              />
              {company.companySize.lowerLimit +
                " - " +
                company.companySize.upperLimit}
            </span>
          </div>
        </div>
      </div>

      <HideExtraText lines={4} className={textClasses}>
        {company.overview}
      </HideExtraText>

      <div className="flex flex-wrap gap-2 mt-2">
        {company.categories.map((category, index) => (
          <div
            className="flex items-center mb-4 bg-orange-100 text-orange-500 text-sm font-medium px-3 py-1 rounded-full justify-center gap-2"
            key={index}
          >
            <CustomImage
              src={`/assets/icons/${category.trim().toLowerCase()}.png`}
              alt=""
              width={25}
              height={25}
            />
            <span className="">{category}</span>
          </div>
        ))}
      </div>
      <div
        className="text-zinc-600 dark:text-zinc-300 text-xs hover:underline cursor-pointer"
        onClick={() => {
          router.push(`/companies/${company.companyId}`);
        }}
      >
        <span className="text-orange-500 pr-1">{company.jobs}</span> jobs
        available
      </div>
    </div>
  );
};
