import { useRouter } from "next/router";

const { default: CustomImage } = require("@/components/UI/Image/Image");

const JobPostNav = ({ setJobPostNav, navValue }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between mb-8">
      <div className="flex gap-2 items-center justify-center">
        <CustomImage
          src={`/assets/icons/down.png`}
          alt="back_btn"
          width={25}
          height={25}
          className="rotate-90 min-w-6 min-y-6 "
          classForDiv={
            "hover:bg-zinc-100 rounded-full p-2 transition-all active:scale-75"
          }
          onClick={() => {
            router.push("/dashboard/admin/posts");
          }}
        />
        <h2 className="text-2xl font-bold">Post a job</h2>
      </div>
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
