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
      <JobTable tableData={tableData} />
    </div>
  );
};

export default DashboardRecentPostsCard;

const tableData = [
  {
    title: "UI/UX Designer",
    date: "Today",
    openings: 7,
    applications: 359,
    active: true,
  },
  {
    title: "Frontend Developer",
    date: "Yesterday",
    openings: 5,
    applications: 210,
    active: false,
  },
  {
    title: "Backend Developer",
    date: "2 days ago",
    openings: 3,
    applications: 120,
    active: true,
  },
  {
    title: "UI/UX Designer",
    date: "Today",
    openings: 7,
    applications: 359,
    active: true,
  },
  {
    title: "Frontend Developer",
    date: "Yesterday",
    openings: 5,
    applications: 210,
    active: false,
  },
  {
    title: "Backend Developer",
    date: "2 days ago",
    openings: 3,
    applications: 120,
    active: true,
  },
  {
    title: "UI/UX Designer",
    date: "Today",
    openings: 7,
    applications: 359,
    active: true,
  },
  {
    title: "Frontend Developer",
    date: "Yesterday",
    openings: 5,
    applications: 210,
    active: false,
  },
  {
    title: "Backend Developer",
    date: "2 days ago",
    openings: 3,
    applications: 120,
    active: true,
  },
  {
    title: "UI/UX Designer",
    date: "Today",
    openings: 7,
    applications: 359,
    active: true,
  },
  {
    title: "Frontend Developer",
    date: "Yesterday",
    openings: 5,
    applications: 210,
    active: false,
  },
  {
    title: "Backend Developer",
    date: "2 days ago",
    openings: 3,
    applications: 120,
    active: true,
  },
  // Add more rows as needed
];
