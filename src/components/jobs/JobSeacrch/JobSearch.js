import useInput from "@/hooks/use-Input";

import { Locations } from "@/data/DropdownData";
import { useEffect, useState } from "react";
import {
  ValueUndefinedValidations,
  fullNameValidation,
} from "@/components/InputValidations/InputValidations";
import InputWithInvalidText from "@/components/UI/Input/InputWithInvalidText";
import Dropdown from "@/components/UI/Dropdown/Dropdown";

const inputClasses =
  "mt-1 block w-full px-3 py-2 bg-white border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm";
const labelClasses = "block text-sm font-medium text-white";
// const buttonClasses =
//   "w-full bg-white text-orange-500  font-bold py-2 px-4 rounded-md transition duration-300";

const buttonClasses =
  "w-full  font-bold py-2 px-4 rounded-full transition duration-300";
const Experience = [
  { label: "Fresher", value: "fresher" },
  { label: "1-2 years", value: "1-2" },
  { label: "2-5 years", value: "2-5" },
  { label: "5-10 years", value: "5-10" },
  { label: "10+ years", value: "10+" },
];

const JobSearch = ({ className, onSearch }) => {
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
    // console.log(experienceInput.value, locationInput.value);
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
      className={`bg-orange-500 p-6 rounded-tl-3xl rounded-br-3xl shadow-lg max-w-7xl mx-auto ${className}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
        <div style={{ minWidth: "200px" }}>
          <label htmlFor="keyword" className={labelClasses}>
            Search Keyword
          </label>
          <InputWithInvalidText
            type="text"
            id="keyword"
            style={{ minWidth: "200px" }}
            inputFields={skillRoleCompany}
            placeholder="Skills / Job Role / Company"
            className={""}
          />
        </div>
        <div style={{ minWidth: "200px" }}>
          <label htmlFor="category" className={labelClasses}>
            Search Categories
          </label>

          {experienceInput.value === "other" ? (
            <InputWithInvalidText
              type="text"
              id="experience"
              inputFields={experienceInput}
              placeholder="Experience"
              className={""}
            />
          ) : (
            <Dropdown
              onSelect={(experience) => experienceInput.AssignValue(experience)}
              placeholder={"Experience"}
              options={Experience}
              inputStyles={{ margin: "0" }}
              optionStyles={{ top: "100%" }}
              value={experienceInput.value}
              onDeselect={experienceInput.value === ""}
            />
          )}
        </div>
        <div style={{ minWidth: "200px" }}>
          <label htmlFor="location" className={labelClasses}>
            Search Location
          </label>
          <Dropdown
            onSelect={(location) => locationInput.AssignValue(location)}
            placeholder={"Location"}
            options={Locations}
            inputStyles={{ margin: "0" }}
            optionStyles={{ top: "100%" }}
            value={locationInput.value}
            onDeselect={locationInput.value === ""}
          />
        </div>
        <div className="flex items-end h-full gap-4">
          <button
            className={`${buttonClasses} ${"hover:bg-orange-600 active:scale-90 transition-all text-white"}`}
            onClick={() => {
              skillRoleCompany.reset();
              experienceInput.reset();
              locationInput.reset();
              onSearch(undefined);
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
                ? "hover:bg-zinc-100 text-orange-600 active:scale-90 transition-all bg-white"
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

          {/* <button
            className={`${buttonClasses} ${
              formIsValid && "hover:scale-105 active:scale-90 transition-all"
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
          <button
            className={`${buttonClasses} ${"hover:scale-105 active:scale-90 transition-all"}`}
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
          </button> */}
        </div>
      </div>{" "}
    </div>
  );
};

export default JobSearch;
