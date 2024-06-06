import { JobPostsData } from "@/data/admin/PostsData";
import sharedClasses from "../DashboardClasses";
import JobTable from "./JobTable";

const DashboardRecentPostsCard = () => {
  return (
    <div className={`${sharedClasses.cardContainer}`}>
      <div className={`${sharedClasses.flexCenter} mb-4`}>
        <h2 className="text-lg font-semibold">Recent Job Posts</h2>
        <button className={`${sharedClasses.button}`}>Create Post</button>
      </div>
      {/* <div className="text-center py-12">
    
        <span>No data is previewed</span>
      </div> */}
      <JobTable tableData={JobPostsData} />
    </div>
  );
};

export default DashboardRecentPostsCard;
