import AppliedJobsComponent from "@/components/jobs/AppliedJobsComponent/AppliedJobsComponent";
import UserData from "@/data/user";

const AppliedJobs = () => {
  return (
    <div>
      {UserData.jobApplications && (
        <AppliedJobsComponent jobApplications={UserData.jobApplications} />
      )}
    </div>
  );
};

export default AppliedJobs;
