import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { colorTheme } from "../../../../../../../constants";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const JobPostFormLine3 = ({
  employmentTypeInput,
  employmentModeInput,
  salaryLowerRangeInput,
  salaryUpperRangeInput,
  salaryMetricInput,
}) => {
  const workOptions = ["Onsite", "Work from Home", "Hybrid", "Remote"];
  const JobTypes = [
    "Full-Time",
    "Part-Time",
    "Internship",
    "Contractual",
    "Permanent",
  ];

  const SalaryTypes = ["LPA", "CTC", "Other"];

  return (
    <div className="flex gap-x-4 flex-col">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-4">
        <Dropdown
          options={JobTypes}
          placeholder={"Employment Type"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          onSelect={(value) => employmentTypeInput.AssignValue(value)}
          colorTheme={colorTheme.input}
        />
        <Dropdown
          options={workOptions}
          placeholder={"Employment Mode"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          onSelect={(value) => employmentModeInput.AssignValue(value)}
          colorTheme={colorTheme.input}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-x-4">
        <InputWithInvalidText
          inputFields={salaryLowerRangeInput}
          placeholder={"Salary lower limit"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          colorTheme={colorTheme.input}
          type={"number"}
        />
        <InputWithInvalidText
          inputFields={salaryUpperRangeInput}
          placeholder={"Salary upper limit"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          colorTheme={colorTheme.input}
          type={"number"}
        />
        {/* <InputWithInvalidText
          inputFields={salaryMetricInput}
          placeholder={"Salary metrics"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          colorTheme={colorTheme.input}
        /> */}
        <Dropdown
          options={SalaryTypes}
          placeholder={"Salary Metrics"}
          ErrorMessage={"Invalid value"}
          mandatory={true}
          onSelect={(value) => salaryMetricInput.AssignValue(value)}
          colorTheme={colorTheme.input}
        />
      </div>
    </div>
  );
};

export default JobPostFormLine3;
