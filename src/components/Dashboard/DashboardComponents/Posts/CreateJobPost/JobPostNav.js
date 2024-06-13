import GoBackWithText from "@/components/UI/GoBackWithText/GoBackWithText";
import { useRouter } from "next/router";

const { default: CustomImage } = require("@/components/UI/Image/Image");

const JobPostNav = ({ setJobPostNav, navValue }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between mb-8">
      <GoBackWithText text={"Post a job"} style={{ width: "100%" }} />
      <div className="flex gap-4 ">
        <button
          className={`w-44 py-2 ${
            navValue === "form" ? "bg-orange-500 text-white" : "bg-white"
          } transition-all rounded-md  shadow shadow-zinc-200`}
          onClick={() => {
            setJobPostNav("form");
          }}
        >
          Job Details
        </button>
        <button
          className={`w-44 py-2 ${
            navValue === "questions" ? "bg-orange-500 text-white" : "bg-white"
          } transition-all rounded-md  shadow shadow-zinc-200`}
          onClick={() => {
            setJobPostNav("questions");
          }}
        >
          Screening Questions
        </button>
      </div>
    </div>
  );
};

export default JobPostNav;
