import SelectableInput from "@/components/UI/Input/SelectableInput";
import { BorderContainerClasses } from "@/components/tailwindClasses/ContainerClasses";
import { Locations } from "@/data/DropdownData";

// const Locations = [
//   "Hyderabad",
//   "Bangalore",
//   "Chennai",
//   "Gurgaon",
//   "Mumbai",
//   "Delhi",
//   "Kolkata",
//   "Pune",
//   "Jaipur",
//   "Lucknow",
//   "Noida",
//   "Surat",
//   "Ahmedabad",
//   "Indore",
//   "Visakhapatnam",
//   "Coimbatore",
//   "Vadodara",
//   "Kochi",
//   "Thiruvananthapuram",
//   "Kozhikode",
//   "Patna",
//   "Agra",
//   "Ludhiana",
//   "Faridabad",
//   "Meerut",
//   "Nagpur",
//   "Bhopal",
//   "Ranchi",
//   "Vijayawada",
//   "Madurai",
// ];

const nextBtnContainerClasses = "w-full flex justify-end mt-4";
const nextBtnClasses = "px-8 py-2 text-white rounded-3xl transition-all";
const btnDisabledClasses = "bg-zinc-400 hover:bg-zinc-400";
const btnEnabledClasses = "bg-black hover:bg-gray-800";

const PreferredLocation = ({ onSelectedLocationsInput, setShowPreference }) => {
  return (
    <div
      className={`flex flex-col max-w-4xl mx-auto w-full mb-6 ${BorderContainerClasses}`}
    >
      <label htmlFor="location" className="block mb-2 font-medium">
        Enter preferred Location
      </label>

      <SelectableInput
        options={Locations}
        placeholder="E.g.: Hyderabad"
        onChange={onSelectedLocationsInput.AssignValue}
        initialValue={onSelectedLocationsInput.value}
      />
      {setShowPreference && (
        <div className={nextBtnContainerClasses}>
          <button
            className={`${nextBtnClasses} ${
              !onSelectedLocationsInput.isValid
                ? btnDisabledClasses
                : btnEnabledClasses
            }`}
            disabled={!onSelectedLocationsInput.isValid}
            onClick={() => setShowPreference(true)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PreferredLocation;
