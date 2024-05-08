import { LatestJobsData } from "@/data/Jobs";

const {
  default: HideExtraText,
} = require("@/components/UI/HideExtraText/HideExtraText");
const { default: StatusComponent } = require("./StatusComponent");
const { default: CustomImage } = require("@/components/UI/Image/Image");
const { useRouter } = require("next/router");
const { useState, useEffect } = require("react");

const jobCardClasses =
  "bg-white p-4 rounded-lg shadow-md max-w-md min-w-32 w-full cursor-pointer hover:scale-105 transition-all";
const titleClasses = "text-lg font-bold text-green-600";
const textClasses = "text-sm text-zinc-600";
const descriptionClasses = "text-zinc-800 mt-4";
const listClasses = "flex gap-2 text-xs text-zinc-600 mt-2";
const statusClasses = "text-xs px-2 py-1 rounded-full";
const dateClasses =
  "flex justify-between items-center mt-2 text-zinc-600 text-xs";

const ApplicationCard = ({ application, index }) => {
  const [job, setJob] = useState();
  const router = useRouter();
  useEffect(() => {
    setJob(
      LatestJobsData.find(
        (job) =>
          job.jobId.toString().trim().toLowerCase() ===
          application.jobId.toString().trim().toLowerCase()
      )
    );
    console.log(job);
  }, [application]);

  return (
    <div
      key={index}
      className={jobCardClasses}
      onClick={() => {
        router.push(`/jobs/${application.jobId}`);
      }}
    >
      <div className="flex items-center gap-2">
        <div>
          <span
            className={
              "text-orange-500 font-bold text-3xl pt-1 bg-white border border-gray-300 w-12 h-12 inline-block rounded-full text-center leading-12"
            }
          >
            {job?.companyDetails.name[0]}
          </span>
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full gap-2 mb-1">
            <h2 className={titleClasses}>{job?.jobTitle}</h2>
            <button className="h-8 px-2 py-1 rounded-full border border-green-400 text-xs text-green-400 flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/correct.png`}
                width={15}
                height={15}
                alt=""
                className="min-w-4 min-h-4 object-contain"
              />
              <span>Applied</span>
            </button>
          </div>
          <HideExtraText className={"text-xs flex flex-wrap"} lines={1}>
            {job?.companyDetails.name} {"  •  "} {job?.location} {"  •  "}
            {job?.workType} {"  •  "}
            {job?.jobType}
          </HideExtraText>
        </div>
      </div>
      <HideExtraText lines={3} className={descriptionClasses}>
        {job?.jobDescription.overview}
      </HideExtraText>
      <ul className={listClasses}>
        {job?.expectedSkills.map((skill, index) => (
          <li key={index}>
            {skill}
            {index !== job?.expectedSkills.length - 1 ? "  •  " : ""}
          </li>
        ))}
      </ul>
      <StatusComponent application={application} />
    </div>
  );
};

export default ApplicationCard;
