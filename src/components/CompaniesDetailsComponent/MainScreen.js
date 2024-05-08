import DivideWithFullStop from "@/hooks/DivideFullStops";
import FollowCompany from "../CompaniesComponent/FollowCompany/FollowCompany";
import CompanyJobs from "./CompanyJobs";

const { default: CustomImage } = require("../UI/Image/Image");

const MainScreen = ({ company }) => {
  return (
    <div className=" max-w-3xl flex flex-col gap-px w-full">
      <div className="bg-white shadow-lg rounded-t-lg sm:p-6 p-4 h-fit">
        <div className="flex gap-x-4 gap-y-0 sm:justify-start justify-center items-center mb-4 flex-wrap">
          <CustomImage
            src={`/assets/logos/${company.image}`}
            alt=""
            width={250}
            height={250}
            className="w-16 h-16 object-contain cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              router.push(`/companies/${company.companyId}`);
            }}
          />
          <div>
            <h2 className="text-3xl font-semibold text-zinc-800 mb-1">
              {company.name}
            </h2>

            <div className="mt-2 flex gap-4">
              <span className="bg-orange-100 text-orange-500 text-sm font-medium px-2 py-1 rounded-full flex w-fit gap-2">
                <CustomImage
                  src={`/assets/icons/locationIcon-p.png`}
                  alt=""
                  width={15}
                  height={15}
                  classForDiv="inline"
                />
                {company.location}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-4  flex-wrap">
          <FollowCompany company={company.companyId} />
          <button
            className={`border rounded-3xl text-sm flex gap-2 sm:px-4 px-2 py-2 h-8 items-center border-orange-500 text-orange-500 hover:scale-105 transition-all`}
            onClick={() => {
              router.push(company.companyWebsite);
            }}
          >
            <span>Visit Company Website</span>
            <CustomImage
              src="/assets/icons/link_p.png"
              alt=""
              width={20}
              height={20}
              // classForDiv="w-6 h-6"
              className="w-4 h-4"
            />
          </button>
          <button className="px-4 py-2 h-8 text-sm bg-orange-500 text-white rounded-3xl flex items-center hover:scale-105 transition-all">
            Send Message
          </button>
        </div>
      </div>
      <div className="bg-white p-6">
        <h2 className="text-2xl font-medium">Overview</h2>
        {DivideWithFullStop(company.overview).map((description, index) => {
          return (
            <p className="text-zinc-600 mt-2 pl-6" key={index}>
              {description + "."}
            </p>
          );
        })}
      </div>
      <CompanyJobs company={company} />
    </div>
  );
};

export default MainScreen;
