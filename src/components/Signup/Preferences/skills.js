import SelectableInput from "@/components/UI/Input/SelectableInput";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";

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

const nextBtnContainerClasses = "w-full flex justify-end mt-4";
const nextBtnClasses = "px-8 py-2 text-white rounded-3xl transition-all";
const btnDisabledClasses = "bg-zinc-400";
const btnEnabledClasses = "bg-black hover:bg-gray-800";

const Skills = ({ onSelectedSkillsInput, setShowLocations, cancelInput }) => {
  return (
    <div
      className={`flex flex-col max-w-4xl mx-auto w-full mb-6 ${BorderContainerClasses}`}
    >
      <label htmlFor="skills" className="block mb-2 font-medium">
        Enter your Skills (5 skills are mandatory)
      </label>

      <SelectableInput
        options={SkillsData}
        placeholder="E.g.: Communication skills"
        onChange={onSelectedSkillsInput.AssignValue}
        initialValue={onSelectedSkillsInput.value}
        cancelInput={cancelInput}
      />
      {setShowLocations && (
        <div className={nextBtnContainerClasses}>
          <button
            className={`${nextBtnClasses} ${
              !onSelectedSkillsInput.isValid
                ? btnDisabledClasses
                : btnEnabledClasses
            }`}
            disabled={!onSelectedSkillsInput.isValid}
            onClick={() => setShowLocations(true)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Skills;
