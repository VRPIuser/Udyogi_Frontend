import { useState } from "react";
import DashboardHeader from "./DashboardHeader";

const { default: Sidebar } = require("./SideHeader");

const DashboardLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 flex">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="w-full">
          <DashboardHeader
            role={"Admin"}
            setShowSidebar={() => setShowSidebar(!showSidebar)}
          />
          {children}
        </main>
      </div>
    </>
  );
};
export default DashboardLayout;
