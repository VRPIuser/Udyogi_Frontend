import DivideWithFullStop from "@/hooks/DivideFullStops";

const JobDescription = ({ job }) => {
  return (
    <div className=" bg-white shadow-lg p-6">
      <h3 className="font-medium text-xl mb-2">Description</h3>
      <h4 className="text-md font-semibold text-zinc-800 mt-4">Overview</h4>
      <p className="text-zinc-600 mt-2">{job.jobDescription.overview}</p>
      <h4 className="text-md font-semibold text-zinc-800 mt-4">Requirements</h4>
      {DivideWithFullStop(job.jobDescription.requirements).map(
        (requirement, index) => {
          return (
            <p className="text-zinc-600 mt-2 pl-6" key={index}>
              {requirement + "."}
            </p>
          );
        }
      )}
    </div>
  );
};

export default JobDescription;
