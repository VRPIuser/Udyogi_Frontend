import Button from "@/components/UI/Button/Button";
import CustomImage from "@/components/UI/Image/Image";

const ProfileMainInfo = ({ companyData }) => {
  return (
    <div className="flex flex-col items-center mb-8 bg-white p-4 rounded-xl max-w-80 w-full">
      {/* <div className="w-24 h-24 rounded-full bg-gray-300 mb-4"></div>
       */}
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
        <CustomImage src={companyData.logo} alt="" width={100} height={100} />
      </div>
      <h1 className="text-2xl font-bold text-orange-500">
        {companyData.companyName}
      </h1>
      <p>{companyData.location}</p>
      <div className="mt-4 text-center w-full">
        <p className="border-y border-zinc-200 py-2">
          Total Followers: {companyData.totalFollowers}
        </p>
        <p className="border-y-0 border-zinc-200 py-2">
          Total IT Recruiters: {companyData.totalRecruiters}
        </p>
        <p className="border-y border-zinc-200 py-2">
          Current Openings: {companyData.currentOpenings}
        </p>
      </div>
      <Button className="mt-4 py-2 px-6">Logout</Button>
    </div>
  );
};

export default ProfileMainInfo;
