import CustomTextArea from "@/components/UI/TextArea/TextArea";
import { colorTheme } from "../../../../../../../constants";

const DescriptionsBoxes = ({
  jobDescriptionInput,
  responsibilitiesInput,
  aboutCompanyInput,
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <CustomTextArea
        inputFields={jobDescriptionInput}
        placeholder={"Job Description"}
        colorTheme={colorTheme.input}
        rows={5}
        mandatory={true}
      />
      <CustomTextArea
        inputFields={responsibilitiesInput}
        placeholder={"Responsibilities"}
        colorTheme={colorTheme.input}
        rows={5}
        mandatory={true}
      />
      <CustomTextArea
        inputFields={aboutCompanyInput}
        placeholder={"About Company"}
        colorTheme={colorTheme.input}
        rows={5}
        mandatory={true}
      />
    </div>
  );
};
export default DescriptionsBoxes;
