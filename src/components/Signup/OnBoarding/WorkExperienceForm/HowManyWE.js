import Dropdown from "@/UI/Dropdown/Dropdown";
import InputWithInvalidText from "@/UI/Input/InputWithInvalidText";
import { NoOfYearsValidation } from "@/components/InputValidations/InputValidations";
import useInput from "@/hooks/use-Input";
import { useEffect, useState } from "react";

const INPUT_CLASS = "form-input mt-1 p-2 border border-zinc-300 rounded w-full";
const BUTTON_CLASS = "px-4 py-2 border border-zinc-300 rounded";

const InputAndLabelClasses = "flex w-full flex-col gap-4";

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

      <div className="flex flex-col sm:flex-row sm:gap-4 gap-0 ">
        <div className={InputAndLabelClasses}>
          <label className="block text-zinc-700">In Years</label>
          {/* <select className={INPUT_CLASS}>
            <option>E.g 2 Years</option>
          </select> */}
          <InputWithInvalidText
            ErrorMessage={"Invalid Year"}
            placeholder="E.g 2 years"
            // className={`${styles.Input} `}
            inputFields={yearsInput}
            type="text"
            mandatory="true"
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
          />
        </div>
      </div>
    </>
  );
};

export default HowManyWE;

// ```jsx
// import React from 'react';

// const INPUT_CLASS = 'form-input mt-1 p-2 border border-zinc-300 rounded w-full';
// const BUTTON_CLASS = 'px-4 py-2 border border-zinc-300 rounded';

// const WorkExperienceForm = () => {
//     return (
//         <div className="bg-zinc-100 p-4 font-sans">
//             <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
//                 // <a href="#" className="text-blue-500 flex items-center mb-6">
//                 //     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 //         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
//                 //     </svg>
//                 //     Back
//                 // </a>

//         </div>
//     );
// };

// export default WorkExperienceForm;
// ```;
