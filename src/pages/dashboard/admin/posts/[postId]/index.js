import ApplicationsTable from "@/components/Dashboard/DashboardComponents/Posts/JobPostDetailsComponent/ApplicationsTable";
import JobCard from "@/components/Dashboard/DashboardComponents/Posts/JobPostDetailsComponent/JobCard";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
import GoBackWithText from "@/components/UI/GoBackWithText/GoBackWithText";
import CustomImage from "@/components/UI/Image/Image";
import { LatestJobsData } from "@/data/Jobs";
import { JobPostsData } from "@/data/admin/PostsData";
import { useRouter } from "next/router";

const { useParams } = require("next/navigation");
const { useEffect, useState } = require("react");

const PostDetailsPage = () => {
  const params = useParams();

  const [post, setPost] = useState();
  useEffect(() => {
    console.log(params);
    if (params) {
      setPost(
        LatestJobsData.find(
          (post) => post.jobId.toString() === params.postId.toString()
        )
      );
    }
  }, [params]);

  const router = useRouter();

  return (
    <DashboardLayout>
      {post && (
        <div className="max-w-5xl mx-auto">
          <GoBackWithText text={"Job Post-info"} />
          <JobCard job={post} />
          <ApplicationsTable />
        </div>
      )}
    </DashboardLayout>
  );
};

export default PostDetailsPage;
