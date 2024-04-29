import SelectableInput from "@/UI/Input/SelectableInput";

const Locations = [
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Gurgaon",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Noida",
  "Surat",
  "Ahmedabad",
  "Indore",
  "Visakhapatnam",
  "Coimbatore",
  "Vadodara",
  "Kochi",
  "Thiruvananthapuram",
  "Kozhikode",
  "Patna",
  "Agra",
  "Ludhiana",
  "Faridabad",
  "Meerut",
  "Nagpur",
  "Bhopal",
  "Ranchi",
  "Vijayawada",
  "Madurai",
];

const PreferredLocation = ({ onSelectedLocationsInput }) => {
  return (
    <div className="max-w-4xl mx-auto w-full bg-zinc-300 p-6 rounded-lg shadow mb-6">
      <label for="location" class="block mb-2 font-medium">
        Enter preferred Location
      </label>

      <SelectableInput
        options={Locations}
        placeholder="E.g.: Hyderabad"
        onChange={onSelectedLocationsInput.AssignValue}
      />
    </div>
  );
};

export default PreferredLocation;
