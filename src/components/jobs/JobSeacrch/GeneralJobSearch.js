import useInput from "@/hooks/use-Input";

import { Locations } from "@/data/DropdownData";
import { useEffect, useState } from "react";
import {
  ValueUndefinedValidations,
  fullNameValidation,
} from "@/components/InputValidations/InputValidations";
import CustomImage from "@/components/UI/Image/Image";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const inputClasses =
  "mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-white";
const buttonClasses =
  "w-fit font-bold py-2 sm:px-8 px-4 rounded-full transition duration-300";

const Experience = [
  {
    label: "Fresher",
    value: {
      experienceMetrics: "years",
      lowerLimit: 0,
      upperLimit: 0,
    },
  },
  {
    label: "1-2 years",
    value: {
      experienceMetrics: "years",
      lowerLimit: 1,
      upperLimit: 2,
    },
  },
  {
    label: "2-5 years",
    value: {
      experienceMetrics: "years",
      lowerLimit: 2,
      upperLimit: 5,
    },
  },
  {
    label: "5-10 years",
    value: {
      experienceMetrics: "years",
      lowerLimit: 5,
      upperLimit: 10,
    },
  },
  {
    label: "10+ years",
    value: {
      experienceMetrics: "years",
      lowerLimit: 10,
      upperLimit: Number.MAX_VALUE,
    },
  },
];

const GeneralJobSearch = ({ className, onSearch, onlyCompany }) => {
  const skillRoleCompany = useInput({ validateValue: fullNameValidation });
  const experienceInput = useInput({
    validateValue: ValueUndefinedValidations,
  });
  const locationInput = useInput({ validateValue: ValueUndefinedValidations });

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // Check if all inputs are valid
    const isFormValid =
      skillRoleCompany.isValid ||
      experienceInput.isValid ||
      locationInput.isValid;

    // Update form validity state
    setFormIsValid(isFormValid);
  }, [
    skillRoleCompany.isValid,
    experienceInput.isValid,
    locationInput.isValid,
    experienceInput.value,
  ]);

  useEffect(() => {
    console.log(experienceInput.value, locationInput.value);
    // console.log(locationInput.value, lo.value);
  });

  const searchHandler = () => {
    const mainSearchQuery = {
      skillRoleCompany: skillRoleCompany.value,
      experience: experienceInput.value,
      location: locationInput.value,
    };

    onSearch(onlyCompany ? skillRoleCompany.value : mainSearchQuery);
  };

  return (
    <div
      className="relative bg-cover bg-center h-96  py-10 sm:px-4 px-1 flex items-center"
      style={{ backgroundImage: `url(/assets/jobs/jobSearchFrame.avif)` }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Find Your Dream Jobs
        </h1>
        <div
          className={`bg-white sm:px-4 px-2 py-4 md:rounded-full rounded-md shadow-lg mx-auto ${className} flex flex-wrap gap-4 items-center justify-around w-full`}
        >
          {onlyCompany ? (
            <div className="flex gap-2 items-center px-2 w-full max-w-64">
              <CustomImage
                src="/assets/icons/searchIcon.png"
                width={20}
                height={20}
                alt="search icon"
                className="min-w-4 sm:block hidden"
                // className="md:block hidden"
              />
              <InputWithInvalidText
                type="text"
                id="keyword"
                inputFields={skillRoleCompany}
                placeholder="Find the Company"
                className={""}
                styles={{ minWidth: "200px" }}
                inputStyles={{
                  border: "0px solid black",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                }}
              />
            </div>
          ) : (
            <div className="flex md:flex-nowrap flex-wrap gap-4 justify-center items-center w-fit">
              <div className="md:border-r flex gap-2 items-center px-2 w-full max-w-64">
                <CustomImage
                  src="/assets/icons/searchIcon.png"
                  width={20}
                  height={20}
                  alt="search icon"
                  className="min-w-4 sm:block hidden"
                  // className="md:block hidden"
                />
                <InputWithInvalidText
                  type="text"
                  id="keyword"
                  inputFields={skillRoleCompany}
                  placeholder="Skills / Job Role / Company"
                  className={""}
                  styles={{ minWidth: "200px" }}
                  inputStyles={{
                    border: "0px solid black",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                  }}
                />
              </div>
              <div className="md:border-r flex gap-2 items-center px-2 w-full max-w-64">
                <CustomImage
                  src="/assets/icons/locationIcon.png"
                  width={20}
                  height={20}
                  alt="search icon"
                  className="min-w-4 sm:block hidden"

                  // className="md:block hidden"
                />
                {experienceInput.value === "other" ? (
                  <InputWithInvalidText
                    type="text"
                    id="experience"
                    inputFields={experienceInput}
                    placeholder="Experience"
                    className={""}
                    styles={{ minWidth: "200px" }}
                    inputStyles={{
                      border: "0px solid black",
                      borderBottom: "1px solid black",
                      borderRadius: "0",
                    }}
                  />
                ) : (
                  <Dropdown
                    onSelect={(experience) =>
                      experienceInput.AssignValue(experience)
                    }
                    placeholder={"Experience"}
                    options={Experience}
                    inputStyles={{
                      margin: "0",
                      border: "0px solid black",
                      borderBottom: "1px solid black",
                      borderRadius: "0",
                    }}
                    optionStyles={{ top: "100%" }}
                    value={experienceInput.value}
                    onDeselect={experienceInput.value === ""}
                  />
                )}
              </div>
              <div className="md:border-r flex gap-2 items-center px-2 w-full max-w-64">
                <CustomImage
                  src="/assets/icons/experienceIcon.png"
                  width={20}
                  height={20}
                  alt="search icon"
                  className="min-w-4 sm:block hidden"

                  // className="md:block hidden"
                />
                <Dropdown
                  onSelect={(location) => locationInput.AssignValue(location)}
                  placeholder={"Location"}
                  options={Locations}
                  inputStyles={{
                    margin: "0",

                    border: "0px solid black",
                    borderBottom: "1px solid black",
                    borderRadius: "0",
                  }}
                  optionStyles={{ top: "100%" }}
                  value={locationInput.value}
                  onDeselect={locationInput.value === ""}
                />
              </div>
            </div>
          )}

          <div className="flex items-end h-full gap-4 w-fit">
            <button
              className={`${buttonClasses} ${"hover:bg-gray-200 active:scale-90 transition-all"}`}
              onClick={() => {
                skillRoleCompany.reset();
                experienceInput.reset();
                locationInput.reset();
                onSearch(null);
              }}
              style={{
                height: "50px",
                //   backgroundColor: !formIsValid ? "#ccc" : "white",
              }}
            >
              Clear
            </button>

            <button
              className={`${buttonClasses} ${
                formIsValid
                  ? "hover:bg-orange-600 text-white active:scale-90 transition-all bg-orange-500"
                  : "bg-gray-200"
              }`}
              onClick={searchHandler}
              style={{
                height: "50px",
                //   backgroundColor: !formIsValid ? "#ccc" : "white",
              }}
              disabled={!formIsValid}
            >
              Search
            </button>
          </div>
        </div>{" "}
      </div>
      {/* </div> */}
    </div>
  );
};

export default GeneralJobSearch;

// ```jsx
// import React from 'react';

// const backgroundImage = 'https://placehold.co/1200x300';
// const inputClasses = 'flex-grow p-2 rounded-l-lg border-none focus:ring-0';
// const selectClasses = 'bg-zinc-200 text-zinc-600 px-4 py-2 border-none focus:ring-0';
// const buttonClasses = 'bg-zinc-200 text-zinc-600 px-4 py-2';

// const SearchComponent = () => {
//     return (
//         <div className="relative bg-cover bg-center py-10 px-4" style={{backgroundImage: `url(${backgroundImage})`}}>
//             <div className="max-w-6xl mx-auto">
//                 <h1 className="text-3xl font-bold text-white mb-6">Find Your Dream Jobs</h1>
//                 <div className="bg-white p-4 rounded-lg shadow flex items-center">
//                     <input type="text" placeholder="Job Role / Company" className={inputClasses} />
//                     <button className={`${buttonClasses} rounded-r-none`}>🔍</button>
//                     <select className={selectClasses}>
//                         <option>Select Location</option>
//                     </select>
//                     <select className={selectClasses}>
//                         <option>Experience</option>
//                     </select>
//                     <button className="text-zinc-600 px-4 py-2">Clear</button>
//                     <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg">Search</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SearchComponent;
// ```
