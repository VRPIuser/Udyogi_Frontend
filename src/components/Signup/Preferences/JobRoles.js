import SelectableInput from "@/components/UI/Input/SelectableInput";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";

const JobRollesData = [
  "Project Manager",
  "UI Designer",
  "Graphic Designer",
  "Visual Designer",
  "Front-end Developer",
  "Java Full-stack developer",
];

const nextBtnContainerClasses = "w-full flex justify-end mt-4";
const nextBtnClasses = "px-8 py-2 text-white rounded-3xl transition-all";
const btnDisabledClasses = "bg-zinc-400 hover:bg-zinc-400";
const btnEnabledClasses = "bg-black hover:bg-gray-800";

const JobRoles = ({ onSelectedJobRolesInput, setShowSkills }) => {
  return (
    <div className={`max-w-4xl mx-auto w-full mb-6 ${BorderContainerClasses}`}>
      <label htmlFor="jobRoles" className="block  font-medium">
        Enter your preferred Job Roles
      </label>

      <SelectableInput
        options={JobRollesData}
        placeholder="E.g.: UI/UX Designer"
        onChange={onSelectedJobRolesInput.AssignValue}
      />
      <div className={nextBtnContainerClasses}>
        <button
          className={`${nextBtnClasses} ${
            !onSelectedJobRolesInput.isValid
              ? btnDisabledClasses
              : btnEnabledClasses
          }`}
          disabled={!onSelectedJobRolesInput.isValid}
          onClick={() => setShowSkills(true)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobRoles;
