import React from "react";
import CustomImage from "@/components/UI/Image/Image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "@/store/LoginState/LoginStateActions";
import UserData from "@/data/user";

// Define shared tailwind classes
const flexItemsCenter =
  "flex items-center cursor-pointer px-4 py-2 mb-0 hover:bg-zinc-200 transition-all";
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

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileData = [
    {
      icon: "profileActivity.png",
      label: "My Following",

      action: () => {
        router.push("/user/my-following");
      },
    },
    {
      icon: "subscription.png",
      label: "My Subscriptions",
      action: () => {
        router.push("/user/my-subscriptions");
      },
    },
    {
      icon: "myJobs.png",
      label: "My Jobs",

      action: () => {
        router.push("/user/my-jobs");
      },
    },
    {
      icon: "subscription.png",
      label: "Messages",
      action: () => {
        router.push("/user/chat");
      },
    },

    {
      icon: "settings.png",
      label: "Settings",
      action: () => {
        router.push("/user/settings");
      },
    },
    {
      icon: "contactSupport.png",
      label: "Help & Support",
      action: () => {
        router.push("/user/contact-support");
      },
    },
    {
      icon: "logout.png",
      label: "Log Out",
      action: () => {
        dispatch(logout());
        router.push("/sign-in");
      },
    },
  ];

  return (
    <div className="bg-white rounded-lg max-w-lg">
      <div className="flex flex-col items-center px-6 py-2 bg-zinc-400">
        <CustomImage
          src="/assets/icons/profilePic.png"
          alt="Profile Image"
          className={`${roundedFull} mb-3`}
        />
        <h3 className="text-lg font-semibold">
          {UserData.lastName + " " + UserData.firstName}
        </h3>
        <p className="text-zinc-600">{UserData.email}</p>
        <button
          className={`mt-3 px-4 py-2 bg-white text-black`}
          onClick={() => {
            router.push("/user/profile");
          }}
        >
          View Profile
        </button>
      </div>
      <ul class=" bg-zinc-100">
        {profileData.map((item, index) => (
          <li
            key={index}
            className={`${flexItemsCenter}`}
            onClick={item.action}
          >
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
