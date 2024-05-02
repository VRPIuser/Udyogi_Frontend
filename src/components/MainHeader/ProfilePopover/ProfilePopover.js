import React from "react";
import CustomImage from "@/components/UI/Image/Image";

// Define shared tailwind classes
const flexItemsCenter = "flex items-center";
const textZinc500 = "text-zinc-500";
const roundedFull = "rounded-full";
const bgBlue500 = "bg-blue-500";
const textWhite = "text-white";
const rounded = "rounded";
const px4 = "px-4";
const py2 = "py-2";
const mt3 = "mt-3";
const mt4 = "mt-4";
const spaceY2 = "space-y-2";

// Dummy profile data
const profileData = [
  { icon: "profileActivity.png", label: "Profile Activity" },
  { icon: "myJobs.png", label: "My Jobs" },
  { icon: "subscription.png", label: "My Subscriptions" },
  { icon: "settings.png", label: "Settings" },
  { icon: "contactSupport.png", label: "Help & Support" },
  { icon: "logout.png", label: "Log Out" },
];

const ProfileComponent = () => {
  return (
    <div className="bg-white rounded-lg max-w-lg">
      <div className="flex flex-col items-center px-6 py-2 bg-zinc-400">
        <CustomImage
          src="/assets/icons/profilePic.png"
          alt="Profile Image"
          className={`${roundedFull} mb-3`}
        />
        <h3 className="text-lg font-semibold">Sushritha Maidam</h3>
        <p className="text-zinc-600">maidamsushritha@gmail.com</p>
        <button className={`mt-3 px-4 py-2 bg-white text-black`}>
          View Profile
        </button>
      </div>
      <ul class="space-y-2 p-4 bg-zinc-100">
        {profileData.map((item, index) => (
          <li key={index} className={`${flexItemsCenter}`}>
            <CustomImage
              src={`/assets/icons/${item.icon}`}
              alt={item.label}
              className="w-6 h-6 text-zinc-500 mr-2"
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileComponent;
