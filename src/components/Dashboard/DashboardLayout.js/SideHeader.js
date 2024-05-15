import React from "react";
import HeaderClasses from "./HeaderClasses";
import UdyogiLogo from "@/components/UdyogiLogo/UdyogiLogo";
import Link from "next/link";

const Sidebar = ({ setShowSidebar, showSidebar }) => {
  return (
    <div
      className={`bg-white lg:static lg:translate-x-0 absolute z-10 ${
        showSidebar ? "-translate-x-full" : "-translate-x-0"
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
        <SidebarLink icon="📄" text="All Posts" />
        <SidebarLink icon="🌟" text="Shortlisted" />
        <SidebarLink icon="🎤" text="Interviews" />
        <SidebarLink icon="🚀" text="Onboarding Status" />
        <SidebarLink icon="📁" text="Resumes" />
        <SidebarLink icon="💬" text="Messages" />
        <SidebarLink icon="👤" text="Profile" />
        <SidebarLink icon="🚪" text="Logout" />
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, text }) => {
  return (
    <Link href="#" className={HeaderClasses.link}>
      <span className="text-lg">{icon}</span>
      <span className="ml-2 text-gray-500">{text}</span>
    </Link>
  );
};

export default Sidebar;
