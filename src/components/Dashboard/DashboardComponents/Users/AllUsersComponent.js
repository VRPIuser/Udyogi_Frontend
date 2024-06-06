import UsersComponent from "../AllUsersComponent/UsersComponent";

const { UserStatsData } = require("@/data/admin/UsersData");
const { default: StatsCard } = require("../StatsCard");

const AllUsersComponent = () => {
  return (
    <div
      className="m-4 flex flex-col gap-4 overflow-hidden"
      style={{ height: "calc(100% - 80px - 4rem)" }}
    >
      <StatsCard statsData={UserStatsData} />

      <UsersComponent />
    </div>
  );
};

export default AllUsersComponent;
