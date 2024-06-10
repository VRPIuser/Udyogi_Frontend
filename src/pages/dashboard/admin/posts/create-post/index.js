import JobPostForm from "@/components/Dashboard/DashboardComponents/Posts/CreateJobPost/JobPostForm/JobPostForm";
import JobPostNav from "@/components/Dashboard/DashboardComponents/Posts/CreateJobPost/JobPostNav";
import JobPostScreeningQuestions from "@/components/Dashboard/DashboardComponents/Posts/CreateJobPost/JobPostScreeningQuestions";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
import { useState } from "react";

const CreateJobPost = () => {
  const [jobPostNavValue, setJobPostNavValue] = useState("form");
  return (
    <DashboardLayout>
      <div className="m-4 bg-white rounded-lg p-8 shadow max-w-5xl mx-auto">
        <JobPostNav
          setJobPostNav={setJobPostNavValue}
          navValue={jobPostNavValue}
        />
        {jobPostNavValue === "form" && <JobPostForm />}
        {jobPostNavValue === "questions" && <JobPostScreeningQuestions />}
      </div>
    </DashboardLayout>
  );
};

export default CreateJobPost;
