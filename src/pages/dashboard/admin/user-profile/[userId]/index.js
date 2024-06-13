import UserProfileComponent from "@/components/Dashboard/DashboardComponents/Posts/UserProfileComponent/UserProfileComponent";
import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
import GoBackWithText from "@/components/UI/GoBackWithText/GoBackWithText";
import CustomImage from "@/components/UI/Image/Image";
import { useRouter } from "next/router";

const { useParams } = require("next/navigation");
const { useEffect } = require("react");

const UserProfilePage = () => {
  const params = useParams();
  useEffect(() => {
    if (params) {
      console.log(params.userId);
    }
  }, [params]);

  const router = useRouter();

  return (
    <DashboardLayout>
      {params && (
        <>
          <GoBackWithText text={"User Profile"} />
          <UserProfileComponent userId={params.userId} />
        </>
      )}
    </DashboardLayout>
  );
};

export default UserProfilePage;
