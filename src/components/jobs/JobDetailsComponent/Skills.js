const Skills = ({ job }) => {
  return (
    <div className="bg-white shadow-lg rounded-b-lg p-6">
      <h4 className="font-medium text-xl mb-2">Skills</h4>
      <div className="flex flex-wrap gap-2 mt-2">
        {job.expectedSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-orange-100 text-orange-500 text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
