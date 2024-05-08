import { LatestJobsData } from "@/data/Jobs";
import JobsComponent from "../JobsComponent/JobsComponent";
import { useRouter } from "next/router";

const SimilarJobs = () => {
  const router = useRouter();
  return (
    <div className={"max-w-7xl w-full"}>
      <div className="flex justify-between">
        <h1 className="text-2xl w-full p-8 text-start font-medium">
          Similar Jobs
        </h1>
        <div className="max-w-5xl mx-auto w-full flex justify-end mt-8">
          <span
            className="text-orange-500 text-end px-2 py-2 hover:bg-zinc-200 transition-all cursor-pointer rounded-full font-semibold h-fit"
            onClick={() => {
              router.push("/jobs");
            }}
          >
            View all jobs
          </span>
        </div>
      </div>

      <JobsComponent
        jobs={LatestJobsData.slice(0, 4)}
        style={{ margin: "0" }}
      />
    </div>
  );
};

export default SimilarJobs;
