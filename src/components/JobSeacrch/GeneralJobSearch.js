import useInput from "@/hooks/use-Input";
import Dropdown from "../UI/Dropdown/Dropdown";
import InputWithInvalidText from "../UI/Input/InputWithInvalidText";
import {
  ValueUndefinedValidations,
  fullNameValidation,
} from "../InputValidations/InputValidations";
import { Locations } from "@/data/DropdownData";
import { useEffect, useState } from "react";
import CustomImage from "../UI/Image/Image";

const inputClasses =
  "mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-white";
const buttonClasses =
  "w-full  font-bold py-2 px-4 rounded-full transition duration-300";

const Experience = [
  { label: "Fresher", value: "fresher" },
  { label: "1-2 years", value: "1-2" },
  { label: "2-5 years", value: "2-5" },
  { label: "5-10 years", value: "5-10" },
  { label: "10+ years", value: "10+" },
];

const GeneralJobSearch = ({ className, onSearch }) => {
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
    onSearch({
      skillRoleCompany: skillRoleCompany.value,
      experience: experienceInput.value,
      location: locationInput.value,
    });
  };

  return (
    <div
      className="relative bg-cover bg-center h-96  py-10 px-4 flex items-center"
      style={{ backgroundImage: `url(/assets/jobs/jobSearchFrame.avif)` }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Find Your Dream Jobs
        </h1>
        <div
          className={`bg-white px-4 py-2 rounded-full shadow-lg max-w-7xl mx-auto ${className}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 items-center">
            <div className="border-r flex gap-2 items-center px-2">
              <CustomImage
                src="/assets/icons/searchIcon.png"
                width={20}
                height={20}
                alt="search icon"
              />
              <InputWithInvalidText
                type="text"
                id="keyword"
                inputFields={skillRoleCompany}
                placeholder="Skills / Job Role / Company"
                className={""}
                styles={{ minWidth: "220px" }}
                inputStyles={{
                  border: "0px solid black",
                  borderBottom: "1px solid black",
                  borderRadius: "0",
                }}
              />
            </div>
            <div className="border-r flex gap-2 items-center px-2">
              <CustomImage
                src="/assets/icons/locationIcon.png"
                width={20}
                height={20}
                alt="search icon"
              />
              {experienceInput.value === "other" ? (
                <InputWithInvalidText
                  type="text"
                  id="experience"
                  inputFields={experienceInput}
                  placeholder="Experience"
                  className={""}
                  styles={{ minWidth: "220px" }}
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
            <div className="border-r flex gap-2 items-center px-2">
              <CustomImage
                src="/assets/icons/experienceIcon.png"
                width={20}
                height={20}
                alt="search icon"
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
            <div className="flex items-end h-full gap-4">
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
      </div>
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
