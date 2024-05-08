import ManualNavbar from "@/components/ManualNavbar/ManualNavbar";
import RootLayout from "@/components/RootLayout/RootLayout";
import CompanyCard from "@/components/jobs/JobDetailsComponent/CompanyComponents/CompanyCard";
import MainScreen from "@/components/jobs/JobDetailsComponent/MainScreen";
import { LatestJobsData } from "@/data/Jobs";
import UserData from "@/data/user";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const JobListing = () => {
  const router = useRouter();
  const query = router.query;
  const [job, setJob] = useState();

  const [application, setApplication] = useState();

  useEffect(() => {
    // console.log(query.jobId);

    setJob(
      LatestJobsData.find((job) => job.jobId.toString().trim() === query?.jobId)
    );

    if (job && UserData && UserData.jobApplications) {
      const application = UserData.jobApplications.find(
        (application) =>
          application.jobId.toString().trim().toLowerCase() ===
          job.jobId.toString().trim().toLowerCase()
      );
      setApplication(application);
      console.log(application);
    }
  }, [query, UserData.jobApplications, job?.jobId]);

  const linkData = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
    {
      name: job?.jobTitle,
      link: `/jobs/${job?.jobId}`,
    },
  ];
  return (
    <RootLayout>
      {job && <ManualNavbar data={linkData} />}
      <div className="lg:flex-row lg:items-start flex-col py-8  h-full flex gap-4 justify-center mx-4 items-center">
        {job && (
          <>
            <MainScreen job={job} application={application} />
            <CompanyCard job={job} isApplied={application ? true : false} />
          </>
        )}
      </div>
    </RootLayout>
  );
};

export default JobListing;
