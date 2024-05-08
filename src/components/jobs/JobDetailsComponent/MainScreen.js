import GetTimePassedFromGiven from "@/hooks/GetTimePassedFromGiven";

import { useState } from "react";
import SimilarJobs from "./SimilarJobs";
import JobDescription from "./JobDescription";
import Skills from "./Skills";
import JobRoleInsight from "./JobRoleInsight";
import LikeAndShare from "./LikeAndShare";
import CustomImage from "@/components/UI/Image/Image";

const MainScreen = ({ job }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className=" max-w-3xl flex flex-col gap-px">
      <div className="bg-white shadow-lg rounded-t-lg p-6 flex justify-between items-start ">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-800 mb-2">
            {job.jobTitle}
          </h2>
          <p className="text-zinc-600">
            <span className="text-orange-500 font-medium">
              {job.companyDetails.name}
            </span>
            {"  "}• Posted{" "}
            {"  " + GetTimePassedFromGiven(job.postedDate) + "  "} days ago •{" "}
            {"  " + job.applicants.length + " "}
            applicants
          </p>

          <div className=" mt-4 flex gap-4">
            <span className="bg-orange-100 text-orange-500 text-sm font-medium px-2 py-1 rounded-full flex w-fit gap-2">
              <CustomImage
                src={`/assets/icons/locationIcon-p.png`}
                alt=""
                width={15}
                height={15}
                classForDiv="inline"
              />
              {job.location}
            </span>
            <span
              className="px-2 py-1 rounded-full text-sm"
              style={{ backgroundColor: "#D9F9FF" }}
            >
              {job.workType}
            </span>
          </div>
        </div>
        <LikeAndShare onLike={() => setLiked(!liked)} liked={liked} />
      </div>
      <JobRoleInsight job={job} />
      <JobDescription job={job} />
      <Skills job={job} />
      <SimilarJobs />
    </div>
  );
};

export default MainScreen;
