import { JobStatsData } from "@/data/admin/PostsData";
import sharedClasses from "../DashboardClasses";
import AllJobsTable from "./AllJobsTable";

import usePagination from "@/hooks/use-Pagination";
import Pagination from "@/components/UI/Pagination/Pagination";
import StatsCard from "../StatsCard";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ConvertToValueUsedForCondition from "@/hooks/ConvertToValueUsedForCondition";
import { LatestJobsData } from "@/data/Jobs";

const AllPostsComponent = () => {
  const [jobPostsData, setJobPostsData] = useState([]);

  useEffect(() => {
    let companyId = "1";

    setJobPostsData(
      LatestJobsData.filter(
        (job) =>
          ConvertToValueUsedForCondition(job.companyDetails.id) ===
          ConvertToValueUsedForCondition(companyId)
      )
    );
    console.log(jobPostsData);
  }, [LatestJobsData]);

  const { paginate, itemsPerPage, currentItems, currentPage, totalItems } =
    usePagination({ items: jobPostsData || [], itemsPerPage: 6 });

  const router = useRouter();

  return (
    <div
      className="flex flex-col gap-4 overflow-hidden"
      style={{ height: "calc(100% - 80px - 4rem)" }}
    >
      <StatsCard statsData={JobStatsData} />
      <div
        className={`${sharedClasses.cardContainer} h-full flex flex-col justify-between`}
      >
        {jobPostsData && (
          <>
            <div>
              <div className={`${sharedClasses.flexCenter} mb-4`}>
                <h2 className="text-lg font-semibold">Recent Job Posts</h2>
                <button
                  className={`${sharedClasses.button}`}
                  onClick={() => {
                    router.push("/dashboard/admin/posts/create-post");
                  }}
                >
                  Create Post
                </button>
              </div>

              <AllJobsTable tableData={currentItems} />
            </div>
            <div className="flex items-center justify-between w-full">
              <span>
                Showing data {1 + itemsPerPage * (currentPage - 1)} to{" "}
                {currentItems.length + itemsPerPage * (currentPage - 1)} of{" "}
                {jobPostsData.length} entries
              </span>

              <Pagination
                itemsPerPage={itemsPerPage}
                onPageChange={paginate}
                totalItems={totalItems}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllPostsComponent;
