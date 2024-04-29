import InputWithInvalidText from "@/UI/Input/InputWithInvalidText";
import ResumeUploader from "./ResumeUploader";
import CustomCheckbox from "@/UI/Checkbox/Checkbox";
import Button from "@/UI/Button/Button";
import CustomDatePicker from "@/UI/DatePIcker/DatePIcker";

const inputClasses = "border border-zinc-300 p-2 rounded";
const flexClasses = "flex items-center mb-6";
// const buttonClasses =
//   "w-full max-w-44 mx-auto bg-orange-500 text-white p-2 rounded-lg";
const DegreeDetails = ({
  InstituteNameInput,
  SpecializationInInput,
  StillPursuingInput,
  degreeStartedOnInput,
  degreeCompletedOnInput,
  resumeInput,
  SubmitHandler,
  formIsValid,
}) => {
  return (
    <>
      <div className=" mx-auto  p-6 rounded-lg shadow bg-gray-300 flex flex-col gap-4">
        <h2 className="text-lg font-semibold ">Enter your Education Details</h2>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-0 ">
          {/* <input
        /> */}
          <InputWithInvalidText
            type="text"
            inputFields={InstituteNameInput}
            placeholder="Institute Name"
          />
          <InputWithInvalidText
            inputFields={SpecializationInInput}
            type="text"
            placeholder="Specialization in"
          />
        </div>

        <div className="flex">
          <CustomCheckbox
            onChange={StillPursuingInput.AssignValue}
            id="stillPursuing"
          />
          <label htmlFor="stillPursuing" className="ml-2 cursor-pointer">
            Still Pursuing
          </label>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-0 ">
          <CustomDatePicker
            onChange={degreeStartedOnInput.AssignValue}
            placeholderText="From"
            mandatory={true}
            selectedDate={degreeStartedOnInput.value}
          />
          {!StillPursuingInput.value && (
            <CustomDatePicker
              onChange={degreeCompletedOnInput.AssignValue}
              placeholderText="To"
              mandatory={true}
              selectedDate={degreeCompletedOnInput.value}
            />
          )}
        </div>
        {/* </div> */}
      </div>
      <ResumeUploader resumeInput={resumeInput} />
      <div className="w-full flex justify-center">
        <Button
          className="w-full max-w-44"
          disabled={!formIsValid}
          onClick={SubmitHandler}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
export default DegreeDetails;
