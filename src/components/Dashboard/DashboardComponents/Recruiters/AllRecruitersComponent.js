import { RecruitersStatsData } from "@/data/admin/RecruitersData";
import UsersComponent from "../AllRecruitersComponent/RecruitersComponent";

const { default: StatsCard } = require("../StatsCard");

const AllRecruitersComponent = () => {
  return (
    <div
      className="flex flex-col gap-4 overflow-hidden"
      style={{ height: "calc(100% - 80px - 4rem)" }}
    >
      <StatsCard statsData={RecruitersStatsData} />

      <UsersComponent />
    </div>
  );
};

export default AllRecruitersComponent;
