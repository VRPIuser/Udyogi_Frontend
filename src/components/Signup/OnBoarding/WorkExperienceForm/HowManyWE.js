import Dropdown from "@/components/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import { NoOfYearsValidation } from "@/components/InputValidations/InputValidations";
import useInput from "@/hooks/use-Input";
import { useEffect, useState } from "react";
import { colorTheme } from "../../../../../constants";
import { twoInputContainerClasses } from "@/components/tailwindClasses/InputClasses";

const INPUT_CLASS = "form-input mt-1 p-2 border border-zinc-300 rounded w-full";
const BUTTON_CLASS = "px-4 py-2 border border-zinc-300 rounded";

const InputAndLabelClasses = "flex w-full flex-col gap-2";

const HowManyWE = ({ monthsInput, yearsInput }) => {
  useEffect(() => {});

  const MonthsList = [
    { label: "1 Month", value: 1 },
    { label: "2 Month", value: 2 },
    { label: "3 Month", value: 3 },
    { label: "4 Month", value: 4 },
    { label: "5 Month", value: 5 },
    { label: "6 Month", value: 6 },
    { label: "7 Month", value: 7 },
    { label: "8 Month", value: 8 },
    { label: "9 Month", value: 9 },
    { label: "10 Month", value: 10 },
    { label: "11 Month", value: 11 },
    // {label:'12 Month', value:2},
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        How many years of work Experience do you have?
      </h2>

      <div className={twoInputContainerClasses}>
        <div className={InputAndLabelClasses}>
          <label className="block text-zinc-700">In Years</label>

          <InputWithInvalidText
            ErrorMessage={"Invalid Year"}
            placeholder="E.g 2 years"
            // className={`${styles.Input} `}
            inputFields={yearsInput}
            type="text"
            mandatory="true"
            colorTheme={colorTheme.input}
          />
        </div>
        <div className={InputAndLabelClasses}>
          <label className="block text-zinc-700">In Months</label>
          <Dropdown
            options={MonthsList}
            onSelect={(month) => monthsInput.AssignValue(month.value)}
            placeholder="Months"
            styles={{ marginBottom: "21.6px", width: "100%" }}
            mandatory
            colorTheme={colorTheme.input}
          />
        </div>
      </div>
    </>
  );
};

export default HowManyWE;
