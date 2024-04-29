import SelectableInput from "@/UI/Input/SelectableInput";

const SkillsData = [
  "Interpersonal Skills",
  "Problem Solving",
  "Wireframing",
  "Prototyping ",
  "User Research",
  "HTML5",
  "CSS",
  "Bootstrap",
];
const Skills = ({ onSelectedSkillsInput }) => {
  return (
    <div className="max-w-4xl mx-auto w-full bg-zinc-300 p-6 rounded-lg shadow mb-6">
      <label for="skills" class="block mb-2 font-medium">
        Enter your Skills (5 skills are mandatory)
      </label>

      <SelectableInput
        options={SkillsData}
        placeholder="E.g.: Communication skills"
        onChange={onSelectedSkillsInput.AssignValue}
      />
    </div>
  );
};

export default Skills;
