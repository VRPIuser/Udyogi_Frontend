import { useEffect, useState } from "react";

const SelectableInput = ({
  options,
  placeholder,
  onChange,
  minNoOfOptions,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    // Check if the option is already selected
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        option,
      ]);
      setInputValue("");
    }
  };

  useEffect(() => {
    onChange(selectedOptions);
  }, [selectedOptions]);

  const handleRemoveOption = (index) => {
    setSelectedOptions((prevSelectedOptions) =>
      prevSelectedOptions.filter((_, i) => i !== index)
    );
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-4 w-full ">
      {selectedOptions.length > 0 && (
        <div id="selectedOptions" className="flex flex-wrap gap-2 mb-4">
          {selectedOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-full px-3 py-1 text-sm"
            >
              {option}{" "}
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                className="ml-1"
              >
                &#x2715;
              </button>
            </div>
          ))}
        </div>
      )}

      <input
        type="text"
        id="input"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder || "Type here..."}
        className="w-full p-2 border rounded-md mb-4"
      />
      <div className="flex flex-wrap gap-2">
        {filteredOptions.slice(0, minNoOfOptions || 6).map((option, index) => (
          <span
            key={index}
            onClick={() => handleOptionClick(option)}
            className="bg-white rounded-full px-3 py-1 text-sm cursor-pointer"
          >
            {option} +
          </span>
        ))}
      </div>
    </div>
  );
};

export default SelectableInput;
