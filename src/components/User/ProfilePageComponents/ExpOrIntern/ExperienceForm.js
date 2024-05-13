import CustomCheckbox from "@/components/UI/Checkbox/Checkbox";
import { colorTheme } from "../../../../../constants";
import CustomInput from "@/components/UI/Input/Input";
import { ValueUndefinedValidations } from "@/components/InputValidations/InputValidations";

const {
  default: CustomDatePicker,
} = require("@/components/UI/DatePIcker/DatePIcker");

const line = "flex gap-4 my-4 px-4";
const inputContainer = "w-full flex flex-col gap-2";
const inputLabel = "font-semibold";

const ExperienceForm = ({
  experience,
  index,
  HandleFormValidation,
  handleInputChange,
}) => {
  return (
    <>
      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Company Name</label>
          <CustomInput
            type="text"
            name="companyName"
            placeholder="Eg. TCS"
            value={experience.companyName}
            onFocus={HandleFormValidation}
            onChange={(e) =>
              handleInputChange(index, e.target.value, "companyName")
            }
            colorTheme={colorTheme.input}
          />
        </div>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Company Name</label>
          <CustomInput
            type="text"
            name="jobTitle"
            placeholder="Eg. Frontend Developer"
            value={experience.jobTitle}
            onFocus={HandleFormValidation}
            onChange={(e) =>
              handleInputChange(index, e.target.value, "jobTitle")
            }
            colorTheme={colorTheme.input}
          />
        </div>
      </div>
      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Company Address</label>
          <CustomInput
            type="text"
            name="location"
            placeholder="Eg. Hyderabad"
            value={experience.location}
            onChange={(e) =>
              handleInputChange(index, e.target.value, "location")
            }
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
          />
        </div>

        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Enter CTC in LPA</label>
          <CustomInput
            type="text"
            name="salary"
            placeholder="Eg. 5"
            value={experience.salary}
            onChange={(e) => handleInputChange(index, e.target.value, "salary")}
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
          />
        </div>
      </div>
      <div className={`${line}`}>
        <CustomCheckbox
          label={"Still Working"}
          onChange={(value) => handleInputChange(index, value, "stillWorking")}
        />
      </div>

      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>From</label>
          <CustomDatePicker
            name="from"
            placeholderText="Eg. 2017-06-02"
            selectedDate={experience.from}
            onChange={(value) => handleInputChange(index, value, "from")}
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
            errorMessage={
              !ValueUndefinedValidations(experience.from) && "Invalid date"
            }
          />
        </div>
        {!experience.stillWorking && ( // Render "To" date component only if not still pursuing
          <div className={`${inputContainer}`}>
            <label className={`${inputLabel}`}>To</label>
            <CustomDatePicker
              name="to"
              placeholderText="Eg. 2021-04-02"
              selectedDate={experience.to}
              onChange={(value) =>
                handleInputChange(
                  index,
                  experience.stillWorking ? null : value,
                  "to"
                )
              }
              onFocus={HandleFormValidation}
              colorTheme={colorTheme.input}
              errorMessage={
                !ValueUndefinedValidations(experience.to, experience.from) &&
                "Invalid date"
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ExperienceForm;
