import RootLayout from "@/components/RootLayout/RootLayout";
import AppliedJobsComponent from "@/components/jobs/AppliedJobsComponent/AppliedJobsComponent";
import UserData from "@/data/user";

const AppliedJobs = () => {
  return (
    <RootLayout>
      {UserData.jobApplications && (
        <AppliedJobsComponent jobApplications={UserData.jobApplications} />
      )}
    </RootLayout>
  );
};

export default AppliedJobs;
