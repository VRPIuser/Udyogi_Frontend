import React from "react";
import HeaderClasses from "./HeaderClasses";
import UdyogiLogo from "@/components/UdyogiLogo/UdyogiLogo";

import CustomImage from "@/components/UI/Image/Image";
import { useRouter } from "next/router";
import { AdminSideBarData } from "@/data/admin/AdminSideBarData";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  const SideBarData = AdminSideBarData();
  return (
    <div
      className={`bg-white lg:static lg:translate-x-0 absolute z-10 transition-all ${
        !showSidebar ? "-translate-x-full" : "-translate-x-0"
      }`}
    >
      <SidebarHeader SideBarData={SideBarData} />
    </div>
  );
};

const SidebarHeader = ({ SideBarData }) => {
  return (
    <div className="min-w-64 h-screen ">
      <div className="flex items-center justify-center mt-5 mb-5">
        <UdyogiLogo />
      </div>
      <div className="flex flex-col">
        {SideBarData.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const SidebarLink = ({ item }) => {
  const router = useRouter();

  const isActive = item.link === router.pathname;

  return (
    <span
      className={`${isActive ? "bg-orange-500" : "hover:bg-zinc-300"} ${
        HeaderClasses.link
      }`}
      onClick={item.action}
    >
      <CustomImage
        src={`/assets/icons/${item.icon}`}
        alt=""
        width={20}
        height={20}
        className="grayscale opacity-65"
        onClick={() => {
          console.log(router.pathname);
        }}
      />
      <span className={`ml-2 ${isActive ? "text-white" : "text-gray-500"}`}>
        {item.text}
      </span>
    </span>
  );
};

export default Sidebar;
