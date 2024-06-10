import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { colorTheme } from "../../../../../../../constants";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const JobPostFormLine2 = ({
  mustHaveSkillsInput,
  educationInput,
  locationInput,
}) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
      <InputWithInvalidText
        inputFields={mustHaveSkillsInput}
        placeholder={"Must have skills"}
        ErrorMessage={"Invalid value"}
        mandatory={true}
        colorTheme={colorTheme.input}
      />
      <InputWithInvalidText
        inputFields={educationInput}
        placeholder={"Education"}
        ErrorMessage={"Invalid value"}
        mandatory={true}
        colorTheme={colorTheme.input}
      />

      <InputWithInvalidText
        inputFields={locationInput}
        placeholder={"Location"}
        ErrorMessage={"Invalid value"}
        mandatory={true}
        colorTheme={colorTheme.input}
      />
    </div>
  );
};

export default JobPostFormLine2;
