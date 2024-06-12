import ApplicationsTable from "@/components/Dashboard/DashboardComponents/Posts/JobPostDetailsComponent/ApplicationsTable";
import JobCard from "@/components/Dashboard/DashboardComponents/Posts/JobPostDetailsComponent/JobCard";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
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
          <div className="flex gap-2 items-center justify-start mb-4">
            <CustomImage
              src={`/assets/icons/down.png`}
              alt="back_btn"
              width={25}
              height={25}
              className="rotate-90 min-w-6 min-y-6 "
              classForDiv={
                "hover:bg-zinc-100 rounded-full p-2 transition-all active:scale-75"
              }
              onClick={() => {
                router.push("/dashboard/admin/posts");
              }}
            />
            <h2 className="text-2xl font-bold">Job Post-info</h2>
          </div>
          <JobCard job={post} />
          <ApplicationsTable />
        </div>
      )}
    </DashboardLayout>
  );
};

export default PostDetailsPage;
