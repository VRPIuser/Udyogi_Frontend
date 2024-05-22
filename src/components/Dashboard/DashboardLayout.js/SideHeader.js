import React from "react";
import HeaderClasses from "./HeaderClasses";
import UdyogiLogo from "@/components/UdyogiLogo/UdyogiLogo";
import Link from "next/link";
import CustomImage from "@/components/UI/Image/Image";

const SideBarData = [
  { icon: "addPosts.png", text: "All Posts" },
  { icon: "quantity.png", text: "All Users" },
  { icon: "correct.png", text: "Shortlisted" },
  { icon: "interview.png", text: "Interviews" },
  { icon: "onBoarding.png", text: "Onboarding Status" },
  { icon: "resume.png", text: "Resumes" },
  { icon: "message.png", text: "Messages" },
  { icon: "profile.png", text: "Profile" },
  { icon: "transactions.png", text: "Transactions" },
  { icon: "logout.png", text: "Logout" },
];

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  return (
    <div
      className={`bg-white lg:static lg:translate-x-0 absolute z-10 transition-all ${
        !showSidebar ? "-translate-x-full" : "-translate-x-0"
      }`}
    >
      <SidebarHeader />
    </div>
  );
};

const SidebarHeader = () => {
  return (
    <div className="min-w-64 h-screen ">
      <div className="flex items-center justify-center mt-5 mb-5">
        <UdyogiLogo />
      </div>
      <div className="flex flex-col">
        <a
          href="#"
          className="text-white bg-orange-500 py-2 px-4 my-1 mx-3 rounded"
        >
          Dashboard
        </a>
        {SideBarData.map((item, index) => (
          <SidebarLink icon={item.icon} text={item.text} key={index} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, text }) => {
  return (
    <Link href="#" className={HeaderClasses.link}>
      {/* <span className="text-lg">{icon}</span> */}
      <CustomImage
        src={`/assets/icons/${icon}`}
        alt=""
        width={20}
        height={20}
        className="grayscale opacity-65"
      />
      <span className="ml-2 text-gray-500">{text}</span>
    </Link>
  );
};

export default Sidebar;
