import DashboardLayout from "@/components/Dashboard/DashboardLayout.js/DashboardLayout";
import Button from "@/components/UI/Button/Button";
import GoBackWithText from "@/components/UI/GoBackWithText/GoBackWithText";

const { useParams } = require("next/navigation");
const { useEffect } = require("react");

const UserResumePage = () => {
  const params = useParams();
  useEffect(() => {
    if (params) {
      console.log(params.userId);
    }
  }, [params]);

  return (
    <DashboardLayout>
      {params && (
        <>
          <GoBackWithText text={"Resume"} />
          <div className="min-h-screen w-full mt-4">
            <embed
              src="https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf"
              type="application/pdf"
              width="100%"
              height="1000px"
            />
          </div>
        </>
      )}
    </DashboardLayout>
  );
};

export default UserResumePage;
