import CustomCheckbox from "@/UI/Checkbox/Checkbox";
import CustomDatePicker from "@/UI/DatePIcker/DatePIcker";
import InputWithInvalidText from "@/UI/Input/InputWithInvalidText";
import { useEffect } from "react";

const INPUT_CLASS = "form-input mt-1 p-2 border border-zinc-300 rounded w-full";
const BUTTON_CLASS = "px-4 py-2 border border-zinc-300 rounded";

const Container_Class = "bg-gray-300 p-6 rounded-2xl";

const CompanyDetails = ({
  FreelancerOrNotInput,

  companyNameInput,
  companyAddressInput,
  jobTitleInput,
  ctcInput,

  fromDateInput,
  toDateInput,
  stillWorkingInput,
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Enter your present Company Details
      </h2>
      <div className="mb-4">
        <CustomCheckbox
          label={"I'm a Freelancer"}
          onChange={() => {
            FreelancerOrNotInput.AssignValue(!FreelancerOrNotInput.value);
          }}
        />
      </div>

      <div
        className={`${
          FreelancerOrNotInput.value ? "hidden" : "block"
        } transition-all `}
      >
        <div className="flex gap-0 sm:flex-row flex-col sm:gap-4 ">
          <InputWithInvalidText
            placeholder={"Company Name"}
            type={"text"}
            mandatory={true}
            ErrorMessage={"Invalid Company Name"}
            inputFields={companyNameInput}
          />
          <InputWithInvalidText
            placeholder={"Job Title"}
            type={"text"}
            mandatory={true}
            ErrorMessage={"Invalid Job Title"}
            inputFields={jobTitleInput}
          />
        </div>
        <div className="">
          <InputWithInvalidText
            placeholder={"Company Address"}
            type={"text"}
            mandatory={true}
            ErrorMessage={"Invalid Company Address"}
            inputFields={companyAddressInput}
          />
        </div>
        <div className="">
          <InputWithInvalidText
            placeholder={"Enter CTC in LPA"}
            type={"text"}
            mandatory={true}
            ErrorMessage={"Invalid CTC"}
            inputFields={ctcInput}
          />
        </div>
        <div className="">
          <div className="mb-4">
            <CustomCheckbox
              label={"Still Working"}
              onChange={stillWorkingInput.AssignValue}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <CustomDatePicker
              placeholderText={"From"}
              mandatory={true}
              onChange={fromDateInput.AssignValue}
              selectedDate={fromDateInput.value}
            />
            {!stillWorkingInput.value && (
              <CustomDatePicker
                placeholderText={"To"}
                mandatory={true}
                onChange={toDateInput.AssignValue}
                selectedDate={toDateInput.value}
                disabled={stillWorkingInput.value}
              />
            )}
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default CompanyDetails;
