import GetTimePassedFromGiven from "@/hooks/GetTimePassedFromGiven";
import CustomImage from "../UI/Image/Image";

const buttonClasses =
  "p-2 rounded-full bg-zinc-200 text-zinc-600 hover:bg-zinc-300";
const iconClasses = "w-6 h-6";
const textClasses = "text-sm text-zinc-500";

const MainScreen = ({ job }) => {
  const JobRoleInsightData = [
    {
      icon: "postedDate.png",
      title: "Posted Date",
      value: job.postedDate.toString(),
    },
    {
      icon: "careerLevel.png",
      title: "Career Level",
      value: job.postedDate.toString(),
    },
    {
      icon: "locationIcon-p.png",
      title: "Hiring Location",
      value: job.postedDate.toString(),
    },
    {
      icon: "salary.png",
      title: "Offered Salary",
      value: job.postedDate.toString(),
    },
    {
      icon: "quantity.png",
      title: "Quantity",
      value: job.postedDate.toString(),
    },
    {
      icon: "qualification.png",
      title: "Qualification",
      value: job.postedDate.toString(),
    },
    {
      icon: "experience.png",
      title: "Experience",
      value: job.postedDate.toString(),
    },
  ];
  return (
    <div className=" max-w-4xl mx-auto flex flex-col gap-px">
      <div className="bg-white shadow-lg rounded-t-lg p-6 flex justify-between items-start ">
        <div>
          <h2 className="text-3xl font-semibold text-zinc-800">
            UX/UI Designer
          </h2>
          <p className="text-zinc-600">
            <span className="text-orange-500 font-medium">
              {job.companyName}
            </span>
            {"  "}• Posted{" "}
            {"  " + GetTimePassedFromGiven(job.postedDate) + "  "} days ago •{" "}
            {"  " + job.applicants.length + " "}
            applicants
          </p>
        </div>
        <div className="flex space-x-2">
          <button className={buttonClasses}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={iconClasses}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
          <button className={buttonClasses}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={iconClasses}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 19.5l12-12m0 12L6 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white shadow-lg  p-6 flex flex-col justify-between items-start ">
        <h3 className="font-medium text-xl">Job role insights</h3>
        <div className="flex gap-4 mt-4">
          {JobRoleInsightData.map((insights, index) => {
            return (
              <JobInfo
                key={index}
                // icon="M12 6v6m0 0v6m0-6h6"
                // title="Date posted"
                // value="December 8, 2023"
                // color="blue"
                insights={insights}
              />
            );
          })}
          {/* <JobInfo
            icon="M12 3v18m9-9H3"
            title="Career level"
            value="Senior"
            color="orange"
          />
          <JobInfo
            icon="M12 3v18m9-9H3"
            title="Hiring location"
            value="Hyderabad"
            color="green"
          />
          <JobInfo
            icon="M12 6v12m6-6H6"
            title="Offered salary"
            value="₹3-6 L.P.A./year"
            color="purple"
          /> */}
        </div>
      </div>
      <div className=" bg-white shadow-lg p-6">
        <h3 className="text-lg font-semibold text-zinc-800">Description</h3>
        <p className="text-zinc-600 mt-2">
          We are Uxper. With a presence in more than 60 countries, we&#39;re a
          growing global organization that helps amazing companies engage with
          customers through mobile messaging, email, voice and video.
        </p>
        <h4 className="text-md font-semibold text-zinc-800 mt-4">
          Requirements
        </h4>
        <ul className="list-disc pl-5 text-zinc-600">
          <li>
            Be heavily involved in turning user stories into testable,
            maintainable and high-quality code. This is a hands-on code design
            and coding role!
          </li>
          <li>
            Be a valued member of an autonomous, cross-functional team
            delivering our messaging experience to businesses around the world.
          </li>
          <li>
            Promote and share knowledge for improvement of methodologies and
            best practices.
          </li>
          <li>
            Close-knitted collaboration with equally passionate team members
            having fun at work and feeling proud that you are a key part of
            creating world-class solutions for customer engagement.
          </li>
        </ul>
      </div>
      <div className="bg-white shadow-lg rounded-b-lg p-6">
        <h4 className="text-md font-semibold text-zinc-800 mt-4">Skills</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="bg-zinc-200 text-zinc-800 text-sm font-medium px-3 py-1 rounded-full">
            BackEnd Developer
          </span>
          <span className="bg-zinc-200 text-zinc-800 text-sm font-medium px-3 py-1 rounded-full">
            Data Management
          </span>
          <span className="bg-zinc-200 text-zinc-800 text-sm font-medium px-3 py-1 rounded-full">
            PHP
          </span>
          <span className="bg-zinc-200 text-zinc-800 text-sm font-medium px-3 py-1 rounded-full">
            Python
          </span>
        </div>
      </div>
    </div>
  );
};

const JobInfo = ({ insights }) => {
  return (
    <div className="flex items-center">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-6 h-6 text-${color}-500`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
      </svg> */}
      <CustomImage
        src={`/assets/icons/${insights.icon}`}
        alt=""
        width={30}
        height={30}
        classForDiv={`p-2 rounded-full bg-orange-200`}
        divStyles={{ height: "auto" }}
        // className="w-6 h-6"
      />
      <div>
        <p className={textClasses}>{insights.title}</p>
        <p className="text-sm font-semibold text-zinc-800">{insights.value}</p>
      </div>
    </div>
  );
};

export default MainScreen;
