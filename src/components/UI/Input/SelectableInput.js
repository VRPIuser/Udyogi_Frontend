import { useEffect, useState } from "react";
import InputWithInvalidText from "./InputWithInvalidText";
import useInput from "@/hooks/use-Input";
import { nameValidation } from "@/components/InputValidations/InputValidations";
import { optionClasses } from "@/components/tailwindClasses/ButtonClassess";

const SuggestionClasses =
  "bg-white rounded-full px-3 py-1 text-sm cursor-pointer hover:bg-zinc-100 transition-all";

const SelectableInput = ({
  options,
  placeholder,
  onChange,
  minNoOfOptions,
}) => {
  // const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionsInput = useInput({ validateValue: nameValidation });

  // const handleInputChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        option,
      ]);
      optionsInput.AssignValue("");
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

  const handleAddCustomOption = () => {
    if (inputValue.trim() !== "" && !options.includes(inputValue)) {
      setSelectedOptions((prevSelectedOptions) => [
        ...prevSelectedOptions,
        inputValue,
      ]);
      optionsInput.AssignValue("");
    }
  };

  const filteredOptions = options
    .filter((option) =>
      option.toLowerCase().includes(optionsInput.value.toLowerCase())
    )
    .filter((option) => !selectedOptions.includes(option)); // Filter out selected options

  return (
    <div className="max-w-4xl mx-auto mt-4 w-full ">
      {selectedOptions.length > 0 && (
        <div id="selectedOptions" className="flex flex-wrap gap-2 mb-4">
          {selectedOptions.map((option, index) => (
            <div key={index} className={optionClasses}>
              <button
                type="button"
                onClick={() => handleRemoveOption(index)}
                className="ml-1"
              >
                {option} &#x2715;
              </button>
            </div>
          ))}
        </div>
      )}

      <InputWithInvalidText
        type="text"
        id="input"
        inputFields={optionsInput}
        // value={inputValue}
        // onChange={handleInputChange}
        placeholder={placeholder || "Type here..."}
        className="mb-4"
      />
      <div className="flex flex-wrap gap-2">
        {filteredOptions.slice(0, minNoOfOptions || 6).map((option, index) => (
          <span
            key={index}
            onClick={() => handleOptionClick(option)}
            className={optionClasses}
          >
            {option}
            {" +"}
          </span>
        ))}
        {optionsInput.value.trim() !== "" &&
          !options.includes(optionsInput.value) && (
            <span className={optionClasses} onClick={handleAddCustomOption}>
              {optionsInput.value}
              {" +"}
            </span>
          )}
      </div>
    </div>
  );
};

export default SelectableInput;
