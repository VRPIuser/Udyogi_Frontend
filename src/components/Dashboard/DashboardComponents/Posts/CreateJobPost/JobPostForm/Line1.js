import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { colorTheme } from "../../../../../../../constants";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const JobPostFormLine1 = ({
  jobTitleInput,
  experienceInput,
  openingsInput,
}) => {
  const Experiences = [
    { label: "1 year", value: 1 },
    { label: "2 years", value: 2 },
    { label: "3 years", value: 3 },
    { label: "4 years", value: 4 },
    { label: "5 years", value: 5 },
    { label: "6 years", value: 6 },
    { label: "7 years", value: 7 },
    { label: "8 years", value: 8 },
    { label: "9 years", value: 9 },
    { label: "10+ years", value: 10 },
    // {label:'12 Month', value:2},
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
      <InputWithInvalidText
        inputFields={jobTitleInput}
        placeholder={"Enter Job Title"}
        ErrorMessage={"Invalid Job Title"}
        mandatory={true}
        colorTheme={colorTheme.input}
      />
      {/* <InputWithInvalidText
        inputFields={experienceInput}
        placeholder={"Enter Experience"}
        ErrorMessage={"Invalid Experience"}
        mandatory={true}
        colorTheme={colorTheme.input}
      /> */}
      <Dropdown
        options={Experiences}
        placeholder={"Experience"}
        ErrorMessage={"Invalid value"}
        mandatory={true}
        onSelect={(value) => experienceInput.AssignValue(value)}
        colorTheme={colorTheme.input}
      />
      <InputWithInvalidText
        inputFields={openingsInput}
        placeholder={"Openings"}
        ErrorMessage={"Invalid value"}
        mandatory={true}
        colorTheme={colorTheme.input}
      />
    </div>
  );
};

export default JobPostFormLine1;
