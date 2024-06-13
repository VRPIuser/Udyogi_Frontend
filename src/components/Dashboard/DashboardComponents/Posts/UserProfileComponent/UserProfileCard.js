import Button from "@/components/UI/Button/Button";
import { useRouter } from "next/router";

const { default: CustomImage } = require("@/components/UI/Image/Image");

const UserProfileCard = ({ profileData, userId }) => {
  const router = useRouter();

  return (
    <>
      {profileData && (
        <div className="w-fit h-fit max-w-80 flex flex-col gap-4 items-start bg-white p-4 rounded-lg shadow-md">
          <CustomImage
            src="/assets/icons/profilePic.png"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="text-xl font-semibold ">{profileData.name}</h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/interview.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />
              <p className="text-gray-500">{profileData.jobTitle[0]}</p>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/graduate.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />

              <p className="text-gray-500">
                {profileData.highestQualification}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/experienceIcon.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />

              <p className="text-gray-500">
                {profileData.totalExperience}{" "}
                {profileData.totalExperience > 1 ? "years" : "year"} experience
              </p>
            </div>
            {/* <div className="flex gap-2">
              <CustomImage
                src={`/assets/icons/location_b.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />

              <p className="text-gray-500">Hyderabad</p>
            </div> */}
            <div className="flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/phone.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />

              <p className="text-gray-500">{profileData.mobile}</p>
            </div>
            <div className="flex gap-2 items-center">
              <CustomImage
                src={`/assets/icons/email.png`}
                alt="Job Title"
                width={20}
                height={20}
                className="min-w-5 min-h-5"
              />

              <p className="text-gray-500">{profileData.email}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button>Send Message</Button>
            <Button
              onClick={() => {
                router.push(`/dashboard/admin/user-profile/${userId}/resume`);
              }}
            >
              Resume
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfileCard;
