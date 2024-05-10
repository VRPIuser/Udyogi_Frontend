import CustomCheckbox from "@/components/UI/Checkbox/Checkbox";
import { colorTheme } from "../../../../../constants";
import CustomInput from "@/components/UI/Input/Input";

const {
  default: CustomDatePicker,
} = require("@/components/UI/DatePIcker/DatePIcker");

const line = "flex gap-4 mb-4 px-4";
const inputContainer = "w-full flex flex-col gap-2";
const inputLabel = "font-semibold";

const EducationForm = ({
  education,
  index,
  HandleFormValidation,
  handleInputChange,
}) => {
  return (
    <>
      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Degree</label>
          <CustomInput
            type="text"
            name="degree"
            placeholder="Eg. B.Tech"
            value={education.degree}
            onFocus={HandleFormValidation}
            onChange={(e) => handleInputChange(index, e.target.value, "degree")}
            colorTheme={colorTheme.input}
          />
        </div>
      </div>
      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>Institute Name</label>
          <CustomInput
            type="text"
            name="collegeName"
            placeholder="Eg. Harvard University"
            value={education.collegeName}
            onChange={(e) =>
              handleInputChange(index, e.target.value, "collegeName")
            }
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
          />
        </div>

        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>SpecializedIn in</label>
          <CustomInput
            type="text"
            name="specializedIn"
            placeholder="Eg. Mechanical Engineering"
            value={education.specializedIn}
            onChange={(e) =>
              handleInputChange(index, e.target.value, "specializedIn")
            }
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
          />
        </div>
      </div>
      <div className={`${line}`}>
        <CustomCheckbox
          label={"Still Pursing"}
          onChange={(value) => handleInputChange(index, value, "stillPursing")}
        />
      </div>

      <div className={`${line}`}>
        <div className={`${inputContainer}`}>
          <label className={`${inputLabel}`}>From</label>
          <CustomDatePicker
            name="from"
            placeholderText="Eg. 20017-06-02"
            selectedDate={education.from}
            onChange={(value) => handleInputChange(index, value, "from")}
            onFocus={HandleFormValidation}
            colorTheme={colorTheme.input}
          />
        </div>
        {!education.stillPursing && ( // Render "To" date component only if not still pursuing
          <div className={`${inputContainer}`}>
            <label className={`${inputLabel}`}>To</label>
            <CustomDatePicker
              name="to"
              placeholderText="Eg. 2021-04-02"
              selectedDate={education.to}
              onChange={(value) =>
                handleInputChange(
                  index,
                  education.stillPursing ? "" : value,
                  "to"
                )
              }
              onFocus={HandleFormValidation}
              colorTheme={colorTheme.input}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default EducationForm;
