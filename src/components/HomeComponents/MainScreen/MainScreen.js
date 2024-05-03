import Image from "next/image";
import styles from "./MainScreen.module.css";
import CustomImage from "@/components/UI/Image/Image";
import JobSearch from "@/components/JobSeacrch/JobSearch";
import { useEffect, useState } from "react";

const MainScreenData = {
  descriptionTitle:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit.",
  description:
    "In turpis tempor suspendisse malesuada vivamus pellentesque ac blandit. Nulla eu id id diam cras neque id massa in. Non fringilla nisl rutrum magna et risus dui nulla. Non fringilla nisl rutrum magna et risus dui nulla.",
  image: "",
};

const MainScreen = ({ onSearch }) => {
  const [searchData, setSearchData] = useState();
  useEffect(() => {
    if (searchData) {
      onSearch(searchData);
    }
  }, [searchData]);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-orange-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-white">
          In turpis tempor suspendisse malesuada vivamus pellentesque ac
          blandit.
        </h1>
        <p className="text-md text-zinc-600 dark:text-zinc-300 mt-4">
          In turpis tempor suspendisse malesuada vivamus pellentesque ac
          blandit. Nulla eu id id diam cras neque id massa in. Non fringilla
          nisl rutrum magna et risus dui nulla.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <CustomImage
          src="/assets/home/employs.png"
          alt="Team"
          className=""
          width={1000}
          height={500}
        />
      </div>
      <JobSearch onSearch={setSearchData} />
    </div>
  );
};

export default MainScreen;
