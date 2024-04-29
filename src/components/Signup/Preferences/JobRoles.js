import SelectableInput from "@/UI/Input/SelectableInput";

const JobRollesData = [
  "Project Manager",
  "UI Designer",
  "Graphic Designer",
  "Visual Designer",
  "Front-end Developer",
  "Java Full-stack developer",
];
const JobRoles = ({ onSelectedJobRolesInput }) => {
  return (
    <div className="max-w-4xl mx-auto w-full bg-zinc-300 p-6 rounded-lg shadow mb-6">
      <label for="jobRoles" class="block  font-medium">
        Enter your preferred Job Roles
      </label>

      <SelectableInput
        options={JobRollesData}
        placeholder="E.g.: UI/UX Designer"
        onChange={onSelectedJobRolesInput.AssignValue}
      />
    </div>
  );
};

export default JobRoles;
