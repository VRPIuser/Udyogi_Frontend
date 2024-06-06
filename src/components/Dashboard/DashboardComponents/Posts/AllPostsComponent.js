import { JobPostsData, JobStatsData } from "@/data/admin/PostsData";
import sharedClasses from "../DashboardClasses";
import AllJobsTable from "./AllJobsTable";

import usePagination from "@/hooks/use-Pagination";
import Pagination from "@/components/UI/Pagination/Pagination";
import StatsCard from "../StatsCard";

const AllPostsComponent = () => {
  const { paginate, itemsPerPage, currentItems, currentPage, totalItems } =
    usePagination({ items: JobPostsData, itemsPerPage: 6 });

  return (
    <div
      className="m-4 flex flex-col gap-4 overflow-hidden"
      style={{ height: "calc(100% - 80px - 4rem)" }}
    >
      <StatsCard statsData={JobStatsData} />
      <div
        className={`${sharedClasses.cardContainer} h-full flex flex-col justify-between`}
      >
        <div>
          <div className={`${sharedClasses.flexCenter} mb-4`}>
            <h2 className="text-lg font-semibold">Recent Job Posts</h2>
            <button className={`${sharedClasses.button}`}>Create Post</button>
          </div>

          <AllJobsTable tableData={currentItems} />
        </div>
        <div className="flex justify-between w-full">
          <span>
            Showing data {1 + itemsPerPage * (currentPage - 1)} to{" "}
            {currentItems.length + itemsPerPage * (currentPage - 1)} of{" "}
            {JobPostsData.length} entries
          </span>

          <Pagination
            itemsPerPage={itemsPerPage}
            onPageChange={paginate}
            totalItems={totalItems}
          />
        </div>
      </div>
    </div>
  );
};

export default AllPostsComponent;
