import CustomImage from "@/components/UI/Image/Image";

const JobRoleInsight = ({ job }) => {
  const JobRoleInsightData = [
    {
      icon: "postedDate.png",
      title: "Posted Date",
      value: job.postedDate.toString(),
    },
    {
      icon: "careerLevel.png",
      title: "Career Level",
      value: job.careerLevel,
    },
    {
      icon: "locationIcon-p.png",
      title: "Hiring Location",
      value: job.companyDetails.location,
    },
    {
      icon: "salary.png",
      title: "Offered Salary",
      value:
        job.salaryRange.lowerLimit +
        " - " +
        job.salaryRange.upperLimit +
        " " +
        job.salaryRange.salaryType,
    },
    {
      icon: "quantity.png",
      title: "Quantity",
      value: job.applicants.length + " applicants",
    },
    {
      icon: "qualification.png",
      title: "Qualification",
      value: job.qualification,
    },
    {
      icon: "experience.png",
      title: "Experience",
      value:
        job.expectedExperience.lowerLimit +
        " - " +
        job.expectedExperience.upperLimit +
        " " +
        job.expectedExperience.experienceMetrics,
    },
  ];

  return (
    <div className="bg-white shadow-lg  p-6 flex flex-col justify-between items-start ">
      <h3 className="font-medium text-xl mb-2">Job role insights</h3>
      <div className="flex flex-wrap gap-8 mt-4">
        {JobRoleInsightData.map((insights, index) => {
          return <JobInfo key={index} insights={insights} />;
        })}
      </div>
    </div>
  );
};

export default JobRoleInsight;

const JobInfo = ({ insights }) => {
  return (
    <div className="flex items-center min-w-44 gap-4">
      <CustomImage
        src={`/assets/icons/${insights.icon}`}
        alt=""
        width={30}
        height={30}
        classForDiv={`p-2 rounded-full bg-orange-200`}
        divStyles={{ height: "auto" }}
        className="w-5 h-5"
      />
      <div>
        <p className={""}>{insights.title}</p>
        <p className="text-sm font-semibold text-zinc-800">{insights.value}</p>
      </div>
    </div>
  );
};
